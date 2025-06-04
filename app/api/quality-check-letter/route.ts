import { AI_MODEL, AI_TEMPERATURE } from '@/lib/constants/common';
import { generateLetterQualityCheckPrompt } from '@/lib/prompts/quality-check';
import { handleApiError, serverInstance as rollbar } from '@/lib/rollbar';
import { parseAIJson, retryWithDelay } from '@/lib/utils';
import { sendToZapier } from '@/lib/zapier';
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

    // Send critical issues to Zapier if webhook URL is configured
    // if (qualityCheckResult.severity === 'critical' && process.env.NEXT_PUBLIC_ZAPIER_QUALITY_WEBHOOK_URL) {
    if (process.env.NEXT_PUBLIC_ZAPIER_QUALITY_WEBHOOK_URL) {
      const zapierPayload = {
        date: new Date().toISOString(),
        issue1: qualityCheckResult.issues[0]
          ? `${qualityCheckResult.issues[0].type}: ${qualityCheckResult.issues[0].issueType}`
          : '',
        issue2: qualityCheckResult.issues[1]
          ? `${qualityCheckResult.issues[1].type}: ${qualityCheckResult.issues[1].issueType}`
          : '',
        issue3: qualityCheckResult.issues[2]
          ? `${qualityCheckResult.issues[2].type}: ${qualityCheckResult.issues[2].issueType}`
          : '',
        issue4: qualityCheckResult.issues[3]
          ? `${qualityCheckResult.issues[3].type}: ${qualityCheckResult.issues[3].issueType}`
          : '',
        issue5: qualityCheckResult.issues[4]
          ? `${qualityCheckResult.issues[4].type}: ${qualityCheckResult.issues[4].issueType}`
          : '',
        issue6: qualityCheckResult.issues[5]
          ? `${qualityCheckResult.issues[5].type}: ${qualityCheckResult.issues[5].issueType}`
          : '',
      };

      await sendToZapier(process.env.NEXT_PUBLIC_ZAPIER_QUALITY_WEBHOOK_URL, zapierPayload);
    }

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
