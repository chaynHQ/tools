import { LetterRequest } from '@/types/letter';
import { PlatformPolicies, PolicyDocument } from '@/types/policies';

// Define content types and contexts locally to avoid import issues
const contentTypes = [
  { value: 'intimate', label: 'Intimate', description: 'Sexual or nude content' },
  { value: 'personal', label: 'Personal', description: 'Private personal content' },
  { value: 'private', label: 'Private', description: 'Private information or content' },
  { value: 'other', label: 'Other', description: 'Other type of content' },
];

const contentContexts = [
  { value: 'hacked', label: 'Hacked', description: 'Content from hacked account' },
  { value: 'impersonation', label: 'Impersonation', description: 'Content used for impersonation' },
  { value: 'relationship', label: 'Relationship', description: 'Content shared by known person' },
  { value: 'unknown', label: 'Unknown', description: 'Unknown source' },
  { value: 'other', label: 'Other', description: 'Other context' },
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

export function formatPolicyDataForAI(
  platformPolicies: PlatformPolicies,
  documentsWithPolicies: PolicyDocument[],
): string {
  if (!platformPolicies || !documentsWithPolicies.length) {
    return 'No relevant platform policies found.';
  }

  let output = `## Platform Policy Information for ${platformPolicies.platform}\n\n`;

  documentsWithPolicies.forEach((document) => {
    output += `### Document: ${document.title}\n`;
    output += `- **URL**: ${document.url}\n`;
    output += `- **Summary**: ${document.summary}\n\n`;

    output += `**Relevant Policies from this Document**:\n\n`;

    document.policies.forEach((policy, index) => {
      output += `#### Policy ${index + 1}: ${policy.summary}\n`;
      output += `**Quote from policy**: "${policy.quote}"\n`;

      if (policy.timeframes) {
        output += `**Timeframes**:\n`;
        if (policy.timeframes.response) {
          output += `- Response: ${policy.timeframes.response.value} ${policy.timeframes.response.unit} (${policy.timeframes.response.description})\n`;
        }
        if (policy.timeframes.removal) {
          output += `- Removal: ${policy.timeframes.removal.value} ${policy.timeframes.removal.unit} (${policy.timeframes.removal.description})\n`;
        }
        output += '\n';
      }

      if (policy.evidenceRequirements?.length > 0) {
        output += `**Evidence Requirements**:\n`;
        policy.evidenceRequirements.forEach((req, reqIndex) => {
          output += `${reqIndex + 1}. ${req.description}\n`;
        });
        output += '\n';
      }

      if (policy.removalCriteria?.length > 0) {
        output += `**Removal Criteria**:\n`;
        policy.removalCriteria.forEach((criteria, criteriaIndex) => {
          output += `${criteriaIndex + 1}. ${criteria}\n`;
        });
      }
      output += '\n---\n\n';
    });

    if (document.appealProcess) {
      output += `**Appeal Process**:\n`;
      output += `- Summary: ${document.appealProcess.summary}\n`;
      if (document.appealProcess.url) {
        output += `- Appeal URL: ${document.appealProcess.url}\n`;
      }
      output += `- Steps:\n`;
      document.appealProcess.steps.forEach((step, index) => {
        output += `  ${index + 1}. ${step}\n`;
      });
      output += '\n';
    }
  });

  return output;
}
