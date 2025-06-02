import { AI_MODEL } from '@/lib/constants/common';
import { generateLetterQualityCheckPrompt } from '@/lib/prompts';
import { handleApiError, serverInstance as rollbar } from '@/lib/rollbar';
import { parseAIJson } from '@/lib/utils';
import Anthropic from '@anthropic-ai/sdk';
import { NextResponse } from 'next/server';

// Initialize Anthropic with environment variable
const anthropic = new Anthropic();

const MAX_RETRIES = 3;
const RETRY_DELAY = 1000; // 1 second delay between retries

async function retryWithDelay<T>(
  fn: () => Promise<T>,
  retries: number = MAX_RETRIES,
  delay: number = RETRY_DELAY,
): Promise<T> {
  try {
    return await fn();
  } catch (error) {
    if (retries === 0) throw error;
    await new Promise((resolve) => setTimeout(resolve, delay));
    return retryWithDelay(fn, retries - 1, delay);
  }
}

export async function POST(request: Request) {
  try {
    if (!process.env.ANTHROPIC_API_KEY) {
      rollbar.error('QualityCheckLetter: Anthropic API key not configured');
      return NextResponse.json({ error: 'Missing Anthropic API key' }, { status: 500 });
    }

    const body = await request.json();
    const { letter, formData } = body;

    if (!letter || !formData) {
      rollbar.error('QualityCheckLetter: Missing required parameters', {
        letter,
        formData,
      });
      return NextResponse.json({ error: 'Missing required parameters' }, { status: 400 });
    }

    const generateQualityCheck = async () => {
      const response = await anthropic.messages.create({
        model: AI_MODEL,
        max_tokens: 4000,
        temperature: 0.5,
        messages: [
          {
            role: 'user',
            content: generateLetterQualityCheckPrompt(JSON.stringify(letter), formData),
          },
        ],
      });

      if (!response?.content?.[0]?.text) {
        throw new Error('Invalid response from Anthropic API');
      }

      return parseAIJson(response.content[0].text);
    };

    const qualityCheckResult = await retryWithDelay(generateQualityCheck);

    rollbar.info('QualityCheckLetter: Successfully parsed quality check result', {
      qualityCheckResult,
    });

    return NextResponse.json(qualityCheckResult);
  } catch (error: any) {
    rollbar.error('QualityCheckLetter: Error processing quality check request', {
      error: error.message,
      stack: error.stack,
    });
    const { error: errorMessage, status } = handleApiError(error, '/api/quality-check-letter', {
      statusCode: error.status,
      errorType: error.name,
    });

    return NextResponse.json({ error: errorMessage }, { status });
  }
}
