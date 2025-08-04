import { PolicyQualityChecker } from '@/lib/ai/policy-quality-checker';
import { handleApiError, serverInstance as rollbar } from '@/lib/rollbar';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  rollbar.info('PolicyQualityCheck: Received quality check request');

  try {
    if (!process.env.ANTHROPIC_API_KEY) {
      rollbar.error('PolicyQualityCheck: Anthropic API key not configured');
      return NextResponse.json({ error: 'Missing Anthropic API key' }, { status: 500 });
    }

    const body = await request.json();
    const { originalPolicy, updatedPolicy } = body;

    // Validate required fields
    if (!originalPolicy || !updatedPolicy) {
      rollbar.error('PolicyQualityCheck: Missing required fields', {
        hasOriginal: !!originalPolicy,
        hasUpdated: !!updatedPolicy,
      });
      return NextResponse.json(
        {
          error: 'Missing required fields: originalPolicy and updatedPolicy',
        },
        { status: 400 },
      );
    }

    // Validate that both are objects with expected structure
    if (!originalPolicy.name || !updatedPolicy.name) {
      rollbar.error('PolicyQualityCheck: Invalid policy structure', {
        originalHasName: !!originalPolicy.name,
        updatedHasName: !!updatedPolicy.name,
      });
      return NextResponse.json(
        {
          error: 'Invalid policy structure: both policies must have a name field',
        },
        { status: 400 },
      );
    }

    rollbar.info('PolicyQualityCheck: Starting AI quality validation', {
      originalPolicyName: originalPolicy.name,
      updatedPolicyName: updatedPolicy.name,
    });

    // Initialize the quality checker
    const qualityChecker = new PolicyQualityChecker();

    // Perform the quality check
    const qualityResult = await qualityChecker.validatePolicyChanges(originalPolicy, updatedPolicy);

    rollbar.info('PolicyQualityCheck: Quality validation completed', {
      validationStatus: qualityResult.validationStatus,
      hasChanges: qualityResult.diffSummary?.length > 0,
    });

    return NextResponse.json({
      success: true,
      qualityCheck: qualityResult,
      metadata: {
        originalPolicyName: originalPolicy.name,
        updatedPolicyName: updatedPolicy.name,
        checkedAt: new Date().toISOString(),
      },
    });
  } catch (error: any) {
    rollbar.error('PolicyQualityCheck: Error during quality validation', {
      error: error.message,
      stack: error.stack,
    });

    const { error: errorMessage, status } = handleApiError(
      error,
      '/api/policies/validate/quality-check',
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
      message: 'Policy Quality Check API - Claude Sonnet 4 Integration',
      endpoints: {
        POST: {
          description: 'Validate policy changes using Claude Sonnet 4',
          requiredFields: ['originalPolicy', 'updatedPolicy'],
          example: {
            originalPolicy: { name: 'Facebook', legalDocuments: [] /* ... */ },
            updatedPolicy: { name: 'Facebook', legalDocuments: [] /* ... */ },
          },
        },
      },
      status: {
        claudeConfigured: !!process.env.ANTHROPIC_API_KEY,
        model: 'claude-sonnet-4-20250514',
        capabilities: ['structural_validation', 'semantic_analysis', 'change_detection'],
      },
    });
  } catch (error: any) {
    const { error: errorMessage, status } = handleApiError(
      error,
      '/api/policies/validate/quality-check',
    );
    return NextResponse.json({ error: errorMessage }, { status });
  }
}
