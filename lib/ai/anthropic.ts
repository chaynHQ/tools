import Anthropic from '@anthropic-ai/sdk';
import { serverInstance as rollbar } from '../rollbar';
import { retryWithDelay } from '../utils';

// Initialize Anthropic client
const anthropic = new Anthropic();

export interface AnthropicConfig {
  model?: string;
  maxTokens?: number;
  temperature?: number;
}

const defaultConfig: Required<AnthropicConfig> = {
  model: process.env.ANTHROPIC_MODEL || 'claude-sonnet-4-20250514',
  maxTokens: 4000,
  temperature: process.env.ANTHROPIC_TEMPERATURE
    ? parseFloat(process.env.ANTHROPIC_TEMPERATURE)
    : 0.3,
};

export async function callAnthropic(prompt: string, config: AnthropicConfig = {}): Promise<string> {
  if (!process.env.ANTHROPIC_API_KEY) {
    rollbar.error('Anthropic: API key not configured');
    throw new Error('Missing Anthropic API key');
  }

  const finalConfig = { ...defaultConfig, ...config };

  rollbar.info('Anthropic: Making API call', {
    model: finalConfig.model,
    promptLength: prompt.length,
    temperature: finalConfig.temperature,
  });

  return await retryWithDelay(async () => {
    const response = await anthropic.messages.create({
      model: finalConfig.model,
      max_tokens: finalConfig.maxTokens,
      temperature: finalConfig.temperature,
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
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
