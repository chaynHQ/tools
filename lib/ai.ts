import { GeneratedLetter, LetterRequest } from '@/types/letter';
import { FollowUpQuestion } from '@/types/questions';
import { rollbar } from './rollbar';
import { cleanupSanitizationMap, desanitizeLetter, sanitizeFormData } from './utils';

// Static next steps that will be used for all letters
const STATIC_NEXT_STEPS = [
  'They might respond asking for the evidence you listed, so make sure you have the things referenced in this letter to hand.',
  "In 48 hours, check if your content has been removed. Sometimes the platforms don't send a response but they do remove the content",
  'If the content is still available, you could try sending a follow up asking them to respond',
];

// Define banned terms and their replacements
export const SENSITIVE_TERMS = [
  { term: 'revenge porn', replacement: 'non-consensual intimate content' },
  { term: 'function normally', replacement: 'specific impact description' },
  { term: 'criminal justice', replacement: 'legal system or legal justice' },
  { term: 'suffering', replacement: 'specific impact description' },
  { term: 'suffer', replacement: 'specific impact description' },
  { term: 'victims', replacement: 'survivors' },
  { term: 'prostitution', replacement: 'sex work' },
  { term: 'child pornography', replacement: 'child sexual abuse material' },
  { term: 'honour-based crimes', replacement: 'so called honour-based crimes' },
  { term: 'mental health', replacement: 'wellbeing' },
  { term: 'trauma', replacement: 'impact' },
  { term: 'depression', replacement: 'emotional impact' },
  { term: 'anxiety', replacement: 'distress' },
  { term: 'suicide', replacement: 'severe emotional distress' },
  { term: 'self-harm', replacement: 'personal harm' },
];

export const QUALITY_CHECK_CRITERIA = {
  MAJOR: {
    SENSITIVE_TERMS: SENSITIVE_TERMS.map((term) => term.term),
    HALLUCINATION_TERMS: [
      'as I mentioned earlier',
      'as stated in my previous correspondence',
      'as per our conversation',
      'you have requested',
      'you have asked me to',
      'as you know',
      'as we discussed',
      'in your email',
      'in your message',
      'as indicated in your report',
      'you have',
      'as I mentioned',
      'per our discussion',
      'as previously noted',
      'as explained before',
      'in my previous email',
      'as requested',
      'your previous message',
    ],
    EVIDENCE_TERMS: [
      'government(-|\\s)issued id',
      'passport\\b',
      "driver('s|\\s)licen[sc]e",
      'national id',
      'identity card',
      'state(-|\\s)issued',
      'official id',
      'id verification process',
      'identity verification document',
      'verify.*identity.*document',
      'proof of residence',
      'proof of address',
      'utility bill',
      'notari[sz]ed',
      'apostille',
      'certified document',
      'legal document',
      'official documentation',
      'government document',
      'identification document',
      'verification process',
      'proof of identity',
    ].map((term) => new RegExp(term, 'i')),
  },
  MINOR: {
    STYLE_PATTERNS: [
      /\b(please|kindly)\b/gi,
      /\b(demand|insist|require)\b/gi,
      /\b(immediately|urgently|asap)\b/gi,
      /\b(must|shall|will)\b/gi,
      /\b(legal action|lawsuit|sue)\b/gi,
      /\b(failure to comply|failure to act)\b/gi,
      /\b(emotional distress|mental anguish)\b/gi,
      /\b(traumatic|devastating|horrific)\b/gi,
      /\b(expect|anticipate|await)\b.*\b(immediate|prompt|quick)\b/gi,
    ],
  },
};

// Check for major issues that require regeneration
function hasMajorIssues(letter: GeneratedLetter): boolean {
  // Check for hallucination patterns
  const hasHallucinations = QUALITY_CHECK_CRITERIA.MAJOR.HALLUCINATION_TERMS.some(
    (pattern) =>
      letter.subject.toLowerCase().includes(pattern.toLowerCase()) ||
      letter.body.toLowerCase().includes(pattern.toLowerCase()),
  );

  // Check for sensitive terms
  const hasEvidenceTerms = QUALITY_CHECK_CRITERIA.MAJOR.EVIDENCE_TERMS.some(
    (term) => term.test(letter.subject) || term.test(letter.body),
  );

  const hasSensitiveTerms = QUALITY_CHECK_CRITERIA.MAJOR.SENSITIVE_TERMS.some(
    (pattern) =>
      letter.subject.toLowerCase().includes(pattern.toLowerCase()) ||
      letter.body.toLowerCase().includes(pattern.toLowerCase()),
  );

  return hasHallucinations || hasSensitiveTerms || hasEvidenceTerms;
}

