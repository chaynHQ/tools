import { LetterRequest } from '@/types/letter';
import { QUALITY_CHECK_CRITERIA, SENSITIVE_TERMS } from './ai';
import { getPlatformPolicy, getRelevantPolicies } from './platform-policies';
import { platforms } from './platforms';
import { serverInstance as rollbar } from './rollbar';

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

  const initialResponses = request.initialQuestions;

  // Check what information we already have
  const hasContentLocation =
    initialResponses.contentLocationType === 'url'
      ? initialResponses.contentUrl && initialResponses.contentUrl.length > 0
      : initialResponses.contentDescription && initialResponses.contentDescription.length > 0;
  const hasTimeline = initialResponses.imageUploadDate && initialResponses.imageTakenDate;
  const hasOwnershipEvidence = initialResponses.ownershipEvidence?.length > 30;
  const hasImpactStatement = initialResponses.impactStatement?.length > 30;

  return `You are an AI assistant helping to generate 2-3 follow-up questions for a takedown request letter generator. The user has provided information about ${request.initialQuestions.contentType} content being shared ${platformContext} in a context of ${request.initialQuestions.contentContext}.

CRITICAL: Review the information already provided before generating questions:

Content Location: ${hasContentLocation ? 'PROVIDED' : 'MISSING'}
Timeline Details: ${hasTimeline ? 'PROVIDED' : 'MISSING'}
Ownership Evidence: ${hasOwnershipEvidence ? 'PROVIDED' : 'NEEDS MORE DETAIL'}
Impact Statement: ${hasImpactStatement ? 'PROVIDED' : 'NEEDS MORE DETAIL'}

Initial Information Provided:
${Object.entries(initialResponses)
  .filter(([key]) => !['contentUrl', 'contentDescription'].includes(key))
  .map(([key, value]) => `${key}: ${value}`)
  .join('\n')}

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

  // Extract and validate existing information
  const initialInfo = request.initialQuestions;
  const followUpInfo = request.followUp || {};
  const reportingInfo = request.reportingDetails || {};

  // Analyze what information we already have
  const hasReportingHistory =
    reportingInfo.standardProcessDetails || reportingInfo.escalatedProcessDetails;

  return `You are an AI assistant helping to generate a professional takedown request letter. Your role is to create a clear, factual, and compelling letter that requests the removal of ${request.initialQuestions.contentType} content in a context of ${request.initialQuestions.contentContext}.

CRITICAL INSTRUCTIONS:
1. Use ONLY the information provided by the user - DO NOT invent or hallucinate additional details
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
   ${SENSITIVE_TERMS.map(({ term, replacement }) => `- "${term}" (use "${replacement}")`).join('\n   ')}

AVAILABLE INFORMATION:
Content Location Type: ${initialInfo.contentLocationType || 'Not provided'}
Upload Date: ${initialInfo.imageUploadDate || 'Not provided'}
Creation Date: ${initialInfo.imageTakenDate || 'Not provided'}
Ownership Evidence: ${initialInfo.ownershipEvidence || 'Not provided'}
Impact Statement: ${initialInfo.impactStatement || 'Not provided'}
${hasReportingHistory ? `Previous Reports: ${reportingInfo.standardProcessDetails || ''} ${reportingInfo.escalatedProcessDetails || ''}` : ''}
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

export function generateLetterQualityCheckPrompt(letter: string, request: LetterRequest) {
  return `You are an expert in content takedown requests and platform policy enforcement. Your task is to review a generated takedown letter and ensure it meets quality standards.

ORIGINAL LETTER:
${letter}

CONTEXT:
- Content type: ${request.initialQuestions.contentType}
- Content context: ${request.initialQuestions.contentContext}
- Platform: ${request.platformInfo.name}

CRITICAL ISSUES (Require regeneration):
1. Hallucinations - Inventing information not provided:
   - References to previous correspondence
   - Claims about user requests or conversations
   - Assumptions about platform actions

2. Sensitive data included:
   - Users story or personal details where it does not support the case (policy violations should be the focus)
   - Overly emotional language or personal information related to health, identity, or personal circumstances

3. Lack of policy focus:
   - References to policies not relevant to the content type
   - References to policy codes or internal references, only allow clear policy descriptions
   - Does not clearly state which policies were violated
   - Avoids making assumptions about content

MINOR ISSUES (Must be improved):
1. Tone and Style:
   - Overly demanding language
   - Excessive urgency
   - Unprofessional phrasing
   - Language unaligned with trauma-informed care

2. Structure:
   - Missing key components
   - Poor organization
   - Unclear requests
   - Note: do not update the policies as these are set by the platform

3. Requesting evidence:
   - Asking for sensitive personal details
   - Requests for ID verification
   - Requests for official documents

REVIEW INSTRUCTIONS:
1. First check for CRITICAL issues that require regeneration
2. Then identify MINOR issues that can be improved
3. If only minor issues exist, provide an improved version
4. Return analysis in this JSON format:

{
  "passesQualityCheck": boolean,
  "severity": "critical" | "minor" | "none",
  "issues": [
    {
      "type": "critical" | "minor",
      "issue": "Description of the issue"
    }
  ],
  "improvedLetter": {
    "subject": "Improved subject line if needed",
    "body": "Improved letter body if needed"
  }
}

IMPORTANT: When providing improvedLetter, always include both subject and body as a complete letter object, even if only one part needs improvement.`;
}
