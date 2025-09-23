import { PlatformPolicies } from '@/types/policies';
import { GaffaScrapingResult } from '../ai/policy-validation/gaffa-scraper';
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
  sourceDocuments: GaffaScrapingResult[],
): string {
  return `You are a meticulous AI Policy Quality Assurance Analyst. Your role is to conduct a rigorous audit of a set of policies against the full source text from all platform documents.

CRITICAL CONTEXT:
The policies you validate are used to generate automated takedown letters for non-consensual content related to Image Based Abuse (IBA) and Gender Based Violence (GBV), reviewed be online platform content moderators. 100% accuracy is mandatory. Every policy must be a direct and verifiable representation of the source text.

# CONTENT CLASSIFICATION DEFINITIONS
You MUST use these exact definitions as the ground truth when validating the accuracy of the \`contentTypes\` and \`contentContexts\` fields for each policy.

## Content Type Definitions
${JSON.stringify(contentTypes, null, 2)}

## Content Context Definitions
${JSON.stringify(contentContexts, null, 2)}

# DATA SCHEMA
The policy objects you are auditing MUST conform to this TypeScript schema. Your validation should enforce this structure.

\`\`\`typescript
export type ContentType = 'intimate' | 'personal' | 'private' | 'other';
export type ContentContext = 'hacked' | 'impersonation' | 'relationship' | 'unknown' | 'other';
export type TimeUnit = 'minutes' | 'hours' | 'days' | 'weeks' | 'months' | 'years';

export interface Policy {
  id: string;
  reference: string | null;
  summary: string;
  quote: string;
  contentTypes: ContentType[];
  contentContexts: ContentContext[];
  timeframes: {
    response?: { value: number | null; unit: TimeUnit | null; description: string } | null;
    removal?: { value: number | null; unit: TimeUnit | null; description: string } | null;
  } | null;
  evidenceRequirements: { description: string; example?: string; reason: string; }[];
  removalCriteria: string[];
}
\`\`\`

# AUDIT MATERIALS

1.  **PLATFORM:** ${platformName} (${platformId})
2.  **SOURCE DOCUMENTS (MARKDOWN):**
    ${JSON.stringify(sourceDocuments, null, 2)}
3.  **UPDATED / NEW POLICIES (For validation):**
    ${JSON.stringify(updatedPolicies, null, 2)}
4.  **ORIGINAL POLICIES (For comparison, may be empty):**
    ${JSON.stringify(originalPolicies, null, 2)}

---

# VALIDATION PROCESS
${
  originalPolicies
    ? `
## MODE: Change Validation
Your task is to perform a comprehensive A/B comparison of the "ORIGINAL POLICIES" vs. the "UPDATED POLICIES", using the "SOURCE DOCUMENTS" as the ground truth. You must check for all issues listed in the #ISSUE CLASSIFICATION section.
`
    : `
## MODE: Initial Validation
You have been provided with a newly generated set of policies. The "ORIGINAL POLICIES" set is empty. Your task is to validate this new set against the "SOURCE DOCUMENTS". Your focus is on accuracy, completeness, and adherence to all quality standards.
`
}

---

# ISSUE CLASSIFICATION
You must check for the following issues and classify them by severity.

### CRITICAL ISSUES (Result in "invalid" status)
1.  **Hallucination**: The \`quote\` of a policy is not found in the source documents, or any other information is invented.
2.  **Unrelated policies & instructions:** Includes unrelated policies e.g. policies related to animal abuse. Or policies quote/summary is an instruction/information instead of a policy statement.
3.  **Policy Summary Accuracy**: The \`summary\` or misrepresents or is not equal in meaning to the original \`quote\`.
4.  **Policy Data Accuracy**: Extracting a response or removal timeframe, appeal process or evidence requirements that are not explicitly stated in the source text.
5.  **Content Mapping**: Incorrect or incomplete assignment of \`contentTypes\` or \`contentContexts\`. Using the definitions provided, you must verify:
    -   **Completeness:** All applicable categories are included. For example, a policy on "non-consensual intimate imagery" must include relevant contexts like 'hacked' and 'relationship', not just the 'intimate' content type.
    -   **Specificity:** The most specific categories are used. 'other' or 'unknown' should be used if no more specific definition applies or where the policy is general and applies to most contexts.
    -   **Accuracy:** No incorrect categories are assigned based on the policy's \`quote\`.
6.  **Structural Errors**: The JSON is malformed, or the data types do not match the schema (e.g., incorrect \`TimeUnit\` enum).
7.  **Trama-informed language**: The \`summary\`, \`evidenceRequirements\`, \`removalCriteria\`, \`appealProcess\` contains victim-blaming, non-neutral, or otherwise inappropriate language that is not trauma-informed. Explicit language (specific body parts or sexual activities) are used which are insensitive.


### MINOR ISSUES (Note for improvement)
1.  **Meaningless Rewording**: A policy was changed, but the new wording offers no functional improvement or clarity.
2.  **Inconsistent Formatting**: Minor style inconsistencies that do not affect functionality.

---

# OUTPUT FORMAT

CRITICAL: You MUST respond with a single, valid JSON object that strictly conforms to the following structure. Do not add, remove, or rename any fields.

\`\`\`json
{
  "validationStatus": "valid" | "invalid" | "no_update_needed",
  "reasoning": "Comprehensive explanation of your validation decision, referencing specific findings and the source documents. Explain the counts in the changeAssessment.",
  "overallQualityScore": 8.5,
  "issues": [
    {
      "severity": "critical",
      "type": "hallucination",
      "description": "Specific description of the issue found.",
      "field": "quote",
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

**DECISION LOGIC:**
-   Return **"invalid"** if any CRITICAL issues are found.
-   (Change Validation Mode Only) Return **"no_update_needed"** if changes are purely cosmetic or introduce errors.
-   Return **"valid"** if the policies are accurate, meaningful, and fully justified by the source document.

RESPOND WITH VALID JSON ONLY:`;
}
