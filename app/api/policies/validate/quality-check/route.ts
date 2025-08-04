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
    const { originalPolicies, updatedPolicies } = body;

    // Validate required fields
    if (!originalPolicies || !updatedPolicies) {
      rollbar.error('PolicyQualityCheck: Missing required fields', {
        hasOriginal: !!originalPolicies,
        hasUpdated: !!updatedPolicies,
      });
      return NextResponse.json(
        {
          error: 'Missing required fields: originalPolicies and updatedPolicies',
        },
        { status: 400 },
      );
    }

    // Validate that both are objects with expected structure
    if (typeof originalPolicies !== 'object' || typeof updatedPolicies !== 'object') {
      rollbar.error('PolicyQualityCheck: Invalid policy structure', {
        originalType: typeof originalPolicies,
        updatedType: typeof updatedPolicies,
      });
      return NextResponse.json(
        {
          error: 'Invalid policy structure: both must be objects containing platform policies',
        },
        { status: 400 },
      );
    }

    rollbar.info('PolicyQualityCheck: Starting AI quality validation', {
      platformCount: Object.keys(originalPolicies).length,
      platforms: Object.keys(originalPolicies),
    });

    // Initialize the quality checker
    const qualityChecker = new PolicyQualityChecker();

    // Perform the quality check
    const qualityResult = await qualityChecker.validatePolicyChanges(
      originalPolicies,
      updatedPolicies,
    );

    rollbar.info('PolicyQualityCheck: Quality validation completed', {
      validationStatus: qualityResult.validationStatus,
      hasChanges: qualityResult.diffSummary?.length > 0,
    });

    return NextResponse.json({
      success: true,
      qualityCheck: qualityResult,
      metadata: {
        platformCount: Object.keys(originalPolicies).length,
        platforms: Object.keys(originalPolicies),
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
          requiredFields: ['originalPolicies', 'updatedPolicies'],
          example: {
            originalPolicies: { facebook: { name: 'Facebook', legalDocuments: [] /* ... */ } },
            updatedPolicies: { facebook: { name: 'Facebook', legalDocuments: [] /* ... */ } },
          },
        },
      },
      status: {
        vertexAIConfigured: !!process.env.GOOGLE_CLOUD_PROJECT,
        model: 'gemini-2.0-flash-exp',
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
