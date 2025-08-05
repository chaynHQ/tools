import { PLATFORM_NAMES } from '../constants/platforms';
import { getPlatformPolicy } from '../platform-policies';
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

export interface DocumentWithPolicies {
  platformId: string;
  platformName: string;
  reference: string;
  title: string;
  url: string;
  accessTimestamp?: string;
  notes?: string;
  policies: Array<{
    reference: string;
    policy: string;
    removalCriteria: string[];
    evidenceRequirements: string[];
  }>;
}

/**
 * Extracts policies for a specific document from a platform policy
 */
export function extractPoliciesForDocument(platformPolicy: any, documentReference: string) {
  const policies: any[] = [];

  // Extract from contentTypes
  platformPolicy.contentTypes?.forEach((contentType: any) => {
    contentType.policies?.forEach((policy: any) => {
      if (policy.documents?.some((doc: any) => doc.reference === documentReference)) {
        policies.push({
          reference: policy.reference,
          policy: policy.policy,
          removalCriteria: policy.removalCriteria,
          evidenceRequirements: policy.evidenceRequirements,
        });
      }
    });
  });

  // Extract from contentContexts
  platformPolicy.contentContexts?.forEach((contentContext: any) => {
    contentContext.policies?.forEach((policy: any) => {
      if (policy.documents?.some((doc: any) => doc.reference === documentReference)) {
        policies.push({
          reference: policy.reference,
          policy: policy.policy,
          removalCriteria: policy.removalCriteria,
          evidenceRequirements: policy.evidenceRequirements,
        });
      }
    });
  });

  // Extract from generalPolicies
  platformPolicy.generalPolicies?.forEach((policy: any) => {
    if (policy.documents?.some((doc: any) => doc.reference === documentReference)) {
      policies.push({
        reference: policy.reference,
        policy: policy.policy,
        removalCriteria: policy.removalCriteria,
        evidenceRequirements: policy.evidenceRequirements,
      });
    }
  });

  return policies;
}

/**
 * Prepares document queue with full policy data for validation
 */
export function prepareDocumentQueue(platforms?: string[]): DocumentWithPolicies[] {
  const targetPlatforms = platforms && platforms.length > 0 ? platforms : Object.keys(PLATFORM_NAMES);
  const documentQueue: DocumentWithPolicies[] = [];

  for (const platformId of targetPlatforms) {
    const policy = getPlatformPolicy(platformId);
    if (policy) {
      // Add each document to the queue with its associated policies
      policy.legalDocuments.forEach((doc: any) => {
        documentQueue.push({
          platformId,
          platformName: policy.name,
          reference: doc.reference,
          title: doc.title,
          url: doc.url,
          accessTimestamp: doc.accessTimestamp,
          notes: doc.notes,
          policies: extractPoliciesForDocument(policy, doc.reference),
        });
      });
    }
  }

  return documentQueue;
}

export async function validatePlatformPolicies(
  request: PolicyValidationRequest = {},
): Promise<PolicyValidationResponse> {
  rollbar.info('PolicyValidation: Starting validation process', {
    platforms: request.platforms || 'all',
  });

  try {
    // Prepare document queue with full policy data
    const documentQueue = prepareDocumentQueue(request.platforms);

    // Step 1: Initialize validation with prepared data
    const initResponse = await retryWithDelay(async () => {
      const res = await fetch('/api/policies/validate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'initialize',
          documentQueue, // Pass prepared documents with policies
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