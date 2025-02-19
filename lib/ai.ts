import { FollowUpQuestion } from '@/types/questions';
import { LetterRequest, GeneratedLetter } from '@/types/letter';

export async function generateFollowUpQuestions(formData: LetterRequest): Promise<FollowUpQuestion[]> {
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
}

export async function generateLetter(formData: LetterRequest): Promise<GeneratedLetter> {
  throw new Error('Not implemented');
}