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

import { callAnthropic } from '@/lib/ai/anthropic';
import {
  generatePolicyValidationQualityCheckPrompt,
  PolicyValidationQualityCheckPromptData,
} from '@/lib/prompts/policy-validation-quality-check';
import {
  AnalysisResult,
  DocumentWithPolicies,
  PlatformPolicy,
  PolicyUpdate,
  ValidationSession,
} from '@/types/policies';

// Store validation sessions
const validationSessions = new Map<string, ValidationSession>();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { action, validationId } = body;

    if (action === 'initialize') {
      return await initializeValidation();
    }

    if (action === 'process_next_document') {
      return await processNextDocument(validationId);
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
  } catch (error) {
    const { error: errorMessage, status } = handleApiError(error, '/api/policies/validate');
    return NextResponse.json({ error: errorMessage }, { status });
  }
}

async function initializeValidation() {
  const validationId = `validation_${Date.now()}_${Math.random().toString(36).substring(7)}`;

  let platformPolicies: Record<string, PlatformPolicy> = {};

  rollbar.warning('PolicyValidation: No document queue provided, creating default');
  const targetPlatforms = Object.keys(PLATFORM_NAMES);
  const documentQueue: DocumentWithPolicies[] = [];

  for (const platformId of targetPlatforms) {
    const policy = getPlatformPolicy(platformId);
    if (policy) {
      platformPolicies[platformId] = policy;

      policy.legalDocuments.forEach((doc) => {
        documentQueue!.push({
          platformId,
          platformName: policy.name,
          ...doc,
          policies: [],
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

  rollbar.info('PolicyValidation: Session initialized', {
    validationId,
    totalDocuments: documentQueue.length,
    totalPlatforms: Object.keys(platformPolicies).length,
  });

  return NextResponse.json({
    success: true,
    validationId,
    data: {
      totalDocuments: documentQueue!.length,
      totalPlatforms: Object.keys(platformPolicies).length,
      platforms: Object.keys(platformPolicies),
      nextStep: 'process_next_document',
    },
  });
}

async function processNextDocument(validationId: string) {
  const session = validationSessions.get(validationId);
  if (!session) {
    rollbar.error('PolicyValidation: Session not found', { validationId });
    return NextResponse.json({ error: 'Validation session not found' }, { status: 404 });
  }

  if (session.currentIndex >= session.documentQueue.length) {
    return await finalizeValidation(session);
  }

  const currentDocument = session.documentQueue[session.currentIndex];

  try {
    const analysisPromptData: PolicyValidationPromptData = {
      documentUrl: currentDocument.url,
      documentTitle: currentDocument.title,
      documentReference: currentDocument.reference,
      currentPolicies: currentDocument.policies,
    };

    const { hostname } = new URL(currentDocument.url);
    const analysisPrompt = generatePolicyValidationPrompt(analysisPromptData);
    const analysisResponse = await callAnthropic(analysisPrompt, {
      tools: [
        {
          type: 'web_search_20250305',
          name: 'web_search',
          max_uses: 1,
          allowed_domains: [hostname], // Limit search to the document's domain
        },
      ],
    });
    const analysisResult: AnalysisResult = parseAIJson(analysisResponse);

    let finalResult: AnalysisResult = analysisResult;

    if (analysisResult.status === 'updated') {
      const validationPromptData: PolicyValidationQualityCheckPromptData = {
        documentUrl: currentDocument.url,
        documentTitle: currentDocument.title,
        documentReference: currentDocument.reference,
        originalPolicies: currentDocument.policies,
        updatedPolicies: analysisResult.updatedPolicies!,
      };

      const validationPrompt = generatePolicyValidationQualityCheckPrompt(validationPromptData);
      const validationResponse = await callAnthropic(validationPrompt, {
        tools: [
          {
            type: 'web_search_20250305',
            name: 'web_search',
            max_uses: 1,
            allowed_domains: [hostname], // Limit search to the document's domain
          },
        ],
      });
      const validationResult = parseAIJson(validationResponse);

      finalResult = {
        ...analysisResult,
        validation: validationResult,
      };

      if (validationResult.validationStatus === 'valid') {
        session.proposedUpdates.push({
          platformId: currentDocument.platformId,
          documentReference: currentDocument.reference,
          updatedPolicies: analysisResult.updatedPolicies!,
          reasoning: analysisResult.reasoning,
        });
      }
    }

    session.processedDocuments.push(currentDocument.reference);
    session.currentIndex++;

    return NextResponse.json({
      success: true,
      status: 'document_processed',
      data: {
        currentDocument: currentDocument,
        analysis: finalResult,
        progress: {
          current: session.currentIndex,
          total: session.documentQueue.length,
          percentage: Math.round((session.currentIndex / session.documentQueue.length) * 100),
        },
        nextStep:
          session.currentIndex >= session.documentQueue.length
            ? 'completed'
            : 'process_next_document',
      },
    });
  } catch (error) {
    rollbar.error('PolicyValidation: Document processing failed', {
      validationId,
      documentReference: currentDocument.reference,
      error,
    });

    session.currentIndex++;
    return NextResponse.json({
      success: true,
      status: 'document_processed_with_error',
      data: {
        currentDocument: currentDocument,
        analysis: { status: 'error', reasoning: `Processing failed: ${error}` },
        progress: {
          current: session.currentIndex,
          total: session.documentQueue.length,
          percentage: Math.round((session.currentIndex / session.documentQueue.length) * 100),
        },
        nextStep:
          session.currentIndex >= session.documentQueue.length
            ? 'completed'
            : 'process_next_document',
      },
    });
  }
}

/**
 * Applies policy updates to a platform policy object
 */
function applyPolicyUpdates(
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
