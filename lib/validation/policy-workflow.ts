import { getPlatformPolicy } from '@/lib/platform-policies';
import { PlatformPolicy } from '@/lib/platform-policies/types';
import { serverInstance as rollbar } from '@/lib/rollbar';

export interface PolicyValidationState {
  proposedUpdates: any[];
  originalPlatformPolicies: Record<string, PlatformPolicy>;
  platformIds: string[];
  currentDocumentIndex: number;
  currentPlatformIndex: number;
  totalDocuments: number;
  totalPlatforms: number;
  processedDocuments: string[];
  processedPlatforms: string[];
  validationId: string;
  targetPlatforms: string[];
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
 * Initialize a new policy validation workflow for specified platforms
 */
export function initializeValidationWorkflow(platformIds?: string[]): PolicyValidationState {
  const validationId = `validation_${Date.now()}_${Math.random().toString(36).substring(7)}`;
  const currentTime = new Date().toISOString();

  // Default to all available platforms if none specified
  const availablePlatforms = ['facebook', 'instagram', 'tiktok', 'onlyfans', 'pornhub'];
  const targetPlatforms = platformIds && platformIds.length > 0 ? platformIds : availablePlatforms;

  // Load all target platform policies
  const originalPlatformPolicies: Record<string, PlatformPolicy> = {};
  const validPlatforms: string[] = [];
  let totalDocuments = 0;

  for (const platformId of targetPlatforms) {
    const policy = getPlatformPolicy(platformId);
    if (policy) {
      // Create a deep copy to avoid mutations
      originalPlatformPolicies[platformId] = JSON.parse(JSON.stringify(policy)) as PlatformPolicy;
      validPlatforms.push(platformId);
      totalDocuments += policy.legalDocuments.length;
    } else {
      rollbar.warning('PolicyValidation: Platform policy not found', { platformId });
    }
  }

  if (validPlatforms.length === 0) {
    throw new Error('No valid platform policies found for the specified platforms');
  }

  const state: PolicyValidationState = {
    proposedUpdates: [],
    originalPlatformPolicies,
    platformIds: validPlatforms,
    currentDocumentIndex: 0,
    currentPlatformIndex: 0,
    totalDocuments,
    totalPlatforms: validPlatforms.length,
    processedDocuments: [],
    processedPlatforms: [],
    validationId,
    targetPlatforms: validPlatforms,
    status: 'initialized',
    startTime: currentTime,
    lastUpdated: currentTime,
  };

  rollbar.info('PolicyValidation: Workflow initialized', {
    validationId,
    platforms: validPlatforms,
    totalPlatforms: validPlatforms.length,
    totalDocuments: state.totalDocuments,
  });

  return state;
}

/**
 * Get the next legal document to process across all platforms
 */
export function getNextDocument(state: PolicyValidationState) {
  // Find the current platform and document
  let documentCount = 0;

  for (let platformIndex = 0; platformIndex < state.platformIds.length; platformIndex++) {
    const platformId = state.platformIds[platformIndex];
    const policy = state.originalPlatformPolicies[platformId];

    if (state.currentDocumentIndex < documentCount + policy.legalDocuments.length) {
      const documentIndex = state.currentDocumentIndex - documentCount;
      const document = policy.legalDocuments[documentIndex];

      return {
        ...document,
        platformId,
        platformName: policy.name,
      };
    }
    documentCount += policy.legalDocuments.length;
  }

  // No more documents to process
  return null;
}

/**
 * Get the platform policy for a specific document reference
 */
export function getPlatformForDocument(
  state: PolicyValidationState,
  documentReference: string,
): { platformId: string; policy: PlatformPolicy } | null {
  for (const [platformId, policy] of Object.entries(state.originalPlatformPolicies)) {
    const document = policy.legalDocuments.find((doc) => doc.reference === documentReference);
    if (document) {
      return { platformId, policy };
    }
  }
  rollbar.error('PolicyValidation: Could not find platform for document', {
    documentReference,
    availablePlatforms: Object.keys(state.originalPlatformPolicies),
  });
  return null;
}

/**
 * Create scoped policies for a specific legal document (works across platforms)
 */
export function createScopedPoliciesForDocument(
  state: PolicyValidationState,
  documentReference: string,
): ScopedPolicies | null {
  const platformInfo = getPlatformForDocument(state, documentReference);
  if (!platformInfo) {
    return null;
  }

  return createScopedPolicies(platformInfo.policy, documentReference);
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
