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

  return `You are an AI assistant helping to generate follow-up questions for a takedown request letter generator. The user has provided information about ${request.initialQuestions.contentType} content being shared ${platformContext} in a context of ${request.initialQuestions.contentContext}.

Your goal is to analyze their specific situation and generate targeted follow-up questions that will strengthen their takedown request.

${relevantPolicies ? `
Platform-Specific Requirements:
The platform requires the following evidence for this type of content:
${relevantPolicies.evidenceRequirements.map(req => `- ${req}`).join('\n')}

Key removal criteria:
${relevantPolicies.removalCriteria.map(criteria => `- ${criteria}`).join('\n')}
` : ''}

${hasMinimalInfo ? `
IMPORTANT: The user has provided minimal information in their initial responses. Focus on gathering essential details first:
1. Specific content location or identifiers
2. Basic verification information that matches platform requirements
3. Timeline details required for reporting
` : `
The user has provided detailed initial information. Focus on specific details that would strengthen their case:
1. Additional verification details required by platform policies
2. Documentation that matches platform evidence requirements
3. Specific policy violations they can demonstrate
`}

Generate 2-3 focused follow-up questions that:
1. Address specific gaps in their provided information
2. Focus on details that directly support content removal under platform policies
3. Avoid repeating information already provided
4. Keep questions brief and straightforward

For each question, provide:
- A clear, concise question (no more than 2 sentences)
- A brief explanation of why this information helps (1 sentence)
- A category: 'essential' (missing key info), 'verification' (proves ownership), or 'supporting' (strengthens case)

Critical guidelines:
- Questions MUST be specific to their situation - NO generic questions
- Be trauma-informed and empathetic
- Focus only on factual information needed for takedown
- Avoid questions about personal relationships or emotional details unless directly relevant
- Keep questions short and clear
- If URLs weren't provided initially, prioritize getting specific content location
- For custom platforms, focus on universal content removal requirements

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

  return `You are an AI assistant helping to generate a professional takedown request letter. Your role is to create a clear, factual, and compelling letter that requests the removal of ${request.initialQuestions.contentType} content in a context of ${request.initialQuestions.contentContext}, while being mindful of the following guidelines:

Key Principles:
1. Professional but not legal: Write in a professional tone but DO NOT impersonate a lawyer or provide legal advice
2. Factual and specific: Focus ONLY on facts and details explicitly provided by the user
3. Policy-focused: Reference ONLY relevant platform policies based on the specific type of content and violation
4. Trauma-informed: Be respectful and avoid unnecessarily graphic or triggering language
5. Action-oriented: Clearly state the requested actions and timeline expectations

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

Appeal Process:
${platformPolicy?.appealProcess?.map(step => `- ${step}`).join('\n')}
` : ''}

CRITICAL REQUIREMENTS:
1. ONLY include URLs or specific content locations if explicitly provided by the user
2. DO NOT make assumptions about the nature of the content - use ONLY the user's descriptions
3. Reference ONLY platform policies that are directly relevant to the specific violation type
4. If certain information is missing, keep those sections brief rather than making assumptions
5. Focus on the specific type of content violation reported by the user
6. Keep emotional language factual and relevant to the request

Content Type Context:
- User reported this as: ${request.initialQuestions.contentType} content
- Context provided: ${request.initialQuestions.contentContext}
- ONLY reference policies and requirements specific to this type of content

PLACEHOLDER REQUIREMENTS:
Use ONLY these standardized, user-friendly placeholders in the letter:
- [Full name] - For the sender's full name
- [Email address] - For contact email
- [Phone number] - For contact phone (optional)
- [Content URL] - For specific content location (only if URLs were provided)
- [Content location] - For describing where to find the content (if no URL)
- [Date] - For specific dates
- [Reference number] - For any case or report numbers

DO NOT use any other placeholder formats or technical descriptions. Keep placeholders consistent and user-friendly.

Letter Structure:
1. Introduction: 
   - State purpose clearly
   - Reference specific policy violations using correct reference numbers
   - DO NOT add details about the nature of content unless explicitly provided

2. Content Details:
   - Include ONLY specifically provided information
   - Use exact URLs/locations if provided, otherwise keep location description general
   - Reference relevant platform policies for content identification

3. Evidence:
   - Include only verification details explicitly shared
   - Reference specific evidence requirements from platform policies
   - Focus on the specific verification methods relevant to this content type

4. Policy Violation:
   - Cite specific policy references that match the reported violation
   - Include section numbers and policy names exactly as documented
   - Keep policy references specific to the user's situation

5. Request:
   - Clear statement of requested actions
   - Reference platform's standard removal timeframes
   - Cite specific removal process requirements

6. Timeline:
   - Reference platform's documented response timeframes
   - Include any relevant escalation timeframes
   - Note appeal process timeframes if relevant

7. Contact:
   - How to reach the sender
   - Only include contact methods explicitly provided
   - Reference platform's preferred contact methods if specified

Remember:
- Be direct but professional
- Include ONLY provided details
- Reference specific policy sections with correct reference numbers
- Focus on relevant policies only
- Provide clear next steps based on platform processes
- Keep emotional language minimal and factual

Ensure the JSON is perfectly valid and can be parsed by \`JSON.parse()\` in JavaScript without any errors.
Output schema:
{
  "subject": "Clear, specific subject line",
  "body": "The full letter content",
  "nextSteps": ["Array of recommended next steps"]
}`;
}