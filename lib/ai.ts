import { GeneratedLetter, LetterRequest } from '@/types/letter';
import { FollowUpQuestion } from '@/types/questions';
import Rollbar from 'rollbar';
import { clientConfig } from './rollbar';

// Initialize Rollbar for client-side
const rollbar = new Rollbar(clientConfig);

const MAX_RETRIES = 3;
const RETRY_DELAY = 1000; // 1 second

// Static next steps that will be used for all letters
const STATIC_NEXT_STEPS = [
  "They might respond asking for the evidence you listed, so make sure you have the things referenced in this letter to hand.",
  "In 48 hours, check if your content has been removed. Sometimes the platforms don't send a response but they do remove the content",
  "If the content is still available, you could try sending a follow up asking them to respond"
];

// Define sensitive terms more precisely
const SENSITIVE_TERMS = [
  // Identity documents
  'government(-|\\s)issued id',
  'passport\\b',
  'driver(\'s|\\s)licen[sc]e',
  'national id',
  'identity card',
  'state(-|\\s)issued',
  'official id',
  // Verification processes requiring documentation
  'id verification process',
  'identity verification document',
  'verify.*identity.*document',
  // Residency documents
  'proof of residence',
  'proof of address',
  'utility bill',
  // Official documentation
  'notari[sz]ed',
  'apostille',
  'certified document'
].map(term => new RegExp(term, 'i'));

async function retryWithDelay<T>(
  fn: () => Promise<T>,
  retries: number = MAX_RETRIES,
  delay: number = RETRY_DELAY
): Promise<T> {
  try {
    return await fn();
  } catch (error) {
    if (retries === 0) {
      rollbar.error('Retry attempts exhausted', { error, maxRetries: MAX_RETRIES });
      throw error;
    }
    await new Promise(resolve => setTimeout(resolve, delay));
    rollbar.info('Retrying operation', { 
      retriesLeft: retries - 1,
      delay 
    });
    return retryWithDelay(fn, retries - 1, delay);
  }
}

export async function generateFollowUpQuestions(formData: LetterRequest): Promise<FollowUpQuestion[]> {
  return retryWithDelay(async () => {
    try {
      // Create a clean copy of the data to ensure we're not sending any circular references
      const cleanFormData = {
        initialQuestions: { ...formData.initialQuestions },
        platformInfo: { ...formData.platformInfo },
        reportingDetails: formData.reportingDetails ? { ...formData.reportingDetails } : undefined
      };
      
      rollbar.info('Generating follow-up questions', { 
        platform: cleanFormData.platformInfo.name,
        hasReportingDetails: !!cleanFormData.reportingDetails
      });
      
      const response = await fetch('/api/follow-up-questions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cleanFormData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        rollbar.error('API error response for follow-up questions', { 
          status: response.status,
          errorData 
        });
        throw new Error(errorData.error || 'Failed to generate follow-up questions');
      }

      const questions = await response.json();
      
      // Validate response structure
      if (!Array.isArray(questions)) {
        rollbar.error('Invalid response format from AI service', { questions });
        throw new Error('Invalid response format from AI service');
      }

      // Filter out questions that match sensitive terms
      const filteredQuestions = questions.filter(q => {
        if (!q || !q.question) {
          rollbar.warning('Invalid question object in response', { question: q });
          return false;
        }
        
        const combinedText = `${q.question} ${q.context}`.toLowerCase();
        return !SENSITIVE_TERMS.some(term => term.test(combinedText));
      });

      rollbar.info('Follow-up questions generated successfully', {
        originalCount: questions.length,
        filteredCount: filteredQuestions.length
      });

      return filteredQuestions;
    } catch (error) {
      rollbar.error('Error generating follow-up questions', { error });
      throw error instanceof Error ? error : new Error('An unexpected error occurred');
    }
  });
}

// Check if letter contains ID verification requests or placeholders
function containsIdVerificationOrPlaceholders(letter: GeneratedLetter): boolean {
  const placeholderRegex = /\[([^\]]+)\]/g;
  const matches = letter.subject.match(placeholderRegex) || letter.body.match(placeholderRegex) || [];
  
  // Allow [Content Location] placeholder but flag any others
  const hasUnwantedPlaceholders = matches.some(match => match !== '[Content Location]');
  
  // Check for sensitive terms in subject and body
  const combinedText = `${letter.subject} ${letter.body}`;
  const hasSensitiveTerms = SENSITIVE_TERMS.some(term => term.test(combinedText));
  
  if (hasSensitiveTerms || hasUnwantedPlaceholders) {
    rollbar.warning('Letter contains sensitive terms or unwanted placeholders', {
      hasSensitiveTerms,
      hasUnwantedPlaceholders
    });
  }
  
  return hasSensitiveTerms || hasUnwantedPlaceholders;
}

