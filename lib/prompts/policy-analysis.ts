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

  return `You are an AI assistant specialized in legal and policy analysis. Your task is to determine if a set of platform policies, provided in a JSON format, are still accurate based on the content of a live legal document at a given URL.

CRITICAL INSTRUCTIONS:
1. Access and analyze the live document at this URL: ${documentUrl}
2. Compare the live content with the policies provided below
3. Focus ONLY on meaningful changes that affect policy enforcement
4. Do NOT make cosmetic or minor wording changes unless they change the meaning
5. Your response MUST be valid JSON and nothing else

ACCESS THIS LIVE DOCUMENT: ${documentUrl}

Below is a JSON object containing policies we believe are derived from that document. Please analyze the live content at the URL and verify if the \`policy\` descriptions, \`removalCriteria\`, and \`evidenceRequirements\` in the JSON are still accurate.

CURRENT POLICIES TO ANALYZE:
${JSON.stringify(scopedPolicies, null, 2)}

After your analysis of the live document at ${documentUrl}, you MUST respond with a single JSON object in one of the following two formats:

1. If you find NO meaningful changes that require updates to the policies, return this exact structure:
{
  "status": "no_change",
  "reasoning": "A brief explanation confirming the policies are still aligned with the document. Include specific sections or policies you verified."
}

2. If you DO find meaningful changes, return an updated version of the JSON object you were given. The \`relatedPolicies\` array should reflect the new information from the live document. Your output MUST be in this structure:
{
  "status": "updated",
  "reasoning": "A brief summary of the key changes you identified (e.g., 'Updated removal criteria for NCSII policy to include AI-generated content explicitly'). Be specific about what changed.",
  "data": {
    "legalDocumentReference": "${scopedPolicies.legalDocumentReference}",
    "relatedPolicies": [
      // The full, updated list of related policies with your changes
    ]
  }
}

IMPORTANT RULES:
- Only modify the \`policy\`, \`removalCriteria\`, and \`evidenceRequirements\` fields
- Do not add or remove policies from the list unless the source document clearly indicates a policy has been added or removed entirely
- Preserve all other fields exactly as they are (reference, sourceSection, sourceType)
- Your entire output must be a single, valid JSON object and nothing else
- Base your analysis ONLY on the live content at ${documentUrl}
- Focus on substantive changes that affect how policies are enforced, not minor wording changes

RESPOND WITH VALID JSON ONLY:`;
}