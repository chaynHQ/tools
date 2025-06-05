import { ContentContext, ContentType, LegalDocument, PlatformPolicy } from './types';

const legalDocuments: LegalDocument[] = [
  {
    reference: 'OF-TOS',
    title: 'Terms of Service',
    url: 'https://onlyfans.com/terms',
    accessTimestamp: '2025-06-06T00:00:00Z',
  },
  {
    reference: 'OF-AUP',
    title: 'Acceptable Use Policy',
    url: 'https://onlyfans.com/aup',
    accessTimestamp: '2025-06-06T00:00:00Z',
  },
  {
    reference: 'OF-PP',
    title: 'Privacy Policy',
    url: 'https://onlyfans.com/privacy',
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
      'Photos or videos of a private or sexual nature, including authentic and AI-generated media.',
    policies: [
      {
        reference: 'OF-AUP-NCSII',
        policy:
          "Strictly prohibits posting or sharing non-consensual intimate images (NCII), also known as 'revenge porn'. Consent can be withdrawn at any time, requiring content to be taken down.",
        documents: [legalDocuments[1], legalDocuments[3]], // OF-AUP, TAKE-IT-DOWN-ACT-2025
        removalCriteria: [
          'Content is sexually explicit and shared without the consent of all depicted individuals.',
          'A depicted individual withdraws their prior consent.',
          'Content is an AI-generated deepfake of a real person shared without their permission.',
          'Content violates specific prohibitions in the AUP (e.g., incest, necrophilia, certain bodily fluids, extreme violence).',
        ],
        evidenceRequirements: [
          'URL(s) of the infringing content.',
          'A description of the violation and evidence of non-consent.',
          "For takedown requests, contact support and select 'Law Enforcement/Legal Matters' for non-consensual content or 'Reporting Stolen Content' for copyright claims.",
        ],
      },
      {
        reference: 'OF-AUP-AI',
        policy: 'Permits the use of AI-generated content under strict conditions.',
        documents: [legalDocuments[0], legalDocuments[1]], // OF-TOS, OF-AUP
        removalCriteria: [
          'AI-generated content is not clearly and conspicuously labeled with a signifier like #ai or #AIGenerated.',
          'AI-generated content does not feature the verified creator of the account.',
          'Content is an AI deepfake that impersonates another real individual without their explicit consent.',
        ],
        evidenceRequirements: [
          'URL(s) of the content.',
          'Description of the violation (e.g., unlabeled AI, impersonation).',
          'Evidence of impersonation if applicable.',
        ],
      },
    ],
  },
  {
    type: 'personal',
    label: 'Personal content',
    description: 'Non-intimate photos or videos shared without permission for harassment.',
    policies: [
      {
        reference: 'OF-AUP-HARASSMENT',
        policy:
          'Prohibits using the platform to stalk, bully, abuse, harass, threaten, or intimidate anyone.',
        documents: [legalDocuments[1]], // OF-AUP
        removalCriteria: [
          'Content or behavior constitutes targeted harassment or bullying.',
          'Abusive or threatening language is used in posts or messages.',
        ],
        evidenceRequirements: [
          'URL(s) of the content or user profile.',
          'Screenshots of harassing messages.',
          'Description of the abusive behavior.',
        ],
      },
    ],
  },
  {
    type: 'private',
    label: 'Private information',
    description: 'Personal documents or identifying details (doxing).',
    policies: [
      {
        reference: 'OF-AUP-PRIVACY',
        policy:
          "Prohibits violating others' privacy by sharing their private information without consent.",
        documents: [legalDocuments[1]], // OF-AUP
        removalCriteria: [
          'Private information (e.g., address, phone number) is exposed without consent.',
          'The information poses a privacy or security risk.',
        ],
        evidenceRequirements: [
          'URL(s) of the content containing private information.',
          'Description of the private information exposed.',
          'Evidence that the information was shared without consent.',
        ],
      },
    ],
  },
];

const contentContexts: ContentContext[] = [
  {
    context: 'hacked',
    label: 'Account was compromised',
    description: 'Content was accessed or posted without authorization.',
    policies: [
      {
        reference: 'OF-TOS-SECURITY',
        policy:
          'Users are responsible for their account security. If compromised, users should immediately change their password and contact support.',
        documents: [legalDocuments[0]], // OF-TOS
        removalCriteria: [
          'Evidence of unauthorized access or activity.',
          'Account is posting spam or fraudulent content.',
          'Legitimate owner is locked out of the account.',
        ],
        evidenceRequirements: [
          'Contact OnlyFans support immediately at support@onlyfans.com.',
          'Provide account details (username, email) and a description of the unauthorized activity.',
          'Enable Two-Factor Authentication (2FA) to secure the account after recovery.',
        ],
      },
    ],
  },
  {
    context: 'impersonation',
    label: 'Someone is impersonating me',
    description: 'An account is pretending to be you or another entity.',
    policies: [
      {
        reference: 'OF-AUP-IMPERSONATION',
        policy:
          'Prohibits impersonating any person or entity. This is enforced through a mandatory and strict creator verification process.',
        documents: [legalDocuments[1]], // OF-AUP
        removalCriteria: [
          'An unverified account is impersonating a person or entity.',
          'A verified account is found to have used fraudulent documents.',
          "An account is using another person's likeness or content without permission (copyright infringement).",
        ],
        evidenceRequirements: [
          'All creators must pass a strict verification process, including submitting a government-issued ID and a live selfie.',
          'To report impersonation, contact support and provide the URL of the impersonating profile and evidence of your own identity (e.g., a photo of your government ID).',
        ],
      },
    ],
  },
];

const generalPolicies = [
  {
    reference: 'OF-TOS-CONTENT',
    policy:
      'Creators must own the rights to all content they post. Posting content owned by others without permission is a violation.',
    documents: [legalDocuments[0]], // OF-TOS
    removalCriteria: [
      "Content violates OnlyFans' Terms of Service or Acceptable Use Policy.",
      "Content infringes on another person's copyright (DMCA).",
    ],
    evidenceRequirements: [
      'URL(s) of the infringing content.',
      'Description of the violation.',
      "For copyright claims, file a DMCA notice or use the 'Reporting Stolen Content' contact form.",
    ],
  },
];

export const onlyfansPolicy: PlatformPolicy = {
  name: 'OnlyFans',
  legalDocuments,
  contentTypes,
  contentContexts,
  generalPolicies,
  timeframes: {
    response:
      'Varies. Verification takes 24-72 hours. Routine law enforcement requests are processed within 14 days. Appeal reviews can take several days or weeks.',
    removal:
      'For NCII, removal is mandated within 48 hours of a valid request under the TAKE IT DOWN Act. For other violations, removal occurs after a review confirms a violation, with no specific public timeframe guaranteed.',
  },
  appealProcess: [
    'Decisions on content or account deactivation are communicated via email or account notification.',
    "To appeal, the user must complete and submit the official 'Deactivation Appeal Form'.",
    'Appeals must be filed within six months of the decision and include the account/content URL and detailed reasons why the content does not violate policies.',
    'OnlyFans reviews the appeal and may request more information before making a decision.',
    'For users in the EU, disputes may be eligible for referral to a certified out-of-court dispute settlement body under the Digital Services Act (DSA).',
  ],
};
