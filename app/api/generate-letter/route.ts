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
    
    // Validate the request body
    if (!body || !body.initialQuestions || !body.platformInfo) {
      console.error('Invalid request body for letter generation:', body);
      return NextResponse.json(
        { error: 'Invalid request: Missing required fields' },
        { status: 400 }
      );
    }
    
    // Validate initialQuestions has required fields
    const requiredFields = ['contentType', 'contentContext', 'imageIdentification'];
    for (const field of requiredFields) {
      if (!body.initialQuestions[field]) {
        console.error(`Missing required field in initialQuestions: ${field}`);
        return NextResponse.json(
          { error: `Invalid request: Missing required field ${field} in initialQuestions` },
          { status: 400 }
        );
      }
    }
    
    // Validate platformInfo has required fields
    if (!body.platformInfo.name) {
      console.error('Missing name in platformInfo');
      return NextResponse.json(
        { error: 'Invalid request: Missing name in platformInfo' },
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
      
      // Add default nextSteps if not present
      if (!letter.nextSteps) {
        letter.nextSteps = [
          "Keep a copy of this letter and any response you receive",
          "Follow up if you don't receive a response within 7 days",
          "Consider seeking legal advice if the content is not removed"
        ];
      } else if (!Array.isArray(letter.nextSteps)) {
        letter.nextSteps = [
          "Keep a copy of this letter and any response you receive",
          "Follow up if you don't receive a response within 7 days",
          "Consider seeking legal advice if the content is not removed"
        ];
      }
    } catch (e) {
      console.error('JSON parsing error:', e);
      console.error('Raw response:', response.content[0].text);
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