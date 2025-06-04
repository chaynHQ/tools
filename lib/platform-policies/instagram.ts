import { ContentContext, ContentType, LegalDocument, PlatformPolicy } from './types';

const legalDocuments: LegalDocument[] = [
  {
    reference: "IG-TOU",
    title: "Instagram Terms of Use",
    url: "https://help.instagram.com/581066165581870",
    accessTimestamp: "2025-04-23T00:00:00Z"
  },
  {
    reference: "IG-CG",
    title: "Instagram Community Guidelines",
    url: "https://help.instagram.com/477434105621119",
    accessTimestamp: "2025-04-23T00:00:00Z"
  },
  {
    reference: "META-CS",
    title: "Meta Community Standards",
    url: "https://transparency.fb.com/policies/community-standards/",
    accessTimestamp: "2025-04-23T00:00:00Z"
  },
  {
    reference: "META-PP",
    title: "Meta Privacy Policy",
    url: "https://privacycenter.instagram.com/policy",
    accessTimestamp: "2025-04-23T00:00:00Z"
  }
];

const contentTypes: ContentType[] = [
  {
    type: 'intimate',
    label: 'Intimate images',
    description: 'Photos or videos of a private nature',
    policies: [
      {
        reference: "IG-CG-NUDITY",
        policy: "Restricts graphic nudity, some exceptions for protest, artistic, etc. Stricter rules for under-18s.",
        documents: [legalDocuments[1]], // IG-CG
        removalCriteria: [
          "Content depicts prohibited nudity or sexual activity",
          "Content violates age-specific restrictions",
          "Content falls outside allowed exceptions"
        ],
        evidenceRequirements: [
          "Link to the specific post, story, or reel",
          "Description of the violation",
          "Information identifying the content",
          "Context of the violation"
        ]
      },
      {
        reference: "META-CS-NCSII",
        policy: "Prohibits sharing non-consensual intimate imagery.",
        documents: [legalDocuments[2]], // META-CS
        removalCriteria: [
          "Intimate image/video shared without consent",
          "Subject is identifiable",
          "Content is of intimate/private nature"
        ],
        evidenceRequirements: [
          "Link to the content",
          "Description of non-consensual sharing",
          "Information identifying the victim",
          "Evidence of non-consent"
        ]
      }
    ]
  },
  {
    type: 'personal',
    label: 'Personal content',
    description: 'Non-intimate photos or videos shared without permission',
    policies: [
      {
        reference: "IG-CG-BULLYING",
        policy: "Prohibits targeted harassment, bullying, threats, and unwanted sexual advances.",
        documents: [legalDocuments[1]], // IG-CG
        removalCriteria: [
          "Content constitutes targeted harassment",
          "Content contains threats or bullying",
          "Unwanted sexual advances or harassment"
        ],
        evidenceRequirements: [
          "Link to harassing content",
          "Description of harassment",
          "Timeline of incidents",
          "Impact of harassment"
        ]
      }
    ]
  },
  {
    type: 'private',
    label: 'Private information',
    description: 'Personal documents or identifying details',
    policies: [
      {
        reference: "META-CS-PRIVACY",
        policy: "Prohibits sharing Personally Identifiable Information (PII) without consent.",
        documents: [legalDocuments[2]], // META-CS
        removalCriteria: [
          "Content reveals private information without consent",
          "Information poses privacy or security risk",
          "Shared PII violates platform policies"
        ],
        evidenceRequirements: [
          "Link to content containing PII",
          "Description of private information exposed",
          "Evidence of privacy violation",
          "Impact of exposure"
        ]
      }
    ]
  }
];

const contentContexts: ContentContext[] = [
  {
    context: 'hacked',
    label: 'Account was compromised',
    description: 'Content was accessed without authorisation',
    policies: [
      {
        reference: "IG-TOU-SECURITY",
        policy: "Users commit to maintaining account security.",
        documents: [legalDocuments[0]], // IG-TOU
        removalCriteria: [
          "Evidence of unauthorized access",
          "Suspicious account activity",
          "Security breach confirmed"
        ],
        evidenceRequirements: [
          "Account details",
          "Timeline of unauthorized access",
          "Evidence of previous ownership",
          "Description of suspicious activity"
        ]
      }
    ]
  },
  {
    context: 'impersonation',
    label: 'Someone is impersonating me',
    description: 'Content posted by someone pretending to be you',
    policies: [
      {
        reference: "IG-CG-IMPERSONATION",
        policy: "Prohibits impersonating individuals or organizations.",
        documents: [legalDocuments[1]], // IG-CG
        removalCriteria: [
          "Account clearly impersonates another",
          "Deceptive use of identity",
          "Misleading profile information"
        ],
        evidenceRequirements: [
          "Link to impersonating profile",
          "Evidence of authentic identity",
          "Description of impersonation",
          "Impact of impersonation"
        ]
      }
    ]
  }
];

const generalPolicies = [
  {
    reference: "IG-TOU-CONTENT",
    policy: "Users grant Instagram a license but retain ownership; Instagram can remove violating content.",
    documents: [legalDocuments[0]], // IG-TOU
    removalCriteria: [
      "Content violates Terms of Use",
      "Content owner requests removal",
      "Content infringes on rights"
    ],
    evidenceRequirements: [
      "Link to content",
      "Description of violation",
      "Evidence of ownership",
      "Impact statement"
    ]
  },
  {
    reference: "IG-CG-ALL",
    policy: "All content must adhere to the Instagram Community Guidelines.",
    documents: [legalDocuments[1]], // IG-CG
    removalCriteria: [
      "Content violates Community Guidelines",
      "Content poses platform safety risk",
      "Content breaches platform policies"
    ],
    evidenceRequirements: [
      "Link to content",
      "Specific guideline violated",
      "Description of violation",
      "Supporting evidence"
    ]
  }
];

export const instagramPolicy: PlatformPolicy = {
  name: "Instagram (Meta)",
  legalDocuments,
  contentTypes,
  contentContexts,
  generalPolicies,
  timeframes: {
    response: "Varies; aims to review reports efficiently, prioritizing severe harm.",
    removal: "Typically occurs promptly after a violation is confirmed, but no specific timeframe guaranteed publicly."
  },
  appealProcess: [
    "Notification of decision sent via in-app notification or Support Requests.",
    "Option to 'Request Review' or 'Disagree with decision' provided within notification.",
    "May require additional information or context.",
    "Decisions reviewed by Meta; significant cases eligible for Oversight Board review.",
    "Appeal outcomes communicated via Support Requests/notifications."
  ]
};