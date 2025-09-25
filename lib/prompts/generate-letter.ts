import { LetterRequest } from '@/types/letter';
import { QUALITY_CHECK_CRITERIA } from '../constants/ai';
import { getDocumentsWithRelevantPolicies, getPlatformPolicy } from '../platform-policies';
import { getPlatformPolicyId } from '../platforms';
import { serverInstance as rollbar } from '../rollbar';
import { formatInputsForAI, formatPolicyDataForAI } from './format-inputs';

export const letterPromptInstructions = `
# 1. CORE PRINCIPLE: BALANCE EFFECTIVENESS WITH EMPATHY
While the letter must be concise and scannable for moderators, it must also respectfully reflect the user's voice and the severity of their situation. Use the first-person ('I', 'my') where appropriate to center their experience.

# 2. INTERNAL THOUGHT PROCESS & EXECUTION PLAN
Before writing, you MUST follow these internal steps:
1.  **Analyze the Case**: Thoroughly review the \`userInputs\` to understand the core facts.
2.  **Synthesize Key Facts**: Distill the user's report into 3-6 concise, factual bullet points written from the user's first-person perspective. These facts must not contain the user's emotional impact.
3.  **Select Relevant Policies**: Scan the \`platformPolicyContext\` and select 3-6 of the most direct and powerful policies that are strongly correlated and directly violated by the key facts. Omit weaker correlations if focusing on fewer policies may be more effective for this request.
4.  **Construct the Letter**: Use the synthesized facts and selected policies to write the letter, adhering strictly to the optimized blueprint below.

---

# 3. GUIDELINES & CRITICAL RULES
You must adhere to all of the following rules when generating the letter.

### Core Directives
-   **Single Source of Truth:** You MUST base the entire response *only* on the variables provided in the \`# INPUTS\` section. Do not invent, assume, or infer any information.
-   **Professional Tone:** The tone must always be professional, direct, and respectful. Avoid demanding, aggressive, threatening, or overly legalistic language.
-   **Content Location:** The letter MUST include the exact statement: \`Content location: [Content Location]\`. This specific placeholder must be used.

### Style & Language
-   **Language:** All text must be in British English (en-GB).
-   **Sensitivity:** Adopt a trauma-informed and respectful approach. Be sensitive to the user's experience and ensure feminist principles are applied.
-   **Banned Terms:** The following terms are banned. The presence of any of these is a critical failure.
    ${QUALITY_CHECK_CRITERIA.MAJOR.SENSITIVE_TERMS.map(
      ({ term, replacement }) => `- Do not use "${term}". Instead, use "${replacement}".`,
    ).join('\n')}

### Information & Evidence
-   **Placeholders:** Maintain the exact placeholders (e.g., \`[URL]\`, \`[Phone]\`) from the \`# INPUTS\` data. DO NOT create new placeholders. Do not confuse the generic \`[URL]\` placeholder with the specific \`[Content Location]\` placeholder.
-   **Confidentiality:** DO NOT mention or request identity verification, government IDs, proof of residence, or similar official documentation.

### Impact Statements
-   You MUST summarize the user's description of impact according to these rules:
    -   **Factual Basis:** The summary must be based strictly on the user's input, without exaggeration.
    -   **Privacy-Preserving:** Generalise sensitive details using approved phrases like:
        -   \`This is causing significant emotional distress.\`
        -   \`This is negatively affecting my mental wellbeing.\`
        -   \`This is impacting my personal safety and security.\`
        -   \`This is affecting my professional life.\`

---

# 4. OPTIMIZED LETTER BLUEPRINT
Construct the letter following this exact structure for maximum clarity and impact. Start and finish with statements that frame the user's experience, and use unstyled headings only for sections with bullet lists.

1.  **Subject:** A clear and factual subject line, with keywords for routing.
2.  **Introduction:** Begin with a direct but personal statement that frames the issue from the user's perspective.
    -   **Example:** \`I am writing to report personal, intimate content that has been shared without my consent, in violation of your policies.\`
3.  **Content details:** A clean, scannable key-value list for essential data.
    -   \`Content Location: [Content Location]\`
    -   \`Upload Date: [DD/MM/YYYY]\` (Format user-provided dates like "10 March last year" to DD/MM/YYYY, using ${new Date().toLocaleDateString(
      'en-GB',
    )} as today's date for reference).
    -   \`Creation Date: [DD/MM/YYYY]\`
4.  **Content summary:** Present the key facts you synthesized as a short, **first-person** bulleted list (using "I" or "my").
    -   **Example:** \`- The content is an intimate photo that I created with a reasonable expectation of privacy.\`
5.  **Policy violations:** Present the violated policies as a clean, bulleted list.
    -   **Format:** \`- [Policy Document Title]: [Policy Summary]\`
6.  **Reporting history:** If provided, list previous reporting attempts and any other supporting evidence in a bulleted list for scannability.
    -   **Example:** \`- Standard Report Submitted via in-app tool: 16/03/2025\`
    -   **Example:** \`- Escalated Report Submitted via help centre form: 18/03/2025\`
7.  **Impact statement & requested action:** Closing paragraph should start with the privacy-preserving impact statement, and flow directly into the requested action to reinforce urgency. If platform timeframes are provided, reference them in the requested actions.
    -   **Example:** \`The unauthorized sharing of my private content is causing significant emotional distress and is creating serious concerns for my personal safety. I therefore request the immediate removal of this content, a review of the user's account, and the removal of any identical copies on the platform.\`
8.  **Closing:** End with \`Sincerely,\`.

---

# 5. FINAL OUTPUT FORMAT
You MUST respond with a single, valid JSON object that is parseable by \`JSON.parse()\`.
-   The JSON object must contain exactly two keys: \`subject\` and \`body\`.
-   The \`body\` value must be a single string with all new lines represented by \`\\n\`.
**Example:**
\`\`\`json
{
  "subject": "Formal Request for Content Removal - Violation of Platform Policies",
  "body": "Dear Platform Support Team,\\n\\nI am writing to formally request the removal of content that violates your stated policies...\\n\\nSincerely,\\n"
}
\`\`\`
`;
export function generateLetterPrompt(request: LetterRequest) {
  rollbar.info('generateLetterPrompt: Generating takedown letter prompt', {
    platformId: request.platformInfo.platformId,
    platformName: request.platformInfo.platformName,
    customName: request.platformInfo.customName,
    isCustom: request.platformInfo.isCustom,
  });

  let platformPolicies = null;
  if (!request.platformInfo.isCustom) {
    const policyId = getPlatformPolicyId(request.platformInfo.platformId);
    if (policyId) {
      platformPolicies = getPlatformPolicy(policyId);
      rollbar.info('generateLetterPrompt: Found platform policy', {
        platformId: request.platformInfo.platformId,
        policyId,
        platformName: platformPolicies?.platform,
      });
    } else {
      rollbar.warning('generateLetterPrompt: No policy ID found for platform', {
        platformId: request.platformInfo.platformId,
      });
    }
  }

  // Get platform policy context
  let platformPolicyContext = '';
  if (platformPolicies) {
    const documentsWithPolicies = getDocumentsWithRelevantPolicies(
      platformPolicies,
      request.initialQuestions.contentType,
      request.initialQuestions.contentContext,
    );

    rollbar.info('generateLetterPrompt: Policy filtering results', {
      platformId: request.platformInfo.platformId,
      contentType: request.initialQuestions.contentType,
      contentContext: request.initialQuestions.contentContext,
      totalDocuments: platformPolicies.policyDocuments.length,
      relevantDocuments: documentsWithPolicies.length,
      totalPolicies: platformPolicies.policyDocuments.reduce(
        (sum, doc) => sum + doc.policies.length,
        0,
      ),
      relevantPolicies: documentsWithPolicies.reduce((sum, doc) => sum + doc.policies.length, 0),
    });

    platformPolicyContext = formatPolicyDataForAI(platformPolicies, documentsWithPolicies);
  }

  const prompt = `You are an expert AI assistant specializing in platform policy enforcement and strategic communication. Your task is to write a takedown letter that achieves the perfect balance between clinical effectiveness for a content moderator and empathetic representation of a user's experience, while adhering to all critical guidelines.

${letterPromptInstructions}

# INPUTS
${formatInputsForAI(request)}

${platformPolicyContext}

RESPOND WITH VALID JSON ONLY:`;
  return prompt;
}
