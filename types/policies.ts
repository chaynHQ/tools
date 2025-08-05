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

export interface PolicyValidationResponse {
  success: boolean;
  validationId: string;
  totalDocuments: number;
  totalPlatforms: number;
  platforms: string[];
  results: {
    documentsProcessed: number;
    changesFound: number;
    validChanges: number;
    invalidChanges: number;
    errors: number;
  };
  updatedPolicies?: Record<string, PlatformPolicy>;
  changesSummary?: string;
  pullRequest?: {
    url: string;
    number: number;
  };
}

export interface PolicyUpdate {
  reference: string;
  policy: string;
  removalCriteria: string[];
  evidenceRequirements: string[];
}

export interface DocumentWithPolicies {
  platformId: string;
  platformName: string;
  reference: string;
  title: string;
  url: string;
  accessTimestamp?: string;
  notes?: string;
  policies: PolicyUpdate[];
}

export interface ValidationSession {
  validationId: string;
  documentQueue: DocumentWithPolicies[];
  platformPolicies: Record<string, PlatformPolicy>;
  processedDocuments: string[];
  proposedUpdates: Array<{
    platformId: string;
    documentReference: string;
    updatedPolicies: PolicyUpdate[];
    reasoning: string;
  }>;
  currentIndex: number;
  startTime: string;
}

export interface AnalysisResult {
  status: 'no_change' | 'updated' | 'error';
  reasoning: string;
  updatedPolicies?: PolicyUpdate[];
  validation?: {
    validationStatus: 'valid' | 'invalid';
    reasoning: string;
    issues?: Array<{
      severity: 'critical' | 'minor';
      type: 'hallucination' | 'meaningless_rewording' | 'structural_error';
      description: string;
    }>;
  };
}
