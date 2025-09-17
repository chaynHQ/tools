import { LetterRequest } from '@/types/letter';

export function formatInputsForAI(request: LetterRequest): string {
  const initialInfo = request.initialQuestions;
  const reportingInfo = request.reportingDetails || {};
  const followUpInfo = request.followUp || [];

  const hasReportingHistory =
    reportingInfo.standardProcessDetails ||
    reportingInfo.escalatedProcessDetails ||
    reportingInfo.responseReceived ||
    reportingInfo.additionalStepsTaken;

  return `Content Type: ${request.initialQuestions.contentType}
Content Context: ${request.initialQuestions.contentContext}
Platform: ${request.platformInfo.platformName || request.platformInfo.customName}
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
${followUpInfo.map(({ question, answer }) => `${question}: ${answer || 'Not provided'}`).join('\n')}`;
}