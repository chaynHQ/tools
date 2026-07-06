import Anthropic from '@anthropic-ai/sdk';
import { MessageCreateParamsNonStreaming } from '@anthropic-ai/sdk/resources/messages.mjs';
import { serverInstance as rollbar } from '../rollbar';
import { retryWithDelay } from '../utils';

// The document-validation call uses the web_search server tool (up to 10
// searches), which is a long, tool-heavy request. Anthropic's guidance is to
// STREAM such requests (see callAnthropic below) so they don't hit the HTTP
// request timeout — callAnthropic uses `.stream().finalMessage()` for exactly
// this reason. A short non-streaming timeout is the wrong tool here: the SDK
// retries timeouts (wall-clock = timeout x (maxRetries+1)) and our own
// retryWithDelay wraps that again, so a slow call thrashes for many minutes
// instead of completing. Keep maxRetries low to avoid multiplying retries, and
// a generous timeout as a last-resort backstop (the 30-min job cap is the outer
// bound). This is what made facebook/instagram/tiktok hang while the smaller
// onlyfans/pornhub policies completed inside the old timeout.
const anthropic = new Anthropic({
  timeout: 10 * 60 * 1000, // 10 minutes; streaming keeps the connection alive
  maxRetries: 1,
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
    // Stream the request and collect the final message. Streaming is required
    // for long / tool-heavy / high-max_tokens requests (e.g. the web_search
    // document-validation call) — a non-streaming request holds one HTTP
    // connection open for the whole server-side tool loop and trips the request
    // timeout on large platforms. `.finalMessage()` returns the same complete
    // Message shape as `.create()`, so the parsing below is unchanged.
    const response = await anthropic.messages
      .stream({
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
      })
      .finalMessage();

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
