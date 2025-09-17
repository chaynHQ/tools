import { contentContexts, contentTypes } from '@/app/letter-generator/components/initial-questions';
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

  const contentType =
    contentTypes.find((t) => t.value === request.initialQuestions.contentType) || contentTypes[-1];
  const contentContext =
    contentContexts.find((t) => t.value === request.initialQuestions.contentContext) ||
    contentContexts[-1];

  return `Platform: ${request.platformInfo.platformName || request.platformInfo.customName}
Content Type: ${contentType.label} - ${contentType.description}
Content Context: ${contentContext.label} - ${contentContext.description}
Upload Date: ${initialInfo.imageUploadDate || 'No answer provided'}
Creation Date: ${initialInfo.imageTakenDate || 'No answer provided'}

Ownership Evidence: ${initialInfo.ownershipEvidence || 'No answer provided'}
Impact Statement: ${initialInfo.impactStatement || 'No answer provided'}
${
  hasReportingHistory
    ? `
Previous Reporting History: ${reportingInfo.standardProcessDetails || 'No answer provided'}
Escalated Previous Reporting History: ${reportingInfo.escalatedProcessDetails || 'No answer provided'}
Previous Reporting Response Received: ${reportingInfo.responseReceived || 'No answer provided'}
Additional Reporting Steps Taken: ${reportingInfo.additionalStepsTaken || 'No answer provided'}`
    : ''
}

${followUpInfo.map(({ question, answer }) => `${question}: ${answer || 'No answer provided'}`).join('\n')}`;
}
