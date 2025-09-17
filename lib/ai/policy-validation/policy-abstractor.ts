import { serverInstance as rollbar } from '@/lib/rollbar';
import { callAnthropic } from '../anthropic';
import { parseAIJson } from '@/lib/utils';
import { Policy, PolicyDocument } from '@/types/policies';

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

export async function abstractPoliciesFromDocument(
  documentUrl: string,
  documentTitle: string,
  documentReference: string,
  documentMarkdown: string,
  currentPolicies?: Policy[]
): Promise<PolicyAbstractionResult> {
  rollbar.info('abstractPoliciesFromDocument: Starting policy abstraction', {
    documentUrl,
    documentTitle,
    markdownLength: documentMarkdown.length,
    currentPoliciesCount: currentPolicies?.length || 0,
  });

  try {
    const prompt = generatePolicyAbstractionPrompt(
      documentUrl,
      documentTitle,
      documentReference,
      documentMarkdown,
      currentPolicies
    );

    const response = await callAnthropic(prompt);
    const result: PolicyAbstractionResult = parseAIJson(response);

    rollbar.info('abstractPoliciesFromDocument: Policy abstraction completed', {
      documentUrl,
      success: result.success,
      policiesFound: result.policies?.length || 0,
      hasAppealProcess: !!result.appealProcess,
    });

    return result;
  } catch (error) {
    rollbar.error('abstractPoliciesFromDocument: Error during policy abstraction', {
      documentUrl,
      error,
    });
    return {
      success: false,
      policies: [],
      appealProcess: null,
      reasoning: 'Error during policy abstraction',
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

function generatePolicyAbstractionPrompt(
  documentUrl: string,
  documentTitle: string,
  documentReference: string,
  documentMarkdown: string,
  currentPolicies?: Policy[]
): string {
  const currentPoliciesContext = currentPolicies && currentPolicies.length > 0
    ? `
CURRENT POLICIES FOR COMPARISON:
${JSON.stringify(currentPolicies, null, 2)}

IMPORTANT: Only update existing policies if there are meaningful changes in the document content. Do not make cosmetic changes or basic rewording. If the policy meaning is essentially the same, keep the existing version.`
    : `
CURRENT POLICIES: None (this may be a new document or first-time analysis)`;

  return `You are an AI assistant specialized in extracting and structuring content removal policies from legal documents. Your task is to identify ALL policies relevant to image takedown requests and non-consensual content sharing.

DOCUMENT INFORMATION:
- URL: ${documentUrl}
- Title: ${documentTitle}
- Reference: ${documentReference}

${currentPoliciesContext}

DOCUMENT CONTENT (MARKDOWN):
${documentMarkdown}

EXTRACTION REQUIREMENTS:

**Target Policy Areas:**
1. Non-consensual intimate imagery (NCII/revenge porn)
2. Harassment and bullying (especially image-based)
3. Privacy violations (sharing private content)
4. Impersonation (using someone's images)
5. Copyright infringement (unauthorized image use)
6. Deepfakes and AI-generated content
7. Sextortion and threats
8. Account security and hacking
9. Content removal processes
10. Appeal and review processes

**Policy Structure Requirements:**
Each policy must include:
- **ID**: Unique identifier (format: platform-doc-policy, e.g., "fb-cs-ncii")
- **Reference**: Document-specific reference code (can be null)
- **Summary**: Clear, actionable policy statement (1-2 sentences)
- **Quote**: Exact text from document supporting this policy
- **Content Types**: Array of applicable types: ["intimate", "personal", "private", "other"]
- **Content Contexts**: Array of applicable contexts: ["hacked", "impersonation", "relationship", "unknown", "other"]
- **Timeframes**: Response and removal timeframes if specified (null if not mentioned)
- **Evidence Requirements**: What users need to provide for takedown requests
- **Removal Criteria**: Specific conditions that trigger content removal

**Quality Standards:**
- Extract comprehensive policies, don't miss relevant sections
- Use exact quotes from the document, not paraphrased content
- Ensure evidence requirements are realistic and don't include sensitive data requests
- Map content types and contexts accurately based on policy scope
- Include timeframes only if explicitly stated in the document

**Appeal Process Extraction:**
If the document contains information about appeals or review processes:
- Extract the appeal URL if provided
- Summarize the appeal process
- List the specific steps users must follow

OUTPUT FORMAT:
Respond with valid JSON only:

{
  "success": true,
  "policies": [
    {
      "id": "unique-policy-id",
      "reference": "DOC-SECTION-REF" | null,
      "summary": "Clear policy statement for takedown letters",
      "quote": "Exact text from the document",
      "contentTypes": ["intimate", "personal", "private", "other"],
      "contentContexts": ["hacked", "impersonation", "relationship", "unknown", "other"],
      "timeframes": {
        "response": { "value": 48, "unit": "hours", "description": "Platform commitment" } | null,
        "removal": { "value": 24, "unit": "hours", "description": "Removal timeframe" } | null
      } | null,
      "evidenceRequirements": [
        {
          "description": "What user needs to provide",
          "example": "Optional example",
          "reason": "Why this evidence is needed"
        }
      ],
      "removalCriteria": [
        "Specific condition that triggers removal",
        "Another removal criterion"
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
  } | null,
  "reasoning": "Explanation of what policies were found and extraction decisions made"
}

CRITICAL: Extract ALL relevant policies comprehensively. This is the primary source for generating takedown requests, so completeness and accuracy are essential.

RESPOND WITH VALID JSON ONLY:`;
}