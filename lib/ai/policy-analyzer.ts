import { PolicyAnalysisRequest } from '@/lib/prompts/policy-analysis';
import { PolicyValidationRequest, PolicyValidationResponse } from '@/lib/prompts/policy-validation';
import { GeminiPolicyAnalyzer, GeminiAnalysisResponse } from './gemini-client';
import { serverInstance as rollbar } from '@/lib/rollbar';

/**
 * Simplified policy analysis service with two clear steps:
 * 1. Compare current policies against live document (Prompt A)
 * 2. Validate changes are genuine and not hallucinations (Prompt B)
 */
export class PolicyAnalysisService {
  private analyzer: GeminiPolicyAnalyzer;

  constructor() {
    this.analyzer = new GeminiPolicyAnalyzer();
  }

  /**
   * Step 1: Analyze a document's policies against live content (Prompt A)
   */
  async analyzeDocument(request: PolicyAnalysisRequest): Promise<GeminiAnalysisResponse> {
    rollbar.info('PolicyAnalysisService: Starting document analysis (Prompt A)', {
      documentReference: request.scopedPolicies.legalDocumentReference,
      documentUrl: request.documentUrl,
      policiesCount: request.scopedPolicies.relatedPolicies.length,
    });

    try {
      const result = await this.analyzer.analyzePolicyDocument(request);
      
      rollbar.info('PolicyAnalysisService: Document analysis completed (Prompt A)', {
        documentReference: request.scopedPolicies.legalDocumentReference,
        status: result.status,
        hasUpdates: result.status === 'updated',
      });

      return result;
    } catch (error) {
      rollbar.error('PolicyAnalysisService: Document analysis failed (Prompt A)', {
        documentReference: request.scopedPolicies.legalDocumentReference,
        error: error instanceof Error ? error.message : String(error),
      });
      throw error;
    }
  }

  /**
   * Step 2: Validate changes are genuine and not hallucinations (Prompt B)
   */
  async validateChanges(request: PolicyValidationRequest): Promise<PolicyValidationResponse> {
    rollbar.info('PolicyAnalysisService: Starting change validation (Prompt B)', {
      documentReference: request.documentReference,
      documentUrl: request.documentUrl,
      originalPoliciesCount: request.originalPolicies.length,
      updatedPoliciesCount: request.updatedPolicies.length,
    });

    try {
      const result = await this.analyzer.validatePolicyChanges(request);
      
      rollbar.info('PolicyAnalysisService: Change validation completed (Prompt B)', {
        documentReference: request.documentReference,
        validationStatus: result.validationStatus,
        hasIssues: result.issues && result.issues.length > 0,
      });

      return result;
    } catch (error) {
      rollbar.error('PolicyAnalysisService: Change validation failed (Prompt B)', {
        documentReference: request.documentReference,
        error: error instanceof Error ? error.message : String(error),
      });
      throw error;
    }
  }

  /**
   * Validate that the analysis request has all required fields
   */
  validateAnalysisRequest(request: any): request is PolicyAnalysisRequest {
    if (!request.documentUrl || typeof request.documentUrl !== 'string') {
      return false;
    }

    if (!request.scopedPolicies || typeof request.scopedPolicies !== 'object') {
      return false;
    }

    const { scopedPolicies } = request;
    
    if (!scopedPolicies.legalDocumentReference || 
        !scopedPolicies.documentTitle || 
        !scopedPolicies.documentUrl ||
        !Array.isArray(scopedPolicies.relatedPolicies)) {
      return false;
    }

    return true;
  }

  /**
   * Validate that the validation request has all required fields
   */
  validateValidationRequest(request: any): request is PolicyValidationRequest {
    return (
      request &&
      typeof request.documentUrl === 'string' &&
      typeof request.documentReference === 'string' &&
      typeof request.documentTitle === 'string' &&
      Array.isArray(request.originalPolicies) &&
      Array.isArray(request.updatedPolicies)
    );
  }
}