import { AI_MODEL, AI_TEMPERATURE } from '@/lib/constants/common';
import { generateFollowUpPrompt } from '@/lib/prompts/follow-up';
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
      rollbar.error('FollowUpQuestions: Anthropic API key not configured');
      return NextResponse.json({ error: 'Missing Anthropic API key' }, { status: 500 });
    }

    const body = await request.json();

    const generateQuestions = async () => {
      const response = await anthropic.messages.create({
        model: AI_MODEL,
        max_tokens: 4000,
        temperature: AI_TEMPERATURE,
        messages: [
          {
            role: 'user',
            content: generateFollowUpPrompt(body),
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

    const questions = await retryWithDelay(generateQuestions);

    rollbar.info('FollowUpQuestions: Successfully generated follow-up questions', {
      questionCount: questions.length,
    });

    // Send questions to Zapier if webhook URL is configured
    if (process.env.NEXT_PUBLIC_ZAPIER_FOLLOWUP_WEBHOOK_URL) {
      const zapierPayload = {
        date: new Date().toISOString(),
        Q1: questions[0]?.question || '',
        Q2: questions[1]?.question || '',
        Q3: questions[2]?.question || '',
        Q4: questions[3]?.question || '',
        Q5: questions[4]?.question || '',
        Q6: questions[5]?.question || '',
      };

      await sendToZapier(process.env.NEXT_PUBLIC_ZAPIER_FOLLOWUP_WEBHOOK_URL, zapierPayload);
    }

    return NextResponse.json(questions);
  } catch (error: any) {
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