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

  const initialResponses = request.initialQuestions;
  const hasMinimalInfo = Object.values(initialResponses).some(value => !value || value.length < 20);

  return `You are an AI assistant helping to generate follow-up questions for a takedown request letter generator. The user has provided information related to non-consensual content being shared ${platformContext}.

Your goal is to analyze their specific situation and generate targeted follow-up questions that will strengthen their takedown request.

${hasMinimalInfo ? `
IMPORTANT: The user has provided minimal information in their initial responses. Focus on gathering essential details first:
1. Specific content location (if not provided)
2. Basic verification information (if unclear)
3. Timeline details (if missing)

Keep questions simple and direct. Do not ask for additional context until essential information is gathered.
` : `
The user has provided detailed initial information. Focus on specific details that would strengthen their case:
1. Additional verification details
2. Specific platform violation examples
3. Documentation or evidence they might have
`}

Generate 2-3 focused follow-up questions that:
1. Address specific gaps in their provided information
2. Focus only on details that directly support content removal
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

  // Analyze the content type and context from user responses
  const contentType = request.initialQuestions.contentType;
  const contentContext = request.initialQuestions.contentContext;

  // Determine relevant policies based on user's specific situation
  const getRelevantPolicies = (policy: any) => {
    if (!policy) return null;

    const relevantPolicies = {
      legalBasis: [] as string[],
      contentPolicies: [] as string[],
      removalCriteria: [] as string[],
      evidenceRequirements: [] as string[]
    };

    // Filter policies based on content type
    if (contentType === 'intimate') {
      relevantPolicies.contentPolicies = policy.contentPolicies.filter(p => 
        p.toLowerCase().includes('intimate') || p.toLowerCase().includes('consent'));
    } else if (contentType === 'personal') {
      relevantPolicies.contentPolicies = policy.contentPolicies.filter(p => 
        p.toLowerCase().includes('personal') || p.toLowerCase().includes('privacy'));
    } else if (contentType === 'private') {
      relevantPolicies.contentPolicies = policy.contentPolicies.filter(p => 
        p.toLowerCase().includes('private') || p.toLowerCase().includes('personal'));
    }

    // Filter policies based on context
    if (contentContext === 'hacked') {
      relevantPolicies.contentPolicies.push(...policy.contentPolicies.filter(p => 
        p.toLowerCase().includes('unauthorized') || p.toLowerCase().includes('security')));
    } else if (contentContext === 'impersonation') {
      relevantPolicies.contentPolicies.push(...policy.contentPolicies.filter(p => 
        p.toLowerCase().includes('impersonation')));
    }

    // Add general policies that apply to all cases
    relevantPolicies.legalBasis = policy.legalBasis.filter(p => 
      p.toLowerCase().includes('privacy') || p.toLowerCase().includes('rights'));
    
    relevantPolicies.removalCriteria = policy.removalCriteria.filter(p => 
      !p.toLowerCase().includes('intimate') || contentType === 'intimate');

    relevantPolicies.evidenceRequirements = policy.evidenceRequirements.filter(p => 
      p.toLowerCase().includes('identity') || p.toLowerCase().includes('content'));

    return relevantPolicies;
  };

  const relevantPolicies = platformPolicy ? getRelevantPolicies(platformPolicy) : null;

  return `You are an AI assistant helping to generate a professional takedown request letter. Your role is to create a clear, factual, and compelling letter that requests the removal of non-consensual content, while being mindful of the following guidelines:

Key Principles:
1. Professional but not legal: Write in a professional tone but DO NOT impersonate a lawyer or provide legal advice
2. Factual and specific: Focus ONLY on facts and details explicitly provided by the user
3. Policy-focused: Reference ONLY relevant platform policies based on the specific type of content and violation
4. Trauma-informed: Be respectful and avoid unnecessarily graphic or triggering language
5. Action-oriented: Clearly state the requested actions and timeline expectations

${relevantPolicies ? `
Platform-Specific Context for ${platformPolicy?.name}:
${relevantPolicies.legalBasis.length > 0 ? `- Legal Basis: ${relevantPolicies.legalBasis.join(', ')}` : ''}
${relevantPolicies.contentPolicies.length > 0 ? `- Content Policies: ${relevantPolicies.contentPolicies.join(', ')}` : ''}
${relevantPolicies.removalCriteria.length > 0 ? `- Removal Criteria: ${relevantPolicies.removalCriteria.join(', ')}` : ''}
${relevantPolicies.evidenceRequirements.length > 0 ? `- Evidence Requirements: ${relevantPolicies.evidenceRequirements.join(', ')}` : ''}
- Expected Timeframes: Response within ${platformPolicy?.timeframes.response}, removal within ${platformPolicy?.timeframes.removal}
` : ''}

CRITICAL REQUIREMENTS:
1. ONLY include URLs or specific content locations if explicitly provided by the user
2. DO NOT make assumptions about the nature of the content - use ONLY the user's descriptions
3. Reference ONLY platform policies that are directly relevant to the specific violation type
4. If certain information is missing, keep those sections brief rather than making assumptions
5. Focus on the specific type of content violation reported by the user
6. Keep emotional language factual and relevant to the request

Content Type Context:
- User reported this as: ${contentType} content
- Context provided: ${contentContext}
- ONLY reference policies and requirements specific to this type of content

Ensure the JSON is perfectly valid and can be parsed by \`JSON.parse()\` in JavaScript without any errors.
Output schema:
{
  "subject": "Clear, specific subject line",
  "body": "The full letter content",
  "nextSteps": ["Array of recommended next steps"]
}

Letter Structure:
1. Introduction: 
   - State purpose clearly
   - Reference the specific type of content violation
   - DO NOT add details about the nature of content unless explicitly provided

2. Content Details:
   - Include ONLY specifically provided information
   - Use exact URLs/locations if provided, otherwise keep location description general
   - Reference only the type of content the user specified

3. Evidence:
   - Include only verification details explicitly shared
   - DO NOT suggest or imply additional evidence
   - Focus on the specific verification methods relevant to this content type

4. Policy Violation:
   - Reference ONLY policies that match the reported violation type
   - Keep policy references specific to the user's situation
   - Avoid referencing policies about other types of content

5. Request:
   - Clear statement of requested actions
   - Specific to the type of content reported
   - Based on platform's relevant removal process

6. Timeline:
   - Expected response timeframe
   - Based on platform's standard process for this type of content

7. Contact:
   - How to reach the sender
   - Only include contact methods explicitly provided

Remember:
- Be direct but professional
- Include ONLY provided details
- Do not speculate or add information
- Focus on relevant policies only
- Provide clear next steps
- All placeholders [Name] should have user friendly labels and limited to max 4
- Keep emotional language minimal and factual`;
}