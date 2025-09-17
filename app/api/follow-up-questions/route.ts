import { callAnthropic } from '@/lib/ai/anthropic';
import { generateFollowUpPrompt } from '@/lib/prompts/follow-up';
import { handleApiError, serverInstance as rollbar } from '@/lib/rollbar';
import { parseAIJson, retryWithDelay } from '@/lib/utils';
import { sendToZapier } from '@/lib/zapier';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log(1);

    const generateQuestions = async () => {
      const response = await callAnthropic(generateFollowUpPrompt(body));
      return parseAIJson(response);
    };
    console.log(2);

    const questions = await retryWithDelay(generateQuestions);

    console.log(3);
    rollbar.info('FollowUpQuestions: Successfully generated follow-up questions', {
      questionCount: questions.length,
    });

    // Send questions to Zapier if webhook URL is configured
    if (process.env.ZAPIER_FOLLOWUP_WEBHOOK_URL) {
      const zapierPayload = {
        date: new Date().toISOString(),
        Q1: questions[0]?.question || '',
        Q2: questions[1]?.question || '',
        Q3: questions[2]?.question || '',
        Q4: questions[3]?.question || '',
        Q5: questions[4]?.question || '',
        Q6: questions[5]?.question || '',
      };

      await sendToZapier(process.env.ZAPIER_FOLLOWUP_WEBHOOK_URL, zapierPayload);
    }

    return NextResponse.json(questions);
  } catch (error: any) {
    console.log(error);
    rollbar.error('FollowUpQuestions: Error generating follow-up questions', {
      error: error.message,
      stack: error.stack,
    });
    const { error: errorMessage, status } = handleApiError(error, '/api/follow-up-questions', {
      statusCode: error.status,
      errorType: error.name,
    });

    return NextResponse.json({ error: errorMessage }, { status });
  }
}
