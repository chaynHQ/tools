import { callGemini } from '@/lib/ai/gemini';
import { PLATFORM_NAMES } from '@/lib/constants/platforms';
import { GitHubPRCreator } from '@/lib/github/create-policies-pr';
import { getPlatformPolicy } from '@/lib/platform-policies';
import {
  generatePolicyValidationPrompt,
  PolicyValidationPromptData,
} from '@/lib/prompts/policy-validation';
import { handleApiError, serverInstance as rollbar } from '@/lib/rollbar';
import { parseAIJson } from '@/lib/utils';
import { NextResponse } from 'next/server';

// Test environment detection
const isTestEnvironment = process.env.NODE_ENV === 'test' || process.env.CYPRESS === 'true';

// Remove test environment mocking - tests should mock external dependencies instead

/**
 * Applies policy updates to a platform policy object
 */
export function applyPolicyUpdates(
  platformPolicy: PlatformPolicy,
  updatedPolicies: PolicyUpdate[],
): boolean {
  let hasChanges = false;
  const timestamp = new Date().toISOString();

  // Update access timestamps for all legal documents
  platformPolicy.legalDocuments?.forEach((doc) => {
    doc.accessTimestamp = timestamp;
  });

  // Apply policy updates by reference
  updatedPolicies.forEach((updatedPolicy) => {
    const policyRef = updatedPolicy.reference;

    // Update policies in contentTypes
    platformPolicy.contentTypes?.forEach((contentType) => {
      const policyIndex = contentType.policies?.findIndex((p) => p.reference === policyRef);
      if (policyIndex !== undefined && policyIndex !== -1 && contentType.policies) {
        contentType.policies[policyIndex] = {
          ...contentType.policies[policyIndex],
          policy: updatedPolicy.policy,
          removalCriteria: updatedPolicy.removalCriteria,
          evidenceRequirements: updatedPolicy.evidenceRequirements,
        };
        hasChanges = true;
      }
    });

    // Update policies in contentContexts
    platformPolicy.contentContexts?.forEach((contentContext) => {
      const policyIndex = contentContext.policies?.findIndex((p) => p.reference === policyRef);
      if (policyIndex !== undefined && policyIndex !== -1 && contentContext.policies) {
        contentContext.policies[policyIndex] = {
          ...contentContext.policies[policyIndex],
          policy: updatedPolicy.policy,
          removalCriteria: updatedPolicy.removalCriteria,
          evidenceRequirements: updatedPolicy.evidenceRequirements,
        };
        hasChanges = true;
      }
    });

    // Update policies in generalPolicies
    const generalPolicyIndex = platformPolicy.generalPolicies?.findIndex(
      (p) => p.reference === policyRef,
    );
    if (
      generalPolicyIndex !== undefined &&
      generalPolicyIndex !== -1 &&
      platformPolicy.generalPolicies
    ) {
      platformPolicy.generalPolicies[generalPolicyIndex] = {
        ...platformPolicy.generalPolicies[generalPolicyIndex],
        policy: updatedPolicy.policy,
        removalCriteria: updatedPolicy.removalCriteria,
        evidenceRequirements: updatedPolicy.evidenceRequirements,
      };
      hasChanges = true;
    }
  });

  return hasChanges;
}

async function finalizeValidation(session: ValidationSession) {
  const updatedPolicies: Record<string, PlatformPolicy> = {};
  let totalChanges = 0;
  let totalPlatformsUpdated = 0;

  for (const update of session.proposedUpdates) {
    if (!updatedPolicies[update.platformId]) {
      updatedPolicies[update.platformId] = JSON.parse(
        JSON.stringify(session.platformPolicies[update.platformId]),
      );
    }

    const hasChanges = applyPolicyUpdates(
      updatedPolicies[update.platformId],
      update.updatedPolicies,
    );
    if (hasChanges) {
      totalChanges += update.updatedPolicies.length;
    }
  }

  // Count unique platforms that were updated
  const platformsWithChanges = Object.keys(updatedPolicies).filter((platformId) =>
    session.proposedUpdates.some((update) => update.platformId === platformId),
  );
  totalPlatformsUpdated = platformsWithChanges.length;

  validationSessions.delete(session.validationId);

  if (totalChanges === 0) {
    rollbar.info('PolicyValidation: Completed with no changes', {
      validationId: session.validationId,
      documentsProcessed: session.processedDocuments.length,
    });

    return NextResponse.json({
      success: true,
      status: 'completed_no_changes',
      message: 'All documents processed. No policy changes needed.',
      data: {
        totalDocuments: session.documentQueue.length,
        totalPlatforms: Object.keys(session.platformPolicies).length,
        platforms: Object.keys(session.platformPolicies),
        progress: {
          current: session.documentQueue.length,
          total: session.documentQueue.length,
          percentage: 100,
        },
      },
    });
  }

  // In test environment, mock PR creation
  if (isTestEnvironment) {
    return handleTestEnvironmentFinalization(session, totalChanges, totalPlatformsUpdated, platformsWithChanges, updatedPolicies);
  }

  rollbar.info('PolicyValidation: Applying policy updates', {
    validationId: session.validationId,
    totalChanges,
    totalPlatformsUpdated,
    platformsUpdated: platformsWithChanges,
  });

  let pullRequest: { url: string; number: number } | null = null;
  if (process.env.GITHUB_TOKEN) {
    const prCreator = new GitHubPRCreator();
    try {
      pullRequest = await prCreator.createPolicyPullRequest(
        session,
        updatedPolicies,
        totalChanges,
        totalPlatformsUpdated,
      );
    } catch (error) {
      rollbar.error('PolicyValidation: PR creation failed', {
        validationId: session.validationId,
        error,
      });

      return NextResponse.json({
        success: true,
        status: 'completed_with_pr_error',
        message: `Validation completed with ${totalChanges} policy changes, but PR creation failed`,
        data: {
          updatedPolicies,
          totalChanges,
          totalPlatformsUpdated,
          platformsUpdated: platformsWithChanges,
          progress: {
            current: session.documentQueue.length,
            total: session.documentQueue.length,
            percentage: 100,
          },
          error: error instanceof Error ? error.message : 'Unknown PR creation error',
        },
      });
    }
  }

  const finalStatus = pullRequest ? 'completed_with_pr_created' : 'completed_with_changes';

  rollbar.info('PolicyValidation: Validation completed successfully', {
    validationId: session.validationId,
    status: finalStatus,
    totalChanges,
    totalPlatformsUpdated,
    pullRequestCreated: !!pullRequest,
  });

  return NextResponse.json({
    success: true,
    status: finalStatus,
    message: `Validation completed with ${totalChanges} policy changes across ${totalPlatformsUpdated} platforms`,
    data: {
      updatedPolicies,
      pullRequest,
      totalChanges,
      totalPlatformsUpdated,
      platformsUpdated: platformsWithChanges,
      progress: {
        current: session.documentQueue.length,
        total: session.documentQueue.length,
        percentage: 100,
      },
    },
  });
}
