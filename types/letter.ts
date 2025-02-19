export interface LetterRequest {
  initialQuestions: {
    imageIdentification: string;
    nonConsensualReason: string;
    imageUploadDate: string;
    imageTakenDate: string;
    ownershipEvidence: string;
    impactStatement: string;
    previousContacts: string;
  };
  reportingDetails?: {
    standardProcessDetails?: string;
    escalatedProcessDetails?: string;
    responseReceived?: string;
    additionalStepsTaken?: string;
  };
  followUp?: Record<string, string>;
  platformInfo: {
    name: string;
    isCustom: boolean;
  };
}

export interface GeneratedLetter {
  subject: string;
  body: string;
  nextSteps: string[];
}