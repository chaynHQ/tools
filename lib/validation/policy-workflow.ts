import { facebookPolicy } from '@/lib/platform-policies/facebook';
import { PlatformPolicy } from '@/lib/platform-policies/types';
import { serverInstance as rollbar } from '@/lib/rollbar';

export interface PolicyValidationState {
  proposedUpdates: any[];
  originalPlatformPolicy: PlatformPolicy;
  currentDocumentIndex: number;
  totalDocuments: number;
  processedDocuments: string[];
  validationId: string;
  status: 'initialized' | 'processing' | 'completed' | 'failed';
  startTime: string;
  lastUpdated: string;
}

export interface ScopedPolicies {
  legalDocumentReference: string;
  documentTitle: string;
  documentUrl: string;
  relatedPolicies: Array<{
    reference: string;
    policy: string;
    removalCriteria: string[];
    evidenceRequirements: string[];
    sourceSection: 'contentTypes' | 'contentContexts' | 'generalPolicies';
    sourceType?: string; // For contentTypes/contentContexts
  }>;
}

/**
 * Initialize a new policy validation workflow
 */
export function initializeValidationWorkflow(): PolicyValidationState {
  const validationId = `validation_${Date.now()}_${Math.random().toString(36).substring(7)}`;
  const currentTime = new Date().toISOString();

  // Create a deep copy of the original policy to avoid mutations
  const originalPlatformPolicy = JSON.parse(JSON.stringify(facebookPolicy)) as PlatformPolicy;

  const state: PolicyValidationState = {
    proposedUpdates: [],
    originalPlatformPolicy,
    currentDocumentIndex: 0,
    totalDocuments: originalPlatformPolicy.legalDocuments.length,
    processedDocuments: [],
    validationId,
    status: 'initialized',
    startTime: currentTime,
    lastUpdated: currentTime,
  };

  rollbar.info('PolicyValidation: Workflow initialized', {
    validationId,
    totalDocuments: state.totalDocuments,
    documentsToProcess: originalPlatformPolicy.legalDocuments.map((doc) => doc.reference),
  });

  return state;
}

/**
 * Get the next legal document to process
 */
export function getNextDocument(state: PolicyValidationState) {
  if (state.currentDocumentIndex >= state.totalDocuments) {
    return null;
  }

  return state.originalPlatformPolicy.legalDocuments[state.currentDocumentIndex];
}

/**
 * Create scoped policies for a specific legal document (Step 2)
 */
export function createScopedPolicies(
  platformPolicy: PlatformPolicy,
  legalDocumentReference: string,
): ScopedPolicies | null {
  const legalDocument = platformPolicy.legalDocuments.find(
    (doc) => doc.reference === legalDocumentReference,
  );

  if (!legalDocument) {
    rollbar.error('PolicyValidation: Legal document not found', {
      legalDocumentReference,
      availableReferences: platformPolicy.legalDocuments.map((doc) => doc.reference),
    });
    return null;
  }

  const relatedPolicies: ScopedPolicies['relatedPolicies'] = [];

  // Check contentTypes for policies referencing this document
  platformPolicy.contentTypes.forEach((contentType) => {
    contentType.policies.forEach((policy) => {
      const referencesDocument = policy.documents.some(
        (doc) => doc.reference === legalDocumentReference,
      );

      if (referencesDocument) {
        relatedPolicies.push({
          reference: policy.reference,
          policy: policy.policy,
          removalCriteria: [...policy.removalCriteria],
          evidenceRequirements: [...policy.evidenceRequirements],
          sourceSection: 'contentTypes',
          sourceType: contentType.type,
        });
      }
    });
  });

  // Check contentContexts for policies referencing this document
  platformPolicy.contentContexts.forEach((contentContext) => {
    contentContext.policies.forEach((policy) => {
      const referencesDocument = policy.documents.some(
        (doc) => doc.reference === legalDocumentReference,
      );

      if (referencesDocument) {
        relatedPolicies.push({
          reference: policy.reference,
          policy: policy.policy,
          removalCriteria: [...policy.removalCriteria],
          evidenceRequirements: [...policy.evidenceRequirements],
          sourceSection: 'contentContexts',
          sourceType: contentContext.context,
        });
      }
    });
  });

  // Check generalPolicies for policies referencing this document
  platformPolicy.generalPolicies.forEach((policy) => {
    const referencesDocument = policy.documents.some(
      (doc) => doc.reference === legalDocumentReference,
    );

    if (referencesDocument) {
      relatedPolicies.push({
        reference: policy.reference,
        policy: policy.policy,
        removalCriteria: [...policy.removalCriteria],
        evidenceRequirements: [...policy.evidenceRequirements],
        sourceSection: 'generalPolicies',
      });
    }
  });

  // Remove duplicates based on policy reference
  const uniquePolicies = relatedPolicies.filter(
    (policy, index, self) => index === self.findIndex((p) => p.reference === policy.reference),
  );

  const scopedPolicies: ScopedPolicies = {
    legalDocumentReference,
    documentTitle: legalDocument.title,
    documentUrl: legalDocument.url,
    relatedPolicies: uniquePolicies,
  };

  rollbar.info('PolicyValidation: Created scoped policies', {
    legalDocumentReference,
    relatedPoliciesCount: uniquePolicies.length,
    documentUrl: legalDocument.url,
  });

  return scopedPolicies;
}

