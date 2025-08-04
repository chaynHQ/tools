import { GitHubPRCreator } from '@/lib/github/pr-creator';
import { handleApiError, serverInstance as rollbar } from '@/lib/rollbar';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  rollbar.info('CreatePR: Received PR creation request');

  try {
    const body = await request.json();
    const {
      validationId,
      updatedPolicies,
      changesSummary,
      totalChanges,
      platformsUpdated,
      documentsUpdated,
      documentsProcessed,
    } = body;

    // Validate required fields
    if (!validationId || !updatedPolicies || !changesSummary) {
      rollbar.error('CreatePR: Missing required fields', {
        hasValidationId: !!validationId,
        hasUpdatedPolicies: !!updatedPolicies,
        hasChangesSummary: !!changesSummary,
      });
      return NextResponse.json(
        {
          error: 'Missing required fields: validationId, updatedPolicies, and changesSummary',
        },
        { status: 400 },
      );
    }

    // Check for GitHub token
    if (!process.env.GITHUB_TOKEN) {
      rollbar.error('CreatePR: GitHub token not configured');
      return NextResponse.json(
        {
          error: 'GitHub token not configured',
        },
        { status: 500 },
      );
    }

    rollbar.info('CreatePR: Starting PR creation process', {
      validationId,
      totalChanges,
      platformsUpdated: platformsUpdated?.length || 0,
      documentsUpdated: documentsUpdated?.length || 0,
      platforms: Object.keys(updatedPolicies),
    });

    // Initialize GitHub PR creator
    const prCreator = new GitHubPRCreator(
      process.env.GITHUB_TOKEN,
      'chaynHQ', // GitHub organization
      'tools', // Repository name
    );

    // Generate PR data
    const branchName = GitHubPRCreator.generateBranchName(validationId);
    const prTitle = GitHubPRCreator.generatePRTitle(totalChanges, platformsUpdated || []);
    const prBody = GitHubPRCreator.generatePRBody(
      changesSummary,
      validationId,
      documentsProcessed || 0,
      totalChanges,
    );

    // Create files for all updated platforms
    const files = [];
    for (const [platformId, policy] of Object.entries(updatedPolicies)) {
      const policyFileName = getPolicyFileName(platformId);
      if (!policyFileName) {
        rollbar.error('CreatePR: Unknown platform ID', { platformId });
        return NextResponse.json(
          {
            error: `Unknown platform ID: ${platformId}`,
          },
          { status: 400 },
        );
      }

      files.push({
        path: `lib/platform-policies/${policyFileName}`,
        content: generatePolicyFileContent(policy, policyFileName),
      });
    }

    // Create the PR
    const prResult = await prCreator.createPolicyUpdatePR({
      title: prTitle,
      body: prBody,
      branchName,
      baseBranch: 'main',
      files,
    });

    if (prResult.success) {
      rollbar.info('CreatePR: Successfully created PR', {
        validationId,
        pullRequestUrl: prResult.pullRequestUrl,
        pullRequestNumber: prResult.pullRequestNumber,
        branchName,
        filesUpdated: files.length,
      });

      return NextResponse.json({
        success: true,
        message: 'Pull request created successfully',
        data: {
          pullRequestUrl: prResult.pullRequestUrl,
          pullRequestNumber: prResult.pullRequestNumber,
          branchName,
          validationId,
          filesUpdated: files.length,
          platformsUpdated: Object.keys(updatedPolicies),
        },
      });
    } else {
      rollbar.error('CreatePR: Failed to create PR', {
        validationId,
        error: prResult.error,
      });

      return NextResponse.json(
        {
          success: false,
          error: prResult.error || 'Failed to create pull request',
        },
        { status: 500 },
      );
    }
  } catch (error: any) {
    rollbar.error('CreatePR: Error during PR creation', {
      error: error.message,
      stack: error.stack,
    });

    const { error: errorMessage, status } = handleApiError(
      error,
      '/api/policies/validate/create-pr',
      {
        statusCode: error.status,
        errorType: error.name,
      },
    );

    return NextResponse.json({ error: errorMessage }, { status });
  }
}

export async function GET(request: Request) {
  try {
    // Return API documentation and status
    return NextResponse.json({
      success: true,
      message: 'GitHub PR Creation API',
      endpoints: {
        POST: {
          description: 'Create a pull request with policy changes',
          requiredFields: ['validationId', 'updatedPolicies', 'changesSummary'],
          optionalFields: [
            'totalChanges',
            'platformsUpdated',
            'documentsUpdated',
            'documentsProcessed',
          ],
        },
      },
      status: {
        githubConfigured: !!process.env.GITHUB_TOKEN,
        repository: 'chaynHQ/tools',
        capabilities: ['branch_creation', 'file_updates', 'pull_request_creation'],
      },
    });
  } catch (error: any) {
    const { error: errorMessage, status } = handleApiError(
      error,
      '/api/policies/validate/create-pr',
    );
    return NextResponse.json({ error: errorMessage }, { status });
  }
}

/**
 * Maps platform IDs to their corresponding file names
 */
function getPolicyFileName(platformId: string): string | null {
  const policyFileMap: Record<string, string> = {
    facebook: 'facebook.ts',
    instagram: 'instagram.ts',
    tiktok: 'tiktok.ts',
    onlyfans: 'onlyfans.ts',
    pornhub: 'pornhub.ts',
  };

  return policyFileMap[platformId] || null;
}

/**
 * Generates the complete policy file content
 */
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
