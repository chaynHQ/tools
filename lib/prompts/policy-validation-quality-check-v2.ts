import { PlatformPolicies } from '@/types/policies';
import { serverInstance as rollbar } from '../rollbar';

export interface PolicyValidationQualityCheckV2Result {
  validationStatus: 'valid' | 'invalid' | 'no_update_needed';
  reasoning: string;
  overallQualityScore: number; // 1-10 scale
  issues: Array<{
    severity: 'critical' | 'major' | 'minor';
    type: 
      | 'hallucination'
      | 'meaningless_rewording' 
      | 'structural_error'
      | 'policy_accuracy'
      | 'evidence_requirements'
      | 'content_mapping'
      | 'timeframe_accuracy'
      | 'completeness';
    description: string;
    affectedPolicies?: string[];
    recommendation?: string;
  }>;
  changeAssessment: {
    meaningfulChanges: number;
    cosmeticChanges: number;
    potentialIssues: number;
    recommendUpdate: boolean;
  };
}

export function generatePolicyValidationQualityCheckV2Prompt(
  platformId: string,
  platformName: string,
  originalPolicies: PlatformPolicies,
  updatedPolicies: PlatformPolicies,
  changesSummary: string
): string {
  rollbar.info('generatePolicyValidationQualityCheckV2Prompt: Creating quality check prompt', {
    platformId,
    platformName,
    originalDocuments: originalPolicies.policyDocuments.length,
    updatedDocuments: updatedPolicies.policyDocuments.length,
  });

  return `You are an AI assistant specialized in validating policy changes for automated image takedown systems. Your task is to perform a comprehensive A/B comparison of original vs updated platform policies to assess accuracy, completeness, and necessity of changes.

CRITICAL CONTEXT:
These policies are used to generate automated takedown letters for non-consensual content. Every policy, evidence requirement, and removal criterion directly impacts the effectiveness of takedown requests. Changes must be meaningful, accurate, and based on actual platform policy updates.

PLATFORM: ${platformName} (${platformId})

CHANGES SUMMARY:
${changesSummary}

ORIGINAL PLATFORM POLICIES:
${JSON.stringify(originalPolicies, null, 2)}

UPDATED PLATFORM POLICIES:
${JSON.stringify(updatedPolicies, null, 2)}

VALIDATION CRITERIA:

**CRITICAL ISSUES (Mark as invalid):**
1. **Hallucinations**: Policies, requirements, or criteria not supported by actual platform documents
2. **Policy Accuracy**: Misrepresentation of platform policies or incorrect policy summaries
3. **Evidence Requirements**: Requesting inappropriate documentation (IDs, sensitive info) or inaccurate requirements
4. **Structural Errors**: Malformed data, incorrect content type/context mappings, invalid timeframes

**MAJOR ISSUES (Reduce quality score):**
1. **Completeness**: Missing relevant policies that should be included for comprehensive coverage
2. **Content Mapping**: Incorrect assignment of content types or contexts to policies
3. **Timeframe Accuracy**: Incorrect or unsupported response/removal timeframes

**MINOR ISSUES (Note but may not invalidate):**
1. **Meaningless Rewording**: Cosmetic changes that don't improve policy effectiveness
2. **Inconsistent Formatting**: Style inconsistencies that don't affect functionality

**VALIDATION PROCESS:**
1. **Document-by-Document Analysis**: Compare each document's policies against the original
2. **Policy Accuracy Check**: Verify policy summaries accurately reflect platform rules
3. **Evidence Requirements Review**: Ensure requirements are appropriate and achievable
4. **Completeness Assessment**: Check if all relevant policies are captured
5. **Change Necessity Evaluation**: Determine if changes meaningfully improve takedown effectiveness

**QUALITY SCORING (1-10 scale):**
- 9-10: Excellent - Accurate, comprehensive, meaningful improvements
- 7-8: Good - Mostly accurate with minor issues
- 5-6: Acceptable - Some issues but usable
- 3-4: Poor - Significant issues requiring revision
- 1-2: Unacceptable - Major inaccuracies or structural problems

**CHANGE ASSESSMENT:**
- **Meaningful Changes**: Updates that improve takedown request effectiveness
- **Cosmetic Changes**: Rewording without functional impact
- **Potential Issues**: Changes that may cause problems or inaccuracies

OUTPUT FORMAT:
Respond with valid JSON only:

{
  "validationStatus": "valid" | "invalid" | "no_update_needed",
  "reasoning": "Comprehensive explanation of validation decision, including specific findings from document comparison and assessment of change necessity",
  "overallQualityScore": 8,
  "issues": [
    {
      "severity": "critical" | "major" | "minor",
      "type": "hallucination" | "meaningless_rewording" | "structural_error" | "policy_accuracy" | "evidence_requirements" | "content_mapping" | "timeframe_accuracy" | "completeness",
      "description": "Specific description of the issue found",
      "affectedPolicies": ["policy-id-1", "policy-id-2"],
      "recommendation": "How to fix this issue"
    }
  ],
  "changeAssessment": {
    "meaningfulChanges": 5,
    "cosmeticChanges": 2,
    "potentialIssues": 1,
    "recommendUpdate": true
  }
}

**DECISION LOGIC:**
- Return "invalid" if critical issues are found
- Return "no_update_needed" if changes are purely cosmetic or unnecessary
- Return "valid" if changes are meaningful and accurate

Focus on ensuring the updated policies will generate more effective takedown requests while maintaining accuracy to actual platform policies.

RESPOND WITH VALID JSON ONLY:`;
}