/**
 * Update validation state after processing a document
 */
export function updateValidationState(
  state: PolicyValidationState,
  documentReference: string,
  proposedUpdate?: any,
): PolicyValidationState {
  const updatedState = {
    ...state,
    currentDocumentIndex: state.currentDocumentIndex + 1,
    processedDocuments: [...state.processedDocuments, documentReference],
    lastUpdated: new Date().toISOString(),
  };

  if (proposedUpdate) {
    updatedState.proposedUpdates = [...state.proposedUpdates, proposedUpdate];
  }

  // Update status based on progress
  if (updatedState.currentDocumentIndex >= updatedState.totalDocuments) {
    updatedState.status = 'completed';
  } else {
    updatedState.status = 'processing';
  }

  rollbar.info('PolicyValidation: State updated', {
    validationId: state.validationId,
    progress: `${updatedState.currentDocumentIndex}/${updatedState.totalDocuments}`,
    status: updatedState.status,
    hasProposedUpdate: !!proposedUpdate,
  });

  return updatedState;
}

/**
 * Check if validation workflow is complete
 */
export function isValidationComplete(state: PolicyValidationState): boolean {
  return state.currentDocumentIndex >= state.totalDocuments;
}

/**
 * Get validation progress summary
 */
export function getValidationProgress(state: PolicyValidationState) {
  return {
    validationId: state.validationId,
    status: state.status,
    progress: {
      current: state.currentDocumentIndex,
      total: state.totalDocuments,
      percentage: Math.round((state.currentDocumentIndex / state.totalDocuments) * 100),
    },
    processedDocuments: state.processedDocuments,
    proposedUpdatesCount: state.proposedUpdates.length,
    startTime: state.startTime,
    lastUpdated: state.lastUpdated,
    estimatedTimeRemaining:
      state.currentDocumentIndex > 0 ? calculateEstimatedTimeRemaining(state) : null,
  };
}

/**
 * Calculate estimated time remaining based on current progress
 */
function calculateEstimatedTimeRemaining(state: PolicyValidationState): string | null {
  const startTime = new Date(state.startTime).getTime();
  const currentTime = new Date().getTime();
  const elapsedTime = currentTime - startTime;

  if (state.currentDocumentIndex === 0) {
    return null;
  }

  const averageTimePerDocument = elapsedTime / state.currentDocumentIndex;
  const remainingDocuments = state.totalDocuments - state.currentDocumentIndex;
  const estimatedRemainingTime = averageTimePerDocument * remainingDocuments;

  // Convert to human-readable format
  const minutes = Math.ceil(estimatedRemainingTime / (1000 * 60));

  if (minutes < 1) {
    return 'Less than 1 minute';
  } else if (minutes === 1) {
    return '1 minute';
  } else {
    return `${minutes} minutes`;
  }
}
