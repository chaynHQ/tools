import { serverInstance as rollbar } from '@/lib/rollbar';
import { PlatformPolicies } from '@/types/policies';
import { validateDocuments, DocumentValidationResult } from './documents-validator';
import { scrapeMultipleDocuments, GaffaScrapingResult } from './gaffa-scraper';
import { abstractPoliciesFromDocument, PolicyAbstractionResult } from './policy-abstractor';
import { buildPlatformPolicies, comparePlatformPolicies } from './platform-policies-builder';
import { generatePolicyValidationQualityCheckV2Prompt, PolicyValidationQualityCheckV2Result } from '../../prompts/policy-validation-quality-check-v2';
import { callAnthropic } from '../anthropic';
import { parseAIJson } from '@/lib/utils';

export interface PolicyValidationOrchestrationResult {
  status: 'completed_no_changes' | 'completed_with_valid_changes' | 'completed_with_invalid_changes' | 'completed_with_pr_created' | 'completed_with_pr_error';
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
    qualityCheck?: PolicyValidationQualityCheckV2Result;
    comparison?: ReturnType<typeof comparePlatformPolicies>;
    error?: string;
  };
  reasoning: string;
}

export async function orchestratePolicyValidation(
  platformId: string,
  platformName: string,
  currentPolicies: PlatformPolicies
): Promise<PolicyValidationOrchestrationResult> {
  rollbar.info('orchestratePolicyValidation: Starting policy validation orchestration', {
    platformId,
    platformName,
    currentDocuments: currentPolicies.policyDocuments.length,
  });

  try {
    // Step 1: Validate current documents
    rollbar.info('orchestratePolicyValidation: Step 1 - Document validation');
    const documentValidation = await validateDocuments(
      platformId,
      platformName,
      currentPolicies.policyDocuments.map(doc => ({
        id: doc.id,
        reference: doc.reference,
        title: doc.title,
        summary: doc.summary,
        url: doc.url,
      }))
    );

    if (documentValidation.status === 'valid' && 
        documentValidation.newDocuments.length === 0 && 
        documentValidation.removedDocuments.length === 0 &&
        documentValidation.validDocuments.every(doc => doc.status === 'valid')) {
      
      rollbar.info('orchestratePolicyValidation: No document changes needed');
      return {
        status: 'completed_no_changes',
        platformId,
        platformName,
        data: { documentValidation },
        reasoning: 'Document validation found no changes needed. All documents are current and accessible.',
      };
    }

    // Step 2: Scrape updated/new documents
    rollbar.info('orchestratePolicyValidation: Step 2 - Document scraping');
    const documentsToScrape = [
      ...documentValidation.validDocuments.map(doc => doc.newUrl || doc.url),
      ...documentValidation.newDocuments.map(doc => doc.url),
    ];

    const scrapingResults = await scrapeMultipleDocuments(documentsToScrape);
    const failedScrapes = scrapingResults.filter(result => !result.success);
    
    if (failedScrapes.length > 0) {
      rollbar.warning('orchestratePolicyValidation: Some documents failed to scrape', {
        failedCount: failedScrapes.length,
        totalCount: scrapingResults.length,
      });
    }

    // Step 3: Abstract policies from scraped documents
    rollbar.info('orchestratePolicyValidation: Step 3 - Policy abstraction');
    const policyAbstractions: Array<{
      documentId: string;
      success: boolean;
      result: PolicyAbstractionResult;
    }> = [];

    for (let i = 0; i < documentValidation.validDocuments.length; i++) {
      const doc = documentValidation.validDocuments[i];
      const scrapingResult = scrapingResults[i];
      
      if (!scrapingResult.success || !scrapingResult.markdown) {
        policyAbstractions.push({
          documentId: doc.id,
          success: false,
          result: {
            success: false,
            policies: [],
            appealProcess: null,
            reasoning: `Failed to scrape document: ${scrapingResult.error}`,
            error: scrapingResult.error,
          },
        });
        continue;
      }

      // Find current policies for this document
      const currentDoc = currentPolicies.policyDocuments.find(d => d.id === doc.id);
      const currentDocPolicies = currentDoc?.policies;

      const abstraction = await abstractPoliciesFromDocument(
        doc.url,
        doc.title,
        doc.reference || doc.id,
        scrapingResult.markdown,
        currentDocPolicies
      );

      policyAbstractions.push({
        documentId: doc.id,
        success: abstraction.success,
        result: abstraction,
      });
    }

    // Handle new documents
    const newDocStartIndex = documentValidation.validDocuments.length;
    for (let i = 0; i < documentValidation.newDocuments.length; i++) {
      const doc = documentValidation.newDocuments[i];
      const scrapingResult = scrapingResults[newDocStartIndex + i];
      
      if (!scrapingResult.success || !scrapingResult.markdown) {
        continue; // Skip failed new documents
      }

      const abstraction = await abstractPoliciesFromDocument(
        doc.url,
        doc.title,
        doc.reference,
        scrapingResult.markdown
      );

      policyAbstractions.push({
        documentId: `new-${i}`, // Temporary ID for new documents
        success: abstraction.success,
        result: abstraction,
      });
    }

    // Step 4: Build new platform policies
    rollbar.info('orchestratePolicyValidation: Step 4 - Building platform policies');
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
    rollbar.info('orchestratePolicyValidation: Step 5 - Quality check');
    const comparison = comparePlatformPolicies(currentPolicies, updatedPolicies);
    
    if (!comparison.hasChanges) {
      rollbar.info('orchestratePolicyValidation: No meaningful changes detected');
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
        },
        reasoning: 'Policy analysis completed but no meaningful changes were detected in the platform policies.',
      };
    }

    const qualityCheckPrompt = generatePolicyValidationQualityCheckV2Prompt(
      platformId,
      platformName,
      currentPolicies,
      updatedPolicies,
      JSON.stringify(comparison.summary)
    );

    const qualityCheckResponse = await callAnthropic(qualityCheckPrompt);
    const qualityCheck: PolicyValidationQualityCheckV2Result = parseAIJson(qualityCheckResponse);

    const result: PolicyValidationOrchestrationResult = {
      status: qualityCheck.validationStatus === 'valid' ? 'completed_with_valid_changes' : 'completed_with_invalid_changes',
      platformId,
      platformName,
      data: {
        documentValidation,
        scrapingResults,
        policyAbstractions,
        updatedPolicies,
        qualityCheck,
        comparison,
      },
      reasoning: qualityCheck.reasoning,
    };

    rollbar.info('orchestratePolicyValidation: Policy validation orchestration completed', {
      status: result.status,
      qualityScore: qualityCheck.overallQualityScore,
      issuesFound: qualityCheck.issues.length,
    });

    return result;

  } catch (error) {
    rollbar.error('orchestratePolicyValidation: Error during orchestration', {
      platformId,
      error,
    });

    return {
      status: 'completed_with_invalid_changes',
      platformId,
      platformName,
      data: {
        error: error instanceof Error ? error.message : 'Unknown orchestration error',
      },
      reasoning: 'Policy validation failed due to an unexpected error during processing.',
    };
  }
}