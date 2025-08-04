import { serverInstance as rollbar } from '../rollbar';

export interface PolicyQualityCheckResponse {
  validationStatus: 'valid' | 'invalid';
  reasoning: string;
  diffSummary: string;
  issues?: Array<{
    severity: 'critical' | 'minor';
    type: string;
    description: string;
  }>;
}

export function generatePolicyQualityCheckPrompt(
  originalPolicies: Record<string, any>,
  updatedPolicies: Record<string, any>,
): string {
  rollbar.info('generatePolicyQualityCheckPrompt: Creating policy quality check prompt', {
    platformCount: Object.keys(originalPolicies).length,
    platforms: Object.keys(originalPolicies),
  });

  return `You are an AI assistant specialized in validating policy changes for structural integrity and semantic plausibility. Your task is to analyze proposed changes to multiple platform policies and determine if they are valid, structurally sound, and semantically reasonable.

CRITICAL INSTRUCTIONS:
1. Compare the original policies with the updated policies for each platform
2. Focus on structural integrity (no missing keys, proper data types, valid references)
3. Evaluate semantic plausibility (do the changes make logical sense?)
4. Check that only appropriate fields were modified (policy text, criteria, evidence requirements)
5. Verify that access timestamps were properly updated
6. Validate changes across all platforms for consistency
6. Your response MUST be valid JSON and nothing else

ORIGINAL POLICIES:
${JSON.stringify(originalPolicies, null, 2)}

UPDATED POLICIES:
${JSON.stringify(updatedPolicies, null, 2)}

After analyzing all platform policies, you MUST respond with a single JSON object in this exact format:

{
  "validationStatus": "valid" | "invalid",
  "reasoning": "A clear explanation of your validation decision, including what you checked across all platforms and why the changes are valid or invalid",
  "diffSummary": "A concise summary of the specific changes found between the original and updated policies across all platforms. List each change on a new line with a dash prefix, including platform name (e.g., '- FACEBOOK: Updated policy CS-NCSII removalCriteria to include AI content\\n- INSTAGRAM: Updated accessTimestamp for META-CS')",
  "issues": [
    // Only include this array if validationStatus is "invalid"
    {
      "severity": "critical" | "minor",
      "type": "structural_integrity" | "semantic_plausibility" | "unauthorized_changes" | "missing_data",
      "description": "Specific description of the issue found, including which platform(s) are affected"
    }
  ]
}

VALIDATION CRITERIA:

**VALID changes include:**
- Updates to policy descriptions that reflect current platform rules across any platform
- Modifications to removalCriteria that align with platform enforcement practices
- Changes to evidenceRequirements that match current platform processes
- Updated accessTimestamp fields to reflect when documents were last checked
- Structural consistency maintained across all policy objects and platforms
- Cross-platform consistency where policies should be similar

**INVALID changes include:**
- Missing or corrupted data structures in any platform
- Changes to fields that should not be modified (like policy references or document URLs)
- Semantically implausible updates (e.g., policies that contradict platform business models)
- Inconsistent data types or malformed JSON structures
- Missing required fields or broken object relationships
- Cross-platform inconsistencies where similar policies should be aligned

Focus on ensuring the changes are both technically sound and logically consistent with how content platforms typically operate. Consider cross-platform consistency for similar policy areas.

RESPOND WITH VALID JSON ONLY:`;
}
