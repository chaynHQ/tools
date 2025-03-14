import { FollowUpQuestion } from '@/types/questions';
import { LetterRequest, GeneratedLetter } from '@/types/letter';
import { parseAIJson } from './utils';

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
    if (retries === 0) throw error;
    await new Promise(resolve => setTimeout(resolve, delay));
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
      
      console.log('Sending data to follow-up questions API:', JSON.stringify(cleanFormData));
      
      const response = await fetch('/api/follow-up-questions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cleanFormData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('API error response:', errorData);
        throw new Error(errorData.error || 'Failed to generate follow-up questions');
      }

      const questions = await response.json();
      console.log('Received follow-up questions from API:', questions);
      
      // Validate response structure
      if (!Array.isArray(questions)) {
        console.error('Invalid response format - not an array:', questions);
        throw new Error('Invalid response format from AI service');
      }

      // Filter out questions that match sensitive terms
      const filteredQuestions = questions.filter(q => {
        if (!q || !q.question) {
          console.warn('Invalid question object in response:', q);
          return false;
        }
        
        const combinedText = `${q.question} ${q.context}`.toLowerCase();
        return !SENSITIVE_TERMS.some(term => term.test(combinedText));
      });

      return filteredQuestions;
    } catch (error) {
      console.error('Error in generateFollowUpQuestions:', error);
      throw error instanceof Error ? error : new Error('An unexpected error occurred');
    }
  });
}

// Check if letter contains ID verification requests or placeholders
function containsIdVerificationOrPlaceholders(letter: GeneratedLetter): boolean {
  const placeholderRegex = /\[([^\]]+)\]/g;
  
  // Check for sensitive terms in subject and body
  const combinedText = `${letter.subject} ${letter.body}`;
  const hasSensitiveTerms = SENSITIVE_TERMS.some(term => term.test(combinedText));
  
  const hasPlaceholders = 
    placeholderRegex.test(letter.subject) || 
    placeholderRegex.test(letter.body);
  
  return hasSensitiveTerms || hasPlaceholders;
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
  
  return combinedRegex.test(letter.subject) || 
         combinedRegex.test(letter.body);
}

export async function generateLetter(formData: LetterRequest): Promise<GeneratedLetter> {
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
      
      console.log('Sending data to generate-letter API:', JSON.stringify(cleanFormData));
      
      const response = await fetch('/api/generate-letter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cleanFormData),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to generate letter');
      }

      const letter = await response.json();
      
      // Check if letter contains ID verification requests, placeholders, or hallucination patterns
      if (containsIdVerificationOrPlaceholders(letter) || containsHallucinationPatterns(letter)) {
        console.log(`Letter contains issues (attempt ${attempts}/${maxAttempts}). Regenerating...`);
        
        // If this is the last attempt, do a basic cleanup instead of rejecting
        if (attempts === maxAttempts) {
          console.log("Maximum attempts reached. Performing basic cleanup instead.");
          
          // Perform basic cleanup as a fallback
          if (letter.body) {
            // Replace sensitive terms with "personal information"
            SENSITIVE_TERMS.forEach(term => {
              letter.body = letter.body.replace(term, "personal information");
            });
            
            // Remove hallucination patterns
            letter.body = letter.body
              .replace(/\[([^\]]+)\]/g, "") // Remove any remaining placeholders
              .replace(/as I mentioned earlier/gi, "")
              .replace(/as stated in my previous correspondence/gi, "")
              .replace(/as per our conversation/gi, "")
              .replace(/you have requested/gi, "")
              .replace(/you have asked me to/gi, "")
              .replace(/as you know/gi, "")
              .replace(/as we discussed/gi, "")
              .replace(/in your email/gi, "")
              .replace(/in your message/gi, "")
              .replace(/as indicated in your report/gi, "")
              .replace(/you have/gi, "")
              .replace(/as I mentioned/gi, "");
          }
          
          // Always use static next steps
          letter.nextSteps = STATIC_NEXT_STEPS;
          
          return letter;
        }
        
        // If not the last attempt, continue to the next iteration to try again
        await new Promise(resolve => setTimeout(resolve, RETRY_DELAY));
        continue;
      }
      
      // Always use static next steps regardless of what the AI generated
      letter.nextSteps = STATIC_NEXT_STEPS;
      
      return letter;
      
    } catch (error) {
      console.error('Error in generateLetter:', error);
      throw error instanceof Error ? error : new Error('An unexpected error occurred');
    }
  }
  
  throw new Error('Failed to generate a letter without issues after multiple attempts');
}

export function extractPlaceholders(text: string): string[] {
  const placeholderRegex = /\[([^\]]+)\]/g;
  const matches = text.match(placeholderRegex);
  if (!matches) return [];
  return matches.map(match => match.slice(1, -1));
}