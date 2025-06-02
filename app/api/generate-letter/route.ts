import { AI_MODEL } from '@/lib/constants/common';
import { generateLetterPrompt } from '@/lib/prompts/generate-letter';
import { handleApiError, serverInstance as rollbar } from '@/lib/rollbar';
import { parseAIJson, retryWithDelay } from '@/lib/utils';
import Anthropic from '@anthropic-ai/sdk';
import { NextResponse } from 'next/server';

// Initialize Anthropic with environment variable
const anthropic = new Anthropic();

export async function POST(request: Request) {
  try {
    if (!process.env.ANTHROPIC_API_KEY) {
      rollbar.error('GenerateLetter: Anthropic API key not configured');
      return NextResponse.json({ error: 'Missing Anthropic API key' }, { status: 500 });
    }

    const body = await request.json();

    const generateLetter = async () => {
      const response = await anthropic.messages.create({
        model: AI_MODEL,
        max_tokens: 4000,
        temperature: 0.7,
        messages: [
          {
            role: 'user',
            content: generateLetterPrompt(body),
          },
        ],
      });
      //@ts-ignore
      if (!response?.content?.[0]?.text) {
        throw new Error('Invalid response from Anthropic API');
      }
      //@ts-ignore
      return parseAIJson(response.content[0].text);
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
