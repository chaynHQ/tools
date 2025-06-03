import { ContentContext, ContentType, LegalDocument, PlatformPolicy } from './types';

const legalDocuments: LegalDocument[] = [
  {
    reference: "TT-TOS",
    title: "Terms of Service",
    url: "https://www.tiktok.com/legal/page/us/terms-of-service/en",
    accessTimestamp: "2025-04-23T00:00:00Z"
  },
  {
    reference: "TT-CG",
    title: "Community Guidelines",
    url: "https://www.tiktok.com/community-guidelines/en/",
    accessTimestamp: "2025-04-23T00:00:00Z"
  },
  {
    reference: "TT-PP",
    title: "Privacy Policy",
    url: "https://www.tiktok.com/legal/page/us/privacy-policy/en",
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
        reference: "TT-CG-NUDITY",
        policy: "Prohibits adult nudity, sexual activity, and non-consensual sexual content.",
        documents: [legalDocuments[1]], // TT-CG
        removalCriteria: [
          "Content depicts prohibited nudity",
          "Content shows sexual activity",
          "Content shared without consent"
        ],
        evidenceRequirements: [
          "Link to video/content",
          "Description of violation",
          "Timeline of discovery",
          "Impact statement"
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
        reference: "TT-CG-HARASSMENT",
        policy: "Prohibits bullying, harassment, and abusive behavior.",
        documents: [legalDocuments[1]], // TT-CG
        removalCriteria: [
          "Content constitutes harassment",
          "Targeted abusive behavior",
          "Malicious sharing of personal content"
        ],
        evidenceRequirements: [
          "Link to harassing content",
          "Description of harassment",
          "Evidence of targeting",
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
        reference: "TT-CG-PRIVACY",
        policy: "Prohibits sharing private information without consent.",
        documents: [legalDocuments[1]], // TT-CG
        removalCriteria: [
          "Content reveals private information",
          "Information shared without authorization",
          "Privacy violation confirmed"
        ],
        evidenceRequirements: [
          "Link to content",
          "Description of private information",
          "Evidence of privacy violation",
          "Impact statement"
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
        reference: "TT-TOS-SECURITY",
        policy: "Users are responsible for maintaining account security.",
        documents: [legalDocuments[0]], // TT-TOS
        removalCriteria: [
          "Unauthorized access confirmed",
          "Account security compromised",
          "Suspicious activity detected"
        ],
        evidenceRequirements: [
          "Account details",
          "Timeline of compromise",
          "Evidence of ownership",
          "Description of unauthorized activity"
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
        reference: "TT-CG-IMPERSONATION",
        policy: "Prohibits impersonating individuals or organizations in a deceptive manner.",
        documents: [legalDocuments[1]], // TT-CG
        removalCriteria: [
          "Account impersonates another",
          "Deceptive identity use",
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
    reference: "TT-TOS-CONTENT",
    policy: "Users grant TikTok a license but must have rights to content they post.",
    documents: [legalDocuments[0]], // TT-TOS
    removalCriteria: [
      "Content violates Terms of Service",
      "Content owner requests removal",
      "Rights violation confirmed"
    ],
    evidenceRequirements: [
      "Link to content",
      "Description of violation",
      "Evidence of ownership",
      "Impact statement"
    ]
  },
  {
    reference: "TT-CG-ALL",
    policy: "All content must adhere to Community Guidelines.",
    documents: [legalDocuments[1]], // TT-CG
    removalCriteria: [
      "Content violates guidelines",
      "Platform safety risk",
      "Policy breach confirmed"
    ],
    evidenceRequirements: [
      "Link to content",
      "Specific violation",
      "Description of breach",
      "Supporting evidence"
    ]
  }
];

export const tiktokPolicy: PlatformPolicy = {
  name: "TikTok",
  legalDocuments,
  contentTypes,
  contentContexts,
  generalPolicies,
  timeframes: {
    response: "Varies; TikTok aims to review reports but provides no specific timeframe.",
    removal: "Occurs after review confirms a violation; no specific timeframe guaranteed."
  },
  appealProcess: [
    "Notifications about violations sent via in-app notification.",
    "Appeal option provided within notification or Account Status section.",
    "May require submitting additional information.",
    "TikTok reviews appeals based on internal processes.",
    "Appeal decisions communicated via in-app notification."
  ]
};