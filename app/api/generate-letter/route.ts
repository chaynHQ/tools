import { callAnthropic } from '@/lib/ai/anthropic';
import { generateLetterPrompt } from '@/lib/prompts/generate-letter';
import { handleApiError, serverInstance as rollbar } from '@/lib/rollbar';
import { parseAIJson, retryWithDelay } from '@/lib/utils';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const generateLetter = async () => {
      const response = await callAnthropic(generateLetterPrompt(body));
      return parseAIJson(response);
    };

    const letter = await retryWithDelay(generateLetter);

    rollbar.info('GenerateLetter: Successfully generated letter', {
      letterLength: letter.body.length,
    });

    return NextResponse.json(letter);
  } catch (error: any) {
    rollbar.error('GenerateLetter: Error generating letter', {
      error: error.message,
      stack: error.stack,
    });
    const { error: errorMessage, status } = handleApiError(error, '/api/generate-letter', {
      statusCode: error.status,
      errorType: error.name,
    });

    return NextResponse.json({ error: errorMessage }, { status });
  }
}
