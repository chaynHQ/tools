import { PolicyAnalysisRequest } from '@/lib/prompts/policy-analysis';
import { GeminiPolicyAnalyzer, GeminiAnalysisResponse } from './gemini-client';
import { serverInstance as rollbar } from '@/lib/rollbar';

/**
 * High-level policy analysis service that orchestrates the analysis workflow
 */
export class PolicyAnalysisService {
  private analyzer: GeminiPolicyAnalyzer;

  constructor() {
    this.analyzer = new GeminiPolicyAnalyzer();
  }

  /**
   * Analyze a single document's policies against live content
   */
  async analyzeDocument(request: PolicyAnalysisRequest): Promise<GeminiAnalysisResponse> {
    rollbar.info('PolicyAnalysisService: Starting document analysis', {
      documentReference: request.scopedPolicies.legalDocumentReference,
      documentUrl: request.documentUrl,
      policiesCount: request.scopedPolicies.relatedPolicies.length,
    });

    try {
      const result = await this.analyzer.analyzePolicyDocument(request);
      
      rollbar.info('PolicyAnalysisService: Document analysis completed', {
        documentReference: request.scopedPolicies.legalDocumentReference,
        status: result.status,
        hasUpdates: result.status === 'updated',
      });

      return result;
    } catch (error) {
      rollbar.error('PolicyAnalysisService: Document analysis failed', {
        documentReference: request.scopedPolicies.legalDocumentReference,
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

    // Validate each policy in the array
    for (const policy of scopedPolicies.relatedPolicies) {
      if (!policy.reference || 
          !policy.policy || 
          !Array.isArray(policy.removalCriteria) ||
          !Array.isArray(policy.evidenceRequirements) ||
          !policy.sourceSection) {
        return false;
      }
    }

    return true;
  }
}