import { generatePolicyAnalysisPrompt, PolicyAnalysisRequest } from '@/lib/prompts/policy-analysis';
import { serverInstance as rollbar } from '@/lib/rollbar';
import { RetryHandler } from '@/lib/validation/retry-handler';
import { GoogleGenerativeAI } from '@google/genai';

// Re-export the interface from prompts for backward compatibility
export type GeminiAnalysisRequest = PolicyAnalysisRequest;

export interface GeminiAnalysisResponse {
  status: 'no_change' | 'updated';
  reasoning: string;
  data?: {
    legalDocumentReference: string;
    relatedPolicies: Array<{
      reference: string;
      policy: string;
      removalCriteria: string[];
      evidenceRequirements: string[];
      sourceSection: string;
      sourceType?: string;
    }>;
  };
}

// Initialize Gemini client
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY!);

export class GeminiPolicyAnalyzer {
  private model;

  constructor() {
    if (!process.env.GOOGLE_AI_API_KEY) {
      throw new Error('GOOGLE_AI_API_KEY is required for Gemini analysis');
    }

    // Use Gemini 2.5 Flash with grounding capabilities
    this.model = genAI.getGenerativeModel({
      model: 'gemini-2.0-flash-exp',
      generationConfig: {
        temperature: 0.1, // Low temperature for consistent, factual analysis
        topP: 0.8,
        topK: 40,
        maxOutputTokens: 8192,
      },
    });
  }

  async analyzePolicyDocument(request: PolicyAnalysisRequest): Promise<GeminiAnalysisResponse> {
    try {
      rollbar.info('GeminiAnalyzer: Starting policy analysis', {
        documentUrl: request.documentUrl,
        documentReference: request.scopedPolicies.legalDocumentReference,
        policiesCount: request.scopedPolicies.relatedPolicies.length,
      });

      const prompt = generatePolicyAnalysisPrompt(request);

      rollbar.info('GeminiAnalyzer: Sending request to Gemini', {
        promptLength: prompt.length,
        documentReference: request.scopedPolicies.legalDocumentReference,
      });

      // Use retry handler for Gemini API calls
      const retryResult = await RetryHandler.executeWithRetry(
        async () => {
          const result = await this.model.generateContent(prompt);
          const response = await result.response;
          return response.text();
        },
        RetryHandler.createAIRetryConfig(),
        `Gemini analysis for ${request.scopedPolicies.legalDocumentReference}`,
      );

      if (!retryResult.success) {
        throw retryResult.error || new Error('Gemini API call failed after retries');
      }

      const text = retryResult.data!;

      rollbar.info('GeminiAnalyzer: Received response from Gemini', {
        responseLength: text.length,
        documentReference: request.scopedPolicies.legalDocumentReference,
        attempts: retryResult.attempts,
        totalTime: retryResult.totalTime,
      });

      // Parse the JSON response
      const parsedResponse = this.parseGeminiResponse(text);

      rollbar.info('GeminiAnalyzer: Successfully parsed Gemini response', {
        status: parsedResponse.status,
        documentReference: request.scopedPolicies.legalDocumentReference,
        hasUpdates: parsedResponse.status === 'updated',
      });

      return parsedResponse;
    } catch (error) {
      rollbar.error('GeminiAnalyzer: Error during policy analysis', {
        error: error instanceof Error ? error.message : String(error),
        documentUrl: request.documentUrl,
        documentReference: request.scopedPolicies.legalDocumentReference,
      });
      throw error;
    }
  }

  private parseGeminiResponse(text: string): GeminiAnalysisResponse {
    try {
      // Clean up the response text
      let cleanedText = text.trim();

      // Remove any markdown code blocks
      cleanedText = cleanedText.replace(/```json\s*/g, '').replace(/```\s*/g, '');

      // Find the JSON object
      const jsonStart = cleanedText.indexOf('{');
      const jsonEnd = cleanedText.lastIndexOf('}');

      if (jsonStart === -1 || jsonEnd === -1) {
        throw new Error('No valid JSON object found in Gemini response');
      }

      const jsonString = cleanedText.slice(jsonStart, jsonEnd + 1);
      const parsed = JSON.parse(jsonString);

      // Validate the response structure
      if (!parsed.status || !parsed.reasoning) {
        throw new Error('Invalid response structure: missing status or reasoning');
      }

      if (!['no_change', 'updated'].includes(parsed.status)) {
        throw new Error(`Invalid status: ${parsed.status}`);
      }

      if (parsed.status === 'updated' && !parsed.data) {
        throw new Error('Updated status requires data field');
      }

      return parsed as GeminiAnalysisResponse;
    } catch (error) {
      rollbar.error('GeminiAnalyzer: Failed to parse Gemini response', {
        error: error instanceof Error ? error.message : String(error),
        responseText: text.substring(0, 500), // Log first 500 chars for debugging
      });
      throw new Error(
        `Failed to parse Gemini response: ${error instanceof Error ? error.message : String(error)}`,
      );
    }
  }
}
