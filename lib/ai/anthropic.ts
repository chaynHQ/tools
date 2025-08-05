import Anthropic from '@anthropic-ai/sdk';
import { MessageCreateParamsNonStreaming } from '@anthropic-ai/sdk/resources/messages.mjs';
import { serverInstance as rollbar } from '../rollbar';
import { retryWithDelay } from '../utils';

// Initialize Anthropic client
const anthropic = new Anthropic();

export async function callAnthropic(
  prompt: string,
  config: Partial<MessageCreateParamsNonStreaming> = {},
): Promise<string> {
  if (!process.env.ANTHROPIC_API_KEY) {
    rollbar.error('Anthropic: API key not configured');
    throw new Error('Missing Anthropic API key');
  }

  return await retryWithDelay(async () => {
    const response = await anthropic.messages.create({
      model: process.env.ANTHROPIC_MODEL || 'claude-sonnet-4-20250514',
      max_tokens: 4000,
      temperature: process.env.ANTHROPIC_TEMPERATURE
        ? parseFloat(process.env.ANTHROPIC_TEMPERATURE)
        : 0.3,
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
      ...config,
    });

    //@ts-ignore
    if (!response?.content?.[0]?.text) {
      throw new Error('Invalid response from Anthropic API');
    }

    //@ts-ignore
    const responseText = response.content[0].text;

    rollbar.info('Anthropic: API call successful', {
      responseLength: responseText.length,
    });

    return responseText;
  });
}
