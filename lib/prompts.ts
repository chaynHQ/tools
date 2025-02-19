import { LetterRequest } from '@/types/letter';
import { getPlatformPolicy, getRelevantPolicies } from './platform-policies';
import { platforms } from './platforms';

export function generateFollowUpPrompt(request: LetterRequest) {
  const platform = request.platformInfo.isCustom 
    ? null 
    : platforms.find(p => p.name === request.platformInfo.name);
  
  const platformPolicy = platform 
    ? getPlatformPolicy(platform.id) 
    : null;

  const relevantPolicies = platformPolicy 
    ? getRelevantPolicies(
        platformPolicy,
        request.initialQuestions.contentType,
        request.initialQuestions.contentContext
      )
    : null;

  const platformContext = platform 
    ? `on ${platform.name}` 
    : 'on an online platform';

  const initialResponses = request.initialQuestions;
  const hasMinimalInfo = Object.values(initialResponses).some(value => !value || value.length < 20);

  // Check what information we already have
  const hasContentLocation = initialResponses.imageIdentification?.includes('http') || 
                           initialResponses.imageIdentification?.includes('www') ||
                           initialResponses.imageIdentification?.includes('URL');
  const hasTimeline = initialResponses.imageUploadDate && initialResponses.imageTakenDate;
  const hasOwnershipEvidence = initialResponses.ownershipEvidence?.length > 30;
  const hasImpactStatement = initialResponses.impactStatement?.length > 30;

  return `You are an AI assistant helping to generate follow-up questions for a takedown request letter generator. The user has provided information about ${request.initialQuestions.contentType} content being shared ${platformContext} in a context of ${request.initialQuestions.contentContext}.

CRITICAL: Review the information already provided before generating questions:

Content Location: ${hasContentLocation ? 'PROVIDED' : 'MISSING'}
Timeline Details: ${hasTimeline ? 'PROVIDED' : 'MISSING'}
Ownership Evidence: ${hasOwnershipEvidence ? 'PROVIDED' : 'NEEDS MORE DETAIL'}
Impact Statement: ${hasImpactStatement ? 'PROVIDED' : 'NEEDS MORE DETAIL'}

Initial Information Provided:
${Object.entries(initialResponses).map(([key, value]) => `${key}: ${value}`).join('\n')}

${relevantPolicies ? `
Platform-Specific Requirements:
The platform requires the following evidence for this type of content:
${relevantPolicies.evidenceRequirements.map(req => `- ${req}`).join('\n')}

Key removal criteria:
${relevantPolicies.removalCriteria.map(criteria => `- ${criteria}`).join('\n')}
` : ''}

CRITICAL RULES:
1. DO NOT ask for information that has already been provided
2. DO NOT repeat questions about URLs if content location is already given
3. DO NOT ask for timeline details if dates are already provided
4. Focus ONLY on gaps in the provided information
5. Questions should build upon existing information, not duplicate it
6. DO be sensitive to the users experience and ensure questions are not accusatory (avoid "prove") or triggering
7. DO NOT ask the user to provide identification to prove their identity

Generate 2-3 focused follow-up questions that ONLY address missing or insufficient information.

For each question, provide:
- A clear, concise question (no more than 2 sentences)
- A brief explanation of why this information helps (1 sentence)
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
  const platformPolicy = request.platformInfo.isCustom 
    ? null 
    : getPlatformPolicy(platforms.find(p => p.name === request.platformInfo.name)?.id || '');

  const relevantPolicies = platformPolicy 
    ? getRelevantPolicies(
        platformPolicy,
        request.initialQuestions.contentType,
        request.initialQuestions.contentContext
      )
    : null;

  // Extract and validate existing information
  const initialInfo = request.initialQuestions;
  const followUpInfo = request.followUp || {};
  const reportingInfo = request.reportingDetails || {};

  // Analyze what information we already have
  const contentLocation = initialInfo.imageIdentification;
  const hasSpecificUrl = contentLocation?.includes('http') || contentLocation?.includes('www');
  const hasTimeline = initialInfo.imageUploadDate && initialInfo.imageTakenDate;
  const hasReportingHistory = reportingInfo.standardProcessDetails || reportingInfo.escalatedProcessDetails;
  const hasReferenceNumbers = Object.values(followUpInfo).some(value => 
    value?.includes('case') || value?.includes('reference') || value?.includes('report')
  );

  return `You are an AI assistant helping to generate a professional takedown request letter. Your role is to create a clear, factual, and compelling letter that requests the removal of ${request.initialQuestions.contentType} content in a context of ${request.initialQuestions.contentContext}.

AVAILABLE INFORMATION:
Content Location: ${contentLocation}
Upload Date: ${initialInfo.imageUploadDate}
Creation Date: ${initialInfo.imageTakenDate}
Ownership Evidence: ${initialInfo.ownershipEvidence}
Impact Statement: ${initialInfo.impactStatement}
${hasReportingHistory ? `Previous Reports: ${reportingInfo.standardProcessDetails} ${reportingInfo.escalatedProcessDetails}` : ''}
${Object.entries(followUpInfo).map(([key, value]) => `${key}: ${value}`).join('\n')}

${relevantPolicies ? `
Platform-Specific Context for ${platformPolicy?.name}:

Legal Basis:
${relevantPolicies.legalBasis.map(basis => 
  `- ${basis.title} ${basis.section} (Ref: ${basis.reference})`
).join('\n')}

Applicable Policies:
${relevantPolicies.contentPolicies.map(policy => 
  `- ${policy.policy} (Ref: ${policy.reference})`
).join('\n')}

Removal Requirements:
${relevantPolicies.removalCriteria.map(criteria => `- ${criteria}`).join('\n')}

Evidence Requirements:
${relevantPolicies.evidenceRequirements.map(req => `- ${req}`).join('\n')}

Timeframes:
- Initial Response: ${platformPolicy?.timeframes.response}
- Content Removal: ${platformPolicy?.timeframes.removal}
` : ''}

PLACEHOLDER REQUIREMENTS:
Only use these placeholders for truly missing information:
- [Full name] - Always required for sender identification
- [Email address] - Always required for contact
${!hasSpecificUrl && contentLocation?.length < 30 ? '- [Content URL] - Only if no specific URL was provided\n' : ''}
${!hasReferenceNumbers && hasReportingHistory ? '- [Reference number] - Only if previous reports were filed but no reference numbers provided\n' : ''}

DO NOT:
- Include placeholders for information already provided
- Add any other placeholder formats
- Include instructions or formatting notes
- Use technical or internal placeholders
- Add placeholder descriptions in the letter

Letter Writing Guidelines:
1. Use all provided information directly - do not create placeholders for data we already have
2. Professional but not legal tone
3. Reference relevant platform policies
4. Be respectful and trauma-informed
5. State clear action requests
6. Include specific timeframes
7. Keep emotional language factual

Letter Structure:
1. Introduction
   - Clear purpose
   - Policy violations
   - Basic content identification

2. Content Details
   - Use provided locations/URLs
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
   - Expected timeline
   - Next steps

6. Contact Information
   - Placeholder for name and email
   - Response expectations

Remember:
- Use provided information directly
- Only use placeholders for truly missing information
- Keep tone professional but not legal
- Reference correct policies
- Provide clear next steps

Ensure the JSON is perfectly valid and can be parsed by \`JSON.parse()\` in JavaScript without any errors.
Output schema:
{
  "subject": "Clear, specific subject line",
  "body": "The full letter content",
  "nextSteps": ["Array of recommended next steps"]
}`;
}