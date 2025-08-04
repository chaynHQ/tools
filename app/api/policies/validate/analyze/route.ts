import { PolicyAnalysisService } from '@/lib/ai/policy-analyzer';
import { handleApiError, serverInstance as rollbar } from '@/lib/rollbar';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  rollbar.info('PolicyAnalysis: Received AI analysis request (Prompt A)');

  try {
    if (!process.env.GOOGLE_CLOUD_PROJECT) {
      rollbar.error('PolicyAnalysis: Google Cloud Project not configured');
      return NextResponse.json(
        { error: 'Missing Google Cloud Project configuration' },
        { status: 500 },
      );
    }

    const body = await request.json();
    const { documentUrl, scopedPolicies, step } = body;

    // Initialize the analysis service
    const analysisService = new PolicyAnalysisService();

    // Validate the request structure
    if (!analysisService.validateAnalysisRequest(body)) {
    // Check if this is a validation request (Prompt B) or analysis request (Prompt A)
    if (validateChanges) {
      // This is Prompt B - validate changes
      if (!analysisService.validateValidationRequest(body)) {
        rollbar.error('PolicyAnalysis: Invalid validation request structure', {
          body: JSON.stringify(body).substring(0, 200),
        });
        return NextResponse.json(
          {
            error: 'Invalid validation request structure. Required: documentUrl, documentReference, documentTitle, originalPolicies, updatedPolicies',
          },
          { status: 400 },
        );
      }

      rollbar.info('PolicyAnalysis: Starting change validation (Prompt B)', {
        documentUrl,
        documentReference: body.documentReference,
        originalPoliciesCount: body.originalPolicies?.length || 0,
        updatedPoliciesCount: body.updatedPolicies?.length || 0,
      });

      const validationResult = await analysisService.validateChanges(body as PolicyValidationRequest);

      rollbar.info('PolicyAnalysis: Change validation completed (Prompt B)', {
        documentReference: body.documentReference,
        validationStatus: validationResult.validationStatus,
        hasIssues: validationResult.issues && validationResult.issues.length > 0,
      });

      return NextResponse.json({
        success: true,
        validation: validationResult,
        metadata: {
          documentUrl,
          documentReference: body.documentReference,
          validatedAt: new Date().toISOString(),
          promptType: 'B - Change Validation',
        },
      });
    } else {
      // This is Prompt A - analyze document
      if (!analysisService.validateAnalysisRequest(body)) {
        rollbar.error('PolicyAnalysis: Invalid analysis request structure', {
          body: JSON.stringify(body).substring(0, 200),
        });
        return NextResponse.json(
          {
            error: 'Invalid analysis request structure. Required: documentUrl and properly structured scopedPolicies',
          },
          { status: 400 },
        );
      }

      rollbar.info('PolicyAnalysis: Starting document analysis (Prompt A)', {
        documentUrl,
        documentReference: scopedPolicies.legalDocumentReference,
        policiesCount: scopedPolicies.relatedPolicies.length,
      });

      const analysisResult = await analysisService.analyzeDocument(body);

      rollbar.info('PolicyAnalysis: Document analysis completed (Prompt A)', {
        status: analysisResult.status,
        documentReference: scopedPolicies.legalDocumentReference,
        hasUpdates: analysisResult.status === 'updated',
      });

      return NextResponse.json({
        success: true,
        analysis: analysisResult,
        metadata: {
          documentUrl,
          documentReference: scopedPolicies.legalDocumentReference,
          analyzedAt: new Date().toISOString(),
          policiesAnalyzed: scopedPolicies.relatedPolicies.length,
          promptType: 'A - Document Analysis',
        },
      });
    }
  } catch (error: any) {
    rollbar.error('PolicyAnalysis: Error during AI analysis', {
      error: error.message,
      stack: error.stack,
    });

    const { error: errorMessage, status } = handleApiError(
      error,
      '/api/policies/validate/analyze',
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
      message: 'Policy Analysis API - Simplified Two-Prompt System',
      endpoints: {
        POST: {
          description: 'Two-prompt system: Prompt A (analyze) and Prompt B (validate)',
          promptA: {
            description: 'Compare current policies against live document',
            requiredFields: ['documentUrl', 'scopedPolicies'],
            example: {
              documentUrl: 'https://transparency.fb.com/policies/community-standards/',
              scopedPolicies: {
                legalDocumentReference: 'META-CS',
                documentTitle: 'Meta Community Standards',
                documentUrl: 'https://transparency.fb.com/policies/community-standards/',
                relatedPolicies: [],
              },
            },
          },
          promptB: {
            description: 'Validate changes are genuine and not hallucinations',
            requiredFields: ['documentUrl', 'documentReference', 'documentTitle', 'originalPolicies', 'updatedPolicies', 'validateChanges: true'],
            example: {
              validateChanges: true,
              documentUrl: 'https://transparency.fb.com/policies/community-standards/',
              documentReference: 'META-CS',
              documentTitle: 'Meta Community Standards',
              originalPolicies: [],
              updatedPolicies: [],
            },
          },
        },
      },
      status: {
        geminiConfigured: !!process.env.GOOGLE_AI_API_KEY,
        model: 'gemini-2.0-flash-exp',
        capabilities: ['document_analysis', 'change_validation', 'hallucination_detection'],
        prompts: {
          A: 'Document Analysis - Compare policies against live document',
          B: 'Change Validation - Verify changes are genuine',
        },
      },
    });
  } catch (error: any) {
    const { error: errorMessage, status } = handleApiError(error, '/api/policies/validate/analyze');
    return NextResponse.json({ error: errorMessage }, { status });
  }
}

            documentUrl: 'https://transparency.fb.com/policies/community-standards/',
            scopedPolicies: {
              legalDocumentReference: 'META-CS',
              documentTitle: 'Meta Community Standards',
              documentUrl: 'https://transparency.fb.com/policies/community-standards/',
              relatedPolicies: [],
            },
          },
        },
      },
      status: {
        geminiConfigured: !!process.env.GOOGLE_AI_API_KEY,
        model: 'gemini-2.0-flash-exp',
        capabilities: ['document_analysis', 'policy_comparison', 'structured_output'],
      },
    });
  } catch (error: any) {
    const { error: errorMessage, status } = handleApiError(error, '/api/policies/validate/analyze');
    return NextResponse.json({ error: errorMessage }, { status });
  }
}
