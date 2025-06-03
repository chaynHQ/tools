export interface LegalDocument {
  reference: string;
  title: string;
  url: string;
  accessTimestamp?: string;
}

export interface Policy {
  reference: string;
  policy: string;
  documents: LegalDocument[];
  removalCriteria: string[];
  evidenceRequirements: string[];
}

export interface ContentType {
  type: 'intimate' | 'personal' | 'private' | 'other';
  label: string;
  description: string;
  policies: Policy[];
}

export interface ContentContext {
  context: 'hacked' | 'impersonation' | 'relationship' | 'unknown' | 'other';
  label: string;
  description: string;
  policies: Policy[];
}

export interface PlatformPolicy {
  name: string;
  legalDocuments: LegalDocument[];
  contentTypes: ContentType[];
  contentContexts: ContentContext[];
  generalPolicies: Policy[];
  timeframes: {
    response: string;
    removal: string;
  };
  appealProcess: string[];
}