import { Policy } from '@/types/policies';

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
  return `You are an expert AI assistant specialized in accurately extracting and structuring content removal policies from legal and community-facing documents. Your primary goal is to create a structured JSON representation of all policies relevant to image-based abuse, non-consensual content sharing, harassment, and privacy from the single document provided.

This output is a component of a larger policy library for an automated system that generates takedown letters. The accuracy and clarity of your extraction are therefore critical.

# DATA SCHEMA
You MUST generate policy objects that strictly conform to these TypeScript interfaces. Pay close attention to the allowed values for \`ContentType\`, \`ContentContext\`, and \`TimeUnit\`.

\`\`\`typescript
export type ContentType = 'intimate' | 'personal' | 'private' | 'other';
export type ContentContext = 'hacked' | 'impersonation' | 'relationship' | 'unknown' | 'other';
export type TimeUnit = 'minutes' | 'hours' | 'days' | 'weeks' | 'months' | 'years';

export interface Policy {
  id: string; // e.g., "tt-cg-ncii"
  reference: string | null; // e.g., "Section 5a"
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

DOCUMENT INFORMATION:
- URL: ${documentUrl}
- Title: ${documentTitle}
- Reference: ${documentReference}

# TASK MODE & CONTEXT
${
  currentPoliciesForDocument && currentPoliciesForDocument.length > 0
    ? `
**MODE: Revalidation**
- **CURRENT POLICIES (FOR THIS DOCUMENT ONLY):** ${JSON.stringify(
        currentPoliciesForDocument,
        null,
        2,
      )}
- **INSTRUCTIONS:** Compare the policies you find in the markdown against the "CURRENT POLICIES" for this document. Update existing policies only if a meaningful change has occurred, and add any new policies you discover.
`
    : `
**MODE: Initial Extraction**
- **CURRENT POLICIES (FOR THIS DOCUMENT ONLY):** None.
- **INSTRUCTIONS:** This is a new document or a full refresh. Your task is to perform a comprehensive extraction of all relevant policies from the source document provided.
`
}

# SOURCE DOCUMENT (MARKDOWN)
${documentMarkdown}

---

# EXTRACTION REQUIREMENTS

## Target Policy Areas
Your primary goal is to identify ALL policies relevant to the following areas of abuse. Be comprehensive.
1.  Non-consensual intimate imagery (NCII/revenge porn)
2.  Harassment and bullying (especially image-based)
3.  Privacy violations (sharing private content, doxing)
4.  Impersonation (using someone's images or identity)
5.  Copyright infringement (as it applies to unauthorized image use)
6.  Deepfakes and AI-generated abusive content
7.  Sextortion and threats to share intimate media
8.  Account security, hacking, and unauthorized access
9.  General content removal processes
10. Appeal and review processes

## Guiding Principles & Quality Standards
You must adhere to these principles throughout your extraction:
-   **Comprehensiveness**: Do not miss relevant sections. Extract all applicable policies.
-   **Verbatim Quotes**: The \`quote\` field must be the exact, unmodified text from the source document.
-   **Trauma-Informed Evidence**: When extracting \`evidenceRequirements\`, ensure they are realistic and DO NOT include requests for sensitive data like government IDs or private photos for verification, unless the platform explicitly and unavoidably requires it. The process must be accessible.
-   **Accurate Mapping**: Use the mapping heuristics below to assign \`contentTypes\` and \`contentContexts\` accurately based on the policy's scope.

## Policy Structure and Content Guidelines:
For each policy identified, you MUST populate the fields according to the \`Policy\` interface defined in the #DATA SCHEMA section.

-   **\`summary\`**: **(CRITICAL FOR LETTER GENERATION)** This is the most important field.
    -   **Purpose:** To be cited directly in a takedown letter. It must be a strong, clear, and compelling statement.
    -   **Voice & Tone:** Write in the third person, present tense, using active verbs like "Prohibits", "Requires", "Restricts". The tone must be factual, authoritative, and trauma-informed.
    -   **Example:**
        -   **Quote:** "We don't allow content that harasses or bullies others, including degrading remarks about appearance, doxing, sexual harassment, or coordinated abuse."
        -   **Excellent Summary:** "Prohibits harassment and bullying, including degrading remarks, doxing, and coordinated abuse."
-   **\`contentTypes\` & \`contentContexts\` Mapping Heuristics**:
    -   If a policy mentions nudity, sexual acts, or private body parts, always include \`"intimate"\`.
    -   If it mentions personal details, photos of faces, or private locations, include \`"personal"\` and \`"private"\`.
    -   If it mentions impersonation or fake profiles, always include \`"impersonation"\`.
    -   If it mentions unauthorized access or compromised accounts, always include \`"hacked"\`.
-   **\`timeframes\`**: Extract timeframes **only if explicitly stated** in the document. If not mentioned, the object must be \`null\`.

## Appeal Process Extraction:
If the document contains information about appeals or review processes, you must extract the appeal URL (if provided), summarize the process, and list the specific steps users must follow.

---

# OUTPUT FORMAT
You MUST respond with a single, valid JSON object that strictly conforms to the following structure. Do not add, remove, or rename any fields.

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
