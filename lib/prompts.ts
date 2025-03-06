import { LetterRequest } from '@/types/letter';
import { getPlatformPolicy, getRelevantPolicies } from './platform-policies';
import { platforms } from './platforms';

export function generateFollowUpPrompt(request: LetterRequest) {
  // Validate required data
  if (!request.initialQuestions || !request.platformInfo) {
    throw new Error('Missing required data for generating follow-up questions');
  }

  // Validate platformInfo
  if (!request.platformInfo.name) {
    throw new Error('Missing name in platformInfo');
  }

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

  // Define sensitive terms more precisely to avoid over-filtering
  const sensitiveTerms = [
    // Identity documents
    'government(-|\\s)issued id',
    'passport\\b',
    'driver(\'s|\\s)licen[sc]e',
    'national id',
    'identity card',
    'state(-|\\s)issued',
    'official id',
    // Verification processes
    'id verification',
    'identity verification',
    'verify your identity',
    // Residency documents
    'proof of residence',
    'proof of address',
    'utility bill',
    // Generic ID references when specifically about documentation
    '\\bid\\b.*(card|document|verification|upload)',
    '(card|document|verification|upload).*\\bid\\b',
    // Official documentation
    'notari[sz]ed',
    'apostille',
    'certified document'
  ].map(term => new RegExp(term, 'i'));

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
${relevantPolicies.evidenceRequirements.map(req => {
  // Only filter out requirements that match sensitive terms
  const isSensitive = sensitiveTerms.some(term => term.test(req));
  return isSensitive ? null : `- ${req}`;
}).filter(Boolean).join('\n')}

Key removal criteria:
${relevantPolicies.removalCriteria.map(criteria => {
  // Only filter out criteria that match sensitive terms
  const isSensitive = sensitiveTerms.some(term => term.test(criteria));
  return isSensitive ? null : `- ${criteria}`;
}).filter(Boolean).join('\n')}
` : ''}

CRITICAL RULES:
1. DO NOT ask for information that has already been provided
2. DO NOT repeat questions about URLs if content location is already given
3. DO NOT ask for timeline details if dates are already provided
4. Focus ONLY on gaps in the provided information
5. Questions should build upon existing information, not duplicate it
6. DO NOT ask for personal information like name, email, or contact details
7. DO NOT ask for ANY form of official documentation or ID verification
8. This is the ONLY opportunity to request information needed for the letter - if information is not collected here, it will not be included in the letter
9. Focus on questions that help identify SPECIFIC policy violations and community standards breaches
10. Prioritize questions that establish clear links between the content and platform policy violations
11. Use a sensitive trauma-informed approach and language - avoid language like "evidence" and "proof"
12. Return all text in British English (en_gb) NOT en_us

ALLOWED TOPICS:
- Content description (without requesting sensitive details)
- Timeline of events
- Impact on the person
- Previous actions taken
- Evidence of ownership (without requesting official documents)
- Platform-specific details about the content
- Context about how the content was shared
- Specific policy violations

Generate 2-4 focused follow-up questions that ONLY address missing or insufficient information.

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

CRITICAL INSTRUCTIONS:
1. Use ONLY the information provided by the user - DO NOT invent or hallucinate additional details
2. DO NOT include ANY placeholders in the letter - not even for name or email
3. DO NOT make demands or use aggressive language in the letter - keep it professional and respectful
4. DO NOT include any internal notes, formatting instructions, or placeholder descriptions
5. DO NOT include any placeholders like [Insert X], [List Y], [Full name], or [Email address]
6. DO NOT include any placeholders for information that was not collected in the previous questions
7. DO NOT reference or suggest the need for ID verification, government IDs, proof of residence, or any official documentation
8. DO NOT mention platform policies related to ID verification or official documentation requirements
9. FOCUS on clearly identifying which specific community standards and policies have been violated
10. EMPHASIZE the exact policy breaches that apply to this specific situation
11. INCLUDE relevant links and supporting evidence provided by the user
12. AVOID including sensitive personal information not required for the letter
13. Keep the letter professional but not overly legal in tone
14. Be respectful and trauma-informed
15. State clear action requests
16. Include specific timeframes when possible
17. Keep emotional language factual and only include if provided by the user and is relevant to the case
18. At the end of the letter, include a generic closing like "Sincerely," followed by a new line for the user to add their name
19. Return all text in British English (en_gb) NOT en_us


AVAILABLE INFORMATION:
Content Location: ${contentLocation || 'Not provided'}
Upload Date: ${initialInfo.imageUploadDate || 'Not provided'}
Creation Date: ${initialInfo.imageTakenDate || 'Not provided'}
Ownership Evidence: ${initialInfo.ownershipEvidence || 'Not provided'}
Impact Statement: ${initialInfo.impactStatement || 'Not provided'}
${hasReportingHistory ? `Previous Reports: ${reportingInfo.standardProcessDetails || ''} ${reportingInfo.escalatedProcessDetails || ''}` : ''}
${Object.entries(followUpInfo).map(([key, value]) => `${key}: ${value || 'Not provided'}`).join('\n')}

${relevantPolicies ? `
Platform-Specific Context for ${platformPolicy?.name}:

Legal Basis:
${relevantPolicies.legalBasis.map(basis => 
  `- ${basis.title} ${basis.section} (Ref: ${basis.reference})`
).join('\n')}

Applicable Policies:
${relevantPolicies.contentPolicies.map(policy => {
  // Filter out ID verification policies
  if (policy.policy.toLowerCase().includes('id verification') || 
      policy.policy.toLowerCase().includes('identification') || 
      policy.policy.toLowerCase().includes('passport') || 
      policy.policy.toLowerCase().includes('license') || 
      policy.policy.toLowerCase().includes('proof of residence') ||
      policy.policy.toLowerCase().includes('government')) {
    return null;
  }
  return `- ${policy.policy} (Ref: ${policy.reference})`;
}).filter(Boolean).join('\n')}

Removal Requirements:
${relevantPolicies.removalCriteria.map(criteria => {
  // Filter out ID verification criteria
  if (criteria.toLowerCase().includes('id') || 
      criteria.toLowerCase().includes('identification') || 
      criteria.toLowerCase().includes('passport') || 
      criteria.toLowerCase().includes('license') || 
      criteria.toLowerCase().includes('proof of residence') ||
      criteria.toLowerCase().includes('government')) {
    return null;
  }
  return `- ${criteria}`;
}).filter(Boolean).join('\n')}

Evidence Requirements:
${relevantPolicies.evidenceRequirements.map(req => {
  // Filter out ID verification requirements
  if (req.toLowerCase().includes('id') || 
      req.toLowerCase().includes('identification') || 
      req.toLowerCase().includes('passport') || 
      req.toLowerCase().includes('license') || 
      req.toLowerCase().includes('proof of residence') ||
      req.toLowerCase().includes('government')) {
    return null;
  }
  return `- ${req}`;
}).filter(Boolean).join('\n')}

Timeframes:
- Initial Response: ${platformPolicy?.timeframes.response}
- Content Removal: ${platformPolicy?.timeframes.removal}
` : ''}

LETTER STRUCTURE (skip any sections that are not relevant):
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
- Do not include any placeholders
- Only include information that was provided
- Keep the format simple and valid`;
}

