import { DocumentValidationResult } from '@/lib/prompts/policy-validation-document-validation';
import { PolicyAbstractionResult } from '@/lib/prompts/policy-validation-policy-abstraction';
import { serverInstance as rollbar } from '@/lib/rollbar';
import { parseAIJson } from '@/lib/utils';
import { PlatformPolicies, Policy } from '@/types/policies';
import {
  generatePolicyValidationQualityCheckPrompt,
  PolicyValidationQualityCheckResult,
} from '../../prompts/policy-validation-quality-check';
import { callAnthropic } from '../anthropic';
import { validateDocuments } from './documents-validator';
import { GaffaScrapingResult, scrapeMultipleDocumentsWithRateLimit } from './gaffa-scraper';
import { buildPlatformPolicies, comparePlatformPolicies } from './platform-policies-builder';
import { abstractPoliciesFromMultipleDocuments } from './policy-abstractor';

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
  rollbar.info('orchestratePolicyValidation: Starting policy validation orchestration', {
    platformId,
    platformName,
    currentDocuments: currentPolicies.policyDocuments.length,
  });

  try {
    // Step 1: Validate current documents

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

    rollbar.info('Policy validation: Document validation completed', {
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
      rollbar.info('Policy validation: No changes needed - all documents current', {
        platformId,
      });

      return {
        status: 'completed_no_changes',
        platformId,
        platformName,
        data: {
          documentValidation,
          analysis: {
            reasoning:
              'Document validation found no changes needed. All documents are current and accessible.',
          },
        },
        reasoning:
          'Document validation found no changes needed. All documents are current and accessible.',
      };
    }

    // Step 2: Scrape updated/new documents

    const documentsToScrape = [
      ...documentValidation.validDocuments.map((doc) => doc.newUrl || doc.url),
      ...documentValidation.newDocuments.map((doc) => doc.url),
    ];

    // Use rate-limited scraping with controlled concurrency
    const scrapingResults = await scrapeMultipleDocumentsWithRateLimit(
      documentsToScrape,
      3, // Max 3 concurrent requests
      1000, // 1 second delay between batches
    );
    const failedScrapes = scrapingResults.filter((result) => !result.success);

    if (failedScrapes.length > 0) {
      rollbar.warning('Policy validation: Document scraping partially failed', {
        platformId,
        failedCount: failedScrapes.length,
        totalCount: scrapingResults.length,
        failedUrls: failedScrapes.map(f => f.url),
      });
    }

    // Step 3: Abstract policies from scraped documents

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


    // Process all documents in parallel
    const parallelAbstractionResults = await abstractPoliciesFromMultipleDocuments(
      documentsForAbstraction.map((doc) => ({
        url: doc.url,
        title: doc.title,
        reference: doc.reference,
        markdown: doc.markdown,
        currentPolicies: doc.currentPolicies,
      })),
    );

    // Convert parallel results back to the expected format
    const policyAbstractions: Array<{
      documentId: string;
      success: boolean;
      result: PolicyAbstractionResult;
    }> = parallelAbstractionResults.map((result, index) => {
      const doc = documentsForAbstraction[index];


      return {
        documentId: doc.documentId,
        success: result.result.success,
        result: result.result,
      };
    });

    // Step 4: Build new platform policies
    rollbar.info('Policy validation: Building updated platform policies', {
      platformId,
      successfulAbstractions: policyAbstractions.filter((a) => a.success).length,
      totalDocuments: documentsForAbstraction.length,
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

    const comparison = comparePlatformPolicies(currentPolicies, updatedPolicies);

    rollbar.info('Policy validation: Policy comparison completed', {
      platformId,
      hasChanges: comparison.hasChanges,
      documentsAdded: comparison.summary.documentsAdded,
      documentsRemoved: comparison.summary.documentsRemoved,
      documentsModified: comparison.summary.documentsModified,
      policiesAdded: comparison.summary.policiesAdded,
      policiesRemoved: comparison.summary.policiesRemoved,
      policiesModified: comparison.summary.policiesModified,
    });

    if (!comparison.hasChanges) {
      rollbar.info('Policy validation: No meaningful changes detected', {
        platformId,
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
            reasoning:
              'Policy analysis completed but no meaningful changes were detected in the platform policies.',
          },
        },
        reasoning:
          'Policy analysis completed but no meaningful changes were detected in the platform policies.',
      };
    }


    const qualityCheckPrompt = generatePolicyValidationQualityCheckPrompt(
      platformId,
      platformName,
      currentPolicies,
      updatedPolicies,
      JSON.stringify(comparison.summary),
    );

    const qualityCheckResponse = await callAnthropic(qualityCheckPrompt);
    const qualityCheck: PolicyValidationQualityCheckResult = parseAIJson(qualityCheckResponse);

    rollbar.info('Policy validation: Quality check completed', {
      platformId,
      validationStatus: qualityCheck.validationStatus,
      overallQualityScore: qualityCheck.overallQualityScore,
      issuesCount: qualityCheck.issues.length,
      criticalIssues: qualityCheck.issues.filter(i => i.severity === 'critical').length,
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

    rollbar.info('Policy validation: Orchestration completed successfully', {
      platformId,
      status: result.status,
      qualityScore: qualityCheck.overallQualityScore,
      issuesFound: qualityCheck.issues.length,
    });

    return result;
  } catch (error) {
    rollbar.error('Policy validation: Orchestration failed', {
      platformId,
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
