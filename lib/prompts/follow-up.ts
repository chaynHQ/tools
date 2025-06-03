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

Applicable Policies:
${relevantPolicies
  .map(
    (policy) => `- *${policy.policy}*
  Documents: ${policy.documents.map((doc) => doc.title).join(', ')}
  Removal Criteria: ${policy.removalCriteria.join(', ')}
  Evidence Requirements: ${policy.evidenceRequirements.join(', ')}`,
  )
  .join('\n')}
`
    : ''
}

BANNED TERMS: The questions must not contain any banned terms or phrases:
${QUALITY_CHECK_CRITERIA.MAJOR.SENSITIVE_TERMS.map(({ term, replacement }) => `- "${term}" (use "${replacement}")`).join('\n')}

CRITICAL RULES:
1. Prioritize questions that help establish clear links between the content shared and SPECIFIC policy violations and community standards breaches.
2. Questions should build upon existing information only where required for clarification essential to the request. Direct policy violations should be the focus, not personal details or emotional language.
3. DO NOT ask for information that has already been provided or does support the case. If missing information is not essential for the letter, do not ask for it again.
4. DO NOT repeat questions about how to find the content or the content link/url, this has already been provided. DO NOT ask for timeline details if dates are already provided.
5. Do NOT ask specifics on the provided impact statement if we can already summarise the impact based on the provided information. Never ask for sensitive information such as medical, financial or security details.
6. DO NOT ask for personal information like name, email, or contact details, or ANY form of official documentation or ID verification.
7. Use sensitive trauma-informed approach and language - avoid language like "evidence" and "proof" - see the provided BANNED TERMS for guidance.
8. Return all text in British English (en_gb) NOT en_us
9. Return a maximum of 4 questions. If no additional information is needed, return an empty array. Remember, the user has already provided a lot of information, so only ask for what is absolutely essential or would significantly strengthen the case.

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
- A clear, concise question (max 20 words)
- A brief explanation of why this information supports the request (1-2 sentences)
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
