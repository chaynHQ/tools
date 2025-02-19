import { FollowUpQuestion } from '@/types/questions';
import { LetterRequest, GeneratedLetter } from '@/types/letter';
import { parseAIJson } from './utils';

const MAX_RETRIES = 3;
const RETRY_DELAY = 1000; // 1 second

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
      const response = await fetch('/api/follow-up-questions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to generate follow-up questions');
      }

      const questions = await response.json();
      
      // Validate response structure
      if (!Array.isArray(questions)) {
        throw new Error('Invalid response format from AI service');
      }

      return questions;
    } catch (error) {
      console.error('Error in generateFollowUpQuestions:', error);
      throw error instanceof Error ? error : new Error('An unexpected error occurred');
    }
  });
}

export async function generateLetter(formData: LetterRequest): Promise<GeneratedLetter> {
  return retryWithDelay(async () => {
    try {
      const response = await fetch('/api/generate-letter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to generate letter');
      }

      const letter = await response.json();
      return letter;
    } catch (error) {
      console.error('Error in generateLetter:', error);
      throw error instanceof Error ? error : new Error('An unexpected error occurred');
    }
  });
}

export function extractPlaceholders(text: string): string[] {
  const placeholderRegex = /\[([^\]]+)\]/g;
  const matches = text.match(placeholderRegex);
  if (!matches) return [];
  return matches.map(match => match.slice(1, -1));
}