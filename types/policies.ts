export interface LegalDocument {
  reference: string;
  title: string;
  url: string;
  accessTimestamp?: string;
  notes?: string;
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

export interface PolicyValidationRequest {
  platforms?: string[];
}

export interface PolicyValidationResult {
  status: 'no_change' | 'updated';
  reasoning: string;
  documentsChecked: string[];
  issuesFound?: string[];
  newDocuments?: Array<{
    reference: string;
    title: string;
    url: string;
    notes: string;
  }>;
  updatedPolicy?: PlatformPolicy;
}

export interface PolicyValidationQualityResult {
  validationStatus: 'valid' | 'invalid';
  reasoning: string;
  documentsReVerified: string[];
  issues: Array<{
    severity: 'critical' | 'minor';
    type:
      | 'hallucination'
      | 'meaningless_rewording'
      | 'structural_error'
      | 'unsupported_improvement';
    description: string;
    field: string;
  }>;
  qualityScore: number;
}
