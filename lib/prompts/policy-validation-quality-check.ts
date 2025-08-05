import { rollbar } from '../rollbar';

export interface PolicyValidationQualityCheckPromptData {
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

export function generatePolicyValidationQualityCheckPrompt(
  data: PolicyValidationQualityCheckPromptData,
): string {
  rollbar.info('generatePolicyValidationQualityCheckPrompt: Creating validation prompt', {
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
