import Anthropic from '@anthropic-ai/sdk';
import { MessageCreateParamsNonStreaming } from '@anthropic-ai/sdk/resources/messages.mjs';
import { serverInstance as rollbar } from '../rollbar';
import { retryWithDelay } from '../utils';

// Initialize Anthropic client with an explicit per-request timeout. Without
// one, the SDK's default timeout is long and a stalled/rate-limited request can
// hang the policy-validation step for the full job budget. The abstraction step
// fires one call per document in parallel with no concurrency cap, so a burst
// on a large platform (facebook/instagram/tiktok) can trigger 429s; bound each
// call so it fails fast and surfaces a real error instead of hanging.
const anthropic = new Anthropic({
  timeout: 2 * 60 * 1000, // 2 minutes per request
  maxRetries: 2,
});

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
      // Sonnet 5's tokenizer produces ~30% more tokens than Sonnet 4.6 for the
      // same text, so a limit tuned for the old model can now truncate output
      // mid-JSON (→ `stop_reason: "max_tokens"` → parseAIJson fails). Thinking is
      // disabled below, so nothing competes with output for this budget. Callers
      // needing more headroom can override `max_tokens` via `config`.
      max_tokens: 16000,
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
        // Extract the 'input' object. This is the final structured JSON.
        let input: any = toolCall.input;

        // Sonnet 5 sometimes echoes the tool-call envelope and nests the actual
        // payload under a single wrapper key (e.g. `{ parameters: {...} }` or
        // `{ params: {...} }`) instead of returning the schema's top-level
        // properties directly. The wrapped value may itself be an object OR a
        // JSON-encoded string. Unwrap (and parse) it so callers see the intended
        // object.
        if (input && typeof input === 'object' && !Array.isArray(input)) {
          const keys = Object.keys(input);
          const WRAPPER_KEYS = ['parameters', 'params', 'input', 'arguments', 'json', 'result', 'response'];
          if (keys.length === 1 && WRAPPER_KEYS.includes(keys[0])) {
            let inner: any = input[keys[0]];
            if (typeof inner === 'string') {
              try {
                inner = JSON.parse(inner);
              } catch {
                // leave `inner` as-is; downstream validation will catch it
              }
            }
            if (inner && typeof inner === 'object') {
              input = inner;
            }
          }
        }

        return JSON.stringify(input);
      }
    }

    // When tools like `web_search` are used, Claude returns multiple content
    // blocks in order: interim narration text, the tool-use/tool-result blocks,
    // and finally a text block with the answer. Grabbing the FIRST text block
    // (`[0]`) would return the preamble ("I'll search for..."), which contains
    // no JSON and makes `parseAIJson` throw "No valid JSON object found". The
    // final answer is always the LAST text block.
    const textBlocks = response?.content?.filter((c) => c.type === 'text') ?? [];
    const responseText = textBlocks[textBlocks.length - 1]?.text;

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
