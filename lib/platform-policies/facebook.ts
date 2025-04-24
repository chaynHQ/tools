import { PlatformPolicy } from './types';

export const facebookPolicy: PlatformPolicy = {
  name: "Facebook (Meta)",
  legalBasis: [
    {
      reference: "FB-TOS",
      title: "Facebook Terms of Service",
      section: "3. Your commitments to Facebook and our community",
      url: "https://www.facebook.com/legal/terms",
      accessTimestamp: "2025-04-23T00:00:00Z"
    },
    {
      reference: "META-CS",
      title: "Meta Community Standards",
      section: "Introduction & Various Sections",
      url: "https://transparency.fb.com/policies/community-standards/",
      accessTimestamp: "2025-04-23T00:00:00Z"
    },
    {
      reference: "META-PP",
      title: "Meta Privacy Policy",
      section: "Various Sections",
      url: "https://www.facebook.com/privacy/policy/",
      accessTimestamp: "2025-04-23T00:00:00Z"
    },
    {
      reference: "FB-HC-Reporting",
      title: "Facebook Help Center - Reporting",
      section: "How to report things",
      url: "https://www.facebook.com/help/181495968648557",
      accessTimestamp: "2025-04-23T00:00:00Z"
    }
  ],
  contentPolicies: {
    intimate: [
      {
        reference: "CS-NCSII",
        policy: "Prohibits sharing intimate images without consent.",
        section: "Community Standards - Adult Nudity and Sexual Activity"
      },
      {
        reference: "CS-SEXTORTION",
        policy: "Prohibits threatening to share intimate images (sextortion).",
        section: "Community Standards - Bullying and Harassment"
      }
    ],
    personal: [
      {
        reference: "CS-PRIVACY",
        policy: "Prohibits sharing personally identifiable information (PII) to harass or blackmail.",
        section: "Community Standards - Privacy Violations and Image Privacy Rights"
      },
      {
        reference: "CS-BULLYING",
        policy: "Prohibits severe attacks based on personal attributes or unwanted sexualization.",
        section: "Community Standards - Bullying and Harassment"
      }
    ],
    private: [
      {
        reference: "CS-PRIVACY-PII",
        policy: "Restricts sharing of private information like residential addresses, financial info, medical records.",
        section: "Community Standards - Privacy Violations and Image Privacy Rights"
      },
      {
        reference: "CS-PRIVACY-MEDIA",
        policy: "Restricts sharing private images/videos taken in private spaces without consent.",
        section: "Community Standards - Privacy Violations and Image Privacy Rights"
      }
    ],
    impersonation: [
      {
        reference: "CS-IMPERSONATION",
        policy: "Prohibits impersonating others (individuals, organizations).",
        section: "Community Standards - Misrepresentation"
      },
      {
        reference: "CS-FAKE-ACCOUNTS",
        policy: "Prohibits maintaining fake accounts representing non-existent entities or for deceptive purposes.",
        section: "Community Standards - Misrepresentation"
      }
    ],
    hacked: [
      {
        reference: "FB-HC-HACKED",
        policy: "Provides tools and processes to report and recover compromised accounts.",
        section: "Help Center - Hacked and Fake Accounts"
      },
      {
        reference: "FB-TOS-SECURITY",
        policy: "Users commit not to compromise security or access accounts improperly.",
        section: "Terms of Service - 3. Your commitments"
      }
    ],
    general: [
      {
        reference: "FB-TOS-CONTENT",
        policy: "Users grant Facebook a license but retain ownership; Facebook can remove content violating terms.",
        section: "Terms of Service - 3. Permissions you give us"
      },
      {
        reference: "META-CS-ALL",
        policy: "All content must adhere to the full scope of Community Standards.",
        section: "Community Standards - All Sections"
      }
    ]
  },
  removalCriteria: {
    intimate: [
      "Content depicts nudity or sexual activity (CS-NCSII)",
      "Image/video shared without consent of depicted individual (CS-NCSII)",
      "Subject identifies themselves or is identifiable (Reporting Process)",
      "Threat to share intimate media exists (CS-SEXTORTION)"
    ],
    personal: [
      "Content contains PII used maliciously (CS-PRIVACY-PII)",
      "Content constitutes severe bullying or harassment (CS-BULLYING)",
      "Content involves unwanted sexualization (CS-BULLYING)"
    ],
    private: [
      "Content reveals specific types of PII (e.g., home address, bank details) (CS-PRIVACY-PII)",
      "Media was captured in a private setting without consent (CS-PRIVACY-MEDIA)",
      "Sharing violates reasonable expectation of privacy (CS-PRIVACY)"
    ],
    impersonation: [
      "Profile clearly pretends to be a specific person/entity (CS-IMPERSONATION)",
      "Evidence linking reporter to the identity being impersonated (Reporting Process)",
      "Account uses name/photos of another without authorization (CS-IMPERSONATION)"
    ],
    hacked: [
      "Evidence of unauthorized access or activity (Account Recovery Process)",
      "Inability of legitimate owner to access account (Account Recovery Process)",
      "Verification of account ownership (Account Recovery Process)"
    ],
    general: [
      "Violation of any Community Standard (META-CS-ALL)",
      "Violation of Terms of Service (FB-TOS-CONTENT)",
      "Infringement of intellectual property rights (Separate DMCA/IP process)"
    ]
  },
  evidenceRequirements: {
    intimate: [
      "URL(s) of the infringing content",
      "Description of the violation (non-consensual sharing)",
      "Information identifying the victim (may require ID in some cases, especially via specific portals like the NCSII reporting tool)",
      "Proof of identity if reporting for oneself"
    ],
    personal: [
      "URL(s) of the content",
      "Description of how it violates privacy or constitutes harassment",
      "Identification of the PII shared (if applicable)",
      "Context of the harassment/bullying"
    ],
    private: [
      "URL(s) of the content",
      "Identification of the specific private information disclosed",
      "Explanation of why there's an expectation of privacy",
      "Proof of identity"
    ],
    impersonation: [
      "URL of the impersonating profile/page",
      "URL of the authentic profile/page (if applicable)",
      "Description of the impersonation",
      "Government-issued ID matching the name of the person being impersonated (often required)"
    ],
    hacked: [
      "Account identifier (email, phone, username)",
      "Description of the issue (cannot log in, suspicious activity)",
      "Information to verify ownership (e.g., access to email/phone, ID, identifying friends)",
      "Details of the suspected compromise (if known)"
    ],
    general: [
      "URL(s) of the content",
      "Specific Community Standard or Term violated",
      "Description of the violation",
      "Any relevant context or evidence"
    ]
  },
  timeframes: {
    response: "Varies; aims to review reports 'as quickly as possible'. Priority given to severe harms. (General Help Center info)",
    removal: "Typically follows quickly after a violation is confirmed, but no specific timeframe guaranteed publicly. (General Help Center info)"
  },
  appealProcess: [
    "Notification of decision usually sent via Support Inbox or notification.",
    "Option to 'Request Review' or 'Disagree with Decision' often provided directly in the notification (FB-HC-Appeals).",
    "May require providing additional context or information.",
    "Decisions can be reviewed by Meta, potentially by the Oversight Board for significant cases (Oversight Board referrals).",
    "Appeal outcomes communicated via Support Inbox/notifications."
  ]
};