export async function generateFollowUpQuestions(
  formData: LetterRequest,
): Promise<FollowUpQuestion[]> {
  let attempts = 0;
  const maxAttempts = 3;

  while (attempts < maxAttempts) {
    attempts++;
    try {
      // Sanitize the form data before sending to AI
      const sanitizedData = sanitizeFormData(formData);

      rollbar.info('Generating follow-up questions', {
        platform: sanitizedData.platformInfo.name,
        hasReportingDetails: !!sanitizedData.reportingDetails,
      });

      const response = await fetch('/api/follow-up-questions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sanitizedData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        rollbar.error('API error response for follow-up questions', {
          status: response.status,
          errorData,
        });
        throw new Error(errorData.error || 'Failed to generate follow-up questions');
      }

      const questions = await response.json();

      // Clean up sanitization mappings
      cleanupSanitizationMap(sanitizedData.formId);

      // Validate response structure
      if (!Array.isArray(questions)) {
        rollbar.error('Invalid response format from AI service', { questions });
        throw new Error('Invalid response format from AI service');
      }

      // Filter out questions that match sensitive terms
      const filteredQuestions = questions.filter((q) => {
        if (!q || !q.question) {
          rollbar.warning('Invalid question object in response', { question: q });
          return false;
        }

        const combinedText = `${q.question} ${q.context}`.toLowerCase();
        return !QUALITY_CHECK_CRITERIA.MAJOR.EVIDENCE_TERMS.some((term) => term.test(combinedText));
      });

      rollbar.info('Follow-up questions generated successfully', {
        originalCount: questions.length,
        filteredCount: filteredQuestions.length,
      });

      return filteredQuestions;
    } catch (error) {
      rollbar.error('Error generating follow-up questions', { error });
      throw error instanceof Error ? error : new Error('An unexpected error occurred');
    }
  }
  rollbar.error('Failed to generate follow up questions after maximum attempts');
  throw new Error('Failed to generate follow up questions without issues after multiple attempts');
}

interface GeneratedLetterResponse {
  originalLetter: GeneratedLetter;
  finalLetter: GeneratedLetter;
}

export async function generateLetter(formData: LetterRequest): Promise<GeneratedLetterResponse> {
  let attempts = 0;
  const maxAttempts = 3;

  while (attempts < maxAttempts) {
    attempts++;

    try {
      const sanitizedData = sanitizeFormData(formData);

      rollbar.info('Generating letter', {
        attempt: attempts,
        platform: sanitizedData.platformInfo.name,
        hasReportingDetails: !!sanitizedData.reportingDetails,
        hasFollowUp: !!sanitizedData.followUp,
      });

      const response = await fetch('/api/generate-letter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(sanitizedData),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to generate letter');
      }

      let letter = await response.json();
      const originalLetter = { ...letter };

      // Perform quality check
      try {
        const qualityCheckResponse = await fetch('/api/quality-check-letter', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            letter: originalLetter,
            formData: sanitizedData,
          }),
        });

        if (!qualityCheckResponse.ok) {
          throw new Error('Quality check request failed');
        }

        const qualityCheckResult = await qualityCheckResponse.json();

        // If major issues found, retry generation unless on last attempt
        if (qualityCheckResult.severity === 'critical' || hasMajorIssues(originalLetter)) {
          rollbar.info('Major quality issues found', {
            attempt: attempts,
            issues: qualityCheckResult.issues,
          });

          if (attempts === maxAttempts && qualityCheckResult.improvedLetter) {
            // On final attempt, use improved letter if available
            letter = {
              subject: qualityCheckResult.improvedLetter.subject || letter.subject,
              body: qualityCheckResult.improvedLetter.body || letter.body,
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
        if (qualityCheckResult.severity === 'minor' && qualityCheckResult.improvedLetter) {
          letter = {
            subject: qualityCheckResult.improvedLetter.subject || letter.subject,
            body: qualityCheckResult.improvedLetter.body,
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
          hadMinorIssues: qualityCheckResult.severity === 'minor',
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
      if (attempts === maxAttempts) {
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
    }
  }

  rollbar.error('Failed to generate letter after maximum attempts');
  throw new Error('Failed to generate a letter without issues after multiple attempts');
}
