import {
  generatePolicyQualityCheckPrompt,
  PolicyQualityCheckResponse,
} from '../prompts/quality-check';
import { serverInstance as rollbar } from '@/lib/rollbar';
import { parseAIJson } from '@/lib/utils';
import { RetryHandler } from '@/lib/validation/retry-handler';
import Anthropic from '@anthropic-ai/sdk';

// Initialize Anthropic client
const anthropic = new Anthropic();

export class PolicyQualityChecker {
  /**
   * Validates proposed policy changes using AI quality check
   */
  async validatePolicyChanges(
    originalPolicy: any,
    updatedPolicy: any,
  ): Promise<PolicyQualityCheckResponse> {
    try {
      rollbar.info('PolicyQualityChecker: Starting quality validation', {
        originalPolicyName: originalPolicy.name,
        updatedPolicyName: updatedPolicy.name,
      });

      const prompt = generatePolicyQualityCheckPrompt(originalPolicy, updatedPolicy);

      rollbar.info('PolicyQualityChecker: Sending request to Claude', {
        promptLength: prompt.length,
      });

      // Use retry handler for Claude API calls
      const retryResult = await RetryHandler.executeWithRetry(
        async () => {
          const response = await anthropic.messages.create({
            model: 'claude-sonnet-4-20250514',
            max_tokens: 4000,
            temperature: 0.1, // Low temperature for consistent validation
            messages: [
              {
                role: 'user',
                content: prompt,
              },
            ],
          });
          return response;
        },
        RetryHandler.createAIRetryConfig(),
        'Claude quality check',
      );

      if (!retryResult.success) {
        throw retryResult.error || new Error('Claude API call failed after retries');
      }

      const response = retryResult.data!;

      //@ts-ignore
      if (!response?.content?.[0]?.text) {
        throw new Error('Invalid response from Anthropic API');
      }

      //@ts-ignore
      const parsedResponse = parseAIJson(response.content[0].text);

      // Validate response structure
      if (!parsedResponse.validationStatus || !parsedResponse.reasoning) {
        throw new Error('Invalid quality check response structure');
      }

      if (!['valid', 'invalid'].includes(parsedResponse.validationStatus)) {
        throw new Error(`Invalid validation status: ${parsedResponse.validationStatus}`);
      }

      rollbar.info('PolicyQualityChecker: Quality validation completed', {
        validationStatus: parsedResponse.validationStatus,
        hasChanges: parsedResponse.diffSummary?.length > 0,
        attempts: retryResult.attempts,
        totalTime: retryResult.totalTime,
      });

      return parsedResponse as PolicyQualityCheckResponse;
    } catch (error) {
      rollbar.error('PolicyQualityChecker: Error during quality validation', {
        error: error instanceof Error ? error.message : String(error),
      });
      throw error;
    }
  }

  /**
   * Validates that the quality check response has the correct structure
   */
  validateQualityCheckResponse(response: any): response is PolicyQualityCheckResponse {
    return (
      response &&
      typeof response === 'object' &&
      typeof response.validationStatus === 'string' &&
      ['valid', 'invalid'].includes(response.validationStatus) &&
      typeof response.reasoning === 'string' &&
      typeof response.diffSummary === 'string'
    );
  }
}
