import { LetterRequest } from '@/types/letter';
import { getPlatformPolicy } from './platform-policies';
import { platforms } from './platforms';

export function generateFollowUpPrompt(request: LetterRequest) {
  const platform = request.platformInfo.isCustom 
    ? null 
    : platforms.find(p => p.name === request.platformInfo.name);
  
  const platformContext = platform 
    ? `on ${platform.name}` 
    : 'on an online platform';

  return `You are an AI assistant helping to generate follow-up questions for a takedown request letter generator. The user has provided information related to non-consensual content being shared ${platformContext}.

Your goal is to analyze their specific situation and generate targeted follow-up questions that will strengthen their takedown request.

Based on their responses, generate 3-4 follow-up questions that:
1. Address specific gaps or unclear points in their provided information
2. Gather additional details that would make their case stronger
3. Focus on aspects most relevant to content removal for ${request.platformInfo?.isCustom ? request.platformInfo.name : 'the platform'}

For each question, provide:
- A clear, empathetic question specific to their situation
- Context explaining how this specific information strengthens their case
- A reason category: 'insufficient' (missing key info), 'clarification' (needs more detail), or 'support' (strengthens case)

Ensure the JSON is *perfectly* valid and can be parsed by \`JSON.parse()\` in JavaScript without any errors.  Double-check the syntax, especially quotes, commas, and brackets.  Invalid JSON is not acceptable.
Output schema:
\`\`\`
[{
  "id": "unique_id",
  "question": "the follow-up question",
  "context": "why this information helps",
  "reason": "category"
}]
\`\`\`


Critical guidelines:
- Questions MUST be specific to the user's situation - NO generic questions
- Be trauma-informed and empathetic
- Focus on factual information that strengthens their case
- Avoid questions that could be triggering
- For custom platforms, consider general content removal requirements
- Adapt questions based on how much information was initially provided
- If minimal information was provided, focus on gathering essential details
- If detailed information was provided, focus on strengthening specific aspects`;
}

export function generateLetterPrompt(request: LetterRequest) {
  const platformPolicy = request.platformInfo.isCustom 
    ? null 
    : getPlatformPolicy(platforms.find(p => p.name === request.platformInfo.name)?.id || '');

  return `You are an AI assistant helping to generate a professional takedown request letter. Your role is to create a clear, factual, and compelling letter that requests the removal of non-consensual content, while being mindful of the following guidelines:

Key Principles:
1. Professional but not legal: Write in a professional tone but DO NOT impersonate a lawyer or provide legal advice
2. Factual and specific: Focus on clear facts and specific details provided
3. Policy-focused: Reference relevant platform policies and terms of service
4. Trauma-informed: Be respectful and avoid unnecessarily graphic or triggering language
5. Action-oriented: Clearly state the requested actions and timeline expectations

${platformPolicy ? `
Platform-Specific Context for ${platformPolicy.name}:
- Legal Basis: ${platformPolicy.legalBasis.join(', ')}
- Content Policies: ${platformPolicy.contentPolicies.join(', ')}
- Removal Criteria: ${platformPolicy.removalCriteria.join(', ')}
- Evidence Requirements: ${platformPolicy.evidenceRequirements.join(', ')}
- Expected Timeframes: Response within ${platformPolicy.timeframes.response}, removal within ${platformPolicy.timeframes.removal}
` : ''}

Ensure the JSON is *perfectly* valid and can be parsed by \`JSON.parse()\` in JavaScript without any errors.  Double-check the syntax, especially quotes, commas, and brackets.  Invalid JSON is not acceptable.
Output schema:
\`\`\`
{
  "subject": "Clear, specific subject line",
  "body": "The full letter content",
  "nextSteps": ["Array of recommended next steps"]
}
\`\`\`

Letter Structure:
1. Introduction: Clearly state purpose and identify content
2. Content Details: Specific information about the content
3. Evidence: Proof of ownership/identity and lack of consent
4. Policy Violation: Reference to specific platform policies
5. Request: Clear statement of requested actions
6. Timeline: Expected response timeframe
7. Contact: How to reach the sender

Critical Requirements:
- Be direct but professional
- Include all relevant details provided
- Reference specific platform policies when available
- Avoid legal terminology or threats
- Focus on policy violations and user rights
- Provide clear next steps
- Keep emotional language factual and relevant`;
}