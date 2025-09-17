import { LetterRequest } from '@/types/letter';

// Define content types and contexts locally to avoid import issues
const contentTypes = [
  { value: 'intimate', label: 'Intimate', description: 'Sexual or nude content' },
  { value: 'personal', label: 'Personal', description: 'Private personal content' },
  { value: 'private', label: 'Private', description: 'Private information or content' },
  { value: 'other', label: 'Other', description: 'Other type of content' }
];

const contentContexts = [
  { value: 'hacked', label: 'Hacked', description: 'Content from hacked account' },
  { value: 'impersonation', label: 'Impersonation', description: 'Content used for impersonation' },
  { value: 'relationship', label: 'Relationship', description: 'Content shared by ex-partner' },
  { value: 'unknown', label: 'Unknown', description: 'Unknown source' },
  { value: 'other', label: 'Other', description: 'Other context' }
];

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
