import { DocumentValidationResult } from '@/lib/prompts/policy-validation-document-validation';
import { PolicyAbstractionResult } from '@/lib/prompts/policy-validation-policy-abstraction';
import { serverInstance as rollbar } from '@/lib/rollbar';
import { parseAIJson } from '@/lib/utils';
import { PlatformPolicies } from '@/types/policies';
import {
  generatePolicyValidationQualityCheckPrompt,
  PolicyValidationQualityCheckResult,
} from '../../prompts/policy-validation-quality-check';
import { callAnthropic } from '../anthropic';
import { validateDocuments } from './documents-validator';
import { GaffaScrapingResult, scrapeMultipleDocumentsWithRateLimit } from './gaffa-scraper';
import { buildPlatformPolicies, comparePlatformPolicies } from './platform-policies-builder';
import { abstractPoliciesFromDocument, abstractPoliciesFromMultipleDocuments } from './policy-abstractor';

export interface PolicyValidationOrchestrationResult {
  status:
    | 'completed_no_changes'
    | 'completed_with_valid_changes'
    | 'completed_with_invalid_changes'
    | 'completed_with_pr_created'
    | 'completed_with_pr_error';
  platformId: string;
  platformName: string;
  data: {
    documentValidation?: DocumentValidationResult;
    scrapingResults?: GaffaScrapingResult[];
    policyAbstractions?: Array<{
      documentId: string;
      success: boolean;
      result: PolicyAbstractionResult;
    }>;
    updatedPolicies?: PlatformPolicies;
    qualityCheck?: PolicyValidationQualityCheckResult;
    comparison?: ReturnType<typeof comparePlatformPolicies>;
    analysis?: {
      reasoning: string;
    };
    error?: string;
  };
  reasoning: string;
}