export function generateLetterQualityCheckPrompt(letter: string, request: LetterRequest) {
  return `You are an expert in content takedown requests and platform policy enforcement. Your task is to review a generated takedown letter and ensure it meets quality standards and follows guidelines.

ORIGINAL LETTER:
${letter}

CONTEXT:
- Content type: ${request.initialQuestions.contentType}
- Content context: ${request.initialQuestions.contentContext}
- Platform: ${request.platformInfo.name}

QUALITY CHECK CRITERIA:
1. NO HALLUCINATION: The letter must not contain any invented information not provided by the user
2. NO SENSITIVE INFORMATION: The letter should not request or include unnecessary sensitive personal information
3. NO PLACEHOLDERS: The letter must not contain any placeholders like [Insert X] or [Your Name]
4. POLICY FOCUS: The letter should clearly identify specific policy violations and community standards breaches
5. EVIDENCE INCLUSION: The letter should reference all relevant evidence provided by the user
6. CLARITY: The letter should have a clear purpose, specific requests, and expected outcomes
7. PROFESSIONALISM: The letter should be professional, respectful, and trauma-informed
8. ACTIONABILITY: The letter should include specific actions for the platform to take

REVIEW INSTRUCTIONS:
- Identify any issues in the letter based on the criteria above
- For each issue, provide a specific recommendation for improvement
- If the letter meets all criteria, indicate that it passes the quality check

Output your analysis in JSON format:
{
  "passesQualityCheck": true/false,
  "issues": [
    {
      "criterion": "The criterion that failed",
      "issue": "Description of the issue",
      "recommendation": "Specific recommendation for improvement"
    }
  ],
  "improvedLetter": "Only include this field if changes are needed. If so, provide the complete improved letter."
}`;
}