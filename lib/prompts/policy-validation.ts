import { PlatformPolicy } from '@/types/policies';
import { serverInstance as rollbar } from '../rollbar';

export interface PolicyValidationPromptData {
  platformId: string;
  platformPolicy: PlatformPolicy;
}

export interface PolicyValidationQualityCheckPromptData {
  platformId: string;
  originalPolicy: PlatformPolicy;
  updatedPolicy: PlatformPolicy;
  reasoning: string;
}

export function generatePolicyValidationPrompt(data: PolicyValidationPromptData): string {
  rollbar.info('generatePolicyValidationPrompt: Creating analysis prompt', {
    platformId: data.platformId,
    platformName: data.platformPolicy.name,
    documentsCount: data.platformPolicy.legalDocuments.length,
  });

  return `You are an AI assistant specialized in legal and policy analysis for image takedown requests. Your task is to analyze ALL legal documents for ${data.platformPolicy.name} and determine if our current policy data needs updates.

CRITICAL CONTEXT:
The existing and future policies are used to generate automated image takedown requests. They must be accurate, comprehensive, and reflect the latest platform practices.
The policy, removal criteria and evidence requirements outputs will later be used within the image takedown request (a letter) usually as a bullet point list like \`Document Name: Policy\` as shown in the example below:
If the policy is "Prohibits sharing personally identifiable information (PII) to harass someone." from the "Terms of Service", we will use the policy and document text like \`Terms of Service: Prohibits sharing personally identifiable information (PII) to harass someone.\`.
For this reason, the policy must be accurate and closely match the actual platform policy documents, but presented as an individual policy statement if it is not already in that format.

CRITICAL INSTRUCTIONS:
1. Access and analyze ALL the live documents listed below
2. Focus on policies related to image takedown, content removal, NCII, harassment, privacy violations, and impersonation
3. Identify new documents, moved/invalid URLs, and policy changes
4. Only suggest meaningful changes that affect policy enforcement for image takedown requests
5. Your response MUST be valid JSON and nothing else. Only return policies that were updated or added, not unchanged policies.

PLATFORM: ${data.platformPolicy.name}

CURRENT LEGAL DOCUMENTS TO VERIFY:
${data.platformPolicy.legalDocuments
  .map(
    (doc) => `
- Reference: ${doc.reference}
- Title: ${doc.title}
- URL: ${doc.url}
- Last Access: ${doc.accessTimestamp || 'Unknown'}
- Notes: ${doc.notes || 'None'}
`,
  )
  .join('\n')}

CURRENT POLICY STRUCTURE TO ANALYZE:
${JSON.stringify(
  {
    contentTypes: data.platformPolicy.contentTypes,
    contentContexts: data.platformPolicy.contentContexts,
    generalPolicies: data.platformPolicy.generalPolicies,
    timeframes: data.platformPolicy.timeframes,
    appealProcess: data.platformPolicy.appealProcess,
  },
  null,
  2,
)}

ANALYSIS REQUIREMENTS:
1. **Document Validation**: Check if all URLs are accessible and content matches expectations
2. **New Document Discovery**: Look for new relevant policy documents on the platform
3. **Policy Content Analysis**: Compare current policies with live document content to identify meaningful changes or additions
4. **Image Takedown Focus**: Prioritize changes affecting NCII, harassment, privacy, impersonation, and copyright policies
5. **Enforcement Impact**: Only suggest changes that meaningfully affect how takedown requests are processed


After analyzing ALL documents, respond with a single JSON object:

If NO meaningful changes are needed:
{
  "status": "no_change",
  "reasoning": "Detailed explanation of what was verified and why no changes are needed. Include specific sections checked.",
  "documentsChecked": ["list of URLs successfully accessed"],
  "issuesFound": ["list any broken URLs or minor issues that don't require policy updates"]
}

If meaningful changes ARE needed:
{
  "status": "updated",
  "reasoning": "Detailed summary of key changes identified and their impact on image takedown processes.",
  "documentsChecked": ["list of URLs successfully accessed"],
  "newDocuments": [
    {
      "reference": "new_doc_ref",
      "title": "Document Title",
      "url": "https://...",
      "notes": "Why this document is relevant to image takedown"
    }
  ],
  "updatedPolicy": {
    "name": "${data.platformPolicy.name}",
    "legalDocuments": [/* updated documents array with new accessTimestamp */],
    "contentTypes": [/* updated if needed */],
    "contentContexts": [/* updated if needed */],
    "generalPolicies": [/* updated if needed */],
    "timeframes": {/* updated if needed */},
    "appealProcess": [/* updated if needed */]
  }
}

RESPOND WITH VALID JSON ONLY:`;
}

export function generatePolicyValidationQualityCheckPrompt(
  data: PolicyValidationQualityCheckPromptData,
): string {
  rollbar.info('generatePolicyValidationQualityCheckPrompt: Creating validation prompt', {
    platformId: data.platformId,
    platformName: data.originalPolicy.name,
  });

  return `You are an AI assistant specialized in validating policy changes for image takedown systems. Your task is to verify that proposed policy updates are genuine, meaningful, and properly implemented.

CRITICAL INSTRUCTIONS:
1. Re-verify the live documents to confirm changes are real
2. Check that updates improve image takedown request effectiveness
3. Detect hallucinations, meaningless rewording, or structural errors
4. Ensure all changes are properly justified and documented
5. Your response MUST be valid JSON and nothing else

PLATFORM: ${data.originalPolicy.name}

ORIGINAL POLICY STRUCTURE:
${JSON.stringify(data.originalPolicy, null, 2)}

PROPOSED UPDATED POLICY:
${JSON.stringify(data.updatedPolicy, null, 2)}

REASONING PROVIDED:
${data.reasoning}

VALIDATION CRITERIA:

**VALID changes:**
- Changes based on actual updates in live documents
- New or updated removal criteria that improve takedown effectiveness
- Updated evidence requirements that reflect current platform processes
- New relevant documents that enhance policy coverage
- Corrected URLs or document references
- Updated timeframes that reflect current platform commitments

**INVALID changes (mark as invalid):**
- Hallucinations: Changes not supported by actual document content
- Meaningless rewording: Cosmetic changes that don't affect policy meaning
- Structural errors: Incorrect data types, missing required fields, or malformed content
- Unsupported improvements: Changes that seem like AI "enhancements" without document basis
- Inconsistent changes: Updates that contradict actual document content

QUALITY CHECKS:
1. **Document Verification**: Re-access documents to confirm changes exist
2. **Content Accuracy**: Verify policy descriptions match document language
3. **Structural Integrity**: Ensure all required fields are present and correctly formatted
4. **Takedown Relevance**: Confirm changes improve image takedown request processes
5. **Evidence Support**: Check that all changes have clear document-based justification

After thorough validation, respond with:

{
  "validationStatus": "valid" | "invalid",
  "reasoning": "Detailed explanation of validation decision, including specific document verification results and why changes are valid or invalid.",
  "documentsReVerified": ["list of URLs re-checked during validation"],
  "issues": [
    {
      "severity": "critical" | "minor",
      "type": "hallucination" | "meaningless_rewording" | "structural_error" | "unsupported_improvement",
      "description": "Specific description of the issue found",
      "field": "which field/section has the issue"
    }
  ],
  "qualityScore": "A score from 1-10 rating the overall quality of the proposed changes"
}

Focus on ensuring changes represent genuine policy improvements for image takedown effectiveness, not AI-generated enhancements or cosmetic rewording.

RESPOND WITH VALID JSON ONLY:`;
}
