import { ContentContext, ContentType, LegalDocument, PlatformPolicy } from './types';

const legalDocuments: LegalDocument[] = [
  {
    reference: "PH-TOS",
    title: "Terms of Service",
    url: "https://www.pornhub.com/information#terms",
    accessTimestamp: "2025-04-23T00:00:00Z"
  },
  {
    reference: "PH-CRP",
    title: "Content Removal Policy",
    url: "https://help.pornhub.com/hc/en-us/articles/360059169994-Content-Removal-Policy",
    accessTimestamp: "2025-04-23T00:00:00Z"
  },
  {
    reference: "PH-TS",
    title: "Trust & Safety",
    url: "https://www.pornhub.com/trustandsafety",
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
        reference: "PH-CRP-NonConsensual",
        policy: "Strict prohibition and removal process for non-consensual content.",
        documents: [legalDocuments[1]], // PH-CRP
        removalCriteria: [
          "Content is non-consensual",
          "Content violates consent policies",
          "Subject confirms lack of consent"
        ],
        evidenceRequirements: [
          "URL(s) of content",
          "Description of violation",
          "Evidence of non-consent",
          "Impact statement"
        ]
      },
      {
        reference: "PH-TS-Verification",
        policy: "Mandatory uploader verification program for content uploads.",
        documents: [legalDocuments[2]], // PH-TS
        removalCriteria: [
          "Uploader lacks verification",
          "Content posted without authorization",
          "Verification requirements not met"
        ],
        evidenceRequirements: [
          "URL(s) of content",
          "Uploader information",
          "Evidence of unauthorized posting",
          "Verification status"
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
        reference: "PH-TOS-CONDUCT",
        policy: "Prohibits harassment, abuse, threats, and violating privacy.",
        documents: [legalDocuments[0]], // PH-TOS
        removalCriteria: [
          "Content constitutes harassment",
          "Privacy violation confirmed",
          "Abusive behavior present"
        ],
        evidenceRequirements: [
          "URL(s) of content",
          "Description of violation",
          "Evidence of harassment",
          "Impact statement"
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
        reference: "PH-CRP-Privacy",
        policy: "Removal processes address severe privacy violations.",
        documents: [legalDocuments[1]], // PH-CRP
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
        reference: "PH-TOS-Account",
        policy: "Users are responsible for account security and confidentiality.",
        documents: [legalDocuments[0]], // PH-TOS
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
        reference: "PH-TS-Verification",
        policy: "Uploader verification helps prevent impersonation of verified models.",
        documents: [legalDocuments[2]], // PH-TS
        removalCriteria: [
          "Account impersonates another",
          "Unauthorized use of identity",
          "Verification requirements not met"
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
    reference: "PH-TOS-CONTENT",
    policy: "Users must own rights to content uploaded; grant license to Pornhub.",
    documents: [legalDocuments[0]], // PH-TOS
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
    reference: "PH-CRP-ALL",
    policy: "Process for handling content removal requests.",
    documents: [legalDocuments[1]], // PH-CRP
    removalCriteria: [
      "Content violates removal policy",
      "Valid removal request submitted",
      "Policy breach confirmed"
    ],
    evidenceRequirements: [
      "URL(s) of content",
      "Specific violation",
      "Description of breach",
      "Supporting evidence"
    ]
  }
];

export const pornhubPolicy: PlatformPolicy = {
  name: "Pornhub",
  legalDocuments,
  contentTypes,
  contentContexts,
  generalPolicies,
  timeframes: {
    response: "Varies; Pornhub states reports are reviewed but provides no specific timeframe.",
    removal: "Occurs after review confirms a violation, particularly emphasized for non-consensual content."
  },
  appealProcess: [
    "Decisions communicated via email or account status.",
    "Appeals handled through Support or relevant team.",
    "Requires providing justification and evidence.",
    "Review outcome communicated via email/support channels."
  ]
};