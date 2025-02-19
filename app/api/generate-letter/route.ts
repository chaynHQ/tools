import { generateLetterPrompt } from '@/lib/prompts';
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
      letter = parseAIJson(response.content[0].text)
      if (!letter.subject || !letter.body || !Array.isArray(letter.nextSteps)) {
        throw new Error('Invalid letter format in response');
      }
    } catch (e) {
      throw new Error('Failed to parse Anthropic response as JSON');
    }

    return NextResponse.json(letter);

  } catch (error: any) {
    console.error('Error in letter generation API:', error);

    if (error.status === 401) {
      return NextResponse.json(
        { error: 'Authentication failed' },
        { status: 401 }
      );
    }

    if (error.status === 429) {
      return NextResponse.json(
        { error: 'Rate limit exceeded' },
        { status: 429 }
      );
    }

    return NextResponse.json(
      { 
        error: error instanceof Error ? error.message : 'An unexpected error occurred',
        details: process.env.NODE_ENV === 'development' ? error : undefined
      },
      { status: 500 }
    );
  }
}