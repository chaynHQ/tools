import { FollowUpQuestion } from '@/types/questions';
import { serverInstance as rollbar } from '../rollbar';
import { retryWithDelay } from '../utils';
import { MAX_RETRIES, RETRY_DELAY } from './constants';
import { cleanupSanitizationMap, sanitizeFormData } from './sanitization';

export async function generateFollowUpQuestions(formData: any): Promise<FollowUpQuestion[]> {
  let attempts = 0;

  while (attempts < MAX_RETRIES) {
    attempts++;
    try {
      // Sanitize the form data before sending to AI
      const sanitizedData = sanitizeFormData(formData);

      rollbar.info('Generating follow-up questions', {
        platform: sanitizedData.platformInfo.name,
        hasReportingDetails: !!sanitizedData.reportingDetails,
      });

      const response = await retryWithDelay(async () => {
        const res = await fetch('/api/follow-up-questions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(sanitizedData),
        });

        if (!res.ok) {
          const errorData = await res.json();
          throw new Error(errorData.error || 'Failed to generate follow-up questions');
        }

        return res.json();
      });

      // Clean up sanitization mappings
      cleanupSanitizationMap(sanitizedData.formId);

      // Validate response structure
      if (!Array.isArray(response)) {
        rollbar.error('Invalid response format from AI service', { response });
        throw new Error('Invalid response format from AI service');
      }

      rollbar.info('Follow-up questions generated successfully', {
        questionCount: response.length,
      });

      return response;
    } catch (error) {
      if (attempts === MAX_RETRIES) {
        rollbar.error('Error generating follow-up questions', { error });
        throw error instanceof Error ? error : new Error('An unexpected error occurred');
      }
      await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY));
    }
  }

  rollbar.error('Failed to generate follow up questions after maximum attempts');
  throw new Error('Failed to generate follow up questions without issues after multiple attempts');
}
