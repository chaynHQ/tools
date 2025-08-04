import { serverInstance as rollbar } from '../rollbar';

export interface PolicyQualityCheckResponse {
  validationStatus: 'valid' | 'invalid';
  reasoning: string;
  diffSummary: string;
  issues?: Array<{
    severity: 'critical' | 'minor';
    type: string;
    description: string;
  }>;
}

export function generatePolicyQualityCheckPrompt(
  platformId: string,
  originalPolicy: any,
  updatedPolicy: any,
): string {
  rollbar.info('generatePolicyQualityCheckPrompt: Creating single platform quality check prompt', {
    platformId,
    platformName: originalPolicy?.name || 'Unknown',
  });

  return `You are an AI assistant specialized in validating policy changes for a single platform. Your task is to analyze proposed changes to ${platformId.toUpperCase()} platform policies and determine if they represent genuine, meaningful updates or if they are hallucinations, basic rewording, or invalid changes.

CRITICAL INSTRUCTIONS:
1. Focus ONLY on the ${platformId.toUpperCase()} platform policies provided
2. Detect hallucinations - changes that appear to be made up or not based on real policy updates
3. Identify meaningless rewording - changes that don't actually alter the policy meaning
4. Validate structural integrity - ensure no data corruption or missing fields
5. Check semantic plausibility - do the changes make logical sense for this platform?
6. Your response MUST be valid JSON and nothing else

PLATFORM: ${platformId.toUpperCase()}

ORIGINAL POLICY:
${JSON.stringify(originalPolicy, null, 2)}

UPDATED POLICY:
${JSON.stringify(updatedPolicy, null, 2)}

VALIDATION CRITERIA:

**VALID changes include:**
- Genuine policy updates that reflect real changes in platform rules
- New removal criteria that align with current platform enforcement
- Updated evidence requirements that match current platform processes
- Modified policy descriptions that reflect actual policy changes
- Updated access timestamps reflecting when documents were checked
- Structural consistency maintained within the policy object

**INVALID changes include:**
- Hallucinated information not based on real policy documents
- Basic rewording that doesn't change the actual policy meaning
- Changes that contradict the platform's known business model or practices
- Missing or corrupted data structures
- Changes to fields that should not be modified (like policy references)
- Semantically implausible updates (e.g., policies that don't make sense for this platform)
- Minor cosmetic changes that don't affect policy enforcement

**HALLUCINATION DETECTION:**
Look for these signs of AI hallucination:
- Policy descriptions that seem too generic or template-like
- Removal criteria that don't match the platform's known enforcement style
- Evidence requirements that seem unrealistic or overly complex
- Changes that appear to be "improvements" rather than updates based on source documents
- Policy language that doesn't match the platform's typical communication style

**MEANINGLESS REWORDING DETECTION:**
Identify changes that are just rewording without substance:
- Synonyms used without changing meaning (e.g., "prohibited" → "forbidden")
- Sentence restructuring without policy impact
- Adding or removing filler words that don't change requirements
- Formatting changes that don't affect policy interpretation

After analyzing the ${platformId.toUpperCase()} policies, you MUST respond with a single JSON object in this exact format:

{
  "validationStatus": "valid" | "invalid",
  "reasoning": "A clear explanation of your validation decision for ${platformId.toUpperCase()}, including what you checked and why the changes are valid or invalid. Be specific about any hallucinations or meaningless rewording detected.",
  "diffSummary": "A concise summary of the specific changes found in ${platformId.toUpperCase()} policies. List each meaningful change on a new line with a dash prefix (e.g., '- Updated policy CS-NCSII removalCriteria to include AI content\\n- Updated accessTimestamp for META-CS'). If no meaningful changes, state 'No meaningful changes detected.'",
  "issues": [
    // Only include this array if validationStatus is "invalid"
    {
      "severity": "critical" | "minor",
      "type": "hallucination" | "meaningless_rewording" | "structural_integrity" | "semantic_implausibility" | "unauthorized_changes",
      "description": "Specific description of the issue found in ${platformId.toUpperCase()} policies"
    }
  ]
}

Focus on ensuring the changes represent genuine policy updates based on real platform document changes, not AI-generated improvements or basic rewording. Be strict about detecting hallucinations and meaningless changes.

RESPOND WITH VALID JSON ONLY:`;
}