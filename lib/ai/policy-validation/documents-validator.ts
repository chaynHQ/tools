import { serverInstance as rollbar } from '@/lib/rollbar';
import { parseAIJson } from '@/lib/utils';
import { callAnthropic } from '../anthropic';
import { 
  DocumentValidationResult, 
  generateDocumentValidationPrompt 
} from '@/lib/prompts/policy-validation-document-validation';

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
  rollbar.info('validateDocuments: Starting document validation', {
    platformId,
    platformName,
    documentsCount: currentDocuments.length,
  });

  try {
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

    const result: DocumentValidationResult = parseAIJson(response);

    rollbar.info('validateDocuments: Document validation completed', {
      platformId,
      status: result.status,
      validDocuments: result.validDocuments.length,
      newDocuments: result.newDocuments.length,
      removedDocuments: result.removedDocuments.length,
    });

    return result;
  } catch (error) {
    rollbar.error('validateDocuments: Error during document validation', {
      platformId,
      error,
    });
    throw error;
  }
}
