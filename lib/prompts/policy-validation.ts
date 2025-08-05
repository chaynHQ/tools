import { serverInstance as rollbar } from '../rollbar';

export interface PolicyValidationPromptData {
  documentUrl: string;
  documentTitle: string;
  documentReference: string;
  currentPolicies: Array<{
    reference: string;
    policy: string;
    removalCriteria: string[];
    evidenceRequirements: string[];
  }>;
}

export function generatePolicyValidationPrompt(data: PolicyValidationPromptData): string {
  rollbar.info('generatePolicyValidationPrompt: Creating analysis prompt', {
    documentUrl: data.documentUrl,
    documentReference: data.documentReference,
    policiesCount: data.currentPolicies.length,
  });

  return `You are an AI assistant specialized in legal and policy analysis. Your task is to compare our current policy data against a live legal document and determine if updates are needed.

CRITICAL INSTRUCTIONS:
1. Access and analyze the live document at this URL: ${data.documentUrl}
2. Compare the live content with our current policies provided below
3. Focus ONLY on meaningful changes that affect policy enforcement
4. Do NOT make cosmetic or minor wording changes unless they change the meaning
5. Your response MUST be valid JSON and nothing else

ACCESS THIS LIVE DOCUMENT: ${data.documentUrl}

DOCUMENT: ${data.documentTitle} (${data.documentReference})

CURRENT POLICIES TO ANALYZE:
${JSON.stringify(data.currentPolicies, null, 2)}

After analyzing the live document at ${data.documentUrl}, compare it with our current policies above and respond with a single JSON object:

If you find NO meaningful changes needed:
{
  "status": "no_change",
  "reasoning": "Brief explanation confirming policies are still aligned with the document. Include specific sections verified."
}

If you DO find meaningful changes needed:
{
  "status": "updated",
  "reasoning": "Brief summary of key changes identified. Be specific about what changed.",
  "updatedPolicies": [
    {
      "reference": "policy_reference",
      "policy": "updated policy description",
      "removalCriteria": ["updated criteria"],
      "evidenceRequirements": ["updated requirements"]
    }
  ]
}

IMPORTANT RULES:
- Only modify policy, removalCriteria, and evidenceRequirements fields
- Base your analysis ONLY on the live content at ${data.documentUrl}
- Focus on substantive changes that affect how policies are enforced

RESPOND WITH VALID JSON ONLY:`;
}
