import { ContentContext, ContentType, LegalDocument, PlatformPolicy } from '../../types/policies';

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
      'Photos or videos of a private or sexual nature. This violation can simultaneously breach rules on consent, harassment, privacy, AI, and copyright.',
    policies: [
      {
        reference: 'OF-AUP-NCSII',
        policy:
          'Strictly prohibits posting or sharing non-consensual intimate images (NCII). Consent can be withdrawn at any time, requiring content to be taken down.',
        documents: [legalDocuments[1], legalDocuments[3]], // OF-AUP, TAKE-IT-DOWN-ACT-2025
        removalCriteria: [
          'Content is sexually explicit and shared without the consent of all depicted individuals.',
          'A depicted individual withdraws their prior consent.',
          'Content violates specific prohibitions in the AUP (e.g., incest, necrophilia, certain bodily fluids, extreme violence).',
        ],
        evidenceRequirements: [
          'URL(s) of the infringing content.',
          'A description of the violation and evidence of non-consent.',
          "Contact support and select 'Law Enforcement/Legal Matters' for non-consensual content.",
        ],
      },
      {
        reference: 'OF-AUP-AI',
        policy:
          'Prohibits AI-generated deepfakes that impersonate a real individual without their explicit consent.',
        documents: [legalDocuments[1]], // OF-AUP
        removalCriteria: [
          'Content is an AI deepfake that impersonates another real individual without their explicit consent.',
          'AI-generated content featuring the creator is not clearly labeled with #ai or #AIGenerated.',
        ],
        evidenceRequirements: [
          'URL(s) of the content.',
          'Description of the violation (e.g., unlabeled AI, deepfake impersonation).',
          'Evidence of impersonation if applicable.',
        ],
      },
      {
        reference: 'OF-AUP-HARASSMENT',
        policy:
          'Prohibits harassment. Sharing intimate content without consent is considered a severe form of harassment.',
        documents: [legalDocuments[1]], // OF-AUP
        removalCriteria: ['Content is used to threaten, intimidate, or degrade an individual.'],
        evidenceRequirements: [
          'URL(s) of the content.',
          'Description of how the content is being used to harass.',
        ],
      },
      {
        reference: 'OF-AUP-PRIVACY',
        policy:
          "Prohibits violating others' privacy. Sharing private, intimate media is a fundamental privacy violation.",
        documents: [legalDocuments[1], legalDocuments[2]], // OF-AUP, OF-PP
        removalCriteria: [
          'Content consists of private media shared without consent.',
          'The sharing violates a reasonable expectation of privacy.',
        ],
        evidenceRequirements: ['URL(s) of the content.', 'Description of the privacy violation.'],
      },
      {
        reference: 'OF-TOS-COPYRIGHT',
        policy:
          'Prohibits copyright infringement. If the intimate image is owned by the victim or a photographer, posting it without permission is a copyright violation.',
        documents: [legalDocuments[0]], // OF-TOS
        removalCriteria: [
          "Content is an original work posted without the copyright owner's permission.",
        ],
        evidenceRequirements: [
          "File a DMCA notice via the 'Reporting Stolen Content' contact form.",
          'Proof of original ownership.',
          'URL(s) of the infringing content.',
        ],
      },
    ],
  },
  {
    type: 'personal',
    label: 'Personal content for harassment',
    description:
      'Non-intimate photos, videos, or text shared to bully or harass someone. This often overlaps with privacy violations.',
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
      {
        reference: 'OF-AUP-PRIVACY',
        policy:
          "Prohibits violating others' privacy by sharing their private information as a form of harassment.",
        documents: [legalDocuments[1], legalDocuments[2]], // OF-AUP, OF-PP
        removalCriteria: [
          'Private information is exposed without consent to intimidate or harass.',
          'The information poses a privacy or security risk.',
        ],
        evidenceRequirements: [
          'URL(s) of the content containing private information.',
          'Description of how the information is being used to harass.',
        ],
      },
    ],
  },
  {
    type: 'private',
    label: 'Private information (Doxing)',
    description:
      'Sharing personal documents, contact information, or other identifying details without consent. This is a form of harassment.',
    policies: [
      {
        reference: 'OF-AUP-PRIVACY',
        policy:
          "Prohibits violating others' privacy by sharing their private information without consent (doxing).",
        documents: [legalDocuments[1], legalDocuments[2]], // OF-AUP, OF-PP
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
      {
        reference: 'OF-AUP-HARASSMENT',
        policy:
          'Prohibits harassment. Doxing is treated as a severe form of harassment intended to intimidate and endanger.',
        documents: [legalDocuments[1]], // OF-AUP
        removalCriteria: [
          'Private information is shared with the clear intent to incite harassment or cause fear.',
        ],
        evidenceRequirements: [
          'URL(s) of the content.',
          'Description of how the doxing is being used to harass or threaten.',
        ],
      },
    ],
  },
];

const contentContexts: ContentContext[] = [
  {
    context: 'hacked',
    label: 'Account was compromised',
    description:
      'Content was accessed or posted without authorization. The primary goal is account recovery, followed by removal of any content posted by the unauthorized user.',
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
      {
        reference: 'OF-AUP-PROHIBITED',
        policy:
          'All content, even that posted by an unauthorized user, must adhere to the Acceptable Use Policy and will be removed if it violates the rules.',
        documents: [legalDocuments[1]], // OF-AUP
        removalCriteria: [
          'Content posted from the compromised account violates any rule in the AUP (e.g., spam, scams, illegal content).',
        ],
        evidenceRequirements: [
          'After recovering the account, report any violating content through the standard reporting channels.',
          'URL(s) of the content.',
        ],
      },
    ],
  },
  {
    context: 'impersonation',
    label: 'Someone is impersonating me',
    description:
      "An account is pretending to be you or another entity. This is a severe violation due to OnlyFans' mandatory verification and can overlap with copyright and harassment.",
    policies: [
      {
        reference: 'OF-AUP-IMPERSONATION',
        policy:
          'Prohibits impersonating any person or entity. This is strictly enforced through the mandatory creator identity verification process.',
        documents: [legalDocuments[1]], // OF-AUP
        removalCriteria: [
          'An unverified account is impersonating a person or entity.',
          'A verified account is found to have used fraudulent documents.',
          'An account is proven to be operated by someone other than the verified individual.',
        ],
        evidenceRequirements: [
          'All creators must pass verification with a government-issued ID and a live selfie.',
          'To report impersonation, contact support with the URL of the impersonating profile and evidence of your own identity.',
        ],
      },
      {
        reference: 'OF-TOS-COPYRIGHT',
        policy:
          'Prohibits copyright infringement. Impersonators often steal and re-upload the content of the person they are impersonating.',
        documents: [legalDocuments[0]], // OF-TOS
        removalCriteria: ['The impersonating account is posting content you own the copyright to.'],
        evidenceRequirements: [
          "File a DMCA notice via the 'Reporting Stolen Content' contact form.",
          'Proof of original ownership of the content.',
          "URL(s) of the infringing content on the impersonator's page.",
        ],
      },
      {
        reference: 'OF-AUP-HARASSMENT',
        policy:
          'Prohibits harassment. An impersonating account may be used to harass the victim or to interact with others in a damaging way.',
        documents: [legalDocuments[1]], // OF-AUP
        removalCriteria: [
          'The impersonating account is being used to send abusive messages or post harassing content.',
        ],
        evidenceRequirements: [
          'URL(s) of the impersonating account and screenshots of harassing behavior.',
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
      'Varies. Creator verification takes 24-72 hours. Routine law enforcement requests are processed within 14 days. Appeal reviews can take several days or weeks.',
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
