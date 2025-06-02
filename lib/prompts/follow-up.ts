import { LetterRequest } from '@/types/letter';
import { getPlatformPolicy, getRelevantPolicies } from '../platform-policies';
import { platforms } from '../platforms';
import { serverInstance as rollbar } from '../rollbar';
import { QUALITY_CHECK_CRITERIA } from './constants';

export function generateFollowUpPrompt(request: LetterRequest) {
  rollbar.info('generateFollowUpPrompt: Generating follow-up questions prompt', {
    platform: request.platformInfo.name,
  });

  // Validate required data
  if (!request.initialQuestions || !request.platformInfo) {
    rollbar.error(
      'generateFollowUpPrompt: Missing required data for generating follow-up questions',
    );
    throw new Error('Missing required data for generating follow-up questions');
  }

  const initialInfo = request.initialQuestions || {};
  const reportingInfo = request.reportingDetails || {};
  const hasReportingHistory =
    reportingInfo.standardProcessDetails ||
    reportingInfo.escalatedProcessDetails ||
    reportingInfo.responseReceived ||
    reportingInfo.additionalStepsTaken;

  // Validate platformInfo
  if (!request.platformInfo.name) {
    rollbar.error('generateFollowUpPrompt: Missing platform name in platformInfo');
    throw new Error('Missing name in platformInfo');
  }

  const platform = request.platformInfo.isCustom
    ? null
    : platforms.find((p) => p.name === request.platformInfo.name);

  const platformPolicy = platform ? getPlatformPolicy(platform.id) : null;

  const relevantPolicies = platformPolicy
    ? getRelevantPolicies(
        platformPolicy,
        request.initialQuestions.contentType,
        request.initialQuestions.contentContext,
      )
    : null;

  const platformContext = platform ? `on ${platform.name}` : 'on an online platform';

  return `You are an AI assistant helping to generate follow-up questions for a takedown request letter generator. The user has provided information about ${request.initialQuestions.contentType} content being shared ${platformContext} in a context of ${request.initialQuestions.contentContext}.

CRITICAL: Review the information already provided before generating questions:

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

${
  relevantPolicies
    ? `
Platform-Specific Requirements:
The platform requires the following evidence for this type of content:
${relevantPolicies.evidenceRequirements
  .map((req) => {
    // Only filter out requirements that match sensitive terms
    const isSensitive = QUALITY_CHECK_CRITERIA.MAJOR.EVIDENCE_TERMS.some((term) => term.test(req));
    return isSensitive ? null : `- ${req}`;
  })
  .filter(Boolean)
  .join('\n')}

Key removal criteria:
${relevantPolicies.removalCriteria
  .map((criteria) => {
    // Only filter out criteria that match sensitive terms
    const isSensitive = QUALITY_CHECK_CRITERIA.MAJOR.EVIDENCE_TERMS.some((term) =>
      term.test(criteria),
    );
    return isSensitive ? null : `- ${criteria}`;
  })
  .filter(Boolean)
  .join('\n')}
`
    : ''
}

BANNED TERMS: The questions must not contain any banned terms or phrases:
${QUALITY_CHECK_CRITERIA.MAJOR.SENSITIVE_TERMS.map(({ term, replacement }) => `- "${term}" (use "${replacement}")`).join('\n')}

CRITICAL RULES:
1. DO NOT ask for information that has already been provided or does support the case
2. DO NOT repeat questions about URLs if content location is already given
3. DO NOT ask for timeline details if dates are already provided
4. Focus ONLY on gaps in the provided information that are essential for the letter or request
5. Questions should build upon existing information only where required, not duplicate it
6. DO NOT ask for personal information like name, email, or contact details
7. DO NOT ask for ANY form of official documentation or ID verification
8. This is the ONLY opportunity to request information needed for the letter - if information is not collected here, it will not be included in the letter
9. Focus on questions that help identify SPECIFIC policy violations and community standards breaches
10. Prioritize questions that establish clear links between the content and platform policy violations
11. Use a sensitive trauma-informed approach and language - avoid language like "evidence" and "proof"
12. Return all text in British English (en_gb) NOT en_us
13. If no additional information is needed, return an empty array. Remember, the user has already provided a lot of information, so only ask for what is absolutely essential or would significantly strengthen the case.

ALLOWED TOPICS:
- Content description (without requesting sensitive details)
- Timeline of events
- Impact on the person
- Previous actions taken
- Evidence of ownership (without requesting official documents)
- Platform-specific details about the content
- Context about how the content was shared
- Specific policy violations

For each question, provide:
- A clear, concise question (no more than 1 sentence)
- A brief explanation of why this information helps (1-2 sentences)
- A category: 'essential' (missing key info), 'verification' (proves ownership), or 'supporting' (strengthens case)

Ensure the JSON is perfectly valid and can be parsed by \`JSON.parse()\` in JavaScript without any errors.
Output schema:
[{
  "id": "unique_id",
  "question": "the follow-up question",
  "context": "why this information helps",
  "reason": "category"
}]`;
}
