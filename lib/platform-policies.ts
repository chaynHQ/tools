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
export const platformPolicies: Record<string, PlatformPolicy> = {
  facebook: {
    name: "Facebook",
    legalBasis: [
      {
        reference: "TOS-3.2",
        title: "Terms of Service",
        section: "Section 3.2: Your Commitments",
        url: "https://www.facebook.com/terms.php"
      },
      {
        reference: "CS-IV-13",
        title: "Community Standards",
        section: "Section IV.13: Image Privacy Rights",
        url: "https://transparency.fb.com/policies/community-standards/"
      },
      {
        reference: "PP-2.1",
        title: "Privacy Policy",
        section: "Section 2.1: User Content Control",
        url: "https://www.facebook.com/privacy/policy/"
      }
    ],
    contentPolicies: {
      intimate: [
        {
          reference: "CS-IV-13.1",
          policy: "Zero tolerance for non-consensual intimate imagery",
          section: "Non-Consensual Intimate Images"
        },
        {
          reference: "CS-IV-13.2",
          policy: "Immediate removal of intimate content shared without consent",
          section: "Content Removal Protocol"
        }
      ],
      personal: [
        {
          reference: "CS-III-8.1",
          policy: "Protection of personal content and information",
          section: "Personal Privacy"
        },
        {
          reference: "CS-III-8.2",
          policy: "Prohibition of unauthorized personal content sharing",
          section: "Content Rights"
        }
      ],
      private: [
        {
          reference: "CS-III-9.1",
          policy: "Safeguarding of private information",
          section: "Private Information Protection"
        },
        {
          reference: "PP-3.4",
          policy: "Protection against unauthorized data sharing",
          section: "Data Protection Measures"
        }
      ],
      impersonation: [
        {
          reference: "CS-V-19.1",
          policy: "Zero tolerance for impersonation accounts",
          section: "Account Authenticity"
        },
        {
          reference: "CS-V-19.2",
          policy: "Protection against identity theft",
          section: "Identity Protection"
        }
      ],
      hacked: [
        {
          reference: "CS-VI-21.1",
          policy: "Protection against unauthorized access",
          section: "Account Security"
        },
        {
          reference: "CS-VI-21.2",
          policy: "Immediate action on breached content",
          section: "Security Response"
        }
      ],
      general: [
        {
          reference: "CS-I-3.1",
          policy: "Content ownership verification requirements",
          section: "Content Rights"
        },
        {
          reference: "CS-I-3.2",
          policy: "User consent requirements",
          section: "Consent Protocol"
        }
      ]
    },
    removalCriteria: {
      intimate: [
        "Clear identification of intimate content (CS-IV-13.1.a)",
        "Proof of lack of consent (CS-IV-13.1.b)",
        "Verification of content ownership (CS-IV-13.1.c)"
      ],
      personal: [
        "Evidence of personal content ownership (CS-III-8.1.a)",
        "Demonstration of unauthorized sharing (CS-III-8.1.b)",
        "Proof of privacy violation (CS-III-8.1.c)"
      ],
      private: [
        "Verification of private information (CS-III-9.1.a)",
        "Proof of unauthorized disclosure (CS-III-9.1.b)",
        "Documentation of privacy breach (CS-III-9.1.c)"
      ],
      impersonation: [
        "Evidence of authentic identity (CS-V-19.1.a)",
        "Proof of impersonation (CS-V-19.1.b)",
        "Documentation of false representation (CS-V-19.1.c)"
      ],
      hacked: [
        "Evidence of account compromise (CS-VI-21.1.a)",
        "Proof of unauthorized access (CS-VI-21.1.b)",
        "Timeline of security breach (CS-VI-21.1.c)"
      ],
      general: [
        "Clear content identification (CS-I-3.1.a)",
        "Proof of rights violation (CS-I-3.1.b)",
        "Documentation of harm (CS-I-3.1.c)"
      ]
    },
    evidenceRequirements: {
      intimate: [
        "Government-issued ID (Form CS-IV-13-ID)",
        "Original content files if available (CS-IV-13-OF)",
        "Documentation of content creation (CS-IV-13-DC)"
      ],
      personal: [
        "Proof of content ownership (Form CS-III-8-CO)",
        "Evidence of unauthorized sharing (CS-III-8-US)",
        "Original content documentation (CS-III-8-OC)"
      ],
      private: [
        "Verification of information ownership (Form CS-III-9-IO)",
        "Proof of privacy violation (CS-III-9-PV)",
        "Documentation of unauthorized disclosure (CS-III-9-UD)"
      ],
      impersonation: [
        "Official identification documents (Form CS-V-19-ID)",
        "Proof of authentic identity (CS-V-19-AI)",
        "Evidence of impersonation (CS-V-19-EI)"
      ],
      hacked: [
        "Account ownership verification (Form CS-VI-21-AO)",
        "Evidence of unauthorized access (CS-VI-21-UA)",
        "Security breach documentation (CS-VI-21-SB)"
      ],
      general: [
        "Content location details (Form CS-I-3-CL)",
        "Timeline documentation (CS-I-3-TD)",
        "Communication records (CS-I-3-CR)"
      ]
    },
    timeframes: {
      response: "24-48 hours (per CS-VII-24.1)",
      removal: "Within 24 hours of verification (per CS-VII-24.2)"
    },
    appealProcess: [
      "Submit appeal through Help Center (Form CS-VIII-25-A)",
      "Provide additional documentation (per CS-VIII-25.2)",
      "Request oversight board review (Form CS-VIII-25-OB)",
      "Expect response within 7-14 days (per CS-VIII-25.3)"
    ]
  },
  instagram: {
    name: "Instagram",
    legalBasis: [
      {
        reference: "TOS-4.3",
        title: "Terms of Service",
        section: "Section 4.3: Content Rights",
        url: "https://help.instagram.com/581066165581870"
      },
      {
        reference: "CG-5",
        title: "Community Guidelines",
        section: "Section 5: Privacy and Consent",
        url: "https://help.instagram.com/477434105621119"
      },
      {
        reference: "PP-3",
        title: "Privacy Policy",
        section: "Section 3: Content Control",
        url: "https://help.instagram.com/519522125107875"
      }
    ],
    contentPolicies: {
      intimate: [
        {
          reference: "CG-5.1",
          policy: "Strict prohibition of non-consensual intimate imagery",
          section: "Intimate Content Policy"
        },
        {
          reference: "CG-5.2",
          policy: "Immediate action on reported intimate content",
          section: "Content Removal"
        }
      ],
      personal: [
        {
          reference: "CG-4.1",
          policy: "Protection of personal content rights",
          section: "Personal Content"
        },
        {
          reference: "CG-4.2",
          policy: "Unauthorized content sharing prevention",
          section: "Content Sharing"
        }
      ],
      private: [
        {
          reference: "PP-3.1",
          policy: "Private information protection measures",
          section: "Information Security"
        },
        {
          reference: "PP-3.2",
          policy: "Data privacy enforcement",
          section: "Privacy Protection"
        }
      ],
      impersonation: [
        {
          reference: "CG-2.1",
          policy: "Account authenticity requirements",
          section: "Account Verification"
        },
        {
          reference: "CG-2.2",
          policy: "Impersonation account removal",
          section: "Identity Protection"
        }
      ],
      hacked: [
        {
          reference: "SEC-1.1",
          policy: "Account security protocols",
          section: "Security Measures"
        },
        {
          reference: "SEC-1.2",
          policy: "Compromised account protection",
          section: "Account Recovery"
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
        "Content identification verification (CG-5.1.a)",
        "Proof of non-consent (CG-5.1.b)",
        "Subject verification (CG-5.1.c)"
      ],
      personal: [
        "Content ownership evidence (CG-4.1.a)",
        "Unauthorized sharing proof (CG-4.1.b)",
        "Rights documentation (CG-4.1.c)"
      ],
      private: [
        "Information ownership verification (PP-3.1.a)",
        "Privacy violation evidence (PP-3.1.b)",
        "Unauthorized disclosure proof (PP-3.1.c)"
      ],
      impersonation: [
        "Identity verification (CG-2.1.a)",
        "Impersonation evidence (CG-2.1.b)",
        "Account misuse documentation (CG-2.1.c)"
      ],
      hacked: [
        "Account ownership proof (SEC-1.1.a)",
        "Security breach evidence (SEC-1.1.b)",
        "Unauthorized access timeline (SEC-1.1.c)"
      ],
      general: [
        "Content location details (CG-1.1.a)",
        "Rights violation evidence (CG-1.1.b)",
        "Impact documentation (CG-1.1.c)"
      ]
    },
    evidenceRequirements: {
      intimate: [
        "Government ID verification (Form IG-CG-5-ID)",
        "Original content proof (IG-CG-5-OC)",
        "Creation documentation (IG-CG-5-CD)"
      ],
      personal: [
        "Content ownership evidence (Form IG-CG-4-CO)",
        "Distribution violation proof (IG-CG-4-DV)",
        "Rights documentation (IG-CG-4-RD)"
      ],
      private: [
        "Information ownership verification (Form IG-PP-3-IO)",
        "Privacy breach evidence (IG-PP-3-PB)",
        "Disclosure documentation (IG-PP-3-DD)"
      ],
      impersonation: [
        "Identity verification documents (Form IG-CG-2-ID)",
        "Impersonation evidence (IG-CG-2-IE)",
        "Account documentation (IG-CG-2-AD)"
      ],
      hacked: [
        "Account verification (Form IG-SEC-1-AV)",
        "Breach evidence (IG-SEC-1-BE)",
        "Access documentation (IG-SEC-1-AD)"
      ],
      general: [
        "Content details (Form IG-CG-1-CD)",
        "Timeline documentation (IG-CG-1-TD)",
        "Communication records (IG-CG-1-CR)"
      ]
    },
    timeframes: {
      response: "24-48 hours (per CG-6.1)",
      removal: "Within 24 hours of verification (per CG-6.2)"
    },
    appealProcess: [
      "Submit appeal through Help Center (Form IG-CG-7-A)",
      "Provide additional verification (per CG-7.2)",
      "Request review escalation (Form IG-CG-7-ER)",
      "Response within 7 days (per CG-7.3)"
    ]
  },
  tiktok: {
    name: "TikTok",
    legalBasis: [
      {
        reference: "TOS-5",
        title: "Terms of Service",
        section: "Section 5: User Content",
        url: "https://www.tiktok.com/legal/terms-of-service"
      },
      {
        reference: "CG-3",
        title: "Community Guidelines",
        section: "Section 3: Safety and Privacy",
        url: "https://www.tiktok.com/community-guidelines"
      },
      {
        reference: "PP-4",
        title: "Privacy Policy",
        section: "Section 4: Content Rights",
        url: "https://www.tiktok.com/legal/privacy-policy"
      }
    ],
    contentPolicies: {
      intimate: [
        {
          reference: "CG-3.4",
          policy: "Zero tolerance for non-consensual intimate content",
          section: "Intimate Content"
        },
        {
          reference: "CG-3.5",
          policy: "Immediate removal of unauthorized intimate content",
          section: "Content Removal"
        }
      ],
      personal: [
        {
          reference: "CG-3.2",
          policy: "Personal content protection",
          section: "Personal Privacy"
        },
        {
          reference: "CG-3.3",
          policy: "Unauthorized sharing prevention",
          section: "Content Sharing"
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
        "Breach evidence (OF-TOS-7-BE)",
        "Access documentation (OF-TOS-7-AD)"
      ],
      general: [
        "Content details (Form OF-TOS-2-CD)",
        "Timeline documentation (OF-TOS-2-TD)",
        "Communication records (OF-TOS-2-CR)"
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
