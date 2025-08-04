import { generatePolicyAnalysisPrompt, PolicyAnalysisRequest } from '@/lib/prompts/policy-analysis';
import { generatePolicyValidationPrompt, PolicyValidationRequest, PolicyValidationResponse } from '@/lib/prompts/policy-validation';
import { serverInstance as rollbar } from '@/lib/rollbar';
import { RetryHandler } from '@/lib/validation/retry-handler';
import { GoogleGenAI, HarmBlockThreshold, HarmCategory } from '@google/genai';

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

// Initialize Vertex AI client
const genAI = new GoogleGenAI({
  vertexai: true,
  project: process.env.GOOGLE_CLOUD_PROJECT || 'bloom-dev-8f085',
  location: process.env.GOOGLE_CLOUD_LOCATION || 'global',
});

export class GeminiPolicyAnalyzer {
  private model = 'gemini-2.0-flash-exp';
  private generationConfig;

  constructor() {
    if (!process.env.GOOGLE_CLOUD_PROJECT) {
      throw new Error('GOOGLE_CLOUD_PROJECT is required for Vertex AI');
    }

    // Set up generation config
    this.generationConfig = {
      maxOutputTokens: 8192,
      temperature: 0.1, // Low temperature for consistent, factual analysis
      topP: 0.8,
      safetySettings: [
        {
          category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
          threshold: HarmBlockThreshold.OFF,
        },
        {
          category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
          threshold: HarmBlockThreshold.OFF,
        },
        {
          category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
          threshold: HarmBlockThreshold.OFF,
        },
        {
          category: HarmCategory.HARM_CATEGORY_HARASSMENT,
          threshold: HarmBlockThreshold.OFF,
        },
      ],
    };
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
          const req = {
            model: this.model,
            contents: [
              {
                role: 'user',
                parts: [{ text: prompt }],
              },
            ],
            config: this.generationConfig,
          };

          const response = await genAI.models.generateContent(req);

          // Extract text from the response
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
            throw new Error('No text content received from Vertex AI');
          }

          return fullText;
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

  /**
   * Validate policy changes against live document (Prompt B)
   */
  async validatePolicyChanges(request: PolicyValidationRequest): Promise<PolicyValidationResponse> {
    try {
      rollbar.info('GeminiAnalyzer: Starting policy validation (Prompt B)', {
        documentUrl: request.documentUrl,
        documentReference: request.documentReference,
        originalPoliciesCount: request.originalPolicies.length,
        updatedPoliciesCount: request.updatedPolicies.length,
      });

      const prompt = generatePolicyValidationPrompt(request);

      rollbar.info('GeminiAnalyzer: Sending validation request to Gemini', {
        promptLength: prompt.length,
        documentReference: request.documentReference,
      });

      // Use retry handler for Gemini API calls
      const retryResult = await RetryHandler.executeWithRetry(
        async () => {
          const req = {
            model: this.model,
            contents: [
              {
                role: 'user',
                parts: [{ text: prompt }],
              },
            ],
            config: this.generationConfig,
          };

          const response = await genAI.models.generateContent(req);

          // Extract text from the response
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
            throw new Error('No text content received from Vertex AI');
          }

          return fullText;
        },
        RetryHandler.createAIRetryConfig(),
        `Gemini validation for ${request.documentReference}`,
      );

      if (!retryResult.success) {
        throw retryResult.error || new Error('Gemini API call failed after retries');
      }

      const text = retryResult.data!;

      rollbar.info('GeminiAnalyzer: Received validation response from Gemini', {
        responseLength: text.length,
        documentReference: request.documentReference,
        attempts: retryResult.attempts,
        totalTime: retryResult.totalTime,
      });

      // Parse the JSON response
      const parsedResponse = this.parseValidationResponse(text);

      rollbar.info('GeminiAnalyzer: Successfully parsed validation response', {
        validationStatus: parsedResponse.validationStatus,
        documentReference: request.documentReference,
        hasIssues: parsedResponse.issues && parsedResponse.issues.length > 0,
      });

      return parsedResponse;
    } catch (error) {
      rollbar.error('GeminiAnalyzer: Error during policy validation', {
        error: error instanceof Error ? error.message : String(error),
        documentUrl: request.documentUrl,
        documentReference: request.documentReference,
      });
      throw error;
    }
  }

  private parseValidationResponse(text: string): PolicyValidationResponse {
    try {
      // Clean up the response text
      let cleanedText = text.trim();

      // Remove any markdown code blocks
      cleanedText = cleanedText.replace(/```json\s*/g, '').replace(/```\s*/g, '');

      // Find the JSON object
      const jsonStart = cleanedText.indexOf('{');
      const jsonEnd = cleanedText.lastIndexOf('}');

      if (jsonStart === -1 || jsonEnd === -1) {
        throw new Error('No valid JSON object found in Gemini validation response');
      }

      const jsonString = cleanedText.slice(jsonStart, jsonEnd + 1);
      const parsed = JSON.parse(jsonString);

      // Validate the response structure
      if (!parsed.validationStatus || !parsed.reasoning) {
        throw new Error('Invalid validation response structure: missing validationStatus or reasoning');
      }

      if (!['valid', 'invalid'].includes(parsed.validationStatus)) {
        throw new Error(`Invalid validationStatus: ${parsed.validationStatus}`);
      }

      return parsed as PolicyValidationResponse;
    } catch (error) {
      rollbar.error('GeminiAnalyzer: Failed to parse validation response', {
        error: error instanceof Error ? error.message : String(error),
        responseText: text.substring(0, 500), // Log first 500 chars for debugging
      });
      throw new Error(
        `Failed to parse Gemini validation response: ${error instanceof Error ? error.message : String(error)}`,
      );
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
