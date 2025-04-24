import { PlatformPolicy } from './types';

export const instagramPolicy: PlatformPolicy = {
  name: "Instagram (Meta)",
  legalBasis: [
    {
      reference: "IG-TOU",
      title: "Instagram Terms of Use",
      section: "Your Commitments & Permissions You Give Us",
      url: "https://help.instagram.com/581066165581870",
      accessTimestamp: "2025-04-23T00:00:00Z"
    },
    {
      reference: "IG-CG",
      title: "Instagram Community Guidelines",
      section: "Various Sections",
      url: "https://help.instagram.com/477434105621119",
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
      url: "https://privacycenter.instagram.com/policy",
      accessTimestamp: "2025-04-23T00:00:00Z"
    },
    {
      reference: "IG-HC-Reporting",
      title: "Instagram Help Center - Reporting",
      section: "How to report content",
      url: "https://help.instagram.com/192435014247952",
      accessTimestamp: "2025-04-23T00:00:00Z"
    }
  ],
  contentPolicies: {
    intimate: [
      {
        reference: "IG-CG-NUDITY",
        policy: "Restricts graphic nudity, some exceptions for protest, artistic, etc. Stricter rules for under-18s.",
        section: "Instagram Community Guidelines - Nudity and Attire"
      },
      {
        reference: "META-CS-NCSII",
        policy: "Prohibits sharing non-consensual intimate imagery.",
        section: "Meta Community Standards - Adult Nudity and Sexual Activity / Privacy Violations"
      },
      {
        reference: "META-CS-SEXTORTION",
        policy: "Prohibits threatening to share intimate images (sextortion).",
        section: "Meta Community Standards - Bullying and Harassment"
      }
    ],
    personal: [
      {
        reference: "IG-CG-BULLYING",
        policy: "Prohibits targeted harassment, bullying, threats, and unwanted sexual advances.",
        section: "Instagram Community Guidelines - Bullying or Harassment"
      },
      {
        reference: "META-CS-PRIVACY",
        policy: "Prohibits sharing Personally Identifiable Information (PII) to harass or dox.",
        section: "Meta Community Standards - Privacy Violations and Image Privacy Rights"
      }
    ],
    private: [
      {
        reference: "META-CS-PRIVACY-PII",
        policy: "Restricts sharing specific private information (residential, financial, medical etc.).",
        section: "Meta Community Standards - Privacy Violations and Image Privacy Rights"
      },
      {
        reference: "META-CS-PRIVACY-MEDIA",
        policy: "Restricts sharing images/videos from private spaces without consent.",
        section: "Meta Community Standards - Privacy Violations and Image Privacy Rights"
      }
    ],
    impersonation: [
      {
        reference: "IG-CG-IMPERSONATION",
        policy: "Prohibits impersonating individuals or organizations.",
        section: "Instagram Community Guidelines - Impersonation"
      },
      {
        reference: "META-CS-FAKE-ACCOUNTS",
        policy: "Prohibits fake accounts intended to mislead or violate policies.",
        section: "Meta Community Standards - Misrepresentation"
      }
    ],
    hacked: [
      {
        reference: "IG-HC-HACKED",
        policy: "Provides processes for reporting and recovering compromised accounts.",
        section: "Instagram Help Center - Hacked Accounts"
      },
      {
        reference: "IG-TOU-SECURITY",
        policy: "Users commit to maintaining account security.",
        section: "Instagram Terms of Use - Your Commitments"
      }
    ],
    general: [
      {
        reference: "IG-TOU-CONTENT",
        policy: "Users grant Instagram a license but retain ownership; Instagram can remove violating content.",
        section: "Instagram Terms of Use - Permissions You Give Us"
      },
      {
        reference: "IG-CG-ALL",
        policy: "All content must adhere to the Instagram Community Guidelines.",
        section: "Instagram Community Guidelines - All Sections"
      }
    ]
  },
  removalCriteria: {
    intimate: [
      "Content depicts prohibited nudity or sexual activity (IG-CG-NUDITY, META-CS-NUDITY)",
      "Intimate image/video shared without consent of depicted person (META-CS-NCSII)",
      "Content involves threats to share intimate media (META-CS-SEXTORTION)",
      "Subject is identifiable and did not consent (Reporting Process)"
    ],
    personal: [
      "Content targets an individual with abuse, threats, or severe harassment (IG-CG-BULLYING)",
      "Content shares PII with malicious intent (META-CS-PRIVACY)",
      "Involves unwanted sexualization or advances (IG-CG-BULLYING)"
    ],
    private: [
      "Content reveals specific types of restricted PII (META-CS-PRIVACY-PII)",
      "Media captured in a private setting shared without consent (META-CS-PRIVACY-MEDIA)",
      "Violates reasonable expectation of privacy (META-CS-PRIVACY)"
    ],
    impersonation: [
      "Account clearly pretends to be another specific person/entity (IG-CG-IMPERSONATION)",
      "Use of name/photos without authorization to mislead (IG-CG-IMPERSONATION)",
      "Evidence linking reporter to the identity being impersonated (Reporting Process)"
    ],
    hacked: [
      "Evidence of unauthorized login or activity (Account Recovery Process)",
      "Legitimate owner unable to access account (Account Recovery Process)",
      "Verification of account ownership required (Account Recovery Process)"
    ],
    general: [
      "Violation of any Instagram Community Guideline (IG-CG-ALL)",
      "Violation of Instagram Terms of Use (IG-TOU)",
      "Infringement of intellectual property (Separate DMCA/IP process)"
    ]
  },
  evidenceRequirements: {
    intimate: [
      "Link to the specific post, story, reel, or profile",
      "Description of the violation (e.g., non-consensual sharing, prohibited nudity)",
      "Information identifying the victim (may require ID for NCSII reports)",
      "Proof of identity if reporting for oneself"
    ],
    personal: [
      "Link to the content/profile",
      "Description of the harassment or privacy violation",
      "Identification of PII shared (if applicable)",
      "Context of the bullying/harassment"
    ],
    private: [
      "Link to the content",
      "Identification of the specific private information or media",
      "Explanation of privacy expectation",
      "Proof of identity"
    ],
    impersonation: [
      "Link to the impersonating profile",
      "Username of the impersonating profile",
      "Link/Username of the authentic profile (if applicable)",
      "Government-issued ID matching the name being impersonated (often required)"
    ],
    hacked: [
      "Account username",
      "Email/phone associated with the account",
      "Description of the issue (cannot log in, suspicious posts)",
      "Information to verify ownership (access to email/phone, ID, known device info)"
    ],
    general: [
      "Link to the content/profile",
      "Specific Community Guideline or Term violated",
      "Description of the violation",
      "Any relevant context"
    ]
  },
  timeframes: {
    response: "Varies; aims to review reports efficiently, prioritizing severe harm. (General Help Center info)",
    removal: "Typically occurs promptly after a violation is confirmed, but no specific timeframe guaranteed publicly. (General Help Center info)"
  },
  appealProcess: [
    "Notification of decision usually sent via in-app notification or Support Requests.",
    "Option to 'Request Review' or 'Disagree with decision' often provided within the notification/Support Requests section.",
    "May require providing additional information or context.",
    "Decisions reviewed by Meta; significant cases may be eligible for Oversight Board review.",
    "Appeal outcomes communicated via Support Requests/notifications."
  ]
};