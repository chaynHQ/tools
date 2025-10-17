import { callAnthropic } from '@/lib/ai/anthropic';
import { generateOtherPlatformLetterPrompt } from '@/lib/prompts/generate-letter-other-platform';
import { handleApiError, serverInstance as rollbar } from '@/lib/rollbar';
import { parseAIJson, retryWithDelay } from '@/lib/utils';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const generateLetter = async () => {
      const prompt = generateOtherPlatformLetterPrompt(body);
      const response = await callAnthropic(prompt, {
        tools: [
          {
            type: 'web_search_20250305',
            name: 'web_search',
            max_uses: 10,
          },
          // currently multiple tools cannot be used at the same time - web search should be prioritised
          // {
          //   name: 'json',
          //   description: 'Respond with a JSON object',
          //   input_schema: {
          //     type: 'object',
          //     properties: {
          //       subject: {
          //         type: 'string',
          //       },
          //       body: {
          //         type: 'string',
          //       },
          //     },
          //     required: ['body', 'subject'],
          //     additionalProperties: false,
          //   },
          // },
        ],
      });

      return parseAIJson(response);
    };

    const letter = await retryWithDelay(generateLetter);

    rollbar.info('GenerateLetterOtherPlatform: Successfully generated letter for other platform', {
      platformName: body.platformInfo?.customName || body.platformInfo?.platformName,
      letterLength: letter.body.length,
    });

    return NextResponse.json(letter);
  } catch (error: any) {
    rollbar.error('GenerateLetterOtherPlatform: Error generating letter for other platform', {
      error: error.message,
      stack: error.stack,
    });
    
    const { error: errorMessage, status } = handleApiError(
      error,
      '/api/generate-letter-other-platform',
      {
        statusCode: error.status,
        errorType: error.name,
      },
    );

    return NextResponse.json({ error: errorMessage }, { status });
  }
}
