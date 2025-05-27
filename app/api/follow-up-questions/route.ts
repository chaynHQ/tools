import { generateFollowUpPrompt } from '@/lib/prompts';
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
    
    // Create a clean copy of the data
    const cleanBody = {
      initialQuestions: body.initialQuestions || {},
      platformInfo: body.platformInfo || {},
      reportingDetails: body.reportingDetails || {}
    };

    const response = await anthropic.messages.create({
      model: 'claude-3-sonnet-20240229',
      max_tokens: 4000,
      temperature: 0.7,
      messages: [{
        role: 'user',
        content: generateFollowUpPrompt(cleanBody)
      }]
    });

    if (!response?.content?.[0]?.text) {
      rollbar.error('FollowUpQuestions: Invalid response from Anthropic API');
      throw new Error('Invalid response from Anthropic API');
    }

    let questions;
    try {
      const responseText = response.content[0].text;
      questions = parseAIJson(responseText);
      if (!Array.isArray(questions)) {
        rollbar.error('FollowUpQuestions: Parsed response is not an array');
        throw new Error('Response is not an array');
      }
      
      // Create a new array with the parsed questions instead of modifying the original
      const processedQuestions = [...questions];
      
      return NextResponse.json(processedQuestions);
    } catch (err) {
      rollbar.error('FollowUpQuestions: Failed to parse Anthropic response as JSON', {
        error: err});
      // Log the raw response for debugging
      throw new Error('Failed to parse Anthropic response as JSON');
    }

  } catch (error: any) {
    const { error: errorMessage, status } = handleApiError(error, '/api/follow-up-questions', {
      statusCode: error.status,
      errorType: error.name,
    });

    return NextResponse.json({ error: errorMessage }, { status });
  }
}