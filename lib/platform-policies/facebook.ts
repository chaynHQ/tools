import { ContentContext, ContentType, LegalDocument, PlatformPolicy } from './types';

const legalDocuments: LegalDocument[] = [
  {
    reference: "FB-TOS",
    title: "Facebook Terms of Service",
    url: "https://www.facebook.com/legal/terms",
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
    url: "https://www.facebook.com/privacy/policy/",
    accessTimestamp: "2025-04-23T00:00:00Z"
  },
  {
    reference: "FB-HC-Reporting",
    title: "Facebook Help Center - Reporting",
    url: "https://www.facebook.com/help/181495968648557",
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
        reference: "CS-NCSII",
        policy: "Prohibits sharing intimate images without consent.",
        documents: [legalDocuments[1]], // META-CS
        removalCriteria: [
          "Content depicts nudity or sexual activity",
          "Image/video shared without consent of depicted individual",
          "Subject identifies themselves or is identifiable",
          "Threat to share intimate media exists"
        ],
        evidenceRequirements: [
          "URL(s) of the infringing content",
          "Description of the violation (non-consensual sharing)",
          "Information identifying the victim",
          "Proof of identity if reporting for oneself"
        ]
      },
      {
        reference: "CS-SEXTORTION",
        policy: "Prohibits threatening to share intimate images (sextortion).",
        documents: [legalDocuments[1]], // META-CS
        removalCriteria: [
          "Evidence of threats to share intimate content",
          "Content is being used for extortion or harassment",
          "Subject identifies themselves as the victim"
        ],
        evidenceRequirements: [
          "URL(s) of threatening content or messages",
          "Description of threats or demands made",
          "Evidence of the threatened content"
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
        reference: "CS-PRIVACY",
        policy: "Prohibits sharing personally identifiable information (PII) to harass or blackmail.",
        documents: [legalDocuments[1]], // META-CS
        removalCriteria: [
          "Content contains PII used maliciously",
          "Information shared without consent",
          "Content used for harassment or blackmail"
        ],
        evidenceRequirements: [
          "URL(s) of the content",
          "Description of how privacy was violated",
          "Identification of shared PII",
          "Evidence of malicious intent or harassment"
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
        reference: "CS-PRIVACY-PII",
        policy: "Restricts sharing of private information like residential addresses, financial info, medical records.",
        documents: [legalDocuments[1]], // META-CS
        removalCriteria: [
          "Content reveals specific types of PII",
          "Information shared without authorization",
          "Violates reasonable expectation of privacy"
        ],
        evidenceRequirements: [
          "URL(s) of the content",
          "Description of private information exposed",
          "Evidence of ownership or right to privacy",
          "Impact of the privacy violation"
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
        reference: "FB-HC-HACKED",
        policy: "Provides tools and processes to report and recover compromised accounts.",
        documents: [legalDocuments[3]], // FB-HC-Reporting
        removalCriteria: [
          "Evidence of unauthorized access",
          "Account activity indicates compromise",
          "Legitimate owner cannot access account"
        ],
        evidenceRequirements: [
          "Account details and timeline",
          "Description of unauthorized activity",
          "Evidence of previous account ownership",
          "Details of suspected compromise"
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
        reference: "CS-IMPERSONATION",
        policy: "Prohibits impersonating others (individuals, organizations).",
        documents: [legalDocuments[1]], // META-CS
        removalCriteria: [
          "Account clearly impersonates specific person/entity",
          "Uses name/photos without authorization",
          "Attempts to deceive or mislead others"
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
    reference: "FB-TOS-CONTENT",
    policy: "Users grant Facebook a license but retain ownership; Facebook can remove content violating terms.",
    documents: [legalDocuments[0]], // FB-TOS
    removalCriteria: [
      "Content violates Facebook Terms of Service",
      "Content owner requests removal",
      "Content infringes on rights"
    ],
    evidenceRequirements: [
      "URL(s) of the content",
      "Description of violation",
      "Evidence of ownership or rights",
      "Impact statement"
    ]
  },
  {
    reference: "META-CS-ALL",
    policy: "All content must adhere to the full scope of Community Standards.",
    documents: [legalDocuments[1]], // META-CS
    removalCriteria: [
      "Content violates any Community Standard",
      "Content poses risk to platform safety",
      "Content breaches platform policies"
    ],
    evidenceRequirements: [
      "URL(s) of the content",
      "Specific Community Standard violated",
      "Description of violation",
      "Supporting evidence"
    ]
  }
];

export const facebookPolicy: PlatformPolicy = {
  name: "Facebook (Meta)",
  legalDocuments,
  contentTypes,
  contentContexts,
  generalPolicies,
  timeframes: {
    response: "Varies; aims to review reports 'as quickly as possible'. Priority given to severe harms.",
    removal: "Typically follows quickly after a violation is confirmed, but no specific timeframe guaranteed publicly."
  },
  appealProcess: [
    "Notification of decision usually sent via Support Inbox or notification.",
    "Option to 'Request Review' or 'Disagree with Decision' often provided directly in the notification.",
    "May require providing additional context or information.",
    "Decisions can be reviewed by Meta, potentially by the Oversight Board for significant cases.",
    "Appeal outcomes communicated via Support Inbox/notifications."
  ]
};