export interface PlatformPolicy {
  name: string;
  legalBasis: Array<{
    reference: string;
    title: string;
    section: string;
    url: string;
    accessTimestamp?: string;
  }>;
  contentPolicies: {
    intimate: Array<{
      reference: string;
      policy: string;
      section: string;
    }>;
    personal: Array<{
      reference: string;
      policy: string;
      section: string;
    }>;
    private: Array<{
      reference: string;
      policy: string;
      section: string;
    }>;
    impersonation: Array<{
      reference: string;
      policy: string;
      section: string;
    }>;
    hacked: Array<{
      reference: string;
      policy: string;
      section: string;
    }>;
    general: Array<{
      reference: string;
      policy: string;
      section: string;
    }>;
  };
  removalCriteria: {
    intimate: string[];
    personal: string[];
    private: string[];
    impersonation: string[];
    hacked: string[];
    general: string[];
  };
  evidenceRequirements: {
    intimate: string[];
    personal: string[];
    private: string[];
    impersonation: string[];
    hacked: string[];
    general: string[];
  };
  timeframes: {
    response: string;
    removal: string;
  };
  appealProcess: string[];
}