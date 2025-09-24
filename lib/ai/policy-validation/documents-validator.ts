import {
  DocumentValidationResult,
  generateDocumentValidationPrompt,
} from '@/lib/prompts/policy-validation-document-validation';
import { serverInstance as rollbar } from '@/lib/rollbar';
import { parseAIJson, retryWithDelay } from '@/lib/utils';
import { callAnthropic } from '../anthropic';

export async function validateDocuments(
  platformId: string,
  platformName: string,
  currentDocuments: Array<{
    id: string;
    reference: string | null;
    title: string;
    summary: string;
    url: string;
  }>,
): Promise<DocumentValidationResult> {
  try {
    const validateDocumentsWithRetry = async () => {
      const prompt = generateDocumentValidationPrompt(platformId, platformName, currentDocuments);
      const response = await callAnthropic(prompt, {
        tools: [
          {
            type: 'web_search_20250305',
            name: 'web_search',
            max_uses: 10,
          },
        ],
      });
      const result = parseAIJson(response);
      
      // Validate that we got a proper result structure
      if (!result || typeof result !== 'object') {
        throw new Error('Invalid response structure from AI service');
      }
      
      return result;
    };

    const result: DocumentValidationResult = await retryWithDelay(validateDocumentsWithRetry);

    rollbar.info('Policy validation: Document validation completed', {
      platformId,
      status: result.status,
      validDocuments: result.validDocuments.length,
      newDocuments: result.newDocuments.length,
      removedDocuments: result.removedDocuments.length,
    });

    return result;
  } catch (error) {
    rollbar.error('Policy validation: Document validation failed', {
      platformId,
      error: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
    });
    throw error;
  }
}
