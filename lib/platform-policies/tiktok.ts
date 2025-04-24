import { PlatformPolicy } from './types';

export const tiktokPolicy: PlatformPolicy = {
  name: "TikTok",
  legalBasis: [
    {
      reference: "TT-TOS",
      title: "Terms of Service",
      section: "Various Sections (esp. Your Access to and Use of Our Services, Content)",
      url: "https://www.tiktok.com/legal/page/us/terms-of-service/en",
      accessTimestamp: "2025-04-23T00:00:00Z"
    },
    {
      reference: "TT-CG",
      title: "Community Guidelines",
      section: "All Sections (Detailed content rules)",
      url: "https://www.tiktok.com/community-guidelines/en/",
      accessTimestamp: "2025-04-23T00:00:00Z"
    },
    {
      reference: "TT-PP",
      title: "Privacy Policy",
      section: "Various Sections (Data collection, use, and sharing)",
      url: "https://www.tiktok.com/legal/page/us/privacy-policy/en",
      accessTimestamp: "2025-04-23T00:00:00Z"
    },
    {
      reference: "TT-IP",
      title: "Intellectual Property Policy",
      section: "Copyright and Trademark Infringement Reporting",
      url: "https://www.tiktok.com/legal/page/us/intellectual-property-policy/en",
      accessTimestamp: "2025-04-23T00:00:00Z"
    }
  ],
  contentPolicies: {
    intimate: [
      {
        reference: "TT-CG-Nudity",
        policy: "Prohibits adult nudity, sexual activity, and non-consensual sexual content/imagery (NCSM).",
        section: "Community Guidelines - Adult nudity and sexual activities; Non-consensual sexual content"
      },
      {
        reference: "TT-CG-Exploitation",
        policy: "Prohibits sexual solicitation and human exploitation.",
        section: "Community Guidelines - Human exploitation; Sexual solicitation"
      }
    ],
    personal: [
      {
        reference: "TT-CG-Harassment",
        policy: "Prohibits bullying, harassment, abusive behavior, and severe threats.",
        section: "Community Guidelines - Harassment and bullying; Hateful behavior"
      },
      {
        reference: "TT-CG-Privacy",
        policy: "Prohibits sharing Personally Identifiable Information (PII) without consent (doxxing).",
        section: "Community Guidelines - Privacy and personal data violations"
      }
    ],
    private: [
      {
        reference: "TT-CG-Privacy",
        policy: "Prohibits violating privacy, including sharing PII or non-public personal information without consent.",
        section: "Community Guidelines - Privacy and personal data violations"
      },
      {
        reference: "TT-PP-Data",
        policy: "Outlines how TikTok collects, uses, and protects user data.",
        section: "Privacy Policy"
      }
    ],
    impersonation: [
      {
        reference: "TT-CG-Impersonation",
        policy: "Prohibits impersonating individuals or organizations in a deceptive manner.",
        section: "Community Guidelines - Impersonation"
      },
      {
        reference: "TT-CG-Integrity",
        policy: "Prohibits misleading content about identity or authenticity.",
        section: "Community Guidelines - Integrity and authenticity"
      }
    ],
    hacked: [
      {
        reference: "TT-TOS-Security",
        policy: "Users are responsible for maintaining account security.",
        section: "Terms of Service - Your Account with Us"
      },
      {
        reference: "TT-Support-Hacked",
        policy: "Provides processes for reporting and recovering compromised accounts.",
        section: "TikTok Help Center - Account Safety / Hacked Accounts"
      }
    ],
    general: [
      {
        reference: "TT-TOS-ContentRights",
        policy: "Users grant TikTok a license but must have rights to the content they post.",
        section: "Terms of Service - Content You Provide"
      },
      {
        reference: "TT-CG-Illegal",
        policy: "Prohibits illegal activities, regulated goods, and other harmful content.",
        section: "Community Guidelines - Illegal activities and regulated goods"
      },
      {
        reference: "TT-IP-Policy",
        policy: "Process for handling copyright and trademark infringement claims.",
        section: "Intellectual Property Policy"
      }
    ]
  },
  removalCriteria: {
    intimate: [
      "Content depicts prohibited nudity or sexual acts (TT-CG-Nudity)",
      "Content is verified as non-consensual sexual content/imagery (TT-CG-Nudity)",
      "Content involves sexual solicitation or exploitation (TT-CG-Exploitation)"
    ],
    personal: [
      "Constitutes targeted bullying or harassment (TT-CG-Harassment)",
      "Shares PII without consent (doxxing) (TT-CG-Privacy)",
      "Qualifies as hateful behavior targeting protected attributes (TT-CG-Harassment)"
    ],
    private: [
      "Unauthorized sharing of PII or non-public personal information (TT-CG-Privacy)",
      "Violates reasonable expectation of privacy"
    ],
    impersonation: [
      "Account deceptively impersonates another person/entity (TT-CG-Impersonation)",
      "Violates policies on integrity and authenticity (TT-CG-Integrity)"
    ],
    hacked: [
      "Report of unauthorized access verified by account owner (TT-Support-Hacked)",
      "Account activity clearly violates CG/ToS due to compromise"
    ],
    general: [
      "Violation of any Community Guideline (TT-CG-All)",
      "Violation of Terms of Service (TT-TOS)",
      "Content promotes illegal acts or regulated goods (TT-CG-Illegal)",
      "Valid copyright or trademark infringement notice received (TT-IP-Policy)"
    ]
  },
  evidenceRequirements: {
    intimate: [
      "Link to the specific video/profile",
      "Description of the violation (nudity, non-consensual, etc.)",
      "Username(s) involved",
      "Proof of identity (may be required for victim reports/privacy claims)"
    ],
    personal: [
      "Link to the video/comment/profile",
      "Description of the harassment, bullying, or privacy violation",
      "Username(s) involved",
      "Identification of PII shared (if applicable)"
    ],
    private: [
      "Link to the video/profile",
      "Identification of the specific private information disclosed",
      "Proof of identity/ownership of the information"
    ],
    impersonation: [
      "Link to the impersonating profile",
      "Username of the impersonating profile",
      "Information/Username of the authentic person/entity being impersonated",
      "Proof of identity (often required)"
    ],
    hacked: [
      "Account username",
      "Description of suspected unauthorized access/activity",
      "Information to verify ownership (e.g., linked email/phone, date of birth, device info)"
    ],
    general: [
      "Link to the video/profile",
      "Specific Community Guideline or policy violated",
      "Description of the violation",
      "For IP Claims: Information required by the IP Policy (TT-IP-Policy)"
    ]
  },
  timeframes: {
    response: "Varies; TikTok aims to review reports but provides no specific public response timeframe.",
    removal: "Occurs after review confirms a violation; no specific public timeframe guaranteed."
  },
  appealProcess: [
    "Notifications about violations/removals typically sent via in-app notification (Inbox > System notifications).",
    "Option to 'Appeal' often provided directly within the notification or via Account Status section.",
    "May require submitting reasons for the appeal.",
    "TikTok reviews the appeal based on internal processes.",
    "Appeal decision communicated via in-app notification."
  ]
};