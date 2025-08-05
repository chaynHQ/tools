import { GoogleGenAI, HarmBlockThreshold, HarmCategory } from '@google/genai';
import { serverInstance as rollbar } from '../rollbar';
import { retryWithDelay } from '../utils';

// Initialize Gemini client
const genAI = new GoogleGenAI({
  vertexai: true,
  project: process.env.GOOGLE_CLOUD_PROJECT,
  location: process.env.GOOGLE_CLOUD_LOCATION,
});

export interface GeminiConfig {
  model?: string;
  maxOutputTokens?: number;
  temperature?: number;
  topP?: number;
}

const defaultConfig: Required<GeminiConfig> = {
  model: process.env.GEMINI_MODEL || 'gemini-2.5-pro-preview-06-05',
  temperature: process.env.GEMINI_TEMPERATURE ? parseFloat(process.env.GEMINI_TEMPERATURE) : 0.3,
  maxOutputTokens: 8192,
  topP: 0.8,
};

export async function callGemini(prompt: string, config: GeminiConfig = {}): Promise<string> {
  const finalConfig = { ...defaultConfig, ...config };

  rollbar.info('Gemini: Making API call', {
    model: finalConfig.model,
    promptLength: prompt.length,
    temperature: finalConfig.temperature,
  });

  return await retryWithDelay(async () => {
    const req = {
      model: finalConfig.model,
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
      config: {
        maxOutputTokens: finalConfig.maxOutputTokens,
        temperature: finalConfig.temperature,
        topP: finalConfig.topP,
        safetySettings: [
          { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.OFF },
          {
            category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
            threshold: HarmBlockThreshold.OFF,
          },
          {
            category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
            threshold: HarmBlockThreshold.OFF,
          },
          { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.OFF },
        ],
      },
    };

    const response = await genAI.models.generateContent(req);

    let fullText = '';
    if (response.candidates && response.candidates.length > 0) {
      const candidate = response.candidates[0];
      if (candidate.content && candidate.content.parts) {
        for (const part of candidate.content.parts) {
          if (part.text) {
            fullText += part.text;
          }
        }
      }
    }

    if (!fullText) {
      throw new Error('No text content received from Gemini');
    }

    rollbar.info('Gemini: API call successful', {
      responseLength: fullText.length,
    });

    return fullText;
  });
}
