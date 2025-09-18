import { orchestratePolicyValidation } from '@/lib/ai/policy-validation/orchestrator';
import { PLATFORM_NAMES } from '@/lib/constants/platforms';
import { GitHubPRCreator } from '@/lib/github/create-policies-pr';
import { getPlatformPolicy } from '@/lib/platform-policies';
import { handleApiError, serverInstance as rollbar } from '@/lib/rollbar';
import { NextResponse } from 'next/server';

export async function POST(
  request: Request,
  { params }: { params: Promise<{ platform: string }> },
) {
  const { platform } = await params;
  try {
    // Validate platform
    if (!PLATFORM_NAMES[platform as keyof typeof PLATFORM_NAMES]) {
      rollbar.warning('PolicyValidation: Invalid platform requested', { platform });
      return NextResponse.json({ error: 'Invalid platform' }, { status: 400 });
    }

    const platformPolicy = getPlatformPolicy(platform);
    if (!platformPolicy) {
      rollbar.error('PolicyValidation: Platform policy not found', { platform });
      return NextResponse.json({ error: 'Platform policy not found' }, { status: 404 });
    }

    rollbar.info('PolicyValidation: Starting validation for platform', {
      platform,
      documentsCount: platformPolicy.policyDocuments.length,
    });

    // Run the new orchestrated policy validation flow
    console.log('PolicyValidation: Calling orchestratePolicyValidation', { platform });
    const validationResult = await orchestratePolicyValidation(
      platform,
      PLATFORM_NAMES[platform as keyof typeof PLATFORM_NAMES],
      platformPolicy,
    );

    console.log('PolicyValidation: Orchestration completed', {
      platform,
      status: validationResult.status,
      hasUpdatedPolicies: !!validationResult.data.updatedPolicies,
      hasGitHubToken: !!process.env.GITHUB_TOKEN,
    });
    
    rollbar.info('PolicyValidation: Orchestration completed', {
      platform,
      status: validationResult.status,
      hasUpdatedPolicies: !!validationResult.data.updatedPolicies,
      hasGitHubToken: !!process.env.GITHUB_TOKEN,
    });
    // Create PR if validation passed and changes are valid
    console.log('PolicyValidation: Checking PR creation conditions', {
      status: validationResult.status,
      hasUpdatedPolicies: !!validationResult.data.updatedPolicies,
      hasGitHubToken: !!process.env.GITHUB_TOKEN,
    });
    
    if (
      validationResult.status === 'completed_with_valid_changes' &&
      validationResult.data.updatedPolicies &&
      process.env.GITHUB_TOKEN
    ) {
      console.log('PolicyValidation: Creating PR for valid changes');
      rollbar.info('PolicyValidation: Creating PR for valid changes', {
        platform,
        updatedPoliciesCount: validationResult.data.updatedPolicies.policyDocuments.length,
      });
      
      try {
        const prCreator = new GitHubPRCreator();
        const pullRequest = await prCreator.createPolicyPullRequest(
          platform,
          validationResult.data.updatedPolicies,
          validationResult.reasoning,
        );

        console.log('PolicyValidation: PR created successfully', {
          platform,
          pullRequestUrl: pullRequest?.url,
          pullRequestNumber: pullRequest?.number,
        });
        
        rollbar.info('PolicyValidation: PR created successfully', {
          platform,
          pullRequestUrl: pullRequest?.url,
          pullRequestNumber: pullRequest?.number,
        });

        return NextResponse.json({
          success: true,
          status: 'completed_with_pr_created',
          platform,
          data: {
            ...validationResult.data,
            pullRequest,
            analysis: validationResult.data.analysis || {
              reasoning: validationResult.reasoning,
            },
          },
        });
      } catch (error) {
        console.error('PolicyValidation: PR creation failed', {
          platform,
          error: error instanceof Error ? error.message : String(error),
        });
        
        rollbar.error('PolicyValidation: PR creation failed', {
          platform,
          error: error instanceof Error ? error.message : String(error),
          stack: error instanceof Error ? error.stack : undefined,
        });

        return NextResponse.json({
          success: true,
          status: 'completed_with_pr_error',
          platform,
          data: {
            ...validationResult.data,
            analysis: validationResult.data.analysis || {
              reasoning: validationResult.reasoning,
            },
            error: error instanceof Error ? error.message : 'Unknown PR creation error',
          },
        });
      }
    } else {
      console.log('PolicyValidation: PR creation conditions not met', {
        status: validationResult.status,
        hasUpdatedPolicies: !!validationResult.data.updatedPolicies,
        hasGitHubToken: !!process.env.GITHUB_TOKEN,
        reasoning: 'One or more conditions for PR creation were not satisfied',
      });
      
      rollbar.info('PolicyValidation: PR creation conditions not met', {
        platform,
        status: validationResult.status,
        hasUpdatedPolicies: !!validationResult.data.updatedPolicies,
        hasGitHubToken: !!process.env.GITHUB_TOKEN,
      });
    }

    console.log('PolicyValidation: Validation completed without PR creation', {
      platform,
      status: validationResult.status,
    });
    
    rollbar.info('PolicyValidation: Validation completed', {
      platform,
      status: validationResult.status,
    });

    return NextResponse.json({
      success: true,
      status: validationResult.status,
      platform,
      data: {
        ...validationResult.data,
        analysis: validationResult.data.analysis || {
          reasoning: validationResult.reasoning,
        },
      },
    });
  } catch (error) {
    console.error('PolicyValidation: Unexpected error', {
      platform,
      error: error instanceof Error ? error.message : String(error),
    });
    
    const { error: errorMessage, status } = handleApiError(
      error,
      `/api/policy-validation/${platform}`,
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
