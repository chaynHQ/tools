import { callAnthropic } from '@/lib/ai/anthropic';
import { generateLetterQualityCheckPrompt } from '@/lib/prompts/letter-quality-check';
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
      // Force a structured tool response so the model can't wrap the JSON in
      // narration or emit trailing commas (both of which Sonnet 5 does when left
      // to free-form text, breaking parseAIJson). Mirrors the generate-letter
      // and follow-up routes.
      const response = await callAnthropic(content, {
        tools: [
          {
            name: 'json',
            description: 'Respond with the quality-check result as a JSON object',
            input_schema: {
              type: 'object',
              properties: {
                issues: {
                  type: 'array',
                  description: 'All issues found in the letter. Empty array if none.',
                  items: {
                    type: 'object',
                    properties: {
                      severity: { type: 'string', enum: ['CRITICAL', 'MINOR'] },
                      code: {
                        type: 'string',
                        enum: [
                          'HALLUCINATION',
                          'SENSITIVE_DATA',
                          'POLICY_ERROR',
                          'BANNED_TERM',
                          'INAPPROPRIATE_TONE',
                          'MISSING_CRITICAL_INFO',
                          'LANGUAGE',
                          'STRUCTURE_DEVIATION',
                          'INFO_HANDLING_ERROR',
                          'SUBJECT_LINE_ERROR',
                        ],
                      },
                      description: { type: 'string' },
                    },
                    required: ['severity', 'code', 'description'],
                  },
                },
                improvedLetter: {
                  type: 'object',
                  description: 'The corrected letter. Identical to the original if no issues.',
                  properties: {
                    subject: { type: 'string' },
                    body: { type: 'string' },
                  },
                  required: ['subject', 'body'],
                },
              },
              required: ['issues', 'improvedLetter'],
              additionalProperties: false,
            },
          },
        ],
        tool_choice: { type: 'tool', name: 'json' },
      });

      const parsed = parseAIJson(response);

      // Sonnet 5's forced tool use is occasionally malformed even after the
      // envelope-unwrap in callAnthropic: it may omit `issues`, or return only
      // `improvedLetter`. `parseAIJson` still succeeds (the JSON is valid, just
      // the wrong shape), so we must validate here and throw on a bad shape —
      // that lets `retryWithDelay` re-run the check instead of returning a
      // result that would crash the caller. A persistent bad shape surfaces as
      // an error (a genuine problem worth investigating) rather than being
      // silently swallowed.
      if (
        !parsed ||
        !Array.isArray(parsed.issues) ||
        typeof parsed.improvedLetter?.subject !== 'string' ||
        typeof parsed.improvedLetter?.body !== 'string'
      ) {
        throw new Error('Quality check returned an unexpected response shape');
      }

      return parsed;
    };

    // Retry a few times: the check is a required gate, and the malformed-shape
    // failure above is intermittent, so a couple of extra attempts absorb it.
    const qualityCheckResult = await retryWithDelay(generateQualityCheck, 2);

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

    // Do not log the result object — it contains the rewritten letter
    // (`improvedLetter`) and issue text derived from the user's letter.
    rollbar.info('QualityCheckLetter: Successfully parsed quality check result', {
      issuesCount: Array.isArray(qualityCheckResult?.issues) ? qualityCheckResult.issues.length : 0,
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
