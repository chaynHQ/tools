import { PlatformPolicy } from './types';

export const pornhubPolicy: PlatformPolicy = {
  name: "Pornhub",
  legalBasis: [
    {
      reference: "PH-TOS",
      title: "Terms of Service",
      section: "Various Sections (esp. 3. Account, 4. User Conduct, 5. User Content)",
      url: "https://www.pornhub.com/information#terms",
      accessTimestamp: "2025-04-23T00:00:00Z"
    },
    {
      reference: "PH-CRP",
      title: "Content Removal Policy",
      section: "Reporting Illegal or Non-Consensual Content",
      url: "https://help.pornhub.com/hc/en-us/articles/360059169994-Content-Removal-Policy",
      accessTimestamp: "2025-04-23T00:00:00Z"
    },
    {
      reference: "PH-TS",
      title: "Trust & Safety",
      section: "Overview of Safety Measures (Verification, Moderation, etc.)",
      url: "https://www.pornhub.com/trustandsafety",
      accessTimestamp: "2025-04-23T00:00:00Z"
    },
    {
      reference: "PH-DMCA",
      title: "DMCA Policy",
      section: "Reporting Copyright Infringement",
      url: "https://help.pornhub.com/hc/en-us/articles/360059538113-DMCA-Policy",
      accessTimestamp: "2025-04-23T00:00:00Z"
    },
    {
      reference: "PH-PP",
      title: "Privacy Policy",
      section: "Data Collection and Usage",
      url: "https://www.pornhub.com/information#privacy",
      accessTimestamp: "2025-04-23T00:00:00Z"
    }
  ],
  contentPolicies: {
    intimate: [
      {
        reference: "PH-CRP-NonConsensual",
        policy: "Strict prohibition and removal process for non-consensual content.",
        section: "Content Removal Policy"
      },
      {
        reference: "PH-TS-Verification",
        policy: "Mandatory uploader verification program (Pornhub Model Program) for content uploads.",
        section: "Trust & Safety - Age Verification"
      },
      {
        reference: "PH-CRP-Illegal",
        policy: "Prohibition of CSAM and other illegal sexual content.",
        section: "Content Removal Policy"
      }
    ],
    personal: [
      {
        reference: "PH-TOS-Conduct",
        policy: "Prohibits harassment, abuse, threats, and violating privacy.",
        section: "Terms of Service - Section 4: User Conduct"
      },
      {
        reference: "PH-CRP-Privacy",
        policy: "Removal processes address severe privacy violations like non-consensual content.",
        section: "Content Removal Policy"
      }
    ],
    private: [
      {
        reference: "PH-TOS-Conduct",
        policy: "General prohibitions against violating privacy or illegal activities.",
        section: "Terms of Service - Section 4: User Conduct"
      },
      {
        reference: "PH-PP-Data",
        policy: "Outlines handling of user data; implies protection against unauthorized exposure.",
        section: "Privacy Policy"
      }
    ],
    impersonation: [
      {
        reference: "PH-TS-Verification",
        policy: "Uploader verification helps prevent impersonation of verified models.",
        section: "Trust & Safety - Age Verification"
      },
      {
        reference: "PH-TOS-Conduct",
        policy: "General prohibition against misrepresentation or fraudulent activity.",
        section: "Terms of Service - Section 4: User Conduct"
      }
    ],
    hacked: [
      {
        reference: "PH-TOS-Account",
        policy: "Users are responsible for account security and confidentiality.",
        section: "Terms of Service - Section 3: Account"
      },
      {
        reference: "PH-Support",
        policy: "Users should contact Pornhub support for account security issues.",
        section: "General Support Process (via Help Center/Contact)"
      }
    ],
    general: [
      {
        reference: "PH-TOS-Content",
        policy: "Users must own rights to content uploaded; grant license to Pornhub.",
        section: "Terms of Service - Section 5: User Content"
      },
      {
        reference: "PH-TOS-Prohibited",
        policy: "General list of prohibited conduct and content (illegal, harmful, etc.).",
        section: "Terms of Service - Section 4: User Conduct"
      },
      {
        reference: "PH-DMCA-Policy",
        policy: "Process for handling copyright infringement claims.",
        section: "DMCA Policy"
      }
    ]
  },
  removalCriteria: {
    intimate: [
      "Content is verified as non-consensual (PH-CRP-NonConsensual)",
      "Content constitutes CSAM or other illegal material (PH-CRP-Illegal)",
      "Uploader fails or bypasses verification requirements (PH-TS-Verification)",
      "Violation of specific content rules in ToS (PH-TOS-Conduct)"
    ],
    personal: [
      "Constitutes targeted harassment or abuse violating ToS (PH-TOS-Conduct)",
      "Severe privacy violation falling under non-consensual or illegal categories (PH-CRP)"
    ],
    private: [
      "Unauthorized sharing constitutes a violation of ToS or illegal activity (PH-TOS-Conduct)",
      "Falls under specific removal categories like non-consensual content (PH-CRP)"
    ],
    impersonation: [
      "Account falsely claims to be a verified Pornhub model (PH-TS-Verification)",
      "Constitutes fraudulent activity violating ToS (PH-TOS-Conduct)"
    ],
    hacked: [
      "Report of unauthorized access verified by account owner (PH-Support)",
      "Account activity clearly violates ToS due to compromise (PH-TOS-Conduct)"
    ],
    general: [
      "Violation of any Term of Service, especially User Conduct (PH-TOS-Prohibited)",
      "Content is illegal (PH-TOS-Prohibited, PH-CRP-Illegal)",
      "Valid DMCA takedown notice received (PH-DMCA-Policy)",
      "User does not own necessary rights to the content (PH-TOS-Content)"
    ]
  },
  evidenceRequirements: {
    intimate: [
      "URL(s) of the infringing content",
      "Detailed description of the violation (non-consensual, illegal nature)",
      "Proof of identity (often required, especially for victim reports)",
      "Evidence of non-consent or illegality",
      "Use of specific reporting forms (e.g., Non-Consensual Content Report Form mentioned in PH-CRP)"
    ],
    personal: [
      "URL(s) of the content/profile",
      "Description of the harassment or privacy violation",
      "Reference to specific ToS violation (PH-TOS-Conduct)"
    ],
    private: [
      "URL(s) of the content",
      "Description of the privacy violation",
      "Reference to specific ToS violation or illegal activity"
    ],
    impersonation: [
      "URL of the impersonating content/profile",
      "Information about the authentic person/entity being impersonated",
      "Evidence of misrepresentation (especially regarding verified status)"
    ],
    hacked: [
      "Account identifier (username/email)",
      "Description of suspected unauthorized access",
      "Information to verify ownership (e.g., original email, account details, ID)"
    ],
    general: [
      "URL(s) of the content",
      "Specific policy violated (ToS section, DMCA)",
      "Description of the violation",
      "For DMCA: All information required by the DMCA Policy (PH-DMCA)"
    ]
  },
  timeframes: {
    response: "Varies; Pornhub states reports are reviewed but provides no specific public response timeframe.",
    removal: "Occurs after review confirms a violation, particularly emphasized for illegal/non-consensual content; no specific public timeframe guaranteed for all cases."
  },
  appealProcess: [
    "Decisions typically communicated via email or account status.",
    "Appeals generally handled by contacting Pornhub Support or the relevant team (e.g., Legal, Content Removal) via designated channels (Help Center/Contact forms).",
    "Requires providing justification and potentially additional evidence.",
    "Review outcome communicated via email/support channels."
  ]
};