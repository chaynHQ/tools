import { LetterRequest } from '@/types/letter';
import { QUALITY_CHECK_CRITERIA } from '../constants/ai';
import { getDocumentsWithRelevantPolicies, getPlatformPolicy } from '../platform-policies';
import { getPlatformPolicyId } from '../platforms';
import { formatInputsForAI, formatPolicyDataForAI } from './format-inputs';

export interface QualityCheckResponse {
  issues: {
    severity: 'CRITICAL' | 'MINOR';
    code:
      | 'HALLUCINATION'
      | 'SENSITIVE_DATA'
      | 'POLICY_ERROR'
      | 'BANNED_TERM'
      | 'INAPPROPRIATE_TONE'
      | 'MISSING_CRITICAL_INFO'
      | 'LANGUAGE'
      | 'STRUCTURE_DEVIATION'
      | 'INFO_HANDLING_ERROR'
      | 'SUBJECT_LINE_ERROR';
    description: string;
  }[];
  improvedLetter: {
    subject: string;
    body: string;
  };
}

export function generateLetterQualityCheckPrompt(
  letter: { subject: string; body: string },
  request: LetterRequest,
) {
  // Get platform policy context
  let platformPolicyContext = '';
  if (!request.platformInfo.isCustom) {
    const policyId = getPlatformPolicyId(request.platformInfo.platformId);
    if (policyId) {
      const platformPolicies = getPlatformPolicy(policyId);
      if (platformPolicies) {
        const documentsWithPolicies = getDocumentsWithRelevantPolicies(
          platformPolicies,
          request.initialQuestions.contentType,
          request.initialQuestions.contentContext,
        );
        platformPolicyContext = formatPolicyDataForAI(platformPolicies, documentsWithPolicies);
      }
    }
  }

  const prompt = `
# ROLE & OBJECTIVE

You are a meticulous and exacting Quality Assurance (QA) Analyst AI. Your primary objective is to audit a generated letter against a master set of rules and factual context. You will determine if the letter makes the strongest possible arguments, identify all deviations, provide a surgically corrected version of the letter that makes only the necessary changes, and produce a comprehensive audit report of all issues found.

# CRITICAL DIRECTIVES

Follow these steps and guidelines precisely:

1.  **Be Exacting:** You must scrutinize the provided letter against *every single rule* outlined in the **Validation Criteria** below, using the \`Factual Context\` as the absolute ground truth.
2.  **Comprehensive Audit**: Scan the \`originalLetter\` to identify all violations. This includes a strategic review to assess if the strongest policies were chosen.
3.  **Document All Findings**: For every single violation found, log it in the \`issues\` array with its severity and code. If no issues are found, the array must be empty \`[]\`.
4.  **Surgical Correction**: Create the \`improvedLetter\` by correcting **all** identified issues. Change **only** what is necessary to fix the issues. Preserve the original letter's structure, phrasing, and intent as much as possible. If the original is perfect, the \`improvedLetter\` MUST be identical.
5.  **Objective Analysis:** Your findings in the \`issues\` array must be factual, objective, and directly reference the specific rule that was broken.

---

# VALIDATION CRITERIA

## CRITICAL Issues
The presence of any of these issues constitutes a fundamental failure.

1.  **Hallucination**: The letter includes **any** detail not explicitly provided in the \`Factual Context\`.
2.  **Inclusion of Unnecessary Sensitive Data**: The letter contains personal details beyond what is required (e.g., specific medical conditions, third-party names) or fails to properly generalize the user's impact statement.
3.  **Poor Strategic Choice / Policy Error**: The letter cites an irrelevant policy, misses a clearly more applicable and powerful policy available in the \`platformPolicyContext\`, or misrepresents a policy.
4.  **Banned Term Usage**: The letter contains any term from the **Banned Terms** list.
5.  **Inappropriate Tone**: The language is unprofessional, aggressive, demanding, threatening, or fails to be trauma-informed and respectful.
6.  **Missing Critical Information**: The letter fails to include the required \`Content Location: [Content Location]\` statement.

## MINOR Issues
These issues impact quality but are not fundamental failures.

1.  **Language Inconsistency**: The letter is not written entirely in British English (en-GB).
2.  **Structural Deviation**: The letter does not follow the 7-part letter blueprint (Introduction, Location/Timeline, Violations, etc.) or fails to use the required bulleted "Narrative List" format for the policy violations section.
3.  **Incorrect Information Handling**: The letter misuses evidence or fails to correctly format dates.
4.  **Poor Subject Line**: The subject line is generic, unclear, or does not accurately reflect the letter's purpose.

## Banned Terms
The presence of any of these terms is a **CRITICAL** issue.
${QUALITY_CHECK_CRITERIA.MAJOR.SENSITIVE_TERMS.map(
  ({ term, replacement }) => `- Term: "${term}" (Correct Replacement: "${replacement}")`,
).join('\\n')}

---

# OUTPUT FORMAT

You MUST respond with a single, valid JSON object. The object must have this exact structure:

\`\`\`json
{
  "issues": [
    {
      "severity": "CRITICAL" | "MINOR",
      "code": "HALLUCINATION" | "SENSITIVE_DATA" | "POLICY_ERROR" | "BANNED_TERM" | "INAPPROPRIATE_TONE" | "MISSING_CRITICAL_INFO" | "LANGUAGE" | "STRUCTURE_DEVIATION" | "INFO_HANDLING_ERROR" | "SUBJECT_LINE_ERROR",
      "description": "A clear, concise description of the specific issue found and how it violates the rules."
    }
  ],
  "improvedLetter": {
    "subject": "The corrected subject line.",
    "body": "The corrected letter body, with \\n for newlines."
  }
}
\`\`\`

---

# AUDIT MATERIALS

**Original Letter to Audit:**
\`\`\`json
${JSON.stringify(letter)}
\`\`\`

**User inputs (context)**
${formatInputsForAI(request)}

${platformPolicyContext}
`;

  return prompt;
}
