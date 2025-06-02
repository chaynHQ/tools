import { LetterRequest } from '@/types/letter';
import { QUALITY_CHECK_CRITERIA } from './constants';

export function generateLetterQualityCheckPrompt(letter: string, request: LetterRequest) {
  const initialInfo = request.initialQuestions;
  const followUpInfo = request.followUp || {};
  const reportingInfo = request.reportingDetails || {};

  const hasReportingHistory =
    reportingInfo.standardProcessDetails ||
    reportingInfo.escalatedProcessDetails ||
    reportingInfo.responseReceived ||
    reportingInfo.additionalStepsTaken;

  return `You are an expert in content takedown requests and platform policy enforcement. Your task is to review a generated takedown letter and ensure it meets quality standards.

ORIGINAL LETTER:
${letter}

CONTEXT:
- Content type: ${request.initialQuestions.contentType}
- Content context: ${request.initialQuestions.contentContext}
- Platform: ${request.platformInfo.name}

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
${Object.entries(followUpInfo)
  .map(([key, value]) => `${key}: ${value || 'Not provided'}`)
  .join('\n')}

BANNED TERMS: The letter must not contain any banned terms or phrases:
${QUALITY_CHECK_CRITERIA.MAJOR.SENSITIVE_TERMS.map(({ term, replacement }) => `- "${term}" (use "${replacement}")`).join('\n')}

CRITICAL ISSUES (Require regeneration):
1. Hallucinations - Inventing information not provided:
   - References to previous correspondence
   - Claims about user requests or conversations
   - Assumptions about platform actions
   - Any information not listed in AVAILABLE INFORMATION above

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
