import { generateLetterPrompt } from '@/lib/prompts';
import { handleApiError, rollbar } from '@/lib/rollbar';
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
      rollbar.error('GenerateLetter: Invalid response from Anthropic API');
      throw new Error('Invalid response from Anthropic API');
    }

    let letter;
    try {
      letter = parseAIJson(response.content[0].text);
      if (!letter.subject || !letter.body) {
        rollbar.error('GenerateLetter: Generated letter is missing required fields');
        throw new Error('Generated letter is missing required fields');
      }
      
      return NextResponse.json(letter);
    } catch (e: any) {
      console.error('JSON parsing error:', e);
      rollbar.error('Failed to parse Anthropic response as JSON');
      
      // Provide more specific error messages based on the error type
      let errorMessage = 'Failed to generate letter';
      if (e instanceof SyntaxError) {
        errorMessage = 'The AI generated an invalid response. Please try again.';
      } else if (e.message.includes('missing required fields')) {
        errorMessage = 'The generated letter was incomplete. Please try again.';
      } else if (e.message.includes('No valid JSON')) {
        errorMessage = 'The AI response was in an incorrect format. Please try again.';
      }
      
      return NextResponse.json({ 
        error: errorMessage,
        details: e.message
      }, { status: 500 });
    }

  } catch (error: any) {
    const { error: errorMessage, status } = handleApiError(error, '/api/generate-letter', {
      statusCode: error.status,
      errorType: error.name,
    });

    return NextResponse.json({ 
      error: errorMessage,
      details: error instanceof Error ? error.message : 'Unknown error occurred'
    }, { status });
  }
}