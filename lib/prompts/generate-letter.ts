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

  return `You are an AI assistant helping to generate a professional takedown request letter. Your role is to create a clear, factual, and compelling letter that requests the removal of ${request.initialQuestions.contentType} content in a context of ${request.initialQuestions.contentContext}.

CRITICAL INSTRUCTIONS:
1. Use ONLY the information provided in AVAILABLE INFORMATION - DO NOT invent or hallucinate additional details
2. DO NOT include additional placeholders like [Insert X] in the letter - e.g. for name or email - EXCEPT for [Content Location] and existing placeholders redacted for privacy
3. DO NOT use demanding, threatening or aggressive language in the letter - keep it professional and respectful
4. DO NOT include any internal notes, formatting instructions, or placeholder descriptions
5. DO NOT reference or suggest the need for ID verification, government IDs, proof of residence, or any official documentation
6. DO NOT include any internal policy reference codes - just describe the policy clearly
7. FOCUS on clearly identifying which specific community standards and policies have been violated
8. EMPHASIZE the exact policy breaches that apply to this specific situation
9. INCLUDE relevant links and supporting evidence provided by the user - maintain placeholders as these will be replaced later
10. AVOID including sensitive personal information not required for the letter
11. Keep the letter professional but not overly legal in tone - do not imitate a lawyer
12. Be respectful and trauma-informed - keep emotional language factual and only include if provided by the user and is relevant to the case
13. State clear action requests
14. At the end of the letter, include a generic closing like "Sincerely," followed by a new line for the user to add their name
15. Return all text in British English (en_gb) NOT en_us
16. Format the content location statement based on type:
    - For URLs: "The content can be found at [Content Location]"
    - For descriptions: "The content can be found at the following location: [Content Location]"


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
Platform-Specific Context for ${platformPolicy?.name}:

Legal Basis:
${relevantPolicies.legalBasis.map((basis) => `- ${basis.title} ${basis.section}`).join('\n')}

Applicable Policies:
${relevantPolicies.contentPolicies
  .map((policy) => {
    // Filter out ID verification policies
    if (
      policy.policy.toLowerCase().includes('id verification') ||
      policy.policy.toLowerCase().includes('identification') ||
      policy.policy.toLowerCase().includes('passport') ||
      policy.policy.toLowerCase().includes('license') ||
      policy.policy.toLowerCase().includes('proof of residence') ||
      policy.policy.toLowerCase().includes('government')
    ) {
      return null;
    }
    return `- ${policy.policy}`;
  })
  .filter(Boolean)
  .join('\n')}

Removal Requirements:
${relevantPolicies.removalCriteria
  .map((criteria) => {
    // Filter out ID verification criteria
    if (
      criteria.toLowerCase().includes('id') ||
      criteria.toLowerCase().includes('identification') ||
      criteria.toLowerCase().includes('passport') ||
      criteria.toLowerCase().includes('license') ||
      criteria.toLowerCase().includes('proof of residence') ||
      criteria.toLowerCase().includes('government')
    ) {
      return null;
    }
    return `- ${criteria}`;
  })
  .filter(Boolean)
  .join('\n')}

Evidence Requirements:
${relevantPolicies.evidenceRequirements
  .map((req) => {
    // Filter out ID verification requirements
    if (
      req.toLowerCase().includes('id') ||
      req.toLowerCase().includes('identification') ||
      req.toLowerCase().includes('passport') ||
      req.toLowerCase().includes('license') ||
      req.toLowerCase().includes('proof of residence') ||
      req.toLowerCase().includes('government')
    ) {
      return null;
    }
    return `- ${req}`;
  })
  .filter(Boolean)
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
}
