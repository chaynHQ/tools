import { generateLetterQualityCheckPrompt } from '@/lib/prompts';
import { parseAIJson } from '@/lib/utils';
import { handleApiError, logInfo } from '@/lib/rollbar';
import Anthropic from '@anthropic-ai/sdk';
import { NextResponse } from 'next/server';

// Initialize Anthropic with environment variable
const anthropic = new Anthropic();

export async function POST(request: Request) {
  try {
    if (!process.env.ANTHROPIC_API_KEY) {
      return NextResponse.json(
        { error: 'Missing Anthropic API key' },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { letter, formData } = body;

    if (!letter || !formData) {
      return NextResponse.json(
        { error: 'Missing required parameters' },
        { status: 400 }
      );
    }

    logInfo('Quality checking letter', { platformInfo: formData.platformInfo });

    const response = await anthropic.messages.create({
      model: 'claude-3-sonnet-20240229',
      max_tokens: 4000,
      temperature: 0.5,
      messages: [{
        role: 'user',
        content: generateLetterQualityCheckPrompt(JSON.stringify(letter), formData)
      }]
    });

    if (!response?.content?.[0]?.text) {
      throw new Error('Invalid response from Anthropic API');
    }

    let qualityCheckResult;
    try {
      qualityCheckResult = parseAIJson(response.content[0].text);
      
      // Validate the response structure
      if (typeof qualityCheckResult.passesQualityCheck !== 'boolean') {
        throw new Error('Invalid quality check result format');
      }
    } catch (e) {
      throw new Error('Failed to parse Anthropic response as JSON');
    }

    return NextResponse.json(qualityCheckResult);

  } catch (error: any) {
    const { error: errorMessage, status } = handleApiError(error, '/api/quality-check-letter', {
      statusCode: error.status,
      errorType: error.name,
    });

    return NextResponse.json({ error: errorMessage }, { status });
  }
}