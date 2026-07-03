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
      model: process.env.ANTHROPIC_MODEL || 'claude-sonnet-5',
      max_tokens: 10000,
      // Claude Sonnet 5 runs adaptive thinking by default when `thinking` is
      // omitted. We disable it explicitly to keep latency and cost predictable,
      // and because forced `tool_choice` (used by the structured-JSON routes) is
      // only reliable with thinking disabled. Callers can opt into reasoning by
      // passing `thinking` (and optionally `output_config.effort`) in `config`.
      thinking: { type: 'disabled' },
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
      ...config,
    });
    
    if(config.tool_choice?.type === 'tool' && config.tool_choice.name === 'json') {
      const toolCall = response.content.find(block => block.type === 'tool_use');

      if (toolCall && toolCall.name === 'json') {
        // Extract the 'input' object. This is the final structured JSON
        return JSON.stringify(toolCall.input);
      }
    }  

    const responseText = response?.content?.filter((c) => c.type === 'text')[0]?.text;

    //@ts-ignore
    if (!responseText) {
      throw new Error('Invalid response from Anthropic API');
    }

    rollbar.info('Anthropic: API call successful', {
      responseLength: responseText.length,
    });

    return responseText;
  });
}
