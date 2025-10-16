import { PlatformPolicies } from '@/types/platforms';
import { contentContexts, contentTypes } from '../constants/content';

export interface PolicyValidationQualityCheckResult {
  validationStatus: 'valid' | 'invalid' | 'no_update_needed';
  reasoning: string;
  overallQualityScore: number; // 1-10 scale
  issues: Array<{
    severity: 'critical' | 'minor';
    type:
      | 'hallucination'
      | 'meaningless_rewording'
      | 'structural_error'
      | 'policy_accuracy'
      | 'evidence_requirements'
      | 'content_mapping'
      | 'timeframe_accuracy'
      | 'completeness'
      | 'language_issue';
    description: string;
    field?: string;
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

export function generatePolicyValidationQualityCheckPrompt(
  platformId: string,
  platformName: string,
  originalPolicies: PlatformPolicies,
  updatedPolicies: PlatformPolicies,
): string {
  return `You are a meticulous AI Policy Quality Assurance Analyst. Your role is to conduct a rigorous audit of proposed policy data. Your primary objective is to ensure every policy is high-quality, relevant, and sensible for our use case. Your secondary objective is to prevent unnecessary updates.

CRITICAL CONTEXT:
These policies are used to generate automated takedown letters for Image-Based Abuse (IBA) and Gender-Based Violence (GBV). Since you cannot see the original source text, your entire analysis must be based on the provided JSON data, focusing on quality, relevance, and logical consistency.

# 1. PRIMARY OBJECTIVE: POLICY QUALITY & RELEVANCE AUDIT
Your main goal is to audit the quality of the "UPDATED / NEW POLICIES". You must verify that every policy is:
- **Relevant:** Directly applicable to IBA/GBV takedown letters.
- **Sensible:** A true policy or rule, not just informational text.
- **Accurate:** The \`summary\` logically reflects the \`quote\`.
- **Well-Classified:** The \`contentTypes\` and \`contentContexts\` are logical and comprehensive.
- **Trauma-Informed:** The language used is safe, neutral, and appropriate.

# 2. SECONDARY OBJECTIVE: AVOID UNNECESSARY UPDATES
If you are in "Revalidation" mode, you must first check if changes are purely cosmetic.
- A **meaningful change** involves adding a new policy or substantively altering the \`summary\', \`quote\`, \`removalCriteria\`, or other key fields.
- A **cosmetic change** is a non-functional update, such as minor rewording without changing the meaning, or changes only to \`id\`, \`reference\`, or \`accessTimestamp\`.
- **If changes are purely cosmetic, you MUST return a \`validationStatus\` of \`no_update_needed\`.**

# 3. DEFINITIONS FOR CONTENT CLASSIFICATION
You MUST use these definitions as the ground truth when validating the \`contentTypes\` and \`contentContexts\` fields.

## Content Type Definitions
${JSON.stringify(contentTypes, null, 2)}

## Content Context Definitions
${JSON.stringify(contentContexts, null, 2)}

---

# 4. TASK MODE & AUDIT MATERIALS

- **PLATFORM:** ${platformName} (${platformId})
- **UPDATED / NEW POLICIES (For validation):**
  ${JSON.stringify(updatedPolicies, null, 2)}
- **ORIGINAL POLICIES (For comparison):**
  ${JSON.stringify(originalPolicies, null, 2)}

${
  originalPolicies
    ? `## MODE: Revalidation
Your task is to perform a comprehensive A/B comparison of the "ORIGINAL POLICIES" vs. the "UPDATED POLICIES". First, assess if the changes are meaningful (Objective #2). If they are, proceed with a full quality audit (Objective #1), checking for all issues listed below.
`
    : `## MODE: Initial Validation
The "ORIGINAL POLICIES" set is empty. Your task is to perform a full quality and relevance audit on the "UPDATED / NEW POLICIES" (Objective #1). Your focus is on relevance, logical consistency, and adherence to all quality standards.
`
}

---

# 5. ISSUE CLASSIFICATION
You must check for the following issues and classify them by severity.

### CRITICAL ISSUES (Result in "invalid" status)
1.  **Policy Relevance**: A policy is not directly relevant to IBA/GBV takedown requests (e.g., it's about animal abuse, spam, or platform features like account deletion).
2.  **Policy Definition**: A policy's \`quote\` is not an actual rule, but is instead informational text or an instruction (e.g., "To learn more, visit our help center...").
3.  **Summary vs. Quote Accuracy**: The \`summary\` significantly misrepresents or contradicts the meaning of the provided \`quote\`.
4.  **Logical Content Mapping**: The assigned \`contentTypes\` or \`contentContexts\` are illogical based on the policy's \`summary\` and \`quote\`. You must verify:
    - **Accuracy:** The assigned categories are a sensible match for the policy text.
    - **Completeness:** The mapping is comprehensive for general policies (e.g., a "harassment" policy should include multiple relevant contexts).
    - **Specificity:** 'other' or 'unknown' are used appropriately for broad policies, not as a substitute for an obvious, more specific category.
5.  **Trauma-Informed Language**: The \`summary\`, \`evidenceRequirements\`, or \`removalCriteria\` contains victim-blaming, non-neutral, or explicit language.

### MINOR ISSUES (Note for improvement)
1.  **Meaningless Rewording**: (Revalidation Mode Only) The change is not purely cosmetic but offers no real functional improvement in clarity or meaning.

---

# 6. OUTPUT FORMAT
CRITICAL: You MUST respond with a single, valid JSON object that strictly conforms to the following structure.

\`\`\`json
{
  "validationStatus": "valid" | "invalid" | "no_update_needed",
  "reasoning": "Comprehensive explanation of your validation decision. If 'no_update_needed', state clearly why the changes were only cosmetic. If 'invalid', detail the critical issues found.",
  "overallQualityScore": 8.5,
  "issues": [
    {
      "severity": "critical",
      "type": "policy_accuracy",
      "description": "Specific description of the issue found.",
      "field": "summary",
      "affectedPolicies": ["policy-id-1"],
      "recommendation": "How to fix this issue."
    }
  ],
  "changeAssessment": {
    "meaningfulChanges": 5,
    "cosmeticChanges": 2,
    "potentialIssues": 1,
    "recommendUpdate": true
  }
}
\`\`\`

RESPOND WITH VALID JSON ONLY:`;
}
