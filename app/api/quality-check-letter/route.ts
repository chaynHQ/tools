import { AI_MODEL, AI_TEMPERATURE } from '@/lib/constants/common';
import { callAnthropic } from '@/lib/ai/anthropic';
import { generateLetterQualityCheckPrompt } from '@/lib/prompts/quality-check';
import { handleApiError, serverInstance as rollbar } from '@/lib/rollbar';
import { parseAIJson, retryWithDelay } from '@/lib/utils';
import { sendToZapier } from '@/lib/zapier';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
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
      const content = generateLetterQualityCheckPrompt(letter, formData);
      const response = await callAnthropic(content);
      return parseAIJson(response);
    };

    const qualityCheckResult = await retryWithDelay(generateQualityCheck);

    // Send critical issues to Zapier if webhook URL is configured
    // if (qualityCheckResult.severity === 'critical' && process.env.ZAPIER_QUALITY_WEBHOOK_URL) {
    if (process.env.ZAPIER_QUALITY_WEBHOOK_URL) {
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

      await sendToZapier(process.env.ZAPIER_QUALITY_WEBHOOK_URL, zapierPayload);
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
