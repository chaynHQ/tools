import { Policy } from '@/types/policies';
import { contentContexts, contentTypes } from '../constants/content';

export interface PolicyAbstractionResult {
  success: boolean;
  policies: Policy[];
  appealProcess: {
    url?: string;
    summary: string;
    steps: string[];
  } | null;
  reasoning: string;
  error?: string;
}

export function generatePolicyAbstractionPrompt(
  documentUrl: string,
  documentTitle: string,
  documentReference: string,
  documentMarkdown: string,
  currentPoliciesForDocument?: Policy[],
): string {
  return `You are an expert AI assistant specialized in accurately extracting and structuring content removal policies from online platform documents. Your primary goal is to create a structured JSON representation of all direct policies relevant to image-based abuse and takedown requests, from the single document provided. The accuracy and clarity of your extraction are critical for the system's downstream tasks - where policy summaries will be used to generate takedown letters by highlighting policy violations.

# 1. TASK CONTEXT & SOURCE MATERIAL

## Document Information:
- URL: ${documentUrl}
- Title: ${documentTitle}
- Reference: ${documentReference}

## Task Mode:
${
  currentPoliciesForDocument && currentPoliciesForDocument.length > 0
    ? `**MODE: Revalidation**
- **CURRENT POLICIES (FOR THIS DOCUMENT ONLY):** ${JSON.stringify(
        currentPoliciesForDocument,
        null,
        2,
      )}
- **INSTRUCTIONS:** Compare the policies in the markdown against the "CURRENT POLICIES". Update policies only if a meaningful update has occurred, and add any new policies you discover.`
    : `**MODE: Initial Extraction**
- **INSTRUCTIONS:** This is a new document or a full refresh. Your task is to perform a comprehensive extraction of all relevant policies from the source document.`
}

## Source Document (Markdown):
${documentMarkdown}

---

# 2. EXTRACTION TASK & GUIDELINES

Your task is to process the source document and produce a JSON object containing all policies and any appeal process found within, relevant to image-based-based (IBA) or Gender Based Violence (GBV).

## Overall Guiding Principles
-   **Policy Definition:** EVERY policy must be a legal policy/statement or community guideline/rule. Do NOT create policies for statements that are instructions or supporting information and not a direct policy - e.g. statements within documents like "users can...", "we encourage..." and "we use your data..." are NOT policies. 
-   **Relevance:** Only include policies applicable to our image takedown letters related to IBA, GBV. Use our related \`contentTypes\` and \`contentContexts\` as guidance. 
-   **Trauma-Informed:** Ensure that the \`summary\`, \`evidenceRequirements\`, \`removalCriteria\`, \`appealProcess\` language is appropriate for our trauma-informed takedown letters. 
-   **Explicit Language:** DO NOT use explicit or detailed language related to the body or sexual activity e.g. "buttocks", "nipples". If a quote is explicit, rephrase the \`summary\` to use appropriate language whilst maintaining relevance e.g. "nudity", "sexual activity".
-   **Meaningful changes:** DO NOT make minor cosmetic/copy changes to existing policies if the \`quote\` is unchanged. The task is to identify changes and additions, not to slightly improve our \`summary\` or other references to the same policy.

## Step 1: Identify Relevant Policies
First, scan the entire document and identify all policy statements relevant to the following areas of Image Based Abuse:
-   Non-consensual intimate imagery (NCII)
-   Harassment and bullying
-   Privacy violations and doxing
-   Impersonation
-   Copyright infringement (related to personal images)
-   Deepfakes and AI-generated abuse
-   Sextortion and threats
-   Account security and hacking
-   Associated content removal and appeal processes

Do not include policies related to
-   Internal features such as privacy settings - i.e. a user deleting their account is not a policy
-   Internal features related to age restricted content policies - i.e. a filtered feed for minors is not a policy
-   Loose or misaligned context - i.e. policies related to animal abuse are not relevant to our GBV/IBA purpose

If a policy document (markdown) has a last updated date that is before our current document \`accessTimestamp\`, it is likely updates are not required.

## Step 2: Extract and Structure Each Policy
For each policy you identify, create a JSON object that strictly conforms to the \`Policy\` interface. You must follow these field-by-field instructions:

### Data Schema:
\`\`\`typescript
export interface Policy {
  id: string; // e.g., "tt-cg-ncii"
  reference: string | null; // e.g., "Section 5a"
  summary: string;
  quote: string;
  contentTypes: string[]; // e.g., ["intimate", "personal"]
  contentContexts: string[]; // e.g., ["hacked", "relationship"]
  timeframes: {
    response?: {
      value: number | null;
      unit: 'immediate' | 'minutes' | 'hours' | 'days' | 'weeks' | 'months' | 'years' | null;
      description: string;
    } | null;
    removal?: {
      value: number | null;
      unit: 'immediate' | 'minutes' | 'hours' | 'days' | 'weeks' | 'months' | 'years' | null;
      description: string;
    } | null;
  } | null;
  removalCriteria: string[];
}
\`\`\`

### Field-by-Field Instructions:
-   **\`id\`**: A unique, machine-readable identifier (e.g., "platform-doc-policy").
-   **\`reference\`**: The section number or heading from the document, if available.
-   **\`quote\`**: The **exact, verbatim text** from the document that serves as the evidence for the policy.
-   **\`summary\`**: A critical field. It must be a strong, clear, and active statement (e.g., "Prohibits...") that is a brief summary of the quote used in takedown letters. MUST be equivalent/representative of the quote/policy whilst using trauma-informed language. Do not include irrelevant policy implementation details like "signed into effect May 19, 2025".
-   **\`contentTypes\` & \`contentContexts\`**: To populate these arrays, you MUST use the definitions and follow the mandatory process below. This is a critical step for accuracy.
    -   **Content Type Definitions**: ${JSON.stringify(contentTypes, null, 2)}
    -   **Content Context Definitions**: ${JSON.stringify(contentContexts, null, 2)}
    -   **Mandatory Mapping Process**:
        1.  **Review All Definitions**: Compare the policy's text against every definition for both Content Types and Contexts.
        2.  **Be Comprehensive**: Include ALL applicable values in the arrays, not just the most obvious one.
        3.  **Prioritize Specificity**: Always use the most specific categories that fit. Include 'other' and/or 'unknown' where policies are applicable to all/most content types/contexts or do not match more specific types.
-   **\`timeframes\`**: Extract timeframes **only if explicitly stated** in the document. Otherwise, the object must be \`null\`.
-   **\`evidenceRequirements\`**: Detail what a user must provide to support a takedown request related to this policy, if provided. 
-   **\`removalCriteria\`**: List the specific conditions from the policy text that trigger removal, if provided.

## Step 3: Extract Appeal Process
If the document describes an appeals process, extract the URL, a summary of the process, and a list of the specific steps.

---

# 3. OUTPUT FORMAT
You MUST respond with a single, valid JSON object that strictly conforms to the following structure. Do not add comments. Must be parsable by JSON.parse().

\`\`\`json
{
  "success": true,
  "policies": [
    {
      "id": "unique-policy-id",
      "reference": "DOC-SECTION-REF",
      "summary": "Clear policy statement for takedown letters",
      "quote": "Exact text from the document that this policy is based on.",
      "contentTypes": ["intimate", "personal"],
      "contentContexts": ["relationship", "unknown"],
      "timeframes": {
        "response": null,
        "removal": {
          "value": 24,
          "unit": "hours",
          "description": "Removal timeframe if specified in the text"
        }
      },
      "evidenceRequirements": [
        {
          "description": "What the user needs to provide.",
          "example": "e.g., URL to the infringing content.",
          "reason": "Why this evidence is needed by the platform."
        }
      ],
      "removalCriteria": [
        "A specific condition that triggers removal, based on the quote.",
        "Another removal criterion from the policy text."
      ]
    }
  ],
  "appealProcess": {
    "url": "https://platform.com/appeals",
    "summary": "Brief description of appeal process",
    "steps": [
      "Step 1 description",
      "Step 2 description"
    ]
  },
  "reasoning": "Explanation of what policies were found and the extraction decisions made."
}
\`\`\`

CRITICAL: Extract ALL relevant policies comprehensively. This is the primary source for generating takedown requests, so completeness and accuracy are essential.

RESPOND WITH VALID JSON ONLY:`;
}
