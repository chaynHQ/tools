import { ContentContext, ContentType, LegalDocument, PlatformPolicy } from './types';

const legalDocuments: LegalDocument[] = [
  {
    reference: "OF-TOS",
    title: "Terms of Service",
    url: "https://onlyfans.com/terms",
    accessTimestamp: "2025-04-23T00:00:00Z"
  },
  {
    reference: "OF-AUP",
    title: "Acceptable Use Policy",
    url: "https://onlyfans.com/aup",
    accessTimestamp: "2025-04-23T00:00:00Z"
  },
  {
    reference: "OF-PP",
    title: "Privacy Policy",
    url: "https://onlyfans.com/privacy",
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
        reference: "OF-AUP-NUDITY",
        policy: "Sets standards for sexually explicit content; prohibits non-consensual sexual content.",
        documents: [legalDocuments[1]], // OF-AUP
        removalCriteria: [
          "Content is non-consensual",
          "Content violates explicit content rules",
          "Content breaches platform standards"
        ],
        evidenceRequirements: [
          "URL(s) of content",
          "Description of violation",
          "Evidence of non-consent",
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
        reference: "OF-AUP-HARASSMENT",
        policy: "Prohibits harassment, bullying, abuse, threats, and promoting violence.",
        documents: [legalDocuments[1]], // OF-AUP
        removalCriteria: [
          "Content constitutes harassment",
          "Abusive behavior confirmed",
          "Threats or bullying present"
        ],
        evidenceRequirements: [
          "URL(s) of content",
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
        reference: "OF-AUP-PRIVACY",
        policy: "Prohibits violating others' privacy, including sharing PII without consent.",
        documents: [legalDocuments[1]], // OF-AUP
        removalCriteria: [
          "Private information exposed",
          "Information shared without consent",
          "Privacy violation confirmed"
        ],
        evidenceRequirements: [
          "URL(s) of content",
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
        reference: "OF-TOS-SECURITY",
        policy: "Users are responsible for maintaining account confidentiality and security.",
        documents: [legalDocuments[0]], // OF-TOS
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
        reference: "OF-AUP-IMPERSONATION",
        policy: "Prohibits impersonating any person or entity.",
        documents: [legalDocuments[1]], // OF-AUP
        removalCriteria: [
          "Account impersonates another",
          "Deceptive identity use",
          "Fraudulent representation"
        ],
        evidenceRequirements: [
          "URL of impersonating profile",
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
    reference: "OF-TOS-CONTENT",
    policy: "Creators retain ownership but grant OnlyFans a license; must have rights to post content.",
    documents: [legalDocuments[0]], // OF-TOS
    removalCriteria: [
      "Content violates Terms of Service",
      "Content owner requests removal",
      "Rights violation confirmed"
    ],
    evidenceRequirements: [
      "URL(s) of content",
      "Description of violation",
      "Evidence of ownership",
      "Impact statement"
    ]
  },
  {
    reference: "OF-AUP-PROHIBITED",
    policy: "General list of prohibited content and activities.",
    documents: [legalDocuments[1]], // OF-AUP
    removalCriteria: [
      "Content violates AUP",
      "Prohibited activity confirmed",
      "Platform policy breach"
    ],
    evidenceRequirements: [
      "URL(s) of content",
      "Specific violation",
      "Description of breach",
      "Supporting evidence"
    ]
  }
];

export const onlyfansPolicy: PlatformPolicy = {
  name: "OnlyFans",
  legalDocuments,
  contentTypes,
  contentContexts,
  generalPolicies,
  timeframes: {
    response: "Varies; OnlyFans aims to review reports but does not state a specific timeframe.",
    removal: "Occurs after review confirms a violation; no specific timeframe guaranteed."
  },
  appealProcess: [
    "Decisions communicated via email or account notification.",
    "Appeals handled through OnlyFans Support.",
    "Requires providing reasons for appeal and additional evidence.",
    "OnlyFans reviews appeals based on internal processes.",
    "Outcome communicated via email/notification."
  ]
};