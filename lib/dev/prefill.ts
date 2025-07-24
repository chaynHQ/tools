import { IS_DEVELOPMENT } from '../constants/common';
import { PlatformId } from '../constants/platforms';

// Sample data for quick testing
export const PREFILL_DATA = {
  platformInfo: {
    platformId: PlatformId.FACEBOOK,
    platformName: 'Facebook',
    isCustom: false
  },
  reportingInfo: {
    status: 'both-completed' as const
  },
  initialQuestions: {
    contentLocationType: 'url' as const,
    contentUrl: 'https://facebook.com/test-content-123',
    contentType: 'intimate' as const,
    contentContext: 'hacked' as const,
    imageUploadDate: '15 March 2024',
    imageTakenDate: '1 March 2024',
    ownershipEvidence: 'I can verify this content through specific identifiable features and original files.',
    impactStatement: 'This has caused significant distress and affected my personal and professional life.'
  },
  reportingDetails: {
    standardProcessDetails: 'I reported through the standard process on March 16th using the report button.',
    escalatedProcessDetails: 'I submitted an escalated report through the help center on March 18th.',
    responseReceived: 'I received an automated response but no further action was taken.',
    additionalStepsTaken: 'I followed up via email on March 20th requesting an update.'
  },
  followUpData: {
    questions: [],
    answers: {
      'additional-context': 'The content was taken from my compromised cloud storage account.',
      'previous-contact': 'I have email records of all previous correspondence.',
      'specific-violations': 'The content violates privacy policies and terms regarding non-consensual sharing.'
    }
  }
};

export function usePrefillData() {
  if (!IS_DEVELOPMENT) return null;

  const handleKeyPress = (event: KeyboardEvent) => {
    // Support both Alt + P (Windows/Linux) and Command + P (Mac)
    if ((event.altKey || event.metaKey) && event.key.toLowerCase() === 'p') {
      // Prevent the browser's print dialog on Mac
      event.preventDefault();
      return PREFILL_DATA;
    }
    return null;
  };

  return handleKeyPress;
}