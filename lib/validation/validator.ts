import { GoogleGenAI, Type } from "@google/genai";
import { IncomingWebhook } from '@slack/webhook';
import { NextResponse } from "next/server";
import Rollbar from 'rollbar';
import { clientConfig } from '../rollbar';
import { parseJsonFromString } from './parser';
import { createPrompt } from './prompt';
import { webhookFormattedError, webhookFormattedResponse } from "./slack";


// Initialize Rollbar for client-side
const rollbar = new Rollbar(clientConfig);

const genAI = new GoogleGenAI({apiKey: process.env.GOOGLE_AI_API_KEY || ''});
// Initialize Slack webhook
const webhook = process.env.SLACK_WEBHOOK_URL ? 
  new IncomingWebhook(process.env.SLACK_WEBHOOK_URL) : 
  null;

export async function validatePolicy(platform: string, policyData: any) {
  try {
    console.log(`Starting policy validation for ${platform}...`);
    
    if (!process.env.GOOGLE_AI_API_KEY) {
      throw new Error('Google AI API key not configured');
    }
      if (!webhook) {
          return NextResponse.json(
            { error: 'Missing Slack webhook URL' },
            { status: 500 }
          );
    }

    const result = await genAI.models.generateContent({
        model: "gemini-2.5-pro-exp-03-25",
        contents: [createPrompt(platform, policyData)],
        config: {
          tools: [{googleSearch: {}}],
          temperature: 0.2,
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              'suggestedChanges': {
                type: Type.ARRAY,
                description: 'Suggested sections to change',
                nullable: false,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    'section': {
                      type: Type.STRING,
                      description: 'Section to change',
                      nullable: false,
                    },
                    'reason': {
                      type: Type.STRING,
                      description: 'Reason for change',
                      nullable: false,
                    }
                  }
                }
              },
              'confidence': {
                type: Type.NUMBER,
                description: 'Confidence in answer',
                nullable: false,
              },
            },
            required: ['confidence', 'suggestedChanges'],
          },
        },
      })
    

    console.log(`Received response from AI for ${platform} validation`);

    const candidates = result?.candidates as { content: { parts: { text: string }[] } }[] | undefined;
    if (!candidates?.length) {
      throw new Error('No candidates returned from AI model');
    }

    const parsedResult = parseJsonFromString(candidates[0].content?.parts[0]?.text);
    if (!parsedResult) {
      throw new Error('Failed to parse AI response as JSON');
    }

    // Log successful validation
    await webhook?.send(webhookFormattedResponse(platform, parsedResult));
    rollbar.info('Policy validation successful', {
      platform,
      confidence: parsedResult.confidence,
      suggestedChangesCount: parsedResult.suggestedChanges.length
    });
    console.log(`Successfully validated ${platform} policies:`, {
      confidence: parsedResult.confidence,
      suggestedChangesCount: parsedResult.suggestedChanges.length
    });
    return;
  } catch (error: any) {
    console.error('Policy validation error:', error);
    if (webhook) {
      try {
        await webhook.send(webhookFormattedError(platform, error));
      } catch (webhookError) {
        console.error('Failed to send error to Slack:', webhookError);
        rollbar.error('Failed to send error to Slack', {
          error: webhookError,
          platform,
          originalError: error
        });
      }
    }
  }
}