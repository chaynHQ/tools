import { AI_MODEL } from '@/lib/constants/common';
import { generateLetterQualityCheckPrompt } from '@/lib/prompts';
import { handleApiError, serverInstance as rollbar } from '@/lib/rollbar';
import { parseAIJson } from '@/lib/utils';
import Anthropic from '@anthropic-ai/sdk';
import { NextResponse } from 'next/server';

const anthropic = new Anthropic();

export async function POST(request: Request) {
  try {
    if (!process.env.ANTHROPIC_API_KEY) {
      rollbar.error('QualityCheckLetter: Anthropic API key not configured');
      return NextResponse.json({ error: 'Missing Anthropic API key' }, { status: 500 });
    }

    const body = await request.json();
    const { letter, formData } = body;

    if (!letter || !formData) {
      rollbar.error('QualityCheckLetter: Missing required parameters', { letter, formData });
      return NextResponse.json({ error: 'Missing required parameters' }, { status: 400 });
    }

    const response = await anthropic.messages.create({
      model: AI_MODEL,
      max_tokens: 4000,
      temperature: 0.5,
      messages: [
        {
          role: 'user',
          content: generateLetterQualityCheckPrompt(JSON.stringify(letter), formData),
        },
      ],
    });

    // @ts-ignore
    if (!response?.content?.[0]?.text) {
      rollbar.error('QualityCheckLetter: Invalid response from Anthropic API');
      throw new Error('Invalid response from Anthropic API');
    }

    // @ts-ignore
    const result = parseAIJson(response.content[0].text);

    // Ensure improvedLetter has the correct structure
    if (result.improvedLetter) {
      if (typeof result.improvedLetter === 'string') {
        // If improvedLetter is a string, convert it to the correct object structure
        result.improvedLetter = {
          subject: letter.subject, // Keep original subject if not specified
          body: result.improvedLetter, // Use improved body
        };
      } else if (!result.improvedLetter.subject || !result.improvedLetter.body) {
        // If object but missing fields, ensure both fields exist
        result.improvedLetter = {
          subject: result.improvedLetter.subject || letter.subject,
          body: result.improvedLetter.body || letter.body,
        };
      }
    }

    rollbar.info('QualityCheckLetter: Quality check completed', {
      passesQualityCheck: result.passesQualityCheck,
      severity: result.severity,
      issueCount: result.issues.length,
      hasImprovedLetter: !!result.improvedLetter,
    });

    return NextResponse.json(result);
  } catch (error: any) {
    const { error: errorMessage, status } = handleApiError(error, '/api/quality-check-letter');
    return NextResponse.json({ error: errorMessage }, { status });
  }
}
