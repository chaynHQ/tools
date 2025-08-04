import { serverInstance as rollbar } from '../rollbar';

export interface PolicyAnalysisPromptData {
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

export interface PolicyValidationPromptData {
  documentUrl: string;
  documentTitle: string;
  documentReference: string;
  originalPolicies: Array<{
    reference: string;
    policy: string;
    removalCriteria: string[];
    evidenceRequirements: string[];
  }>;
  updatedPolicies: Array<{
    reference: string;
    policy: string;
    removalCriteria: string[];
    evidenceRequirements: string[];
  }>;
}

export function generatePolicyAnalysisPrompt(data: PolicyAnalysisPromptData): string {
  rollbar.info('generatePolicyAnalysisPrompt: Creating analysis prompt', {
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

export function generatePolicyValidationPrompt(data: PolicyValidationPromptData): string {
  rollbar.info('generatePolicyValidationPrompt: Creating validation prompt', {
    documentUrl: data.documentUrl,
    documentReference: data.documentReference,
    originalPoliciesCount: data.originalPolicies.length,
    updatedPoliciesCount: data.updatedPolicies.length,
  });

  return `You are an AI assistant specialized in validating policy changes. Your task is to compare original and updated policies against a live legal document to ensure changes are genuine and meaningful.

CRITICAL INSTRUCTIONS:
1. Access and verify against the live document at: ${data.documentUrl}
2. Compare the original vs updated policies below
3. Check that changes are based on the actual document content
4. Detect hallucinations (made-up changes not in the document)
5. Detect meaningless rewording (changes that don't alter policy meaning)
6. Your response MUST be valid JSON and nothing else

DOCUMENT TO VERIFY AGAINST: ${data.documentUrl}
DOCUMENT: ${data.documentTitle} (${data.documentReference})

ORIGINAL POLICIES:
${JSON.stringify(data.originalPolicies, null, 2)}

UPDATED POLICIES:
${JSON.stringify(data.updatedPolicies, null, 2)}

VALIDATION CRITERIA:

**VALID changes:**
- Changes that reflect actual updates in the live document
- New removal criteria that match document content
- Updated evidence requirements that align with document processes
- Policy descriptions that accurately reflect document language

**INVALID changes (mark as invalid):**
- Hallucinations: Changes not supported by the actual document content
- Meaningless rewording: Synonym swaps or restructuring without policy impact
- Made-up improvements: Changes that seem like AI "enhancements" rather than document-based updates
- Inconsistent changes: Updates that contradict the document content

After analyzing the document and comparing the policies, respond with:

{
  "validationStatus": "valid" | "invalid",
  "reasoning": "Clear explanation of your validation decision, including what you verified in the document and why changes are valid or invalid. Be specific about any hallucinations or meaningless rewording detected.",
  "issues": [
    {
      "severity": "critical" | "minor",
      "type": "hallucination" | "meaningless_rewording" | "structural_error",
      "description": "Specific description of the issue found"
    }
  ]
}

Focus on ensuring changes represent genuine policy updates based on the actual document content, not AI-generated improvements or basic rewording.

RESPOND WITH VALID JSON ONLY:`;
}