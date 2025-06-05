import { ContentContext, ContentType, LegalDocument, PlatformPolicy } from './types';

const legalDocuments: LegalDocument[] = [
  {
    reference: 'FB-TOS',
    title: 'Facebook Terms of Service',
    url: 'https://www.facebook.com/legal/terms',
    accessTimestamp: '2025-06-06T00:00:00Z',
  },
  {
    reference: 'META-CS',
    title: 'Meta Community Standards',
    url: 'https://transparency.fb.com/policies/community-standards/',
    accessTimestamp: '2025-06-06T00:00:00Z',
  },
  {
    reference: 'META-PP',
    title: 'Meta Privacy Policy',
    url: 'https://www.facebook.com/privacy/policy/',
    accessTimestamp: '2025-06-06T00:00:00Z',
  },
  {
    reference: 'FB-HC-Reporting',
    title: 'Facebook Help Center - Reporting',
    url: 'https://www.facebook.com/help/181495968648557',
    accessTimestamp: '2025-06-06T00:00:00Z',
  },
  {
    reference: 'TAKE-IT-DOWN-ACT-2025',
    title: 'TAKE IT DOWN Act of 2025',
    url: 'https://www.congress.gov/bill/118th-congress/house-bill/7891',
    accessTimestamp: '2025-06-06T00:00:00Z',
  },
];

const contentTypes: ContentType[] = [
  {
    type: 'intimate',
    label: 'Intimate images',
    description:
      'Photos or videos of a private, intimate, or sexual nature, including authentic and AI-generated media',
    policies: [
      {
        reference: 'CS-NCSII',
        policy:
          "Prohibits sharing non-consensual intimate images (NCII), including AI-generated or 'deepfake' content.",
        documents: [legalDocuments[1], legalDocuments[4]], // META-CS, TAKE-IT-DOWN-ACT-2025
        removalCriteria: [
          'Content depicts nudity or sexual activity.',
          'Image/video shared without the consent of the depicted individual.',
          'The content is an authentic or AI-generated intimate depiction.',
          'Subject is identifiable.',
        ],
        evidenceRequirements: [
          'URL(s) of the infringing content.',
          'A statement made in good faith that the content is non-consensual.',
          'Information to identify the victim and locate the content.',
          'Meta also partners with StopNCII.org, which allows potential victims to proactively create digital fingerprints (hashes) of images to prevent their spread.',
        ],
      },
      {
        reference: 'CS-SEXTORTION',
        policy:
          'Prohibits threatening to share intimate images for purposes of extortion or coercion (sextortion).',
        documents: [legalDocuments[1]], // META-CS
        removalCriteria: [
          'Evidence of threats to share intimate content.',
          'Content is being used for extortion or harassment.',
          'Subject identifies themselves as the victim.',
        ],
        evidenceRequirements: [
          'URL(s) of threatening content or messages.',
          'Description of threats or demands made.',
          'Evidence of the intimate content being used for the threat.',
        ],
      },
    ],
  },
  {
    type: 'personal',
    label: 'Personal content',
    description: 'Non-intimate photos or videos shared without permission',
    policies: [
      {
        reference: 'CS-PRIVACY',
        policy:
          'Prohibits sharing personally identifiable information (PII) to harass or blackmail, and restricts sharing private information like residential addresses or financial details.',
        documents: [legalDocuments[1]], // META-CS
        removalCriteria: [
          'Content contains PII used maliciously.',
          'Information is shared without consent and violates a reasonable expectation of privacy.',
          'Content is used for harassment, doxing, or blackmail.',
        ],
        evidenceRequirements: [
          'URL(s) of the content.',
          'Description of how privacy was violated.',
          'Identification of the specific PII that was shared.',
        ],
      },
    ],
  },
  {
    type: 'private',
    label: 'Private information',
    description: 'Personal documents or identifying details',
    policies: [
      {
        reference: 'CS-PRIVACY-PII',
        policy:
          'Restricts sharing of private information like residential addresses, financial info, medical records.',
        documents: [legalDocuments[1]], // META-CS
        removalCriteria: [
          'Content reveals specific types of PII.',
          'Information shared without authorization.',
          'Violates reasonable expectation of privacy.',
        ],
        evidenceRequirements: [
          'URL(s) of the content.',
          'Description of private information exposed.',
          'Evidence of ownership or right to privacy.',
          'Impact of the privacy violation.',
        ],
      },
    ],
  },
];