export async function orchestratePolicyValidation(
  platformId: string,
  platformName: string,
  currentPolicies: PlatformPolicies,
): Promise<PolicyValidationOrchestrationResult> {
  console.log('orchestratePolicyValidation: Starting policy validation orchestration', {
    platformId,
    platformName,
    currentDocuments: currentPolicies.policyDocuments.length,
  });
  
  rollbar.info('orchestratePolicyValidation: Starting policy validation orchestration', {
    platformId,
    platformName,
    currentDocuments: currentPolicies.policyDocuments.length,
  });

  try {
    // Step 1: Validate current documents
    console.log('orchestratePolicyValidation: Step 1 - Document validation');
    rollbar.info('orchestratePolicyValidation: Step 1 - Document validation', {
      platformId,
      platformName,
    });
    
    const documentValidation = await validateDocuments(
      platformId,
      platformName,
      currentPolicies.policyDocuments.map((doc) => ({
        id: doc.id,
        reference: doc.reference,
        title: doc.title,
        summary: doc.summary,
        url: doc.url,
      })),
    );

    console.log('orchestratePolicyValidation: Document validation result', {
      status: documentValidation.status,
      newDocuments: documentValidation.newDocuments.length,
      removedDocuments: documentValidation.removedDocuments.length,
      validDocuments: documentValidation.validDocuments.length,
    });
    
    rollbar.info('orchestratePolicyValidation: Document validation completed', {
      platformId,
      status: documentValidation.status,
      newDocuments: documentValidation.newDocuments.length,
      removedDocuments: documentValidation.removedDocuments.length,
      validDocuments: documentValidation.validDocuments.length,
    });

    if (
      documentValidation.status === 'valid' &&
      documentValidation.newDocuments.length === 0 &&
      documentValidation.removedDocuments.length === 0 &&
      documentValidation.validDocuments.every((doc) => doc.status === 'valid')
    ) {
      console.log('orchestratePolicyValidation: No document changes needed');
      rollbar.info('orchestratePolicyValidation: No document changes needed', {
        platformId,
        platformName,
      });
      
      return {
        status: 'completed_no_changes',
        platformId,
        platformName,
        data: { 
          documentValidation,
          analysis: {
            reasoning: 'Document validation found no changes needed. All documents are current and accessible.'
          }
        },
        reasoning:
          'Document validation found no changes needed. All documents are current and accessible.',
      };
    }

    // Step 2: Scrape updated/new documents
    console.log('orchestratePolicyValidation: Step 2 - Document scraping');
    rollbar.info('orchestratePolicyValidation: Step 2 - Document scraping', {
      platformId,
      documentsToScrape: documentValidation.validDocuments.length + documentValidation.newDocuments.length,
    });
    
    const documentsToScrape = [
      ...documentValidation.validDocuments.map((doc) => doc.newUrl || doc.url),
      ...documentValidation.newDocuments.map((doc) => doc.url),
    ];

    // Use rate-limited scraping with controlled concurrency
    const scrapingResults = await scrapeMultipleDocumentsWithRateLimit(
      documentsToScrape,
      3, // Max 3 concurrent requests
      1000 // 1 second delay between batches
    );
    const failedScrapes = scrapingResults.filter((result) => !result.success);

    if (failedScrapes.length > 0) {
      console.log('orchestratePolicyValidation: Some documents failed to scrape', {
        failedCount: failedScrapes.length,
        totalCount: scrapingResults.length,
      });
      rollbar.warning('orchestratePolicyValidation: Some documents failed to scrape', {
        platformId,
        failedCount: failedScrapes.length,
        totalCount: scrapingResults.length,
      });
    }

    // Step 3: Abstract policies from scraped documents
    console.log('orchestratePolicyValidation: Step 3 - Policy abstraction');
    rollbar.info('orchestratePolicyValidation: Step 3 - Policy abstraction', {
      platformId,
      documentsToProcess: documentValidation.validDocuments.length + documentValidation.newDocuments.length,
    });
    
    // Prepare documents for parallel processing
    const documentsForAbstraction: Array<{
      url: string;
      title: string;
      reference: string;
      markdown: string;
      currentPolicies?: Policy[];
      documentId: string;
      isNew: boolean;
    }> = [];

    // Add existing documents
    for (let i = 0; i < documentValidation.validDocuments.length; i++) {
      const doc = documentValidation.validDocuments[i];
      const scrapingResult = scrapingResults[i];

      if (scrapingResult.success && scrapingResult.markdown) {
        // Find current policies for this document
        const currentDoc = currentPolicies.policyDocuments.find((d) => d.id === doc.id);
        const currentDocPolicies = currentDoc?.policies;

        documentsForAbstraction.push({
          url: doc.url,
          title: doc.title,
          reference: doc.reference || doc.id,
          markdown: scrapingResult.markdown,
          currentPolicies: currentDocPolicies,
          documentId: doc.id,
          isNew: false,
        });
      }
    }

    // Add new documents
    const newDocStartIndex = documentValidation.validDocuments.length;
    for (let i = 0; i < documentValidation.newDocuments.length; i++) {
      const doc = documentValidation.newDocuments[i];
      const scrapingResult = scrapingResults[newDocStartIndex + i];

      if (scrapingResult.success && scrapingResult.markdown) {
        documentsForAbstraction.push({
          url: doc.url,
          title: doc.title,
          reference: doc.reference,
          markdown: scrapingResult.markdown,
          documentId: `new-${i}`,
          isNew: true,
        });
      }
    }

    console.log('orchestratePolicyValidation: Processing documents in parallel', {
      totalDocuments: documentsForAbstraction.length,
      existingDocuments: documentsForAbstraction.filter(d => !d.isNew).length,
      newDocuments: documentsForAbstraction.filter(d => d.isNew).length,
    });

    // Process all documents in parallel
    const parallelAbstractionResults = await abstractPoliciesFromMultipleDocuments(
      documentsForAbstraction.map(doc => ({
        url: doc.url,
        title: doc.title,
        reference: doc.reference,
        markdown: doc.markdown,
        currentPolicies: doc.currentPolicies,
      }))
    );

    // Convert parallel results back to the expected format
    const policyAbstractions: Array<{
      documentId: string;
      success: boolean;
      result: PolicyAbstractionResult;
    }> = parallelAbstractionResults.map((result, index) => {
      const doc = documentsForAbstraction[index];
      
      console.log('orchestratePolicyValidation: Policy abstraction result', {
        documentId: doc.documentId,
        success: result.result.success,
        policiesFound: result.result.policies.length,
        isNew: doc.isNew,
      });

      return {
        documentId: doc.documentId,
        success: result.result.success,
        result: result.result,
      };
    });

    // Step 4: Build new platform policies
    console.log('orchestratePolicyValidation: Step 4 - Building platform policies');
    rollbar.info('orchestratePolicyValidation: Step 4 - Building platform policies', {
      platformId,
      successfulAbstractions: policyAbstractions.filter(a => a.success).length,
    });
    
    const documentResults = [];

    // Add existing documents
    for (let i = 0; i < documentValidation.validDocuments.length; i++) {
      const doc = documentValidation.validDocuments[i];
      const abstraction = policyAbstractions[i];

      if (abstraction.success) {
        documentResults.push({
          document: {
            id: doc.id,
            reference: doc.reference,
            title: doc.updatedTitle || doc.title,
            summary: doc.updatedSummary || doc.summary,
            url: doc.newUrl || doc.url,
          },
          abstraction: abstraction.result,
        });
      }
    }

    // Add new documents
    const newDocAbstractions = policyAbstractions.slice(documentValidation.validDocuments.length);
    for (let i = 0; i < documentValidation.newDocuments.length; i++) {
      const doc = documentValidation.newDocuments[i];
      const abstraction = newDocAbstractions[i];

      if (abstraction && abstraction.success) {
        documentResults.push({
          document: {
            id: `${platformId}-new-${Date.now()}-${i}`, // Generate proper ID
            reference: doc.reference,
            title: doc.title,
            summary: doc.summary,
            url: doc.url,
          },
          abstraction: abstraction.result,
        });
      }
    }

    const updatedPolicies = buildPlatformPolicies(platformName, documentResults);

    // Step 5: Compare and quality check
    console.log('orchestratePolicyValidation: Step 5 - Quality check');
    rollbar.info('orchestratePolicyValidation: Step 5 - Quality check', {
      platformId,
      updatedDocuments: updatedPolicies.policyDocuments.length,
    });
    
    const comparison = comparePlatformPolicies(currentPolicies, updatedPolicies);

    console.log('orchestratePolicyValidation: Policy comparison result', {
      hasChanges: comparison.hasChanges,
      summary: comparison.summary,
    });
    
    rollbar.info('orchestratePolicyValidation: Policy comparison completed', {
      platformId,
      hasChanges: comparison.hasChanges,
      summary: comparison.summary,
    });
    if (!comparison.hasChanges) {
      console.log('orchestratePolicyValidation: No meaningful changes detected');
      rollbar.info('orchestratePolicyValidation: No meaningful changes detected', {
        platformId,
        platformName,
      });
      
      return {
        status: 'completed_no_changes',
        platformId,
        platformName,
        data: {
          documentValidation,
          scrapingResults,
          policyAbstractions,
          updatedPolicies,
          comparison,
          analysis: {
            reasoning: 'Policy analysis completed but no meaningful changes were detected in the platform policies.'
          }
        },
        reasoning:
          'Policy analysis completed but no meaningful changes were detected in the platform policies.',
      };
    }

    console.log('orchestratePolicyValidation: Running quality check');
    rollbar.info('orchestratePolicyValidation: Running quality check', {
      platformId,
      changesDetected: true,
    });

    const qualityCheckPrompt = generatePolicyValidationQualityCheckPrompt(
      platformId,
      platformName,
      currentPolicies,
      updatedPolicies,
      JSON.stringify(comparison.summary),
    );

    const qualityCheckResponse = await callAnthropic(qualityCheckPrompt);
    const qualityCheck: PolicyValidationQualityCheckResult = parseAIJson(qualityCheckResponse);

    console.log('orchestratePolicyValidation: Quality check completed', {
      validationStatus: qualityCheck.validationStatus,
      overallQualityScore: qualityCheck.overallQualityScore,
      issuesCount: qualityCheck.issues.length,
    });
    
    rollbar.info('orchestratePolicyValidation: Quality check completed', {
      platformId,
      validationStatus: qualityCheck.validationStatus,
      overallQualityScore: qualityCheck.overallQualityScore,
      issuesCount: qualityCheck.issues.length,
    });
    const result: PolicyValidationOrchestrationResult = {
      status:
        qualityCheck.validationStatus === 'valid'
          ? 'completed_with_valid_changes'
          : 'completed_with_invalid_changes',
      platformId,
      platformName,
      data: {
        documentValidation,
        scrapingResults,
        policyAbstractions,
        updatedPolicies,
        qualityCheck,
        comparison,
        analysis: {
          reasoning: qualityCheck.reasoning,
        },
      },
      reasoning: qualityCheck.reasoning,
    };

    console.log('orchestratePolicyValidation: Policy validation orchestration completed', {
      status: result.status,
      qualityScore: qualityCheck.overallQualityScore,
      issuesFound: qualityCheck.issues.length,
    });
    
    rollbar.info('orchestratePolicyValidation: Policy validation orchestration completed', {
      platformId,
      platformName,
      status: result.status,
      qualityScore: qualityCheck.overallQualityScore,
      issuesFound: qualityCheck.issues.length,
    });

    return result;
  } catch (error) {
    console.error('orchestratePolicyValidation: Error during orchestration', {
      platformId,
      error,
    });
    
    rollbar.error('orchestratePolicyValidation: Error during orchestration', {
      platformId,
      platformName,
      error: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
    });

    return {
      status: 'completed_with_invalid_changes',
      platformId,
      platformName,
      data: {
        analysis: {
          reasoning: 'Policy validation failed due to an unexpected error during processing.',
        },
        error: error instanceof Error ? error.message : 'Unknown orchestration error',
      },
      reasoning: 'Policy validation failed due to an unexpected error during processing.',
    };
  }
}
