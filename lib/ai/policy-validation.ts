import { serverInstance as rollbar } from '../rollbar';
import { retryWithDelay } from '../utils';

export interface PolicyValidationRequest {
  platforms?: string[]; // Optional: specific platforms to validate, defaults to all
}

export interface PolicyValidationResponse {
  success: boolean;
  validationId: string;
  totalDocuments: number;
  totalPlatforms: number;
  platforms: string[];
  results: {
    documentsProcessed: number;
    changesFound: number;
    validChanges: number;
    invalidChanges: number;
    errors: number;
  };
  updatedPolicies?: Record<string, any>;
  changesSummary?: string;
  pullRequest?: {
    url: string;
    number: number;
  };
}

export async function validatePlatformPolicies(
  request: PolicyValidationRequest = {},
): Promise<PolicyValidationResponse> {
  rollbar.info('PolicyValidation: Starting validation process', {
    platforms: request.platforms || 'all',
  });

  try {
    // Step 1: Initialize validation
    const initResponse = await retryWithDelay(async () => {
      const res = await fetch('/api/policies/validate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'initialize',
          platforms: request.platforms,
        }),
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error || 'Failed to initialize validation');
      }

      return res.json();
    });

    const { validationId, data } = initResponse;

    // Step 2: Process all documents
    let documentsProcessed = 0;
    let changesFound = 0;
    let validChanges = 0;
    let invalidChanges = 0;
    let errors = 0;

    while (true) {
      const processResponse = await retryWithDelay(async () => {
        const res = await fetch('/api/policies/validate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            action: 'process_next_document',
            validationId,
          }),
        });

        if (!res.ok) {
          const error = await res.json();
          throw new Error(error.error || 'Failed to process document');
        }

        return res.json();
      });

      documentsProcessed++;

      // Track results
      if (processResponse.data?.analysis) {
        const analysis = processResponse.data.analysis;
        if (analysis.status === 'updated') {
          changesFound++;
          if (analysis.validation?.validationStatus === 'valid') {
            validChanges++;
          } else if (analysis.validation?.validationStatus === 'invalid') {
            invalidChanges++;
          }
        } else if (analysis.status === 'error') {
          errors++;
        }
      }

      // Check if complete
      if (
        processResponse.status === 'completed' ||
        processResponse.data?.nextStep === 'completed'
      ) {
        rollbar.info('PolicyValidation: All documents processed', {
          validationId,
          documentsProcessed,
          changesFound,
          validChanges,
          invalidChanges,
          errors,
        });

        return {
          success: true,
          validationId,
          totalDocuments: data.totalDocuments,
          totalPlatforms: data.totalPlatforms,
          platforms: data.platforms,
          results: {
            documentsProcessed,
            changesFound,
            validChanges,
            invalidChanges,
            errors,
          },
          updatedPolicies: processResponse.data?.updatedPolicies,
          changesSummary: processResponse.data?.changesSummary,
          pullRequest: processResponse.data?.pullRequest,
        };
      }
    }
  } catch (error) {
    rollbar.error('PolicyValidation: Validation failed', { error });
    throw error instanceof Error ? error : new Error('Policy validation failed');
  }
}
