import { LetterRequest } from '@/types/letter';
import { QUALITY_CHECK_CRITERIA } from '../constants/ai';
import { contentTypes, contentContexts } from '../constants/content';
import { getDocumentsWithRelevantPolicies, getPlatformPolicy } from '../platform-policies';
import { getPlatformPolicyId } from '../platforms';
import { serverInstance as rollbar } from '../rollbar';
import { formatInputsForAI, formatPolicyDataForAI } from './format-inputs';

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
      totalPolicies: platformPolicies.policyDocuments.reduce((sum, doc) => sum + doc.policies.length, 0),
      relevantPolicies: documentsWithPolicies.reduce((sum, doc) => sum + doc.policies.length, 0),
    });
    
    platformPolicyContext = formatPolicyDataForAI(platformPolicies, documentsWithPolicies);
  }

  const prompt = `You are an expert AI assistant specializing in platform policy enforcement and strategic communication for content takedown requests. Your dual task is to first, analyze a user's situation to formulate the most effective takedown strategy, and second, to immediately execute that strategy by writing a clear, factual, and compelling takedown letter.

# INTERNAL THOUGHT PROCESS & EXECUTION PLAN

Before writing, you MUST follow these internal steps:
1.  **Analyze the Case**: Thoroughly review the \`userInputs\` to understand the content, context, and harm.
2.  **Formulate Strategy**: Scan the \`platformPolicyContext\`. Select up to 4 of most direct and powerful policies that apply. For each selected policy, formulate a concise reason that explicitly connects the policy to a specific detail in the user's report.
3.  **Construct the Letter**: Use your formulated strategy and all guidelines below to write the letter, ensuring every rule is followed.

---

# GUIDELINES & CRITICAL RULES

You must adhere to all of the following rules when generating the letter.

### **Core Directives**
1.  **Single Source of Truth:** You MUST base the entire response *only* on the variables provided in the \`# INPUTS\` section. Do not invent, assume, or infer any information not explicitly stated there.
2.  **Professional Tone:** The tone must always be professional, direct, and respectful. Avoid demanding, aggressive, threatening, or overly legalistic language that impersonates a legal representative.
3.  **Content Location:** The letter MUST include this exact statement: \`Content location: [Content Location]\` after the opening paragraph.
4.  **Optimised For Content Moderators:** The letter should be optimised for content moderators to effectively and efficiently process this request.
5.  **Final Output Only:** Generate only the final, ready-to-send letter. The body MUST NOT contain any of your own notes or comments.

### **Style & Language**
* **Language:** All text must be in British English (en-GB).
* **Sensitivity:** Adopt a trauma-informed and respectful approach. Be sensitive to the user's experience and ensure feminist principles are applied, including avoiding accusatory or derogatory language related to the user.
* **Banned Terms:** The following terms are banned due to not being aligned with trauma-informed and/or feminist principles. The presence of any of these is a critical failure.
    ${QUALITY_CHECK_CRITERIA.MAJOR.SENSITIVE_TERMS.map(
      ({ term, replacement }) => `- Do not use "${term}". Instead, use "${replacement}".`,
    ).join('\n')}

### **Information & Evidence**
* **Placeholders:** Maintain the existing placeholders from the \`# INPUTS\` data where the data supports the letter. Placeholders (e.g., \`[URL]\`, \`[Phone]\`) MUST be outputted with the exact same name and format. DO NOT create new placeholders.
* **Confidentiality:** DO NOT mention or request identity verification, government IDs, proof of residence, or similar official documentation.

### **Impact Statements**
* When a user provides a description of the content's impact, you MUST summarize it according to these rules:
    * **Factual Basis:** The summary must be based strictly on the user's input, without exaggeration or understatement.
    * **Privacy-Preserving:** Generalise sensitive health, security, or personal details into broader statements. Use approved phrases like:
        * \`This is causing significant emotional distress.\`
        * \`This is negatively affecting my mental wellbeing.\`
        * \`This is impacting my personal safety and security.\`
        * \`This is affecting my professional life.\`

---

# LETTER BLUEPRINT

Construct the letter following this exact structure. Omit any section if the corresponding input is not provided.

1.  **Introduction:** State the letter's purpose, briefly summarizing the core of the case based on your internal analysis.
2.  **Content Location & Timeline:** State the \`Content location: [Content Location]\`. If \`Upload Date\` and/or \`Creation Date\` are provided, state them clearly. Format user-provided values like "10 March last year" to a specific date format like "10/03/2024". Today's date is ${new Date().toLocaleDateString(
    'en-GB',
  )}.
3.  **Policy Violations:** Create a **bulleted "Narrative List"**.
    * **Do not use policy \`reference\` or \`id\` values:** - Values are internal only and are not relevant to content moderators.
    * **Format for each list item:** \`- **Violation of [Policy Document Title]:** [Policy Summary] – [Your concise reasoning connecting the policy to the case].\`
    * **Example:** \`- **Violation of Community Guidelines:** Prohibits non-consensual intimate imagery – this policy is violated as the content is an intimate photo shared without consent.\`
4.  **Supporting Evidence:** Reference any links or evidence provided by the user. Mention previous reporting processes if available in \`Standard Process Details\` and/or \`Escalated Process Details\`.
5.  **Impact Statement:** Include the privacy-preserving impact summary.
6.  **Requested Action:** Clearly state the requested actions (e.g., "I request the immediate removal of this content and a review of the user's account"). If platform timeframes are provided, reference them to set expectations.
7.  **Closing:** End with \`Sincerely,\` followed by a new line.

---

# FINAL OUTPUT FORMAT

You MUST respond with a single, valid JSON object. The response must be parseable by \`JSON.parse()\`.

* The JSON object must contain exactly two keys: \`subject\` and \`body\`.
* The \`body\` value must be a single string with all new lines represented by \`\\n\`.

**Example:**
\`\`\`json
{
  "subject": "Formal Request for Content Removal - Violation of Platform Policies",
  "body": "Dear Platform Support Team,\\n\\nI am writing to formally request the removal of content that violates your stated policies...\\n\\nSincerely,\\n"
}
\`\`\`

# INPUTS
${formatInputsForAI(request)}

${platformPolicyContext}
`;
  return prompt;
}
