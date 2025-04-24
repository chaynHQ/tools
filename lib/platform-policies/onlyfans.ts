import { PlatformPolicy } from './types';

export const onlyfansPolicy: PlatformPolicy = {
  name: "OnlyFans",
  legalBasis: [
    {
      reference: "OF-TOS",
      title: "Terms of Service",
      section: "Various Sections (esp. 3. User Conduct, 7. Content, 11. Account Deactivation)",
      url: "https://onlyfans.com/terms",
      accessTimestamp: "2025-04-23T00:00:00Z"
    },
    {
      reference: "OF-AUP",
      title: "Acceptable Use Policy",
      section: "Various Sections (Prohibited Content and Activities)",
      url: "https://onlyfans.com/aup",
      accessTimestamp: "2025-04-23T00:00:00Z"
    },
    {
      reference: "OF-PP",
      title: "Privacy Policy",
      section: "Various Sections (esp. Information We Collect, How We Use Information)",
      url: "https://onlyfans.com/privacy",
      accessTimestamp: "2025-04-23T00:00:00Z"
    },
    {
      reference: "OF-DMCA",
      title: "DMCA Policy",
      section: "Reporting Copyright Infringement",
      url: "https://onlyfans.com/dmca",
      accessTimestamp: "2025-04-23T00:00:00Z"
    }
  ],
  contentPolicies: {
    intimate: [
      {
        reference: "OF-AUP-Nudity",
        policy: "Sets standards for sexually explicit content; prohibits non-consensual sexual content.",
        section: "Acceptable Use Policy - Sexually Explicit Content, Non-Consensual Content"
      },
      {
        reference: "OF-TOS-Verification",
        policy: "Requires creator identity verification, including age verification.",
        section: "Terms of Service - Section 6: Becoming a Creator"
      }
    ],
    personal: [
      {
        reference: "OF-AUP-Harassment",
        policy: "Prohibits harassment, bullying, abuse, threats, and promoting violence.",
        section: "Acceptable Use Policy - Harassment, Bullying, Abuse, and Threats"
      },
      {
        reference: "OF-AUP-PII",
        policy: "Prohibits sharing others' Personally Identifiable Information (PII) without consent (doxxing).",
        section: "Acceptable Use Policy - Privacy Violations"
      }
    ],
    private: [
      {
        reference: "OF-AUP-Privacy",
        policy: "Prohibits violating others' privacy, including sharing PII without consent.",
        section: "Acceptable Use Policy - Privacy Violations"
      },
      {
        reference: "OF-PP-Data",
        policy: "Outlines how OnlyFans handles user data and privacy.",
        section: "Privacy Policy"
      }
    ],
    impersonation: [
      {
        reference: "OF-AUP-Impersonation",
        policy: "Prohibits impersonating any person or entity.",
        section: "Acceptable Use Policy - Impersonation"
      },
      {
        reference: "OF-TOS-Account",
        policy: "Requires accurate account information.",
        section: "Terms of Service - Section 4: Account Registration"
      }
    ],
    hacked: [
      {
        reference: "OF-TOS-Security",
        policy: "Users are responsible for maintaining account confidentiality and security.",
        section: "Terms of Service - Section 4: Account Registration"
      },
      {
        reference: "OF-Support",
        policy: "Users should contact support for unauthorized account access issues.",
        section: "General Support Process (via website)"
      }
    ],
    general: [
      {
        reference: "OF-TOS-ContentOwnership",
        policy: "Creators retain ownership but grant OnlyFans a license; must have rights to post content.",
        section: "Terms of Service - Section 7: Content"
      },
      {
        reference: "OF-AUP-Prohibited",
        policy: "General list of prohibited content and activities (illegal acts, hate speech, etc.).",
        section: "Acceptable Use Policy - Various Sections"
      },
      {
        reference: "OF-DMCA-Policy",
        policy: "Process for reporting and handling copyright infringement claims.",
        section: "DMCA Policy"
      }
    ]
  },
  removalCriteria: {
    intimate: [
      "Content is non-consensual (OF-AUP-NonConsensual)",
      "Violates specific rules for sexually explicit content (OF-AUP-Nudity)",
      "Creator fails verification requirements (OF-TOS-Verification)",
      "Depicts illegal acts or exploitation (OF-AUP-Illegal)"
    ],
    personal: [
      "Constitutes targeted harassment, bullying, or threats (OF-AUP-Harassment)",
      "Shares someone's PII without consent (doxxing) (OF-AUP-PII)"
    ],
    private: [
      "Unauthorized sharing of private information/PII (OF-AUP-Privacy)",
      "Violates reasonable expectation of privacy"
    ],
    impersonation: [
      "Account clearly pretends to be another person/entity without authorization (OF-AUP-Impersonation)",
      "Use of name/likeness intended to deceive (OF-AUP-Impersonation)"
    ],
    hacked: [
      "Evidence of unauthorized access reported by account owner (OF-Support)",
      "Verification of original account ownership (Support Process)"
    ],
    general: [
      "Violation of any term in the Acceptable Use Policy (OF-AUP-Prohibited)",
      "Violation of the Terms of Service (OF-TOS)",
      "Infringement of intellectual property rights (OF-DMCA-Policy)",
      "Content is illegal or promotes illegal acts (OF-AUP-Illegal)"
    ]
  },
  evidenceRequirements: {
    intimate: [
      "URL(s) of the infringing content/profile",
      "Description of the violation (e.g., non-consensual, specific rule broken)",
      "Proof of identity (often required, especially for non-consensual reports)",
      "Evidence of non-consent (if applicable)"
    ],
    personal: [
      "URL(s) of the content/profile",
      "Description of the harassment or privacy violation",
      "Identification of PII shared (if applicable)",
      "Context of the harassment/bullying"
    ],
    private: [
      "URL(s) of the content/profile",
      "Identification of the specific private information disclosed",
      "Proof of identity/ownership of the information"
    ],
    impersonation: [
      "URL of the impersonating profile",
      "Username of the impersonating profile",
      "Information about the authentic person/entity being impersonated",
      "Government-issued ID (often required to prove identity)"
    ],
    hacked: [
      "Account username/email",
      "Description of the suspected unauthorized access",
      "Information to verify ownership (e.g., original email, payment info hints, ID)"
    ],
    general: [
      "URL(s) of the content/profile",
      "Specific policy violated (AUP/ToS section)",
      "Description of the violation",
      "Proof of rights ownership (for IP/DMCA claims)"
    ]
  },
  timeframes: {
    response: "Varies; OnlyFans aims to review reports but does not state a specific public response timeframe.",
    removal: "Occurs after review confirms a violation; no specific public timeframe guaranteed."
  },
  appealProcess: [
    "Decisions on content removal or account actions are typically communicated via email or account notification.",
    "Users can typically appeal by contacting OnlyFans Support (support@onlyfans.com or via help center forms).",
    "Appeal requires providing reasons for contesting the decision and potentially additional evidence.",
    "OnlyFans reviews appeals based on their internal processes; outcome communicated via email/notification."
  ]
};