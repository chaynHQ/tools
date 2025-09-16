import { callAnthropic } from '@/lib/ai/anthropic';
import { PLATFORM_NAMES } from '@/lib/constants/platforms';
import { GitHubPRCreator } from '@/lib/github/create-policies-pr';
import { getPlatformPolicy } from '@/lib/platform-policies';
import {
  generatePolicyValidationPrompt,
  generatePolicyValidationQualityCheckPrompt,
} from '@/lib/prompts/policy-validation';
import { handleApiError, serverInstance as rollbar } from '@/lib/rollbar';
import { parseAIJson } from '@/lib/utils';
import { PolicyValidationResult } from '@/types/policies';
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

    // Step 1: Analyze all documents and policies for the platform
    const analysisPrompt = generatePolicyValidationPrompt({
      platformId: platform,
      platformPolicy,
    });

    const analysisResponse = await callAnthropic(analysisPrompt, {
      tools: [
        {
          type: 'web_search_20250305',
          name: 'web_search',
          max_uses: platformPolicy.policyDocuments.length,
        },
      ],
    });

    const analysisResult: PolicyValidationResult = parseAIJson(analysisResponse);

    // Step 2: Quality check if updates were found
    if (analysisResult.status === 'updated' && analysisResult.updatedPolicy) {
      rollbar.info('PolicyValidation: Running quality check', {
        platform,
        changesFound: true,
      });

      const qualityCheckPrompt = generatePolicyValidationQualityCheckPrompt({
        platformId: platform,
        originalPolicy: platformPolicy,
        updatedPolicy: analysisResult.updatedPolicy,
        reasoning: analysisResult.reasoning,
      });

      const qualityResponse = await callAnthropic(qualityCheckPrompt, {
        tools: [
          {
            type: 'web_search_20250305',
            name: 'web_search',
            max_uses: platformPolicy.policyDocuments.length,
          },
        ],
      });

      const qualityResult = parseAIJson(qualityResponse);

      if (qualityResult.validationStatus === 'invalid') {
        rollbar.warning('PolicyValidation: Quality check failed', {
          platform,
          reasoning: qualityResult.reasoning,
        });

        return NextResponse.json({
          success: true,
          status: 'completed_with_invalid_changes',
          platform,
          data: {
            analysis: analysisResult,
            qualityCheck: qualityResult,
          },
        });
      }

      // Step 3: Create PR if quality check passed
      let pullRequest = null;
      if (process.env.GITHUB_TOKEN) {
        try {
          const prCreator = new GitHubPRCreator();
          pullRequest = await prCreator.createPolicyPullRequest(
            platform,
            analysisResult.updatedPolicy,
            analysisResult.reasoning,
          );
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
              analysis: analysisResult,
              qualityCheck: qualityResult,
              error: error instanceof Error ? error.message : 'Unknown PR creation error',
            },
          });
        }
      }

      const finalStatus = pullRequest
        ? 'completed_with_pr_created'
        : 'completed_with_valid_changes';

      rollbar.info('PolicyValidation: Completed successfully', {
        platform,
        status: finalStatus,
        pullRequestCreated: !!pullRequest,
      });

      return NextResponse.json({
        success: true,
        status: finalStatus,
        platform,
        data: {
          analysis: analysisResult,
          qualityCheck: qualityResult,
          pullRequest,
        },
      });
    }

    // No changes needed
    rollbar.info('PolicyValidation: Completed with no changes', {
      platform,
    });

    return NextResponse.json({
      success: true,
      status: 'completed_no_changes',
      platform,
      data: {
        analysis: analysisResult,
      },
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
