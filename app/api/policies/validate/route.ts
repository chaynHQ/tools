import { callGemini } from '@/lib/ai/gemini';
import { PLATFORM_NAMES } from '@/lib/constants/platforms';
import { GitHubPRCreator, applyPolicyUpdates } from '@/lib/github/create-policies-pr';
import { getPlatformPolicy } from '@/lib/platform-policies';
import {
  generatePolicyAnalysisPrompt,
  generatePolicyValidationPrompt,
  PolicyAnalysisPromptData,
  PolicyValidationPromptData,
} from '@/lib/prompts/policy-validation';
import { handleApiError, serverInstance as rollbar } from '@/lib/rollbar';
import { parseAIJson } from '@/lib/utils';
import { NextResponse } from 'next/server';

// Store validation sessions
const validationSessions = new Map<string, any>();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { action, validationId, documentQueue } = body;

    if (action === 'initialize') {
      return await initializeValidation(documentQueue);
    }

    if (action === 'process_next_document') {
      return await processNextDocument(validationId);
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
  } catch (error: any) {
    const { error: errorMessage, status } = handleApiError(error, '/api/policies/validate');
    return NextResponse.json({ error: errorMessage }, { status });
  }
}

async function initializeValidation(documentQueue?: any[]) {
  const validationId = `validation_${Date.now()}_${Math.random().toString(36).substring(7)}`;
  
  // Use provided document queue or create default one
  let finalDocumentQueue = documentQueue;
  let platformPolicies: Record<string, any> = {};

  if (!documentQueue) {
    // Fallback to creating document queue (legacy support)
    const targetPlatforms = Object.keys(PLATFORM_NAMES);
    finalDocumentQueue = [];

    for (const platformId of targetPlatforms) {
      const policy = getPlatformPolicy(platformId);
      if (policy) {
        platformPolicies[platformId] = policy;

        policy.legalDocuments.forEach((doc: any) => {
          finalDocumentQueue!.push({
            platformId,
            platformName: policy.name,
            ...doc,
            policies: [], // Empty for legacy support
          });
        });
      }
    }
  } else {
    // Extract platform policies from document queue
    for (const doc of documentQueue) {
      if (!platformPolicies[doc.platformId]) {
        platformPolicies[doc.platformId] = getPlatformPolicy(doc.platformId);
      }
    }
  }

  const session = {
    validationId,
    documentQueue: finalDocumentQueue,
    platformPolicies,
    processedDocuments: [],
    proposedUpdates: [],
    currentIndex: 0,
    startTime: new Date().toISOString(),
  };

  validationSessions.set(validationId, session);

  return NextResponse.json({
    success: true,
    validationId,
    data: {
      totalDocuments: finalDocumentQueue!.length,
      nextStep: 'process_next_document',
    },
  });
}

async function processNextDocument(validationId: string) {
  const session = validationSessions.get(validationId);
  if (!session) {
    return NextResponse.json({ error: 'Validation session not found' }, { status: 404 });
  }

  // Check if all documents processed
  if (session.currentIndex >= session.documentQueue.length) {
    return await finalizeValidation(session);
  }

  const currentDocument = session.documentQueue[session.currentIndex];

  try {
    // Step 1: Analyze document with Prompt A
    const promptData: PolicyAnalysisPromptData = {
      documentUrl: currentDocument.url,
      documentTitle: currentDocument.title,
      documentReference: currentDocument.reference,
      currentPolicies: currentDocument.policies,
    };

    const prompt = generatePolicyAnalysisPrompt(promptData);
    const response = await callGemini(prompt);
    const analysisResult = parseAIJson(response);

    let finalResult = analysisResult;

    // Step 2: If changes found, validate with Prompt B
    if (analysisResult.status === 'updated') {
      const promptData: PolicyValidationPromptData = {
        documentUrl: currentDocument.url,
        documentTitle: currentDocument.title,
        documentReference: currentDocument.reference,
        originalPolicies: currentDocument.policies,
        updatedPolicies: analysisResult.updatedPolicies,
      };

      const prompt = generatePolicyValidationPrompt(promptData);
      const response = await callGemini(prompt);
      const validationResult = parseAIJson(response);

      finalResult = {
        ...analysisResult,
        validation: validationResult,
      };

      // Only keep changes if validation passed
      if (validationResult.validationStatus === 'valid') {
        session.proposedUpdates.push({
          platformId: currentDocument.platformId,
          documentReference: currentDocument.reference,
          updatedPolicies: analysisResult.updatedPolicies,
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

async function finalizeValidation(session: any) {
  rollbar.info('PolicyValidation: Finalizing validation', {
    validationId: session.validationId,
    proposedUpdatesCount: session.proposedUpdates.length,
  });

  // Apply updates to platform policies
  const updatedPolicies: Record<string, any> = {};
  let totalChanges = 0;

  for (const update of session.proposedUpdates) {
    if (!updatedPolicies[update.platformId]) {
      updatedPolicies[update.platformId] = JSON.parse(
        JSON.stringify(session.platformPolicies[update.platformId]),
      );
    }

    // Apply the policy updates
    applyPolicyUpdates(updatedPolicies[update.platformId], update.updatedPolicies);
    totalChanges += update.updatedPolicies.length;
  }

  // Clean up session
  validationSessions.delete(session.validationId);

  if (totalChanges === 0) {
    return NextResponse.json({
      success: true,
      status: 'completed_no_changes',
      message: 'All documents processed. No policy changes needed.',
      data: {
        progress: {
          current: session.documentQueue.length,
          total: session.documentQueue.length,
          percentage: 100,
        },
      },
    });
  }

  // Create PR if changes found using the dedicated PR creator
  let pullRequest = null;
  if (process.env.GITHUB_TOKEN) {
    const prCreator = new GitHubPRCreator(process.env.GITHUB_TOKEN, 'chaynHQ', 'tools');
    pullRequest = await prCreator.createPolicyPullRequest(session, updatedPolicies, totalChanges);
  }

  return NextResponse.json({
    success: true,
    status: pullRequest ? 'completed_with_pr_created' : 'completed_with_changes',
    message: `Validation completed with ${totalChanges} changes across ${Object.keys(updatedPolicies).length} platforms`,
    data: {
      updatedPolicies,
      pullRequest,
      totalChanges,
      platformsUpdated: Object.keys(updatedPolicies),
      progress: {
        current: session.documentQueue.length,
        total: session.documentQueue.length,
        percentage: 100,
      },
    },
  });
}

export async function GET() {
  let totalDocuments = 0;

  for (const platformId of Object.keys(PLATFORM_NAMES)) {
    const policy = getPlatformPolicy(platformId);
    if (policy) {
      totalDocuments += policy.legalDocuments.length;
    }
  }

  return NextResponse.json({
    success: true,
    message: 'Policy Validation API - Two-Prompt System',
    data: {
      totalDocuments,
      endpoints: {
        'POST /api/policies/validate': {
          actions: ['initialize', 'process_next_document'],
          description: 'Main validation workflow endpoint',
        },
      },
      prompts: {
        A: 'Document Analysis - Compare policies against live document',
        B: 'Change Validation - Verify changes are genuine',
      },
    },
  });
}