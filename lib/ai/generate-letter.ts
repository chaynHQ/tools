import { GeneratedLetter, LetterRequest } from '@/types/letter';
import { MAX_RETRIES, RETRY_DELAY, STATIC_NEXT_STEPS } from '../constants/ai';
import { PlatformId } from '../constants/platforms';
import { QualityCheckResponse } from '../prompts/letter-quality-check';
import { serverInstance as rollbar } from '../rollbar';
import { cleanupSanitizationMap, desanitizeLetter, sanitizeFormData } from './sanitization';

interface GeneratedLetterResponse {
  redactedLetter: GeneratedLetter;
  finalLetter: GeneratedLetter;
}

export async function generateLetter(formData: LetterRequest): Promise<GeneratedLetterResponse> {
  let attempts = 0;

  while (attempts < MAX_RETRIES) {
    attempts++;

    try {
      // Sanitize the form data before sending to AI
      const sanitizedData = sanitizeFormData(formData);

      // Determine if this is a custom/other platform
      const isOtherPlatform = sanitizedData.platformInfo.isCustom || 
                             sanitizedData.platformInfo.platformId === PlatformId.OTHER;
      rollbar.info('Generating letter', {
        attempt: attempts,
        platform: sanitizedData.platformInfo.platformName || sanitizedData.platformInfo.customName,
        isOtherPlatform,
        hasReportingDetails: !!sanitizedData.reportingDetails,
        hasFollowUp: !!sanitizedData.followUp,
      });

      const endpoint = isOtherPlatform ? '/api/generate-letter-other-platform' : '/api/generate-letter';
      
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(sanitizedData),
      });

      if (!res.ok) {
        const errorResponse = await res.json().catch(() => ({ error: 'Failed to generate letter' }));
        throw new Error(errorResponse.error || `Failed to generate letter (${res.status})`);
      }

      const response: { subject: string; body: string } = await res.json();

      let improvedLetter;
      const originalLetter = response;

      // Perform quality check
      const qualityCheckRes = await fetch('/api/quality-check-letter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          letter: originalLetter,
          formData: sanitizedData,
        }),
      });

      if (!qualityCheckRes.ok) {
        throw new Error('Quality check request failed');
      }

      const qualityCheckResponse: QualityCheckResponse = await qualityCheckRes.json();

      // If major issues found, retry generation unless on last attempt
      if (qualityCheckResponse.issues?.length > 0 && qualityCheckResponse.improvedLetter) {
        // If this is the second attempt and we have an improved letter, use it
        improvedLetter = {
          subject: qualityCheckResponse.improvedLetter.subject,
          body: qualityCheckResponse.improvedLetter.body,
        };
      }
      const letter = improvedLetter || originalLetter;

      // Desanitize and return the final attempt
      const desanitizedLetter = {
        subject: desanitizeLetter(letter.subject, sanitizedData.formId),
        body: normalizeNewlines(desanitizeLetter(letter.body, sanitizedData.formId)),
        nextSteps: STATIC_NEXT_STEPS,
      };

      cleanupSanitizationMap(sanitizedData.formId);

      return {
        redactedLetter: letter,
        finalLetter: desanitizedLetter,
      };
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

/**
 * Normalizes newlines in letter content to prevent excessive empty lines
 * Replaces sequences of 3+ newlines with exactly 2 newlines (single empty line between paragraphs)
 */
function normalizeNewlines(text: string): string {
  if (!text) return text;
  
  // Replace sequences of 3 or more newlines with exactly 2 newlines
  // This ensures only single empty lines between paragraphs
  return text.replace(/\n{3,}/g, '\n\n');
}