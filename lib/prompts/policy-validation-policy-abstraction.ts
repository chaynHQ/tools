import { Policy } from '@/types/policies';
import { contentTypes, contentContexts } from '../constants/content';

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
  return `You are an expert AI assistant specialized in accurately extracting and structuring content removal policies from online platform legal and community-facing documents. Your primary goal is to create a structured JSON representation of all policies relevant to image-based abuse, non-consensual content sharing, harassment, and privacy from the single document provided.

This output is a component of a larger policy library for an automated system that generates image takedown letters sent to online platforms. The accuracy and clarity of your extraction are therefore critical.

# DEFINITIONS FOR CONTENT CLASSIFICATION

The following definitions are critical for accurate policy categorization. You MUST use these exact definitions when assigning contentTypes and contentContexts to policies.

## Content Types (What type of content was shared)
${JSON.stringify(contentTypes, null, 2)}

## Content Contexts (The context in which the content was shared)
${JSON.stringify(contentContexts, null, 2)}

**CRITICAL MAPPING INSTRUCTIONS:**
- **Be Comprehensive**: If a policy applies to multiple content types or contexts, include ALL applicable values in the arrays.
- **Prioritize Specificity**: Always use the most specific categories that apply. Only use 'other' when no specific category fits.
- **Use 'unknown' Context**: Only when the policy applies regardless of how the perpetrator obtained or shared the content.
- **Use 'other' Values**: Only as a last resort when the content/context doesn't fit any of the specific defined categories.

# DATA SCHEMA
You MUST generate policy objects that strictly conform to these TypeScript interfaces. Pay close attention to the allowed values for \`ContentType\`, \`ContentContext\`, and \`TimeUnit\`.

\`\`\`typescript
export type ContentType = 'intimate' | 'personal' | 'private' | 'other'; 
export type ContentContext = 'hacked' | 'impersonation' | 'relationship' | 'unknown' | 'other';
export type TimeUnit = 'minutes' | 'hours' | 'days' | 'weeks' | 'months' | 'years';

export interface Policy {
    removal?: { value: number | null; unit: TimeUnit | null; description: string } | null;
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
9.  General content removal processes (related to areas 1-8)
10. Appeal and review processes (related to areas 1-8)

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
-   **\`contentTypes\` & \`contentContexts\` Mapping Guidelines**:
    **MANDATORY PROCESS**: For each policy, you MUST:
    1. **Review ALL Content Type Definitions**: Check each content type definition against the policy text
    2. **Review ALL Content Context Definitions**: Check each context definition against the policy text
    3. **Include ALL Applicable Categories**: Add every category that the policy covers, not just the primary one
    4. **Use Specific Categories First**: Prioritize specific categories over 'other' or 'unknown'
    
    **Specific Mapping Rules**:
    - **Intimate Content**: Include if policy mentions nudity, sexual acts, private body parts, intimate imagery, or sexual content
    - **Personal Content**: Include if policy mentions personal photos, private communications, personal documents, or non-intimate private content
    - **Private Information**: Include if policy mentions personal data, contact details, private documents, or identifying information
    - **Impersonation Context**: Include if policy mentions fake profiles, identity theft, pretending to be someone else, or using someone's identity
    - **Relationship Context**: Include if policy mentions ex-partners, known persons, domestic abuse, or revenge scenarios
    - **Unknown Context**: Include if policy applies regardless of how content was obtained or who shared it
    - **Other Categories**: Only use when content/context doesn't fit any specific category above
    
    **Examples of Comprehensive Mapping**:
    - A policy about "non-consensual intimate imagery" should include: contentTypes: ["intimate"], contentContexts: ["hacked", "impersonation", "relationship", "unknown", "other"]
    - A policy about "harassment using personal information" should include: contentTypes: ["personal", "private"], contentContexts: ["impersonation", "relationship", "unknown", "other"]
    - A policy about "account compromise" should include: contentTypes: ["intimate", "personal", "private"], contentContexts: ["hacked"]

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
