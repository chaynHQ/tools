import { LetterRequest } from '@/types/letter';
import { QUALITY_CHECK_CRITERIA } from '../constants/ai';
import { getPlatformPolicy, getDocumentsWithRelevantPolicies, formatPolicyDataForAI } from '../platform-policies';
import { getPlatformPolicyId } from '../platforms';
import { serverInstance as rollbar } from '../rollbar';

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

  const documentsWithPolicies = platformPolicies
    ? getDocumentsWithRelevantPolicies(
        platformPolicies,
        request.initialQuestions.contentType,
        request.initialQuestions.contentContext,
      )
    : null;

  const initialInfo = request.initialQuestions;
  const followUpInfo = request.followUp || {};
  const reportingInfo = request.reportingDetails || {};

  const hasReportingHistory =
    reportingInfo.standardProcessDetails ||
    reportingInfo.escalatedProcessDetails ||
    reportingInfo.responseReceived ||
    reportingInfo.additionalStepsTaken;

  const prompt = `Act as an expert AI assistant specializing in platform policy enforcement and content takedown requests. Your objective is to generate a clear, factual, and compelling letter to a platform's (${request.platformInfo.platformName || request.platformInfo.customName}) support team, arguing for the removal of specific content based *exclusively* on the inputs provided.

# CRITICAL RULES

1.  **Single Source of Truth:** You MUST base the entire response *only* on the variables provided in the \`# INPUTS\` section. Do not invent, assume, or infer any information not explicitly stated there.
2.  **Professional Tone:** The tone must always be professional, direct, and respectful. Avoid demanding, aggressive, threatening, or overly legalistic language that impersonates a legal representative.
3.  **Content Location:** Every letter MUST include this exact statement: \`Content location: [Content Location]\` after the opening paragraph and alongside timeline dates. Do NOT use an existing placeholder like \`[URL]\` that may have been provided for extra evidence.
4.  **Final Output Only:** Generate only the final, ready-to-send letter. The body MUST NOT contain any of your own notes, comments, or newly generated placeholder descriptions (e.g., \`[Insert evidence description here]\`).

---

# CONTENT GENERATION GUIDELINES

### **Style & Language**
* **Language:** All text must be in British English (en-GB).
* **Sensitivity:** Adopt a trauma-informed and respectful approach. Be sensitive to the users experience and ensure feminist principles are applied including avoiding accusatory or derogatory language related to the user.
* **Banned Terms:** The following terms are banned due to not being aligned with trauma-informed and/or feminist principles. Use the suggested replacements for these examples.
    ${QUALITY_CHECK_CRITERIA.MAJOR.SENSITIVE_TERMS.map(({ term, replacement }) => `- Do not use "${term}". Instead, use "${replacement}".`).join('\n')}

### **Information & Evidence**
* **Policy Citations:** Cite policies using their exact summary and document title.
    * **Format:** \`Document Title: Policy Summary\`
    * **Example:** If the policy summary is "Prohibits sharing non-consensual intimate images" from the "Community Standards", cite it as \`Community Standards: Prohibits sharing non-consensual intimate images\`.
    * **Constraint:** DO NOT use internal codes, references, or abbreviations.
* **Placeholders:** Maintain the existing placeholders from the \`# INPUTS \` data where the data supports the letter. Placeholders (e.g.\`[URL]\`, \`[Phone]\`) MUST be outputted with the exact same name and format. DO NOT create new placeholders.
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

1.  **Introduction:** State the letter's purpose and briefly summarise the core policy violations.
2a.  **Content Location:** Every letter MUST include this exact statement: \`Content location: [Content Location]\`. Do NOT use an existing placeholder like \`[URL]\` that may have been provided for extra evidence.
2b.  **Content Timeline:**  If \`Upload Date\` and/or \`Creation Date\` are provided in the \`# INPUTS\` section, clearly state these e.g. \`Date uploaded: \`. Format the value provided by the user e.g. "10 March last year" to "10/03/24". Todays date is ${new Date()}.
3.  **Policy Violations:** List the specific policies violated, using the citation format defined in the guidelines.
4.  **Supporting Evidence:** Reference any links or evidence provided by the user. Mention previous reporting processes if available in \`# INPUTS\` \`Standard Process Details\` and/or \`Escalated Process Details\`.
6.  **Impact statement:** Include the privacy-preserving impact summary (see guidelines above). Use this statement to demonstrate the importance of the takedown request.
5.  **Requested Action:** Clearly state the requested actions (e.g., "I request the immediate removal of this content," "I ask for a review of this user's account status"). If platform timeframes are provided in the \`# INPUTS\`, include a reference to them in this paragraph, to set response expectations.
7.  **Closing:** End with \`Sincerely,\` followed by a new line. Avoid repeating

---

# FINAL OUTPUT FORMAT

You MUST respond with a single, valid JSON object. The response must be parseable by \`JSON.parse()\`.

* The JSON object must contain exactly two keys: \`subject\` and \`body\`.
* The \`body\` value must be a single string with all new lines represented by \`\n\`.

**Example:**
\`\`\`json
{
  "subject": "Formal Request for Content Removal - Violation of Platform Policies",
  "body": "Dear Platform Support Team,\\n\\nI am writing to formally request the removal of content that violates your stated policies...\\n\\nSincerely,\\n"
}
\`\`\`

# INPUTS
Content Type: ${request.initialQuestions.contentType}
Content Context: ${request.initialQuestions.contentContext}
Platform: ${request.platformInfo.platformName || request.platformInfo.customName}
Upload Date: ${initialInfo.imageUploadDate || 'Not provided'}
Creation Date: ${initialInfo.imageTakenDate || 'Not provided'}
Ownership Evidence: ${initialInfo.ownershipEvidence || 'Not provided'}
Impact Statement: ${initialInfo.impactStatement || 'Not provided'}
${
  hasReportingHistory
    ? `
Standard Process Details: ${reportingInfo.standardProcessDetails || 'Not provided'}
Escalated Process Details: ${reportingInfo.escalatedProcessDetails || 'Not provided'}
Response Received: ${reportingInfo.responseReceived || 'Not provided'}
Additional Steps Taken: ${reportingInfo.additionalStepsTaken || 'Not provided'}`
    : ''
}
${Object.entries(followUpInfo)
  .map(([key, value]) => `${key}: ${value || 'Not provided'}`)
  .join('\n')}

${platformPolicies && documentsWithPolicies ? formatPolicyDataForAI(platformPolicies, documentsWithPolicies) : ''}

`;

  return prompt;
}
