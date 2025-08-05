import { callGemini } from '@/lib/ai/gemini';
import { PLATFORM_NAMES } from '@/lib/constants/platforms';
import { GitHubPRCreator } from '@/lib/github/pr-creator';
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
    const { action, validationId, platforms } = body;

    if (action === 'initialize') {
      return await initializeValidation(platforms);
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

async function initializeValidation(platforms?: string[]) {
  const validationId = `validation_${Date.now()}_${Math.random().toString(36).substring(7)}`;
  const targetPlatforms =
    platforms && platforms.length > 0 ? platforms : Object.keys(PLATFORM_NAMES);

  // Create document queue
  const documentQueue: any[] = [];
  const platformPolicies: Record<string, any> = {};

  for (const platformId of targetPlatforms) {
    const policy = getPlatformPolicy(platformId);
    if (policy) {
      platformPolicies[platformId] = policy;

      // Add each document to the queue
      policy.legalDocuments.forEach((doc: any) => {
        documentQueue.push({
          platformId,
          platformName: policy.name,
          ...doc,
          policies: extractPoliciesForDocument(policy, doc.reference),
        });
      });
    }
  }

  const session = {
    validationId,
    platforms: targetPlatforms,
    documentQueue,
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
      platforms: targetPlatforms,
      totalPlatforms: targetPlatforms.length,
      totalDocuments: documentQueue.length,
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

  // Create PR if changes found
  const pullRequest = await createPullRequest(session, updatedPolicies, totalChanges);

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

async function createPullRequest(
  session: any,
  updatedPolicies: Record<string, any>,
  totalChanges: number,
) {
  if (!process.env.GITHUB_TOKEN) {
    rollbar.warning('PolicyValidation: GitHub token not configured, skipping PR creation');
    return null;
  }

  try {
    rollbar.info('PolicyValidation: Creating PR', {
      validationId: session.validationId,
      totalChanges,
      platformsUpdated: Object.keys(updatedPolicies).length,
    });

    const prCreator = new GitHubPRCreator(process.env.GITHUB_TOKEN, 'chaynHQ', 'tools');

    const branchName = GitHubPRCreator.generateBranchName(session.validationId);
    const prTitle = GitHubPRCreator.generatePRTitle(totalChanges, Object.keys(updatedPolicies));
    const prBody = GitHubPRCreator.generatePRBody(
      `Policy validation completed with ${totalChanges} changes across ${Object.keys(updatedPolicies).length} platforms`,
      session.validationId,
      session.processedDocuments.length,
      totalChanges,
    );

    // Create files for all updated platforms
    const files = [];
    for (const [platformId, policy] of Object.entries(updatedPolicies)) {
      const policyFileName = `${platformId}.ts`;
      if (!policyFileName) {
        rollbar.error('PolicyValidation: Unknown platform ID', { platformId });
        continue;
      }

      files.push({
        path: `lib/platform-policies/${policyFileName}`,
        content: generatePolicyFileContent(policy, policyFileName),
      });
    }

    const prResult = await prCreator.createPolicyUpdatePR({
      title: prTitle,
      body: prBody,
      branchName,
      baseBranch: 'main',
      files,
    });

    if (prResult.success) {
      rollbar.info('PolicyValidation: Successfully created PR', {
        validationId: session.validationId,
        pullRequestUrl: prResult.pullRequestUrl,
        pullRequestNumber: prResult.pullRequestNumber,
      });

      return {
        url: prResult.pullRequestUrl,
        number: prResult.pullRequestNumber,
      };
    } else {
      rollbar.error('PolicyValidation: Failed to create PR', {
        validationId: session.validationId,
        error: prResult.error,
      });
      return null;
    }
  } catch (error) {
    rollbar.error('PolicyValidation: PR creation failed', {
      validationId: session.validationId,
      error,
    });
    return null;
  }
}

function generatePolicyFileContent(updatedPolicy: any, fileName: string): string {
  const exportName = fileName.replace('.ts', 'Policy');

  return `import { ContentContext, ContentType, LegalDocument, PlatformPolicy } from './types';

const legalDocuments: LegalDocument[] = ${JSON.stringify(updatedPolicy.legalDocuments, null, 2)};

const contentTypes: ContentType[] = ${JSON.stringify(updatedPolicy.contentTypes, null, 2)};

const contentContexts: ContentContext[] = ${JSON.stringify(updatedPolicy.contentContexts, null, 2)};

const generalPolicies = ${JSON.stringify(updatedPolicy.generalPolicies, null, 2)};

export const ${exportName}: PlatformPolicy = {
  name: '${updatedPolicy.name}',
  legalDocuments,
  contentTypes,
  contentContexts,
  generalPolicies,
  timeframes: ${JSON.stringify(updatedPolicy.timeframes, null, 2)},
  appealProcess: ${JSON.stringify(updatedPolicy.appealProcess, null, 2)},
};
`;
}

function extractPoliciesForDocument(platformPolicy: any, documentReference: string) {
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

function applyPolicyUpdates(platformPolicy: any, updatedPolicies: any[]) {
  // This is a simplified version - in practice you'd need more sophisticated merging
  // For now, just update the access timestamp
  platformPolicy.legalDocuments?.forEach((doc: any) => {
    doc.accessTimestamp = new Date().toISOString();
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
