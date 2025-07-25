import { PlatformInfo } from '@/lib/context/FormContext';

export interface LetterRequest {
  initialQuestions: {
    contentLocationType: 'url' | 'description';
    contentUrl?: string;
    contentDescription?: string;
    contentType: 'intimate' | 'personal' | 'private' | 'other';
    contentContext: 'hacked' | 'impersonation' | 'relationship' | 'unknown' | 'other';
    imageUploadDate: string;
    imageTakenDate: string;
    ownershipEvidence: string;
    impactStatement: string;
    imageIdentification: string;
  };
  reportingDetails?: {
    standardProcessDetails?: string;
    escalatedProcessDetails?: string;
    responseReceived?: string;
    additionalStepsTaken?: string;
  };
  followUp?: Record<string, string>;
  platformInfo: PlatformInfo;
}

export interface GeneratedLetter {
  subject: string;
  body: string;
  nextSteps?: string[];
}
