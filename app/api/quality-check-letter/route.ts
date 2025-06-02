import { AI_MODEL, AI_TEMPERATURE } from '@/lib/constants/common';
import { generateLetterQualityCheckPrompt } from '@/lib/prompts/quality-check';
import { handleApiError, serverInstance as rollbar } from '@/lib/rollbar';
import { parseAIJson, retryWithDelay } from '@/lib/utils';
import Anthropic from '@anthropic-ai/sdk';
import { NextResponse } from 'next/server';

// Initialize Anthropic with environment variable
const anthropic = new Anthropic();

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
      const content = generateLetterQualityCheckPrompt(JSON.stringify(letter), formData);
      const response = await anthropic.messages.create({
        model: AI_MODEL,
        max_tokens: 4000,
        temperature: AI_TEMPERATURE,
        messages: [
          {
            role: 'user',
            content: content,
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
