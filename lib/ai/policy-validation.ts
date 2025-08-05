import { PLATFORM_NAMES } from '../constants/platforms';
import { getPlatformPolicy } from '../platform-policies';
import { serverInstance as rollbar } from '../rollbar';
import { retryWithDelay } from '../utils';

export interface PolicyValidationRequest {
  platforms?: string[];
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
  updatedPolicies?: Record<string, PlatformPolicy>;
  changesSummary?: string;
  pullRequest?: {
    url: string;
    number: number;
  };
}

export interface PolicyUpdate {
  reference: string;
  policy: string;
  removalCriteria: string[];
  evidenceRequirements: string[];
}

export interface DocumentWithPolicies {
  platformId: string;
  platformName: string;
  reference: string;
  title: string;
  url: string;
  accessTimestamp?: string;
  notes?: string;
  policies: PolicyUpdate[];
}

export interface ValidationSession {
  validationId: string;
  documentQueue: DocumentWithPolicies[];
  platformPolicies: Record<string, PlatformPolicy>;
  processedDocuments: string[];
  proposedUpdates: Array<{
    platformId: string;
    documentReference: string;
    updatedPolicies: PolicyUpdate[];
    reasoning: string;
  }>;
  currentIndex: number;
  startTime: string;
}

export interface AnalysisResult {
  status: 'no_change' | 'updated' | 'error';
  reasoning: string;
  updatedPolicies?: PolicyUpdate[];
  validation?: {
    validationStatus: 'valid' | 'invalid';
    reasoning: string;
    issues?: Array<{
      severity: 'critical' | 'minor';
      type: 'hallucination' | 'meaningless_rewording' | 'structural_error';
      description: string;
    }>;
  };
}
export function extractPoliciesForDocument(platformPolicy: PlatformPolicy, documentReference: string): PolicyUpdate[] {
  const policies: PolicyUpdate[] = [];

  platformPolicy.contentTypes?.forEach((contentType) => {
    contentType.policies?.forEach((policy) => {
      if (policy.documents?.some((doc) => doc.reference === documentReference)) {
        policies.push({
          reference: policy.reference,
          policy: policy.policy,
          removalCriteria: policy.removalCriteria,
          evidenceRequirements: policy.evidenceRequirements,
        });
      }
    });
  });

  platformPolicy.contentContexts?.forEach((contentContext) => {
    contentContext.policies?.forEach((policy) => {
      if (policy.documents?.some((doc) => doc.reference === documentReference)) {
        policies.push({
          reference: policy.reference,
          policy: policy.policy,
          removalCriteria: policy.removalCriteria,
          evidenceRequirements: policy.evidenceRequirements,
        });
      }
    });
  });

  platformPolicy.generalPolicies?.forEach((policy) => {
    if (policy.documents?.some((doc) => doc.reference === documentReference)) {
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

export function prepareDocumentQueue(platforms?: string[]): DocumentWithPolicies[] {
  const targetPlatforms = platforms && platforms.length > 0 ? platforms : Object.keys(PLATFORM_NAMES);
  const documentQueue: DocumentWithPolicies[] = [];

  for (const platformId of targetPlatforms) {
    const policy = getPlatformPolicy(platformId);
    if (policy) {
      policy.legalDocuments.forEach((doc) => {
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

  rollbar.info('PolicyValidation: Document queue prepared', { totalDocuments: documentQueue.length, platforms: targetPlatforms });
  return documentQueue;
}

export async function validatePlatformPolicies(
  request: PolicyValidationRequest = {},
): Promise<PolicyValidationResponse> {
  rollbar.info('PolicyValidation: Starting validation process', {
    platforms: request.platforms || 'all',
  });

  try {
    const documentQueue = prepareDocumentQueue(request.platforms);

    const initResponse = await retryWithDelay(async () => {
      const res = await fetch('/api/policies/validate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'initialize',
          documentQueue,
        }),
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error || 'Failed to initialize validation');
      }

      return res.json();
    });

    const { validationId, data } = initResponse;
    rollbar.info('PolicyValidation: Validation initialized', { validationId, totalDocuments: data.totalDocuments });

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

      if (
        processResponse.status === 'completed' ||
        processResponse.status === 'completed_with_changes' ||
        processResponse.status === 'completed_no_changes' ||
        processResponse.status === 'completed_with_pr_created' ||
        processResponse.status === 'completed_with_pr_error'
      ) {
        rollbar.info('PolicyValidation: All documents processed', {
          validationId,
          documentsProcessed,
          changesFound,
          validChanges,
          invalidChanges,
          errors,
          status: processResponse.status,
        });

        return {
          success: true,
          validationId,
          totalDocuments: data.totalDocuments,
          totalPlatforms: data.totalPlatforms || 0,
          platforms: data.platforms || [],
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