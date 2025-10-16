export type ContentType = 'intimate' | 'personal' | 'private' | 'other';
export type ContentContext = 'hacked' | 'impersonation' | 'relationship' | 'unknown' | 'other';
export type TimeUnit = 'immediate' | 'minutes' | 'hours' | 'days' | 'weeks' | 'months' | 'years';
export interface Policy {
  id: string;
  reference: string | null;
  summary: string;
  quote: string;
  contentTypes: ContentType[];
  contentContexts: ContentContext[];
  timeframes: {
    response?: {
      value: number | null;
      unit: 'immediate' | 'minutes' | 'hours' | 'days' | 'weeks' | 'months' | 'years' | null;
      description: string;
    } | null;
    removal?: {
      value: number | null;
      unit: 'immediate' | 'minutes' | 'hours' | 'days' | 'weeks' | 'months' | 'years' | null;
      description: string;
    } | null;
  } | null;
  evidenceRequirements: {
    description: string; // e.g., "Government-issued Photo ID"
    example?: string; // e.g., "Driver's license, passport"
    reason: string; // e.g., "To verify you are the person depicted or the account owner"
  }[];
  removalCriteria: string[];
}

export interface PolicyDocument {
  id: string;
  reference: string | null;
  title: string;
  summary: string;
  url: string;
  accessTimestamp: string;
  policies: Policy[];
  appealProcess: {
    url?: string | null; // URL to the appeals page/form.
    summary: string; // A summary of the appeal process.
    steps: string[]; // A list of steps to follow.
  } | null;
}

export interface PlatformPolicies {
  platform: string;
  policyDocuments: PolicyDocument[];
}

export interface PlatformReportingChannels {
  platform: string;
  channels: PlatformReportingChannel[];
}

export interface PlatformReportingChannel {
  channelType: 'Form' | 'Email';
  isDMCA: Boolean; // Whether this channel is specifically for DMCA/copyright reports - these should not be used for now as have legal implications.
  isDefault: Boolean; // Whether this is the default/recommended channel for general reports.
  officialPurpose: string; // The stated purpose of this channel by the platform.
  justification: string; // Why and when to use this channel.
  contactDetail: {
    url?: string; // For forms or web-based reporting.
    address?: string; // For email or physical mail.
  };
  applicableViolations: {
    contentTypes: ContentType[];
    contentContexts: ContentContext[];
  }[];
}

// Legacy types for backward compatibility during migration
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
  updatedPolicy?: PlatformPolicies;
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
