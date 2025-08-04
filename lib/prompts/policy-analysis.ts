import { serverInstance as rollbar } from '../rollbar';

export interface PolicyAnalysisRequest {
  documentUrl: string;
  scopedPolicies: {
    legalDocumentReference: string;
    documentTitle: string;
    documentUrl: string;
    relatedPolicies: Array<{
      reference: string;
      policy: string;
      removalCriteria: string[];
      evidenceRequirements: string[];
      sourceSection: string;
      sourceType?: string;
    }>;
  };
}

export function generatePolicyAnalysisPrompt(request: PolicyAnalysisRequest): string {
  const { documentUrl, scopedPolicies } = request;

  rollbar.info('generatePolicyAnalysisPrompt: Creating policy analysis prompt', {
    documentUrl,
    documentReference: scopedPolicies.legalDocumentReference,
    policiesCount: scopedPolicies.relatedPolicies.length,
  });

  return `You are an AI assistant specialized in legal and policy analysis. Your task is to compare our current policy data against a live legal document and determine if updates are needed.

CRITICAL INSTRUCTIONS:
1. Access and analyze the live document at this URL: ${documentUrl}
2. Compare the live content with our current policies provided below
3. Focus ONLY on meaningful changes that affect policy enforcement
4. Do NOT make cosmetic or minor wording changes unless they change the meaning
5. Your response MUST be valid JSON and nothing else

ACCESS THIS LIVE DOCUMENT: ${documentUrl}

CURRENT POLICIES TO ANALYZE:
${JSON.stringify(scopedPolicies, null, 2)}

After analyzing the live document at ${documentUrl}, compare it with our current policies above and respond with a single JSON object:

If you find NO meaningful changes needed:
{
  "status": "no_change",
  "reasoning": "Brief explanation confirming policies are still aligned with the document. Include specific sections verified."
}

If you DO find meaningful changes needed:
{
  "status": "updated",
  "reasoning": "Brief summary of key changes identified (e.g., 'Updated removal criteria for NCSII policy to include AI-generated content explicitly'). Be specific about what changed.",
  "data": {
    "legalDocumentReference": "${scopedPolicies.legalDocumentReference}",
    "relatedPolicies": [
      // The full, updated list of related policies with your changes
    ]
  }
}

IMPORTANT RULES:
- Only modify policy, removalCriteria, and evidenceRequirements fields
- Do not add or remove policies unless the source document clearly indicates this
- Preserve all other fields exactly as they are
- Base your analysis ONLY on the live content at ${documentUrl}
- Focus on substantive changes that affect how policies are enforced

RESPOND WITH VALID JSON ONLY:`;
}