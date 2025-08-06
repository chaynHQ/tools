import { PLATFORM_NAMES } from '@/lib/constants/platforms';
import { getPlatformPolicy } from '@/lib/platform-policies';
import { handleApiError, serverInstance as rollbar } from '@/lib/rollbar';
import { NextResponse } from 'next/server';

import {
  DocumentWithPolicies,
  PlatformPolicy,
  PolicyUpdate,
  ValidationSession,
} from '@/types/policies';

// Store validation sessions
const validationSessions = new Map<string, ValidationSession>();

/**
 * Finds all policies within a platform that reference a specific document
 */
function getPlatformPoliciesForDocument(
  platformPolicy: PlatformPolicy,
  documentReference: string,
): PolicyUpdate[] {
  const relatedPolicies: PolicyUpdate[] = [];
  const seenReferences = new Set<string>();

  // Helper function to add policy if it references the document
  const addPolicyIfRelevant = (policy: any) => {
    if (
      policy.documents?.some((doc: any) => doc.reference === documentReference) &&
      !seenReferences.has(policy.reference)
    ) {
      seenReferences.add(policy.reference);
      relatedPolicies.push({
        reference: policy.reference,
        policy: policy.policy,
        removalCriteria: policy.removalCriteria,
        evidenceRequirements: policy.evidenceRequirements,
      });
    }
  };

  // Check content type policies
  platformPolicy.contentTypes?.forEach((contentType) => {
    contentType.policies?.forEach(addPolicyIfRelevant);
  });

  // Check content context policies
  platformPolicy.contentContexts?.forEach((contentContext) => {
    contentContext.policies?.forEach(addPolicyIfRelevant);
  });

  // Check general policies
  platformPolicy.generalPolicies?.forEach(addPolicyIfRelevant);

  return relatedPolicies;
}

export async function POST(request: Request) {
  try {
    rollbar.info('PolicyRevalidation: Initializing validation session');

    const validationId = `validation_${Date.now()}_${Math.random().toString(36).substring(7)}`;
    let platformPolicies: Record<string, PlatformPolicy> = {};

    const targetPlatforms = Object.keys(PLATFORM_NAMES);
    const documentQueue: DocumentWithPolicies[] = [];

    for (const platformId of targetPlatforms) {
      const policy = getPlatformPolicy(platformId);
      if (policy) {
        platformPolicies[platformId] = policy;

        // For each legal document, find all policies that reference it
        policy.legalDocuments.forEach((doc) => {
          const relatedPolicies = getPlatformPoliciesForDocument(policy, doc.reference);

          documentQueue.push({
            platformId,
            platformName: policy.name,
            ...doc,
            policies: relatedPolicies,
          });
        });
      }
    }

    const session: ValidationSession = {
      validationId,
      documentQueue,
      platformPolicies,
      processedDocuments: [],
      proposedUpdates: [],
      currentIndex: 0,
      startTime: new Date().toISOString(),
    };

    validationSessions.set(validationId, session);

    rollbar.info('PolicyRevalidation: Session initialized successfully', {
      validationId,
      totalDocuments: documentQueue.length,
      totalPlatforms: Object.keys(platformPolicies).length,
    });

    return NextResponse.json({
      success: true,
      validationId,
      data: {
        totalDocuments: documentQueue.length,
        totalPlatforms: Object.keys(platformPolicies).length,
        platforms: Object.keys(platformPolicies),
        nextStep: 'process_documents',
      },
    });
  } catch (error) {
    const { error: errorMessage, status } = handleApiError(
      error,
      '/api/revalidate-policies/initialize',
    );
    return NextResponse.json({ error: errorMessage }, { status });
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

// Export the validation sessions map for use in the process route
export { validationSessions };
