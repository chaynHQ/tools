export interface PlatformPolicy {
  name: string;
  legalBasis: string[];
  contentPolicies: string[];
  removalCriteria: string[];
  evidenceRequirements: string[];
  timeframes: {
    response?: string;
    removal?: string;
  };
  appealProcess?: string[];
}

export const platformPolicies: Record<string, PlatformPolicy> = {
  facebook: {
    name: "Facebook",
    legalBasis: [
      "Community Standards on Image Privacy and Consent",
      "Terms of Service Section 3.2 on User Rights and Responsibilities",
      "Platform Privacy Policy on User Content"
    ],
    contentPolicies: [
      "Prohibition of non-consensual intimate imagery",
      "Zero tolerance for revenge porn or intimate content shared without consent",
      "Immediate removal of content that violates consent requirements",
      "Protection against impersonation and identity theft"
    ],
    removalCriteria: [
      "Content must be clearly identifiable",
      "Evidence of lack of consent must be provided",
      "Content must violate platform policies",
      "Reporter must be the subject of the content or their authorized representative"
    ],
    evidenceRequirements: [
      "URLs or specific location of content",
      "Proof of identity (government-issued ID may be required)",
      "Documentation of non-consent",
      "Timeline of content posting and discovery",
      "Any previous attempts to resolve the issue"
    ],
    timeframes: {
      response: "24-48 hours",
      removal: "Usually within 24 hours of verification"
    },
    appealProcess: [
      "Submit appeal through Help Center",
      "Provide additional documentation if requested",
      "Escalate to oversight board for eligible cases",
      "Response typically within 7-14 days"
    ]
  },
  instagram: {
    name: "Instagram",
    legalBasis: [
      "Community Guidelines on Nudity and Consent",
      "Terms of Use on Content Rights",
      "Data Policy on User Content",
      "Instagram Safety Guidelines"
    ],
    contentPolicies: [
      "Strict prohibition of non-consensual intimate images",
      "Zero tolerance for revenge porn",
      "Ban on sexual content involving minors",
      "Protection against harassment and bullying",
      "Restrictions on impersonation accounts"
    ],
    removalCriteria: [
      "Content must be specifically identified",
      "Clear violation of consent policies",
      "Evidence of ownership or subject rights",
      "Reporter must be directly affected by the content"
    ],
    evidenceRequirements: [
      "Direct links to content",
      "Identity verification",
      "Proof of lack of consent",
      "Documentation of when content was posted",
      "Screenshots or archived content (if available)"
    ],
    timeframes: {
      response: "24-48 hours",
      removal: "Usually within 24 hours after verification"
    },
    appealProcess: [
      "Use in-app appeal process",
      "Submit additional information through Help Center",
      "Request secondary review if needed",
      "Escalate through Facebook oversight process for eligible cases"
    ]
  },
  tiktok: {
    name: "TikTok",
    legalBasis: [
      "Community Guidelines on Adult Nudity and Sexual Activities",
      "Terms of Service on User Content",
      "Privacy Policy on Content Removal",
      "Platform Rules on Consent and Privacy"
    ],
    contentPolicies: [
      "Ban on non-consensual intimate content",
      "Prohibition of sexually explicit material",
      "Protection against harassment and bullying",
      "Strict rules against impersonation",
      "Zero tolerance for content exploitation"
    ],
    removalCriteria: [
      "Clear identification of violating content",
      "Proof of content ownership or subject status",
      "Demonstration of policy violation",
      "Verification of non-consent"
    ],
    evidenceRequirements: [
      "Video URL or direct link",
      "Timestamp of violations in video",
      "Identity verification documents",
      "Evidence of content ownership",
      "Documentation of harm or impact"
    ],
    timeframes: {
      response: "24-72 hours",
      removal: "Within 48 hours after verification"
    },
    appealProcess: [
      "Submit appeal through TikTok Support Center",
      "Provide additional context and evidence",
      "Request escalation for urgent cases",
      "Follow up through dedicated support channels"
    ]
  },
  pornhub: {
    name: "Pornhub",
    legalBasis: [
      "Content Removal Policy",
      "Terms of Service on User Uploads",
      "Trust and Safety Guidelines",
      "Model Program Requirements"
    ],
    contentPolicies: [
      "Mandatory content verification program",
      "Strict prohibition of non-consensual content",
      "Zero tolerance for underage content",
      "Required documentation for all uploads",
      "Immediate removal of reported violations"
    ],
    removalCriteria: [
      "Proof of appearance in content",
      "Documentation of lack of consent",
      "Evidence of content ownership",
      "Clear identification of violating material"
    ],
    evidenceRequirements: [
      "Government-issued ID",
      "Detailed content location information",
      "Proof of content ownership or appearance",
      "Documentation of non-consent",
      "Timeline of content discovery"
    ],
    timeframes: {
      response: "Within 24 hours",
      removal: "Immediate upon verification"
    },
    appealProcess: [
      "Contact Content Removal team",
      "Submit additional verification if requested",
      "Escalate through legal channels if necessary",
      "Follow up with dedicated support team"
    ]
  },
  onlyfans: {
    name: "OnlyFans",
    legalBasis: [
      "Terms of Service on Content Rights",
      "Privacy Policy",
      "Creator Agreement",
      "Content Removal Guidelines"
    ],
    contentPolicies: [
      "Strict verification requirements for creators",
      "Prohibition of unauthorized content sharing",
      "Zero tolerance for non-consensual content",
      "Protection against content theft and redistribution",
      "Mandatory age verification"
    ],
    removalCriteria: [
      "Proof of content ownership",
      "Evidence of unauthorized sharing",
      "Documentation of rights violation",
      "Clear identification of infringing content"
    ],
    evidenceRequirements: [
      "Government-issued ID verification",
      "Proof of content ownership",
      "Documentation of unauthorized use",
      "Specific URLs or content locations",
      "Evidence of copyright or rights violation"
    ],
    timeframes: {
      response: "Within 24 hours",
      removal: "24-48 hours after verification"
    },
    appealProcess: [
      "Contact Support team directly",
      "Submit DMCA takedown notice if applicable",
      "Provide additional verification if requested",
      "Escalate through legal channels if needed"
    ]
  }
};

export function getPlatformPolicy(platformId: string): PlatformPolicy | null {
  return platformPolicies[platformId] || null;
}