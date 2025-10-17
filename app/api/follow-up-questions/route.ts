import { callAnthropic } from '@/lib/ai/anthropic';
import { generateFollowUpPrompt } from '@/lib/prompts/follow-up';
import { handleApiError, serverInstance as rollbar } from '@/lib/rollbar';
import { parseAIJson, retryWithDelay } from '@/lib/utils';
import { sendToZapier } from '@/lib/zapier';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const generateQuestions = async () => {
      const response = await callAnthropic(generateFollowUpPrompt(body), {
        tools: [
          {
            name: 'json',
            description: 'Respond with a JSON object',
            input_schema: {
              type: 'object',
              properties: {
                questions: {
                  type: 'array',
                  description: 'A list of questions to ask a user regarding their content submission.',
                  items: {
                    type: 'object',
                    properties: {
                      id: {
                        type: 'string',
                        description: 'A unique identifier for the question.',
                      },
                      question: {
                        type: 'string',
                        description: 'The exact question to be presented to the user.',
                      },
                      context: {
                        type: 'string',
                        description: 'Helpful context explaining why the question is being asked.',
                      },
                      reason: {
                        type: 'string',
                        description: 'A keyword explaining the purpose, e.g., "essential" or "verification".',
                      },
                    },
                    required: ['id', 'question', 'context', 'reason'],
                  },
                },
              },
              required: ['questions'],
              additionalProperties: false,
            },
          },
        ],
        tool_choice: { type: 'tool', name: 'json' },
      });
      return parseAIJson(response);
    };

    const questionsResponse = await retryWithDelay(generateQuestions);
    const questions = questionsResponse.questions || [];

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
