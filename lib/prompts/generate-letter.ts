import { LetterRequest } from '@/types/letter';
import { getPlatformPolicy, getRelevantPolicies } from '../platform-policies';
import { platforms } from '../platforms';
import { serverInstance as rollbar } from '../rollbar';
import { QUALITY_CHECK_CRITERIA } from './constants';

export function generateLetterPrompt(request: LetterRequest) {
  rollbar.info('generateLetterPrompt: Generating takedown letter prompt', {
    platform: request.platformInfo.name,
  });

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

  const initialInfo = request.initialQuestions;
  const followUpInfo = request.followUp || {};
  const reportingInfo = request.reportingDetails || {};

  const hasReportingHistory =
    reportingInfo.standardProcessDetails ||
    reportingInfo.escalatedProcessDetails ||
    reportingInfo.responseReceived ||
    reportingInfo.additionalStepsTaken;

  const prompt = `You are an expert in content takedown requests and platform policy enforcement. Your role is to create a clear, factual, and compelling letter that requests the removal of ${request.initialQuestions.contentType} content in a context of ${request.initialQuestions.contentContext}, based on provided users inputs and platform policies.
 
CRITICAL INSTRUCTIONS:
1. Use ONLY the information provided in AVAILABLE INFORMATION - DO NOT invent or hallucinate additional details about the user's experience, previous correspondence, or platform actions.
2. DO NOT include additional placeholders like [Insert X] in the letter - e.g. for name or email. Note that existing placeholders exist for [Content Location] and sensitive data e.g. [Phone], include these where relevant to the letter but DO NOT add new ones.
3. DO NOT use demanding, threatening or aggressive language in the letter - use direct, concise, professional and respectful language throughout. Be professional and factual, but do not imitate a lawyer or legal expert.
4. DO NOT include any internal notes, formatting instructions, or placeholder descriptions. This is a final letter to be sent to the platform.
5. DO NOT reference ID verification, government IDs, proof of residence, or any official documentation.
6. DO NOT include any policy reference codes e.g. "FB-TOS" or "TT-CG-Integrity". Use policy title and section values exactly as they are provided below.
7. FOCUS on clearly identifying and emphasising which specific community standards and policies have been violated.
8. INCLUDE relevant links and supporting evidence provided by the user - maintain any existing placeholders as these will be replaced later.
9. AVOID including sensitive personal information not required for the letter.
10. Be respectful and trauma-informed - keep emotional language factual and only include if provided by the user and is relevant to the case.
11. State clear action requests aligned with the platform's policies, such as removal of content, review of account status, or investigation of the issue.
12. At the end of the letter, include a generic closing like "Sincerely," followed by a new line for the user to add their name.
13. Return all text in British English (en_gb) NOT en_us.
14. Format the content location statement based on type:
    - For URLs: "The content can be found at [Content Location]"
    - For descriptions: "The content can be found at the following location: [Content Location]"
15. Impact statements should be summarised carefully to ensure:
    - Summaries are factual and based on the provided information.
    - Summaries accurately reflect the user's description of the impact and are validating, do not understate or overstate the impact.
    - Sensitive information is excluded to protect user privacy - exclude specific details about health, security, or personal circumstances and instead use a summary statement.
    - Example summary statements: "This is causing significant emotional distress and anxiety.", "This is negatively affecting my mental wellbeing.", "This is impacting my personal safety and security.", "This is causing damage to my reputation.", "This is affecting my professional life/job security."

BANNED TERMS: The letter must not contain any banned terms or phrases:
${QUALITY_CHECK_CRITERIA.MAJOR.SENSITIVE_TERMS.map(({ term, replacement }) => `- "${term}" (use "${replacement}")`).join('\n')}

AVAILABLE INFORMATION:
Content Location Type: ${initialInfo.contentLocationType || 'Not provided'}
Content Location: ${initialInfo.imageIdentification || 'Not provided'}
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
Platform-Specific Policy Context for ${platformPolicy?.name}:

Applicable Policies:
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

LETTER STRUCTURE (skip any sections that are not relevant):
1. Introduction
   - Clear purpose
   - Policy violations
   - Basic content identification

2. Content Details
   - Use [Content Location] placeholder
   - Include timeline information
   - Reference previous reports if any

3. Evidence
   - Include provided verification details
   - Reference documentation
   - Include ownership evidence

4. Policy Violation
   - Cite specific policies
   - Detail violations
   - Include impact statement

5. Request
   - Clear actions needed
   - Response expectations
   - Expected timeline
   - Next steps

RESPONSE FORMAT:
You must respond with a valid JSON object containing exactly two fields:
1. "subject": A clear, specific subject line for the email
2. "body": The complete letter content with proper line breaks

The response must be parseable by JSON.parse() and should look like this:
{
  "subject": "Request to Remove Unauthorized Content - [Content Type] Material",
  "body": "Dear [Platform] Support Team,\\n\\nI am writing to request...\\n\\nSincerely,\\n"
}

Remember:
- Use \\n for line breaks in the JSON
- Escape any quotes within the text
- Only include [Content Location] placeholder
- Only include information that was provided
- Keep the format simple and valid`;

  return prompt;
}
