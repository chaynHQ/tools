import { generateLetterPrompt } from '@/lib/prompts';
import { handleApiError } from '@/lib/rollbar';
import { parseAIJson } from '@/lib/utils';
import Anthropic from '@anthropic-ai/sdk';
import { NextResponse } from 'next/server';

// Initialize Anthropic with environment variable
const anthropic = new Anthropic();

export async function POST(request: Request) {
  try {
    if (!process.env.ANTHROPIC_API_KEY) {
      return NextResponse.json(
        { error: 'Missing Anthropic API key' },
        { status: 500 }
      );
    }

    const body = await request.json();
    
    // Validate the request body
    if (!body || !body.initialQuestions || !body.platformInfo) {
      console.error('Invalid request body for letter generation:', body);
      return NextResponse.json(
        { error: 'Invalid request: Missing required fields' },
        { status: 400 }
      );
    }

    const response = await anthropic.messages.create({
      model: 'claude-3-sonnet-20240229',
      max_tokens: 4000,
      temperature: 0.7,
      messages: [{
        role: 'user',
        content: generateLetterPrompt(body)
      }]
    });

    if (!response?.content?.[0]?.text) {
      throw new Error('Invalid response from Anthropic API');
    }

    let letter;
    try {
      letter = parseAIJson(response.content[0].text);
      if (!letter.subject || !letter.body) {
        throw new Error('Invalid letter format in response');
      }
      
      return NextResponse.json(letter);
    } catch (e) {
      console.error('JSON parsing error:', e);
      console.error('Raw response:', response.content[0].text);
      throw new Error('Failed to parse Anthropic response as JSON');
    }

  } catch (error: any) {
    const { error: errorMessage, status } = handleApiError(error, '/api/generate-letter', {
      statusCode: error.status,
      errorType: error.name,
    });

    return NextResponse.json({ error: errorMessage }, { status });
  }
}