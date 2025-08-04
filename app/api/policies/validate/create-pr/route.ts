import { GitHubPRCreator } from '@/lib/github/pr-creator';
import { handleApiError, serverInstance as rollbar } from '@/lib/rollbar';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  rollbar.info('CreatePR: Received PR creation request');
  
  try {
    const body = await request.json();
    const { 
      validationId, 
      updatedPolicy, 
      changesSummary, 
      totalChanges, 
      documentsUpdated,
      documentsProcessed 
    } = body;

    // Validate required fields
    if (!validationId || !updatedPolicy || !changesSummary) {
      rollbar.error('CreatePR: Missing required fields', { 
        hasValidationId: !!validationId,
        hasUpdatedPolicy: !!updatedPolicy,
        hasChangesSummary: !!changesSummary
      });
      return NextResponse.json({ 
        error: 'Missing required fields: validationId, updatedPolicy, and changesSummary' 
      }, { status: 400 });
    }

    // Check for GitHub token
    if (!process.env.GITHUB_TOKEN) {
      rollbar.error('CreatePR: GitHub token not configured');
      return NextResponse.json({ 
        error: 'GitHub token not configured' 
      }, { status: 500 });
    }

    rollbar.info('CreatePR: Starting PR creation process', {
      validationId,
      totalChanges,
      documentsUpdated: documentsUpdated?.length || 0,
      policyName: updatedPolicy.name,
    });

    // Initialize GitHub PR creator
    const prCreator = new GitHubPRCreator(
      process.env.GITHUB_TOKEN,
      'chaynHQ', // GitHub organization
      'tools'    // Repository name
    );

    // Generate PR data
    const branchName = GitHubPRCreator.generateBranchName(validationId);
    const prTitle = GitHubPRCreator.generatePRTitle(totalChanges, documentsUpdated || []);
    const prBody = GitHubPRCreator.generatePRBody(
      changesSummary,
      validationId,
      documentsProcessed || 0,
      totalChanges
    );

    // Determine which policy file to update based on the policy name
    const policyFileName = getPolicyFileName(updatedPolicy.name);
    if (!policyFileName) {
      rollbar.error('CreatePR: Unknown policy name', { policyName: updatedPolicy.name });
      return NextResponse.json({ 
        error: `Unknown policy name: ${updatedPolicy.name}` 
      }, { status: 400 });
    }

    // Create the PR
    const prResult = await prCreator.createPolicyUpdatePR({
      title: prTitle,
      body: prBody,
      branchName,
      baseBranch: 'main',
      files: [
        {
          path: `lib/platform-policies/${policyFileName}`,
          content: generatePolicyFileContent(updatedPolicy, policyFileName),
        }
      ],
    });

    if (prResult.success) {
      rollbar.info('CreatePR: Successfully created PR', {
        validationId,
        pullRequestUrl: prResult.pullRequestUrl,
        pullRequestNumber: prResult.pullRequestNumber,
        branchName,
      });

      return NextResponse.json({
        success: true,
        message: 'Pull request created successfully',
        data: {
          pullRequestUrl: prResult.pullRequestUrl,
          pullRequestNumber: prResult.pullRequestNumber,
          branchName,
          validationId,
        }
      });
    } else {
      rollbar.error('CreatePR: Failed to create PR', {
        validationId,
        error: prResult.error,
      });

      return NextResponse.json({
        success: false,
        error: prResult.error || 'Failed to create pull request',
      }, { status: 500 });
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
      }
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
          requiredFields: ['validationId', 'updatedPolicy', 'changesSummary'],
          optionalFields: ['totalChanges', 'documentsUpdated', 'documentsProcessed']
        }
      },
      status: {
        githubConfigured: !!process.env.GITHUB_TOKEN,
        repository: 'chaynHQ/tools',
        capabilities: ['branch_creation', 'file_updates', 'pull_request_creation']
      }
    });

  } catch (error: any) {
    const { error: errorMessage, status } = handleApiError(
      error,
      '/api/policies/validate/create-pr'
    );
    return NextResponse.json({ error: errorMessage }, { status });
  }
}

/**
 * Maps policy names to their corresponding file names
 */
function getPolicyFileName(policyName: string): string | null {
  const policyFileMap: Record<string, string> = {
    'Facebook': 'facebook.ts',
    'Instagram': 'instagram.ts',
    'TikTok': 'tiktok.ts',
    'OnlyFans': 'onlyfans.ts',
    'Pornhub': 'pornhub.ts',
  };

  return policyFileMap[policyName] || null;
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