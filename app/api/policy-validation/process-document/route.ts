import { callAnthropic } from '@/lib/ai/anthropic';
import { GitHubPRCreator } from '@/lib/github/create-policies-pr';
import {
  generatePolicyValidationPrompt,
  PolicyValidationPromptData,
} from '@/lib/prompts/policy-validation';
import {
  generatePolicyValidationQualityCheckPrompt,
  PolicyValidationQualityCheckPromptData,
} from '@/lib/prompts/policy-validation-quality-check';
import { handleApiError, serverInstance as rollbar } from '@/lib/rollbar';
import { parseAIJson } from '@/lib/utils';
import { NextResponse } from 'next/server';

import { AnalysisResult, PlatformPolicy, PolicyUpdate, ValidationSession } from '@/types/policies';

// Import validation sessions from the initialize route
import { validationSessions } from '../initialize/route';

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

  // Helper function to update a policy if it matches the reference
  const updatePolicyIfMatches = (policy: any, updatedPolicy: PolicyUpdate): boolean => {
    if (policy.reference === updatedPolicy.reference) {
      policy.policy = updatedPolicy.policy;
      policy.removalCriteria = updatedPolicy.removalCriteria;
      policy.evidenceRequirements = updatedPolicy.evidenceRequirements;
      return true;
    }
    return false;
  };

  // Apply each policy update
  updatedPolicies.forEach((updatedPolicy) => {
    // Check content type policies
    platformPolicy.contentTypes?.forEach((contentType) => {
      contentType.policies?.forEach((policy) => {
        if (updatePolicyIfMatches(policy, updatedPolicy)) {
          hasChanges = true;
        }
      });
    });

    // Check content context policies
    platformPolicy.contentContexts?.forEach((contentContext) => {
      contentContext.policies?.forEach((policy) => {
        if (updatePolicyIfMatches(policy, updatedPolicy)) {
          hasChanges = true;
        }
      });
    });

    // Check general policies
    platformPolicy.generalPolicies?.forEach((policy) => {
      if (updatePolicyIfMatches(policy, updatedPolicy)) {
        hasChanges = true;
      }
    });
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
    rollbar.info('PolicyRevalidation: Completed with no changes', {
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

  rollbar.info('PolicyRevalidation: Applying policy updates', {
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
      rollbar.error('PolicyRevalidation: PR creation failed', {
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

  rollbar.info('PolicyRevalidation: Validation completed successfully', {
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

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { validationId } = body;

    if (!validationId) {
      return NextResponse.json({ error: 'validationId is required' }, { status: 400 });
    }

    const session = validationSessions.get(validationId);
    if (!session) {
      rollbar.error('PolicyRevalidation: Session not found', { validationId });
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
      rollbar.error('PolicyRevalidation: Document processing failed', {
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
  } catch (error) {
    const { error: errorMessage, status } = handleApiError(
      error,
      '/api/revalidate-policies/process-document',
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
