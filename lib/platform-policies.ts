export interface PlatformPolicy {
  name: string;
  legalBasis: Array<{
    reference: string;
    title: string;
    section: string;
    url: string;
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

const platformPolicies: Record<string, PlatformPolicy> = {
  tiktok: {
    name: "TikTok",
    legalBasis: [
      {
        reference: "TOS-4",
        title: "Terms of Service",
        section: "Section 4: Content Rights",
        url: "https://www.tiktok.com/legal/terms-of-service"
      },
      {
        reference: "CG-3",
        title: "Community Guidelines",
        section: "Section 3: Content Removal",
        url: "https://www.tiktok.com/community-guidelines"
      },
      {
        reference: "PP-4",
        title: "Privacy Policy",
        section: "Section 4: Data Protection",
        url: "https://www.tiktok.com/legal/privacy-policy"
      }
    ],
    contentPolicies: {
      intimate: [
        {
          reference: "CG-3.4",
          policy: "Strict verification for intimate content",
          section: "Content Verification"
        },
        {
          reference: "CG-3.5",
          policy: "Immediate removal of unauthorized content",
          section: "Content Removal"
        }
      ],
      personal: [
        {
          reference: "CG-3.2",
          policy: "Personal content protection",
          section: "Content Rights"
        },
        {
          reference: "CG-3.3",
          policy: "Unauthorized sharing prevention",
          section: "Distribution Control"
        }
      ],
      private: [
        {
          reference: "PP-4.1",
          policy: "Private information safeguards",
          section: "Information Protection"
        },
        {
          reference: "PP-4.2",
          policy: "Data privacy enforcement",
          section: "Privacy Control"
        }
      ],
      impersonation: [
        {
          reference: "CG-2.1",
          policy: "Account authenticity requirements",
          section: "Identity Verification"
        },
        {
          reference: "CG-2.2",
          policy: "Impersonation prevention measures",
          section: "Account Protection"
        }
      ],
      hacked: [
        {
          reference: "SEC-2.1",
          policy: "Account security measures",
          section: "Security Protocol"
        },
        {
          reference: "SEC-2.2",
          policy: "Unauthorized access prevention",
          section: "Access Control"
        }
      ],
      general: [
        {
          reference: "CG-1.1",
          policy: "Content rights verification",
          section: "Rights Management"
        },
        {
          reference: "CG-1.2",
          policy: "User consent requirements",
          section: "Consent Protocol"
        }
      ]
    },
    removalCriteria: {
      intimate: [
        "Content identification verification (CG-3.4.a)",
        "Proof of non-consent (CG-3.4.b)",
        "Subject verification (CG-3.4.c)"
      ],
      personal: [
        "Content ownership evidence (CG-3.2.a)",
        "Unauthorized sharing proof (CG-3.2.b)",
        "Rights documentation (CG-3.2.c)"
      ],
      private: [
        "Information ownership verification (PP-4.1.a)",
        "Privacy violation evidence (PP-4.1.b)",
        "Unauthorized disclosure proof (PP-4.1.c)"
      ],
      impersonation: [
        "Identity verification (CG-2.1.a)",
        "Impersonation evidence (CG-2.1.b)",
        "Account misuse documentation (CG-2.1.c)"
      ],
      hacked: [
        "Account ownership proof (SEC-2.1.a)",
        "Security breach evidence (SEC-2.1.b)",
        "Unauthorized access timeline (SEC-2.1.c)"
      ],
      general: [
        "Content location details (CG-1.1.a)",
        "Rights violation evidence (CG-1.1.b)",
        "Impact documentation (CG-1.1.c)"
      ]
    },
    evidenceRequirements: {
      intimate: [
        "Government ID verification (Form TT-CG-3-ID)",
        "Original content proof (TT-CG-3-OC)",
        "Creation documentation (TT-CG-3-CD)"
      ],
      personal: [
        "Content ownership evidence (Form TT-CG-3-CO)",
        "Distribution violation proof (TT-CG-3-DV)",
        "Rights documentation (TT-CG-3-RD)"
      ],
      private: [
        "Information ownership verification (Form TT-PP-4-IO)",
        "Privacy breach evidence (TT-PP-4-PB)",
        "Disclosure documentation (TT-PP-4-DD)"
      ],
      impersonation: [
        "Identity verification documents (Form TT-CG-2-ID)",
        "Impersonation evidence (TT-CG-2-IE)",
        "Account documentation (TT-CG-2-AD)"
      ],
      hacked: [
        "Account verification (Form TT-SEC-2-AV)",
        "Breach evidence (TT-SEC-2-BE)",
        "Access documentation (TT-SEC-2-AD)"
      ],
      general: [
        "Content details (Form TT-CG-1-CD)",
        "Timeline documentation (TT-CG-1-TD)",
        "Communication records (TT-CG-1-CR)"
      ]
    },
    timeframes: {
      response: "Within 24 hours (per CG-4.1)",
      removal: "24-48 hours after verification (per CG-4.2)"
    },
    appealProcess: [
      "Submit appeal through Support Center (Form TT-CG-5-A)",
      "Provide additional verification (per CG-5.2)",
      "Request review escalation (Form TT-CG-5-ER)",
      "Response within 48-72 hours (per CG-5.3)"
    ]
  },
  onlyfans: {
    name: "OnlyFans",
    legalBasis: [
      {
        reference: "TOS-5",
        title: "Terms of Service",
        section: "Section 5: Content Rights and Ownership",
        url: "https://onlyfans.com/terms"
      },
      {
        reference: "CA-3",
        title: "Creator Agreement",
        section: "Section 3: Content Standards",
        url: "https://onlyfans.com/agreement"
      },
      {
        reference: "PP-4",
        title: "Privacy Policy",
        section: "Section 4: Content Control",
        url: "https://onlyfans.com/privacy"
      }
    ],
    contentPolicies: {
      intimate: [
        {
          reference: "CA-3.4",
          policy: "Strict verification for intimate content",
          section: "Content Verification"
        },
        {
          reference: "CA-3.5",
          policy: "Immediate removal of unauthorized intimate content",
          section: "Content Removal"
        }
      ],
      personal: [
        {
          reference: "TOS-5.2",
          policy: "Personal content rights protection",
          section: "Content Rights"
        },
        {
          reference: "TOS-5.3",
          policy: "Prevention of unauthorized content distribution",
          section: "Distribution Control"
        }
      ],
      private: [
        {
          reference: "PP-4.1",
          policy: "Private information protection measures",
          section: "Information Security"
        },
        {
          reference: "PP-4.2",
          policy: "Data privacy safeguards",
          section: "Privacy Protection"
        }
      ],
      impersonation: [
        {
          reference: "TOS-6.1",
          policy: "Creator identity verification requirements",
          section: "Account Verification"
        },
        {
          reference: "TOS-6.2",
          policy: "Zero tolerance for impersonation",
          section: "Identity Protection"
        }
      ],
      hacked: [
        {
          reference: "TOS-7.1",
          policy: "Account security protocols",
          section: "Security Measures"
        },
        {
          reference: "TOS-7.2",
          policy: "Unauthorized access remediation",
          section: "Access Control"
        }
      ],
      general: [
        {
          reference: "TOS-2.1",
          policy: "Content ownership verification",
          section: "Ownership Rights"
        },
        {
          reference: "TOS-2.2",
          policy: "User consent requirements",
          section: "Consent Protocol"
        }
      ]
    },
    removalCriteria: {
      intimate: [
        "Content identification verification (CA-3.4.a)",
        "Proof of unauthorized sharing (CA-3.4.b)",
        "Subject verification (CA-3.4.c)"
      ],
      personal: [
        "Content ownership evidence (TOS-5.2.a)",
        "Distribution violation proof (TOS-5.2.b)",
        "Rights documentation (TOS-5.2.c)"
      ],
      private: [
        "Information ownership verification (PP-4.1.a)",
        "Privacy breach evidence (PP-4.1.b)",
        "Unauthorized disclosure proof (PP-4.1.c)"
      ],
      impersonation: [
        "Identity verification (TOS-6.1.a)",
        "Impersonation evidence (TOS-6.1.b)",
        "Account misuse documentation (TOS-6.1.c)"
      ],
      hacked: [
        "Account ownership proof (TOS-7.1.a)",
        "Security breach evidence (TOS-7.1.b)",
        "Unauthorized access timeline (TOS-7.1.c)"
      ],
      general: [
        "Content location details (TOS-2.1.a)",
        "Rights violation evidence (TOS-2.1.b)",
        "Impact documentation (TOS-2.1.c)"
      ]
    },
    evidenceRequirements: {
      intimate: [
        "Government ID verification (Form OF-CA-3-ID)",
        "Original content proof (OF-CA-3-OC)",
        "Creation documentation (OF-CA-3-CD)"
      ],
      personal: [
        "Content ownership evidence (Form OF-TOS-5-CO)",
        "Distribution violation proof (OF-TOS-5-DV)",
        "Rights documentation (OF-TOS-5-RD)"
      ],
      private: [
        "Information ownership verification (Form OF-PP-4-IO)",
        "Privacy breach evidence (OF-PP-4-PB)",
        "Disclosure documentation (OF-PP-4-DD)"
      ],
      impersonation: [
        "Identity verification documents (Form OF-TOS-6-ID)",
        "Impersonation evidence (OF-TOS-6-IE)",
        "Account documentation (OF-TOS-6-AD)"
      ],
      hacked: [
        "Account verification (Form OF-TOS-7-AV)",
        "Breach evidence (Form OF-TOS-7-BE)",
        "Access documentation (Form OF-TOS-7-AD)"
      ],
      general: [
        "Content details (Form OF-TOS-2-CD)",
        "Timeline documentation (Form OF-TOS-2-TD)",
        "Communication records (Form OF-TOS-2-CR)"
      ]
    },
    timeframes: {
      response: "Within 24 hours (per TOS-8.1)",
      removal: "24-48 hours after verification (per TOS-8.2)"
    },
    appealProcess: [
      "Submit appeal through Support (Form OF-TOS-9-A)",
      "Provide additional verification (per TOS-9.2)",
      "Request review escalation (Form OF-TOS-9-ER)",
      "Response within 5 days (per TOS-9.3)"
    ]
  },
  pornhub: {
    name: "Pornhub",
    legalBasis: [
      {
        reference: "TOS-6",
        title: "Terms of Service",
        section: "Section 6: Content Removal",
        url: "https://www.pornhub.com/information#terms"
      },
      {
        reference: "CRP-2",
        title: "Content Removal Policy",
        section: "Section 2: Removal Process",
        url: "https://www.pornhub.com/content-removal"
      },
      {
        reference: "TSG-4",
        title: "Trust & Safety Guidelines",
        section: "Section 4: Content Standards",
        url: "https://www.pornhub.com/trust-and-safety"
      }
    ],
    contentPolicies: {
      intimate: [
        {
          reference: "CRP-2.1",
          policy: "Mandatory content verification program",
          section: "Content Verification"
        },
        {
          reference: "CRP-2.2",
          policy: "Immediate removal of non-consensual content",
          section: "Content Removal"
        }
      ],
      personal: [
        {
          reference: "TSG-4.1",
          policy: "Personal content protection measures",
          section: "Content Protection"
        },
        {
          reference: "TSG-4.2",
          policy: "Unauthorized sharing prevention",
          section: "Distribution Control"
        }
      ],
      private: [
        {
          reference: "TSG-5.1",
          policy: "Private information safeguards",
          section: "Information Security"
        },
        {
          reference: "TSG-5.2",
          policy: "Data privacy requirements",
          section: "Privacy Protection"
        }
      ],
      impersonation: [
        {
          reference: "TSG-6.1",
          policy: "Model verification requirements",
          section: "Identity Verification"
        },
        {
          reference: "TSG-6.2",
          policy: "Impersonation prevention measures",
          section: "Identity Protection"
        }
      ],
      hacked: [
        {
          reference: "TSG-7.1",
          policy: "Account security protocols",
          section: "Security Measures"
        },
        {
          reference: "TSG-7.2",
          policy: "Unauthorized access prevention",
          section: "Access Control"
        }
      ],
      general: [
        {
          reference: "TOS-3.1",
          policy: "Content rights verification",
          section: "Rights Management"
        },
        {
          reference: "TOS-3.2",
          policy: "User consent requirements",
          section: "Consent Protocol"
        }
      ]
    },
    removalCriteria: {
      intimate: [
        "Content identification verification (CRP-2.1.a)",
        "Non-consent evidence (CRP-2.1.b)",
        "Subject verification (CRP-2.1.c)"
      ],
      personal: [
        "Content ownership proof (TSG-4.1.a)",
        "Unauthorized sharing evidence (TSG-4.1.b)",
        "Rights documentation (TSG-4.1.c)"
      ],
      private: [
        "Information ownership verification (TSG-5.1.a)",
        "Privacy violation proof (TSG-5.1.b)",
        "Unauthorized disclosure evidence (TSG-5.1.c)"
      ],
      impersonation: [
        "Identity verification (TSG-6.1.a)",
        "Impersonation evidence (TSG-6.1.b)",
        "Account misuse documentation (TSG-6.1.c)"
      ],
      hacked: [
        "Account ownership proof (TSG-7.1.a)",
        "Security breach evidence (TSG-7.1.b)",
        "Unauthorized access timeline (TSG-7.1.c)"
      ],
      general: [
        "Content location details (TOS-3.1.a)",
        "Rights violation evidence (TOS-3.1.b)",
        "Impact documentation (TOS-3.1.c)"
      ]
    },
    evidenceRequirements: {
      intimate: [
        "Government ID verification (Form PH-CRP-2-ID)",
        "Original content proof (PH-CRP-2-OC)",
        "Creation documentation (PH-CRP-2-CD)"
      ],
      personal: [
        "Content ownership evidence (Form PH-TSG-4-CO)",
        "Distribution violation proof (PH-TSG-4-DV)",
        "Rights documentation (PH-TSG-4-RD)"
      ],
      private: [
        "Information ownership verification (Form PH-TSG-5-IO)",
        "Privacy breach evidence (PH-TSG-5-PB)",
        "Disclosure documentation (PH-TSG-5-DD)"
      ],
      impersonation: [
        "Identity verification documents (Form PH-TSG-6-ID)",
        "Impersonation evidence (PH-TSG-6-IE)",
        "Account documentation (PH-TSG-6-AD)"
      ],
      hacked: [
        "Account verification (Form PH-TSG-7-AV)",
        "Breach evidence (PH-TSG-7-BE)",
        "Access documentation (PH-TSG-7-AD)"
      ],
      general: [
        "Content details (Form PH-TOS-3-CD)",
        "Timeline documentation (PH-TOS-3-TD)",
        "Communication records (PH-TOS-3-CR)"
      ]
    },
    timeframes: {
      response: "Within 24 hours (per CRP-3.1)",
      removal: "Immediate upon verification (per CRP-3.2)"
    },
    appealProcess: [
      "Contact Content Removal team (Form PH-CRP-4-A)",
      "Submit additional verification (per CRP-4.2)",
      "Request escalation review (Form PH-CRP-4-ER)",
      "Response within 48 hours (per CRP-4.3)"
    ]
  }
};

function getPlatformPolicy(platformId: string): PlatformPolicy | null {
  return platformPolicies[platformId] || null;
}

function getRelevantPolicies(
  policy: PlatformPolicy,
  contentType: string,
  contentContext: string
) {
  if (!policy) return null;

  const relevantPolicies = {
    legalBasis: [] as typeof policy.legalBasis,
    contentPolicies: [] as { reference: string; policy: string; section?: string }[],
    removalCriteria: [] as string[],
    evidenceRequirements: [] as string[]
  };

  // Add type-specific policies
  if (contentType in policy.contentPolicies) {
    relevantPolicies.contentPolicies.push(
      ...policy.contentPolicies[contentType as keyof typeof policy.contentPolicies]
    );
    relevantPolicies.removalCriteria.push(
      ...policy.removalCriteria[contentType as keyof typeof policy.removalCriteria]
    );
    relevantPolicies.evidenceRequirements.push(
      ...policy.evidenceRequirements[contentType as keyof typeof policy.evidenceRequirements]
    );
  }

  // Add context-specific policies
  if (contentContext in policy.contentPolicies) {
    relevantPolicies.contentPolicies.push(
      ...policy.contentPolicies[contentContext as keyof typeof policy.contentPolicies]
    );
    relevantPolicies.removalCriteria.push(
      ...policy.removalCriteria[contentContext as keyof typeof policy.removalCriteria]
    );
    relevantPolicies.evidenceRequirements.push(
      ...policy.evidenceRequirements[contentContext as keyof typeof policy.evidenceRequirements]
    );
  }

  // Add general policies
  relevantPolicies.contentPolicies.push(...policy.contentPolicies.general);
  relevantPolicies.removalCriteria.push(...policy.removalCriteria.general);
  relevantPolicies.evidenceRequirements.push(...policy.evidenceRequirements.general);

  // Add legal basis
  relevantPolicies.legalBasis = policy.legalBasis;

  return relevantPolicies;
}

export { getPlatformPolicy, getRelevantPolicies };
