import { facebookPolicy } from '@/lib/platform-policies/facebook';
import { handleApiError } from '@/lib/rollbar';
import { GoogleGenAI, Type } from "@google/genai";
import { NextResponse } from 'next/server';

// Initialize Gemini Pro
const genAI = new GoogleGenAI({ apiKey: process.env.GOOGLE_AI_API_KEY || '' });

interface ValidationResponse {
  suggestedChanges?: {
    section: string;
  }[];
  confidence: number;
}

export async function GET() {
  try {
    if (!process.env.GOOGLE_AI_API_KEY) {
      return NextResponse.json(
        { error: 'Missing Google AI API key' },
        { status: 500 }
      );
    }

    const prompt = `You are tasked with validating Facebook's platform policies for content removal and privacy violations. Here is our current policy data:

${JSON.stringify(facebookPolicy, null, 2)}

Please conduct a thorough review of these policies against Facebook's current policies that are valid today. Focus on:
1. Accuracy of policy references and URLs
2. Correctness of policy content and descriptions
3. Completeness of removal criteria and evidence requirements
4. Currency of appeal processes and timeframes

CRITICAL INSTRUCTIONS:
- Only return data you have high confidence in
- Do not fabricate or guess at policies
- If you cannot verify something, mark it as needing verification
- Focus on substantive policy changes, not minor wording differences
- Consider any major policy updates from Meta/Facebook in the past year
- Verify all URLs and policy references against official Meta sources

Return your analysis in this structured JSON format only:
{
  "suggestedChanges": [
    {
      "section": "string (e.g., 'legalBasis', 'contentPolicies.intimate')",
      "reason": "string (explanation of why this needs updating)"
    }
  ],
  "confidence": number (0-1, your confidence in this analysis)
}
In the suggestedChanges array include only sections where there is a high confidence that updates are needed.
`;

    const result = await genAI.models.generateContent({
      model: "gemini-2.5-pro-exp-03-25",
      contents: [prompt],
      config: {
        tools: [{ googleSearch: {} }],
        temperature: 0.2,
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            suggestedChanges: {
              type: Type.ARRAY,
              description: 'Suggested sections to change',
              nullable: false,
              items: {
                type: Type.OBJECT,
                properties: {
                  section: {
                    type: Type.STRING,
                    description: 'Section to change',
                    nullable: false,
                  },
                },
              },
            },
            confidence: {
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
    let response: ValidationResponse;

    try {
      if (!candidates || candidates.length === 0) {
        throw new Error('No candidates found in the response');
      }

      response = candidates
        .map(c => parseJsonFromString(c.content?.parts[0]?.text))
        .map(r => (r.confidence < 0.7 ? r : { confidence: r.confidence }))[0] as ValidationResponse;

    } catch (error) {
      console.error('Error parsing response:', error);
      return NextResponse.json({ error: 'Failed to parse response' }, { status: 500 });
    }

    return NextResponse.json(response);

  } catch (error: any) {
    const { error: errorMessage, status } = handleApiError(error, '/api/validate-policies', {
      statusCode: error.status,
      errorType: error.name,
    });

    return NextResponse.json({ error: errorMessage });
  }
}

/**
 * Extracts and parses JSON from a string that might contain markdown fences.
 * @param {string} str The input string potentially containing JSON wrapped in ```json ... ```
 * @returns {object|null} The parsed JavaScript object or null if parsing fails.
 */
function parseJsonFromString(str: string) {
  if (!str || typeof str !== 'string') {
    console.error("Input must be a non-empty string.");
    return null;
  }

  const jsonString = str
    .replace(/^```json\s*/, '')
    .replace(/```\s*$/, '')
    .trim();

  try {
    return JSON.parse(jsonString);
  } catch (error: any) {
    console.error("Error parsing JSON string:", error.message);
    return null;
  }
}