// Check for hallucination patterns in the letter
function containsHallucinationPatterns(letter: GeneratedLetter): boolean {
  const hallucinationPatterns = [
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
    'as I mentioned'
  ];
  
  const combinedRegex = new RegExp(hallucinationPatterns.join('|'), 'gi');
  
  const hasHallucinations = combinedRegex.test(letter.subject) || 
                           combinedRegex.test(letter.body);
                           
  if (hasHallucinations) {
    rollbar.warning('Letter contains hallucination patterns', {
      patterns: hallucinationPatterns.filter(pattern => 
        letter.subject.includes(pattern) || letter.body.includes(pattern)
      )
    });
  }
  
  return hasHallucinations;
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
      // Create a clean copy of the data to ensure we're not sending any circular references
      const cleanFormData = {
        initialQuestions: { ...formData.initialQuestions },
        platformInfo: { ...formData.platformInfo },
        reportingDetails: formData.reportingDetails ? { ...formData.reportingDetails } : undefined,
        followUp: formData.followUp ? { ...formData.followUp } : undefined
      };
      
      rollbar.info('Generating letter', {
        attempt: attempts,
        platform: cleanFormData.platformInfo.name,
        hasReportingDetails: !!cleanFormData.reportingDetails,
        hasFollowUp: !!cleanFormData.followUp
      });
      
      const response = await fetch('/api/generate-letter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cleanFormData),
      });

      if (!response.ok) {
        const error = await response.json();
        rollbar.error('API error response for letter generation', {
          status: response.status,
          error
        });
        throw new Error(error.message || 'Failed to generate letter');
      }

      let letter = await response.json();
      
      // Store the original letter before any modifications
      const originalLetter = { ...letter };
      
      // Create final letter with content location replaced
      const finalLetter = { ...letter };
      
      // Replace [Content Location] placeholder with actual content location
      if (formData.initialQuestions.contentUrl || formData.initialQuestions.contentDescription) {
        finalLetter.body = finalLetter.body.replace(
          /\[Content Location\]/g, 
          formData.initialQuestions.contentUrl || formData.initialQuestions.contentDescription
        );
      }
      
      // Check if letter contains ID verification requests, unwanted placeholders, or hallucination patterns
      if (containsIdVerificationOrPlaceholders(originalLetter) || containsHallucinationPatterns(originalLetter)) {
        rollbar.info(`Letter contains issues (attempt ${attempts}/${maxAttempts}). Regenerating...`);
        
        // If this is the last attempt, do a basic cleanup instead of rejecting
        if (attempts === maxAttempts) {
          rollbar.warning("Maximum attempts reached. Performing basic cleanup.");
          
          // Perform basic cleanup as a fallback
          if (originalLetter.body) {
            // Replace sensitive terms with "personal information"
            SENSITIVE_TERMS.forEach(term => {
              originalLetter.body = originalLetter.body.replace(term, "personal information");
              finalLetter.body = finalLetter.body.replace(term, "personal information");
            });
            
            // Remove hallucination patterns
            const cleanupPatterns = [
              /\[([^\]]+)\]/g, // Remove any remaining placeholders except [Content Location]
              /as I mentioned earlier/gi,
              /as stated in my previous correspondence/gi,
              /as per our conversation/gi,
              /you have requested/gi,
              /you have asked me to/gi,
              /as you know/gi,
              /as we discussed/gi,
              /in your email/gi,
              /in your message/gi,
              /as indicated in your report/gi,
              /you have/gi,
              /as I mentioned/gi
            ];
            
            cleanupPatterns.forEach(pattern => {
              originalLetter.body = originalLetter.body.replace(pattern, "");
              finalLetter.body = finalLetter.body.replace(pattern, "");
            });
          }
          
          // Always use static next steps
          originalLetter.nextSteps = STATIC_NEXT_STEPS;
          finalLetter.nextSteps = STATIC_NEXT_STEPS;
          
          rollbar.info('Letter cleanup completed', {
            letterLength: originalLetter.body.length
          });
          
          return { originalLetter, finalLetter };
        }
        
        // If not the last attempt, continue to the next iteration to try again
        await new Promise(resolve => setTimeout(resolve, RETRY_DELAY));
        continue;
      }
      
      // Always use static next steps regardless of what the AI generated
      originalLetter.nextSteps = STATIC_NEXT_STEPS;
      finalLetter.nextSteps = STATIC_NEXT_STEPS;
      
      rollbar.info('Letter generated successfully', {
        attempt: attempts,
        letterLength: originalLetter.body.length
      });
      
      return { originalLetter, finalLetter };
      
    } catch (error) {
      rollbar.error('Error generating letter', {
        error,
        attempt: attempts
      });
      throw error instanceof Error ? error : new Error('An unexpected error occurred');
    }
  }
  
  rollbar.error('Failed to generate letter after maximum attempts');
  throw new Error('Failed to generate a letter without issues after multiple attempts');
}

export function extractPlaceholders(text: string): string[] {
  const placeholderRegex = /\[([^\]]+)\]/g;
  const matches = text.match(placeholderRegex);
  if (!matches) return [];
  return matches.map(match => match.slice(1, -1));
}
