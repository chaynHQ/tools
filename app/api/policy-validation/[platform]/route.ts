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
      return NextResponse.json({ error: 'Invalid platform' }, { status: 400 });
    }

    const platformPolicy = getPlatformPolicy(platform);
    if (!platformPolicy) {
      return NextResponse.json({ error: 'Platform policy not found' }, { status: 404 });
    }

    rollbar.info('PolicyValidation: Starting validation for platform', {
      platform,
      documentsCount: platformPolicy.policyDocuments.length,
    });

    // Run the new orchestrated policy validation flow
    const validationResult = await orchestratePolicyValidation(
      platform,
      PLATFORM_NAMES[platform as keyof typeof PLATFORM_NAMES],
      platformPolicy,
    );

    // Create PR if validation passed and changes are valid
    if (
      validationResult.status === 'completed_with_valid_changes' &&
      validationResult.data.updatedPolicies &&
      process.env.GITHUB_TOKEN
    ) {
      try {
        const prCreator = new GitHubPRCreator();
        const pullRequest = await prCreator.createPolicyPullRequest(
          platform,
          validationResult.data.updatedPolicies,
          validationResult.reasoning,
        );

        rollbar.info('PolicyValidation: PR created successfully', {
          platform,
          pullRequestUrl: pullRequest?.url,
        });

        return NextResponse.json({
          success: true,
          status: 'completed_with_pr_created',
          platform,
          data: {
            ...validationResult.data,
            pullRequest,
          },
        });
      } catch (error) {
        rollbar.error('PolicyValidation: PR creation failed', {
          platform,
          error,
        });

        return NextResponse.json({
          success: true,
          status: 'completed_with_pr_error',
          platform,
          data: {
            ...validationResult.data,
            error: error instanceof Error ? error.message : 'Unknown PR creation error',
          },
        });
      }
    }

    rollbar.info('PolicyValidation: Validation completed', {
      platform,
      status: validationResult.status,
    });

    return NextResponse.json({
      success: true,
      status: validationResult.status,
      platform,
      data: validationResult.data,
    });
  } catch (error) {
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