const contentContexts: ContentContext[] = [
  {
    context: 'hacked',
    label: 'Account was compromised',
    description: 'Content was accessed or posted without authorization due to a hacked account.',
    policies: [
      {
        reference: 'FB-HC-HACKED',
        policy:
          'Provides a process to report and recover compromised accounts via facebook.com/hacked.',
        documents: [legalDocuments[3]], // FB-HC-Reporting
        removalCriteria: [
          'Evidence of unauthorized access or activity.',
          'The legitimate owner is locked out of the account.',
          'The account is posting spam or malicious content.',
        ],
        evidenceRequirements: [
          'Account details (email, phone number).',
          'Access to a previously linked email or phone number to receive a recovery code.',
          'If other methods fail, submission of a government ID may be required to prove ownership.',
        ],
      },
    ],
  },
  {
    context: 'impersonation',
    label: 'Someone is impersonating me',
    description: 'An account is pretending to be you, your organization, or another entity.',
    policies: [
      {
        reference: 'CS-IMPERSONATION',
        policy:
          'Prohibits impersonating others, including individuals and organizations, with an intent to deceive.',
        documents: [legalDocuments[1]], // META-CS
        removalCriteria: [
          'Account uses name, photos, or other identifying information without authorization.',
          'The profile or page is intended to mislead or deceive others.',
          'Meta has been taking more aggressive steps to remove fake and impersonating accounts, removing over 100 million fake Pages in 2024.',
        ],
        evidenceRequirements: [
          'URL of the impersonating profile or page.',
          'Proof of identity (e.g., government ID for a person, business documents for an organization).',
          'Description of the impersonation.',
        ],
      },
    ],
  },
];

const generalPolicies = [
  {
    reference: 'FB-TOS-CONTENT',
    policy:
      'Users grant Meta a license to use their content but retain ownership. Meta can remove any content that violates its Terms of Service.',
    documents: [legalDocuments[0]], // FB-TOS
    removalCriteria: [
      'Content violates any policy within the Terms of Service.',
      'Content infringes on intellectual property rights.',
      'Content is illegal or violates other platform policies.',
    ],
    evidenceRequirements: [
      'URL(s) of the content.',
      'Description of the specific violation.',
      'Evidence of ownership or rights, if applicable.',
    ],
  },
  {
    reference: 'META-CS-ALL',
    policy:
      'All content must adhere to the full scope of the Community Standards. Enforcement is prioritized for high-severity harms.',
    documents: [legalDocuments[1]], // META-CS
    removalCriteria: [
      'Content violates any Community Standard, such as those against hate speech, violence, or bullying.',
      'Content poses a risk to platform or user safety.',
    ],
    evidenceRequirements: [
      'URL(s) of the content.',
      'Identification of the specific Community Standard violated.',
      'Description of the violation.',
    ],
  },
];

export const facebookPolicy: PlatformPolicy = {
  name: 'Facebook (Meta)',
  legalDocuments,
  contentTypes,
  contentContexts,
  generalPolicies,
  timeframes: {
    response:
      'Varies; aims to review reports as quickly as possible, with priority given to severe harms.',
    removal:
      'For NCII, removal is mandated within 48 hours of a valid request under the TAKE IT DOWN Act. For other violations, removal typically follows quickly after a violation is confirmed, but no specific timeframe is publicly guaranteed.',
  },
  appealProcess: [
    "A notification of the content decision is sent to the user's Support Inbox.",
    "Users must first appeal the decision internally through a 'Request Review' or similar option.",
    'If the internal appeal is unsuccessful, users may be eligible to appeal the decision to the independent Oversight Board.',
    'An appeal to the Oversight Board requires a reference ID provided by Meta after its final decision.',
    "The Oversight Board can make binding decisions to uphold or overturn Meta's original ruling, unless doing so would violate the law.",
  ],
};
