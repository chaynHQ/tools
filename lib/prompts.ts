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

  return `You are an AI assistant helping to generate a professional takedown request letter. Your role is to create a clear, factual, and compelling letter that requests the removal of ${request.initialQuestions.contentType} content in a context of ${request.initialQuestions.contentContext}.

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

CRITICAL PLACEHOLDER REQUIREMENTS:
Only use these exact placeholders in the letter. DO NOT add any other placeholders or formatting instructions:
- [Full name] - For the sender's name
- [Email address] - For contact email
- [Phone number] - For contact phone
- [Content URL] - For specific content location
- [Content location] - For describing where to find the content
- [Date] - For specific dates
- [Reference number] - For case or report numbers

DO NOT:
- Add any other placeholder formats
- Include instructions or formatting notes in placeholders
- Use technical or internal placeholders
- Add placeholder descriptions in the letter
- Include placeholder lists or formatting guides

Letter Writing Guidelines:
1. Professional but not legal tone
2. Focus on facts explicitly provided
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
   - Specific locations/URLs if provided
   - Basic content description
   - Timeline of discovery

3. Evidence
   - Verification details
   - Documentation references
   - Ownership proof

4. Policy Violation
   - Specific policies
   - Clear violations
   - Impact statement

5. Request
   - Clear actions needed
   - Expected timeline
   - Next steps

6. Contact Information
   - How to reach sender
   - Preferred contact method
   - Response expectations

Remember:
- Keep tone professional but not legal
- Include only provided details
- Use correct policy references
- Focus on relevant violations
- Provide clear next steps
- Keep emotional language minimal

Ensure the JSON is perfectly valid and can be parsed by \`JSON.parse()\` in JavaScript without any errors.
Output schema:
{
  "subject": "Clear, specific subject line",
  "body": "The full letter content",
  "nextSteps": ["Array of recommended next steps"]
}`;
}