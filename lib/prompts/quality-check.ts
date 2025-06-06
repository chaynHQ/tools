import { LetterRequest } from '@/types/letter';
import { QUALITY_CHECK_CRITERIA } from '../constants/ai';
import { getPlatformPolicy, getRelevantPolicies } from '../platform-policies';
import { platforms } from '../platforms';

export function generateLetterQualityCheckPrompt(letter: string, request: LetterRequest) {
  const initialInfo = request.initialQuestions;
  const followUpInfo = request.followUp || {};
  const reportingInfo = request.reportingDetails || {};

  const platformPolicy = request.platformInfo.isCustom
    ? null
    : getPlatformPolicy(platforms.find((p) => p.name === request.platformInfo.name)?.id || '');

  const relevantPolicies = platformPolicy
    ? getRelevantPolicies(
        platformPolicy,
        request.initialQuestions.contentType,
        request.initialQuestions.contentContext,
      )
    : null;

  const hasReportingHistory =
    reportingInfo.standardProcessDetails ||
    reportingInfo.escalatedProcessDetails ||
    reportingInfo.responseReceived ||
    reportingInfo.additionalStepsTaken;

  return `You are an expert in content takedown requests and platform policy enforcement. Your task is to rigorously review a generated takedown letter against a set of strict quality standards and provide detailed, actionable feedback for improvement or confirm its readiness.

ORIGINAL LETTER TO BE CHECKED:
---START LETTER---
${letter}
---END LETTER---

AVAILABLE INFORMATION (The letter should ONLY use details explicitly provided in this section):
Content Type: ${request.initialQuestions.contentType}
Content Context: ${request.initialQuestions.contentContext}
Platform: ${request.platformInfo.name}
Content Location Type: ${initialInfo.contentLocationType || 'Not provided'}
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

${
  relevantPolicies
    ? `

PLATFORM POLICY CONTEXT:
Platform-Specific polices Context for ${platformPolicy?.name} likely applicable to this letter:

${relevantPolicies
  .map(
    (policy) => `- *${policy.policy}*
  Documents: ${policy.documents.map((doc) => doc.title).join(', ')}
  Removal Criteria: ${policy.removalCriteria.join(', ')}
  Evidence Requirements: ${policy.evidenceRequirements.join(', ')}`,
  )
  .join('\n')}

Timeframes:
- Initial Response: ${platformPolicy?.timeframes.response}
- Content Removal: ${platformPolicy?.timeframes.removal}
`
    : ''
}

BANNED TERMS: The letter must not contain any of these terms or phrases. If found, their presence is a CRITICAL issue.
${QUALITY_CHECK_CRITERIA.MAJOR.SENSITIVE_TERMS.map(({ term, replacement }) => `- "${term}" (use "${replacement}")`).join('\n')}

CRITICAL ISSUES:
These issues indicate fundamental failures in adhering to core instructions and privacy, directly violating the original letter generation prompt's 'CRITICAL INSTRUCTIONS'.
1.  **Hallucination of Information**: The letter includes *any* details not provided in the "AVAILABLE INFORMATION" section.
    * **NOT examples of Hallucination**:
        * Slightly rephrased or summarized versions of provided information (e.g., "2023-01-01" can be rephrased to "1st Jan 2023".
        * References to TAKE IT DOWN Act of 2025 - this is a valid reference if included in the "PLATFORM POLICY CONTEXT".
    * **Examples of Hallucination**:
        * References to unprovided previous correspondence (e.g., "our phone call last Tuesday").
        * Claims about user requests or conversations not documented.
        * Assumptions about platform actions or decisions.
        * Any placeholder or internal formatting instruction not explicitly permitted (e.g., \`[Insert X]\`, \`[Your Name]\`, internal notes like "Do not include this").
2.  **Inclusion of Unnecessary Sensitive Personal Data**: The letter contains specific personal details that should not be shared or are not directly relevant to the policy violation.
    * **Examples**: Specific health conditions, precise addresses, full names of third parties not involved, highly detailed security incidents that go beyond summarizing impact.
    * This also includes overly emotional, graphic, or traumatic language not directly sourced from the *summarized* "Impact Statement" provided.
3.  **Incorrect Policy Application or Reference**: The letter fundamentally misunderstands or misrepresents platform policies.
    * References policy *codes* (e.g., "FB-TOS", "TT-CG-Integrity") instead of their full titles and documents as provided in "PLATFORM POLICY CONTEXT."
    * Mentions policies that are explicitly related to ID verification, government IDs, passports, licenses, proof of residence, or any official documentation.
    * Fails to clearly identify or emphasize *which specific* community standards or policies from "PLATFORM POLICY CONTEXT" have been violated.
    * Makes assumptions about content violations without clear alignment to provided policy context.
4.  **Presence of Banned Terms**: The letter contains any of the exact phrases or terms listed in the "BANNED TERMS" section above.
5.  **Demanding, Threatening, or Aggressive Language**: The letter uses hostile, accusatory, or overly demanding language (e.g., "you *must* remove this immediately," "I demand action").
6.  **Language/Regional Inconsistency**: The letter is not entirely in British English (en_gb) as required.

MINOR ISSUES:
These issues affect the quality, professionalism, and effectiveness of the letter, but do not indicate a fundamental error requiring full regeneration.
1.  **Tone and Style**:
    * The language is unprofessional, lacks appropriate respect, or is not sufficiently direct and concise.
    * The tone is not trauma-informed, potentially invalidating the user's experience (e.g., dismissing the severity of impact without empathy).
    * The letter attempts to imitate a lawyer or legal expert (e.g., using excessive legal jargon not typically found in takedown requests).
2.  **Structure and Clarity**:
    * The organization is poor, making it difficult for the platform to quickly understand the narrative or the core request.
    * Action requests are unclear, ambiguous, or not precisely aligned with typical platform policies (e.g., simply "fix this" instead of "removal of content," "review of account status," or "investigation of the issue").
    * The letter fails to include or maintain *relevant* existing placeholders (e.g., \`[Content Location]\`, \`[Phone]\`) when the corresponding \`AVAILABLE INFORMATION\` was provided. Note these may have been removed due to note being relevant to the letter.
3.  **Evidence/Information Handling**:
    * The letter requests sensitive personal details, ID verification, or official documents from the platform that were explicitly forbidden to be requested (e.g., passport scans, proof of residence).
    * *Relevant* links or supporting evidence (from \`AVAILABLE INFORMATION\`) were either not included or were not maintained with their existing placeholders. Note these may have been removed due to note being relevant to the letter.
    * Impact statements are not summarized carefully; they either understate the user's described impact, overstate it, or include sensitive specifics that should have been generalized/summarized. A good summary should be factual, validating, and protect user privacy e.g. "This is causing significant emotional distress and anxiety.".
4.  **Subject Line Quality**: The subject line is unclear, too generic, or does not accurately reflect the letter's specific purpose and content type (e.g., "Important Letter" instead of "Request to Remove Unauthorized Content - Deepfake Image").

REVIEW INSTRUCTIONS:
1.  **FIRST: Check for CRITICAL ISSUES.** Scan the "ORIGINAL LETTER TO BE CHECKED" for any listed "CRITICAL ISSUES."
    * If *any* critical issue is found, set \`passesQualityCheck\` to \`false\`, \`severity\` to \`critical\`, list *all* identified critical issues in the \`issues\` array
2.  **SECOND: If no critical issues, check for MINOR ISSUES.** If no critical issues are present, then proceed to identify "MINOR ISSUES."
    * If one or more minor issues are found, set \`passesQualityCheck\` to \`false\`, \`severity\` to \`minor\`, list *all* identified minor issues in the \`issues\` array
    * If *no* critical or minor issues are found, set \`passesQualityCheck\` to \`true\`, \`severity\` to \`none\`, the \`issues\` array must be empty (\`[]\`), and \`improvedLetter\` should be an empty object (\`{}\`).
3.  **FINAL: If any issues are found, provide an \`improvedLetter\` object containing a fully revised \`subject\` and \`body\` that precisely addresses *all* identified minor issues.

RETURN FORMAT:
You must respond with a valid JSON object containing exactly these fields:

{
  "passesQualityCheck": boolean,
  "severity": "critical" | "minor" | "none",
  "issues": [
    {
      "type": "critical" | "minor",
      "issue": "A precise description of the specific issue found. For banned terms, state the term found. For policy issues, state the policy that was incorrectly referenced or missed.",
      "issueType: "The type of issue: hallucination, sensitive data, policy error, banned term, tone/style, structure/clarity, evidence/information, or subject line quality. Do not include specific examples of the issue, just the type.",
    }
  ],
  "improvedLetter": {
    "subject": "Improved subject line",
    "body": "Improved letter body"
  }
}
`;
}
