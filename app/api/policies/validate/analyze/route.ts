import { PolicyAnalysisService } from '@/lib/ai/policy-analyzer';
import { handleApiError, serverInstance as rollbar } from '@/lib/rollbar';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  rollbar.info('PolicyAnalysis: Received AI analysis request');
  
  try {
    if (!process.env.GOOGLE_AI_API_KEY) {
      rollbar.error('PolicyAnalysis: Google AI API key not configured');
      return NextResponse.json({ error: 'Missing Google AI API key' }, { status: 500 });
    }

    const body = await request.json();
    const { documentUrl, scopedPolicies } = body;

    // Initialize the analysis service
    const analysisService = new PolicyAnalysisService();

    // Validate the request structure
    if (!analysisService.validateAnalysisRequest(body)) {
      rollbar.error('PolicyAnalysis: Missing required fields', { 
        body: JSON.stringify(body).substring(0, 200) // Log first 200 chars for debugging
      });
      return NextResponse.json({ 
        error: 'Invalid request structure. Required: documentUrl and properly structured scopedPolicies' 
      }, { status: 400 });
    }

    rollbar.info('PolicyAnalysis: Starting Gemini analysis', {
      documentUrl,
      documentReference: scopedPolicies.legalDocumentReference,
      policiesCount: scopedPolicies.relatedPolicies.length,
    });

    // Perform the analysis
    const analysisResult = await analysisService.analyzeDocument(body);

    rollbar.info('PolicyAnalysis: Gemini analysis completed', {
      status: analysisResult.status,
      documentReference: scopedPolicies.legalDocumentReference,
      hasUpdates: analysisResult.status === 'updated',
      updatedPoliciesCount: analysisResult.data?.relatedPolicies?.length || 0,
    });

    return NextResponse.json({
      success: true,
      analysis: analysisResult,
      metadata: {
        documentUrl,
        documentReference: scopedPolicies.legalDocumentReference,
        analyzedAt: new Date().toISOString(),
        policiesAnalyzed: scopedPolicies.relatedPolicies.length,
      }
    });

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
      message: 'Policy Analysis API - Gemini 2.5 Integration',
      endpoints: {
        POST: {
          description: 'Analyze policies against live documents using Gemini 2.5',
          requiredFields: ['documentUrl', 'scopedPolicies'],
          example: {
            documentUrl: 'https://transparency.fb.com/policies/community-standards/',
            scopedPolicies: {
              legalDocumentReference: 'META-CS',
              documentTitle: 'Meta Community Standards',
              documentUrl: 'https://transparency.fb.com/policies/community-standards/',
              relatedPolicies: []
            }
          }
        }
      },
      status: {
        geminiConfigured: !!process.env.GOOGLE_AI_API_KEY,
        model: 'gemini-2.0-flash-exp',
        capabilities: ['document_analysis', 'policy_comparison', 'structured_output']
      }
    });

  } catch (error: any) {
    const { error: errorMessage, status } = handleApiError(
      error,
      '/api/policies/validate/analyze'
    );
    return NextResponse.json({ error: errorMessage }, { status });
  }
}