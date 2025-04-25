import { GoogleGenAI, Type } from "@google/genai";
import { createPrompt } from './prompt';
import { parseJsonFromString } from './parser';

const genAI = new GoogleGenAI({apiKey: process.env.GOOGLE_AI_API_KEY || ''});

export async function validatePolicy(platform: string, policyData: any) {
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
  });

  const candidates = result?.candidates as { content: { parts: { text: string }[] } }[] | undefined;
  if (candidates?.length) {
    return parseJsonFromString(candidates[0].content?.parts[0]?.text);
  }
  
  console.error('No candidates found in validation result for platform:', platform); 
  return new Error('No candidates found');
}