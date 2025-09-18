import { serverInstance as rollbar } from '@/lib/rollbar';
import { callAnthropic } from '../anthropic';
import { parseAIJson } from '@/lib/utils';
import { Policy } from '@/types/policies';
import { 
  PolicyAbstractionResult, 
  generatePolicyAbstractionPrompt 
} from '@/lib/prompts/policy-validation-policy-abstraction';

export async function abstractPoliciesFromDocument(
  documentUrl: string,
  documentTitle: string,
  documentReference: string,
  documentMarkdown: string,
  currentPolicies?: Policy[]
): Promise<PolicyAbstractionResult> {
  rollbar.info('abstractPoliciesFromDocument: Starting policy abstraction', {
    documentUrl,
    documentTitle,
    markdownLength: documentMarkdown.length,
    currentPoliciesCount: currentPolicies?.length || 0,
  });

  try {
    const prompt = generatePolicyAbstractionPrompt(
      documentUrl,
      documentTitle,
      documentReference,
      documentMarkdown,
      currentPolicies
    );

    const response = await callAnthropic(prompt);
    const result: PolicyAbstractionResult = parseAIJson(response);

    rollbar.info('abstractPoliciesFromDocument: Policy abstraction completed', {
      documentUrl,
      success: result.success,
      policiesFound: result.policies?.length || 0,
      hasAppealProcess: !!result.appealProcess,
    });

    return result;
  } catch (error) {
    rollbar.error('abstractPoliciesFromDocument: Error during policy abstraction', {
      documentUrl,
      error,
    });
    return {
      success: false,
      policies: [],
      appealProcess: null,
      reasoning: 'Error during policy abstraction',
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

export async function abstractPoliciesFromMultipleDocuments(
  documents: Array<{
    url: string;
    title: string;
    reference: string;
    markdown: string;
    currentPolicies?: Policy[];
  }>
): Promise<Array<{
  documentUrl: string;
  result: PolicyAbstractionResult;
}>> {
  rollbar.info('abstractPoliciesFromMultipleDocuments: Starting parallel policy abstraction', {
    documentCount: documents.length,
  });

  // Process all documents in parallel
  const results = await Promise.allSettled(
    documents.map(async (doc) => {
      const result = await abstractPoliciesFromDocument(
        doc.url,
        doc.title,
        doc.reference,
        doc.markdown,
        doc.currentPolicies
      );
      return {
        documentUrl: doc.url,
        result,
      };
    })
  );

  // Convert Promise.allSettled results
  const finalResults = results.map((result, index) => {
    if (result.status === 'fulfilled') {
      return result.value;
    } else {
      rollbar.error('abstractPoliciesFromMultipleDocuments: Policy abstraction failed', {
        documentUrl: documents[index].url,
        error: result.reason,
      });
      return {
        documentUrl: documents[index].url,
        result: {
          success: false,
          policies: [],
          appealProcess: null,
          reasoning: 'Error during parallel policy abstraction',
          error: result.reason instanceof Error ? result.reason.message : 'Unknown error',
        },
      };
    }
  });

  const successCount = finalResults.filter(r => r.result.success).length;
  rollbar.info('abstractPoliciesFromMultipleDocuments: Parallel policy abstraction completed', {
    totalDocuments: documents.length,
    successCount,
    failureCount: documents.length - successCount,
  });

  return finalResults;
}