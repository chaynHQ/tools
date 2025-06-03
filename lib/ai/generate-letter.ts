import { GeneratedLetter, LetterRequest } from '@/types/letter';
import { serverInstance as rollbar } from '../rollbar';
import { retryWithDelay } from '../utils';
import { hasMajorIssues, MAX_RETRIES, RETRY_DELAY, STATIC_NEXT_STEPS } from './constants';
import { cleanupSanitizationMap, desanitizeLetter, sanitizeFormData } from './sanitization';

interface GeneratedLetterResponse {
  originalLetter: GeneratedLetter;
  finalLetter: GeneratedLetter;
}

export async function generateLetter(formData: LetterRequest): Promise<GeneratedLetterResponse> {
  let attempts = 0;

  while (attempts < MAX_RETRIES) {
    attempts++;

    try {
      // Sanitize the form data before sending to AI
      const sanitizedData = sanitizeFormData(formData);

      rollbar.info('Generating letter', {
        attempt: attempts,
        platform: sanitizedData.platformInfo.name,
        hasReportingDetails: !!sanitizedData.reportingDetails,
        hasFollowUp: !!sanitizedData.followUp,
      });

      const response = await retryWithDelay(async () => {
        const res = await fetch('/api/generate-letter', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(sanitizedData),
        });

        if (!res.ok) {
          const error = await res.json();
          throw new Error(error.message || 'Failed to generate letter');
        }

        return res.json();
      });

      let letter = response;
      const originalLetter = { ...letter };

      // Perform quality check
      try {
        const qualityCheckResponse = await retryWithDelay(async () => {
          const res = await fetch('/api/quality-check-letter', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              letter: originalLetter,
              formData: sanitizedData,
            }),
          });

          if (!res.ok) {
            throw new Error('Quality check request failed');
          }

          return res.json();
        });

        // If major issues found, retry generation unless on last attempt
        if (qualityCheckResponse.severity === 'critical' || hasMajorIssues(originalLetter)) {
          rollbar.info('Major quality issues found', {
            attempt: attempts,
            issues: qualityCheckResponse.issues,
          });

          if (attempts === MAX_RETRIES && qualityCheckResponse.improvedLetter) {
            // On final attempt, use improved letter if available
            letter = {
              subject: qualityCheckResponse.improvedLetter.subject || letter.subject,
              body: qualityCheckResponse.improvedLetter.body || letter.body,
              nextSteps: STATIC_NEXT_STEPS,
            };

            // Desanitize and return the final attempt
            const desanitizedLetter = {
              subject: desanitizeLetter(letter.subject, sanitizedData.formId),
              body: desanitizeLetter(letter.body, sanitizedData.formId),
              nextSteps: STATIC_NEXT_STEPS,
            };

            cleanupSanitizationMap(sanitizedData.formId);

            return {
              originalLetter,
              finalLetter: desanitizedLetter,
            };
          }

          // Not final attempt, continue to next try
          continue;
        }

        // No major issues - check for minor issues
        if (qualityCheckResponse.severity === 'minor' && qualityCheckResponse.improvedLetter) {
          letter = {
            subject: qualityCheckResponse.improvedLetter.subject || letter.subject,
            body: qualityCheckResponse.improvedLetter.body || letter.body,
            nextSteps: STATIC_NEXT_STEPS,
          };
        }

        // Desanitize and return the successful letter
        const desanitizedLetter = {
          subject: desanitizeLetter(letter.subject, sanitizedData.formId),
          body: desanitizeLetter(letter.body, sanitizedData.formId),
          nextSteps: STATIC_NEXT_STEPS,
        };

        cleanupSanitizationMap(sanitizedData.formId);

        rollbar.info('Letter generated successfully', {
          attempt: attempts,
          letterLength: letter.body.length,
          hadMinorIssues: qualityCheckResponse.severity === 'minor',
        });

        return {
          originalLetter,
          finalLetter: desanitizedLetter,
        };
      } catch (error) {
        rollbar.error('Error during quality check', { error });
        // On quality check error, return original letter
        const desanitizedLetter = {
          subject: desanitizeLetter(letter.subject, sanitizedData.formId),
          body: desanitizeLetter(letter.body, sanitizedData.formId),
          nextSteps: STATIC_NEXT_STEPS,
        };

        cleanupSanitizationMap(sanitizedData.formId);

        return {
          originalLetter,
          finalLetter: desanitizedLetter,
        };
      }
    } catch (error) {
      if (attempts === MAX_RETRIES) {
        rollbar.error('Error generating letter on final attempt', {
          error,
          attempt: attempts,
        });
        throw error instanceof Error ? error : new Error('An unexpected error occurred');
      }
      rollbar.warning('Error generating letter, retrying', {
        error,
        attempt: attempts,
      });
      await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY));
    }
  }

  rollbar.error('Failed to generate letter after maximum attempts');
  throw new Error('Failed to generate a letter without issues after multiple attempts');
}
