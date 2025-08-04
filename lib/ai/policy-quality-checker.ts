import { serverInstance as rollbar } from '@/lib/rollbar';
import { parseAIJson } from '@/lib/utils';
import { RetryHandler } from '@/lib/validation/retry-handler';
import Anthropic from '@anthropic-ai/sdk';
import {
  generatePolicyQualityCheckPrompt,
  PolicyQualityCheckResponse,
} from '../prompts/policy-quality-check';

// Initialize Anthropic client
const anthropic = new Anthropic();

export class PolicyQualityChecker {
  /**
   * Validates proposed policy changes for a single platform using AI quality check
   */
  async validateSinglePlatformChanges(
    platformId: string,
    originalPolicy: any,
    updatedPolicy: any,
  ): Promise<PolicyQualityCheckResponse> {
    try {
      rollbar.info('PolicyQualityChecker: Starting single platform quality validation', {
        platformId,
        platformName: originalPolicy?.name || 'Unknown',
      });

      const prompt = generatePolicyQualityCheckPrompt(platformId, originalPolicy, updatedPolicy);

      rollbar.info('PolicyQualityChecker: Sending request to Claude', {
        platformId,
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
        `Claude quality check for ${platformId}`,
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

      rollbar.info('PolicyQualityChecker: Single platform quality validation completed', {
        platformId,
        validationStatus: parsedResponse.validationStatus,
        hasIssues: parsedResponse.issues?.length > 0,
        attempts: retryResult.attempts,
        totalTime: retryResult.totalTime,
      });

      return parsedResponse as PolicyQualityCheckResponse;
    } catch (error) {
      rollbar.error('PolicyQualityChecker: Error during single platform quality validation', {
        platformId,
        error: error instanceof Error ? error.message : String(error),
      });
      throw error;
    }
  }

  /**
   * Validates proposed policy changes for multiple platforms (processes each platform individually)
   */
  async validatePolicyChanges(
    originalPolicies: Record<string, any>,
    updatedPolicies: Record<string, any>,
  ): Promise<{
    overallStatus: 'valid' | 'invalid';
    platformResults: Record<string, PolicyQualityCheckResponse>;
    summary: string;
  }> {
    try {
      rollbar.info('PolicyQualityChecker: Starting multi-platform quality validation', {
        platformCount: Object.keys(originalPolicies).length,
        platforms: Object.keys(originalPolicies),
      });

      const platformResults: Record<string, PolicyQualityCheckResponse> = {};
      const platforms = Object.keys(originalPolicies);
      let hasInvalidPlatform = false;

      // Process each platform individually
      for (const platformId of platforms) {
        const originalPolicy = originalPolicies[platformId];
        const updatedPolicy = updatedPolicies[platformId];

        if (!originalPolicy || !updatedPolicy) {
          rollbar.error('PolicyQualityChecker: Missing policy data for platform', {
            platformId,
            hasOriginal: !!originalPolicy,
            hasUpdated: !!updatedPolicy,
          });
          
          platformResults[platformId] = {
            validationStatus: 'invalid',
            reasoning: `Missing policy data for ${platformId}`,
            diffSummary: 'No changes - missing policy data',
            issues: [{
              severity: 'critical',
              type: 'structural_integrity',
              description: `Missing ${!originalPolicy ? 'original' : 'updated'} policy data for ${platformId}`
            }]
          };
          hasInvalidPlatform = true;
          continue;
        }

        try {
          const result = await this.validateSinglePlatformChanges(
            platformId,
            originalPolicy,
            updatedPolicy,
          );
          
          platformResults[platformId] = result;
          
          if (result.validationStatus === 'invalid') {
            hasInvalidPlatform = true;
          }

          rollbar.info('PolicyQualityChecker: Platform validation completed', {
            platformId,
            validationStatus: result.validationStatus,
            hasIssues: result.issues?.length > 0,
          });

        } catch (error) {
          rollbar.error('PolicyQualityChecker: Platform validation failed', {
            platformId,
            error: error instanceof Error ? error.message : String(error),
          });

          platformResults[platformId] = {
            validationStatus: 'invalid',
            reasoning: `Validation failed for ${platformId}: ${error instanceof Error ? error.message : String(error)}`,
            diffSummary: 'Validation error occurred',
            issues: [{
              severity: 'critical',
              type: 'structural_integrity',
              description: `Validation process failed for ${platformId}`
            }]
          };
          hasInvalidPlatform = true;
        }
      }

      // Generate overall summary
      const validPlatforms = Object.entries(platformResults)
        .filter(([_, result]) => result.validationStatus === 'valid')
        .map(([platformId, _]) => platformId);

      const invalidPlatforms = Object.entries(platformResults)
        .filter(([_, result]) => result.validationStatus === 'invalid')
        .map(([platformId, _]) => platformId);

      const summary = this.generateMultiPlatformSummary(validPlatforms, invalidPlatforms, platformResults);

      rollbar.info('PolicyQualityChecker: Multi-platform quality validation completed', {
        overallStatus: hasInvalidPlatform ? 'invalid' : 'valid',
        validPlatforms: validPlatforms.length,
        invalidPlatforms: invalidPlatforms.length,
        totalPlatforms: platforms.length,
      });

      return {
        overallStatus: hasInvalidPlatform ? 'invalid' : 'valid',
        platformResults,
        summary,
      };

    } catch (error) {
      rollbar.error('PolicyQualityChecker: Error during multi-platform quality validation', {
        error: error instanceof Error ? error.message : String(error),
      });
      throw error;
    }
  }

  /**
   * Generate a summary of multi-platform validation results
   */
  private generateMultiPlatformSummary(
    validPlatforms: string[],
    invalidPlatforms: string[],
    platformResults: Record<string, PolicyQualityCheckResponse>,
  ): string {
    const lines: string[] = [];

    if (validPlatforms.length > 0) {
      lines.push(`✅ **Valid Platforms (${validPlatforms.length})**: ${validPlatforms.join(', ')}`);
      
      // Add valid platform summaries
      validPlatforms.forEach(platformId => {
        const result = platformResults[platformId];
        if (result.diffSummary && result.diffSummary !== 'No meaningful changes detected.') {
          lines.push(`  - **${platformId.toUpperCase()}**: ${result.diffSummary.replace(/\n/g, '; ')}`);
        }
      });
    }

    if (invalidPlatforms.length > 0) {
      lines.push(`❌ **Invalid Platforms (${invalidPlatforms.length})**: ${invalidPlatforms.join(', ')}`);
      
      // Add invalid platform issues
      invalidPlatforms.forEach(platformId => {
        const result = platformResults[platformId];
        lines.push(`  - **${platformId.toUpperCase()}**: ${result.reasoning}`);
        
        if (result.issues && result.issues.length > 0) {
          result.issues.forEach(issue => {
            lines.push(`    - ${issue.severity.toUpperCase()}: ${issue.description}`);
          });
        }
      });
    }

    return lines.join('\n');
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