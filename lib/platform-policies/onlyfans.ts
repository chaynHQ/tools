import { PlatformPolicies, PolicyDocument, Policy } from '../../types/policies';

const onlyfansPolicies: Policy[] = [
  {
    id: 'of-ncii-policy',
    reference: 'OF-AUP-NCSII',
    summary: 'Strictly prohibits posting or sharing non-consensual intimate images (NCII). Consent can be withdrawn at any time, requiring content to be taken down.',
    quote: 'We strictly prohibit posting or sharing non-consensual intimate images (NCII). Consent can be withdrawn at any time, requiring content to be taken down.',
    contentTypes: ['intimate'],
    contentContexts: ['hacked', 'impersonation', 'relationship', 'unknown', 'other'],
    timeframes: {
      response: null,
      removal: { value: 48, unit: 'hours', description: 'Mandated removal under TAKE IT DOWN Act' }
    },
    evidenceRequirements: [
      {
        description: 'URL(s) of the infringing content',
        reason: 'To locate and identify the specific content for removal'
      },
      {
        description: 'A description of the violation and evidence of non-consent',
        reason: 'To establish that consent was not given or has been withdrawn'
      },
      {
        description: "Contact support and select 'Law Enforcement/Legal Matters' for non-consensual content",
        reason: 'To ensure the report is handled with appropriate priority and sensitivity'
      }
    ],
    removalCriteria: [
      'Content is sexually explicit and shared without the consent of all depicted individuals',
      'A depicted individual withdraws their prior consent',
      'Content violates specific prohibitions in the AUP (e.g., incest, necrophilia, certain bodily fluids, extreme violence)'
    ]
  },
  {
    id: 'of-ai-policy',
    reference: 'OF-AUP-AI',
    summary: 'Prohibits AI-generated deepfakes that impersonate a real individual without their explicit consent.',
    quote: 'We prohibit AI-generated deepfakes that impersonate a real individual without their explicit consent.',
    contentTypes: ['intimate'],
    contentContexts: ['impersonation', 'unknown', 'other'],
    timeframes: null,
    evidenceRequirements: [
      {
        description: 'URL(s) of the content',
        reason: 'To identify the AI-generated content'
      },
      {
        description: 'Description of the violation (e.g., unlabeled AI, deepfake impersonation)',
        reason: 'To understand the nature of the AI violation'
      },
      {
        description: 'Evidence of impersonation if applicable',
        reason: 'To establish that the AI content impersonates someone without consent'
      }
    ],
    removalCriteria: [
      'Content is an AI deepfake that impersonates another real individual without their explicit consent',
      'AI-generated content featuring the creator is not clearly labeled with #ai or #AIGenerated'
    ]
  },
  {
    id: 'of-harassment-policy',
    reference: 'OF-AUP-HARASSMENT',
    summary: 'Prohibits using the platform to stalk, bully, abuse, harass, threaten, or intimidate anyone.',
    quote: 'We prohibit using the platform to stalk, bully, abuse, harass, threaten, or intimidate anyone.',
    contentTypes: ['intimate', 'personal', 'private'],
    contentContexts: ['impersonation', 'relationship', 'unknown', 'other'],
    timeframes: null,
    evidenceRequirements: [
      {
        description: 'URL(s) of the content or user profile',
        reason: 'To identify and review the harassing material'
      },
      {
        description: 'Screenshots of harassing messages',
        reason: 'To provide evidence of the harassing behavior'
      },
      {
        description: 'Description of the abusive behavior',
        reason: 'To assess the nature and impact of the harassment'
      }
    ],
    removalCriteria: [
      'Content or behavior constitutes targeted harassment or bullying',
      'Abusive or threatening language is used in posts or messages',
      'Content is used to threaten, intimidate, or degrade an individual'
    ]
  },
  {
    id: 'of-privacy-policy',
    reference: 'OF-AUP-PRIVACY',
    summary: 'Prohibits violating others\' privacy by sharing their private information without consent (doxing).',
    quote: "We prohibit violating others' privacy by sharing their private information without consent (doxing).",
    contentTypes: ['intimate', 'personal', 'private'],
    contentContexts: ['hacked', 'impersonation', 'relationship', 'unknown', 'other'],
    timeframes: null,
    evidenceRequirements: [
      {
        description: 'URL(s) of the content containing private information',
        reason: 'To identify the privacy-violating material'
      },
      {
        description: 'Description of the private information exposed',
        reason: 'To understand the nature and scope of the privacy violation'
      },
      {
        description: 'Evidence that the information was shared without consent',
        reason: 'To establish that consent was not given for sharing'
      }
    ],
    removalCriteria: [
      'Private information (e.g., address, phone number) is exposed without consent',
      'The information poses a privacy or security risk',
      'Private information is exposed without consent to intimidate or harass',
      'Content consists of private media shared without consent'
    ]
  },
  {
    id: 'of-impersonation-policy',
    reference: 'OF-AUP-IMPERSONATION',
    summary: 'Prohibits impersonating any person or entity. This is strictly enforced through the mandatory creator identity verification process.',
    quote: 'We prohibit impersonating any person or entity. This is strictly enforced through the mandatory creator identity verification process.',
    contentTypes: ['intimate', 'personal', 'private'],
    contentContexts: ['impersonation'],
    timeframes: null,
    evidenceRequirements: [
      {
        description: 'All creators must pass verification with a government-issued ID and a live selfie',
        reason: 'To prevent impersonation through mandatory identity verification'
      },
      {
        description: 'To report impersonation, contact support with the URL of the impersonating profile and evidence of your own identity',
        reason: 'To verify you are the person being impersonated and process the report'
      }
    ],
    removalCriteria: [
      'An unverified account is impersonating a person or entity',
      'A verified account is found to have used fraudulent documents',
      'An account is proven to be operated by someone other than the verified individual'
    ]
  },
  {
    id: 'of-copyright-policy',
    reference: 'OF-TOS-COPYRIGHT',
    summary: 'Prohibits copyright infringement. If the intimate image is owned by the victim or a photographer, posting it without permission is a copyright violation.',
    quote: 'We prohibit copyright infringement. If the intimate image is owned by the victim or a photographer, posting it without permission is a copyright violation.',
    contentTypes: ['intimate', 'personal'],
    contentContexts: ['hacked', 'impersonation', 'relationship', 'unknown', 'other'],
    timeframes: null,
    evidenceRequirements: [
      {
        description: "File a DMCA notice via the 'Reporting Stolen Content' contact form",
        reason: 'Legal requirement for copyright infringement claims'
      },
      {
        description: 'Proof of original ownership',
        reason: 'To establish copyright ownership'
      },
      {
        description: 'URL(s) of the infringing content',
        reason: 'To identify the specific content that infringes copyright'
      }
    ],
    removalCriteria: [
      "Content is an original work posted without the copyright owner's permission",
      'The impersonating account is posting content you own the copyright to'
    ]
  },
  {
    id: 'of-hacked-account-policy',
    reference: 'OF-TOS-SECURITY',
    summary: 'Users are responsible for their account security. If compromised, users should immediately change their password and contact support.',
    quote: 'Users are responsible for their account security. If compromised, users should immediately change their password and contact support.',
    contentTypes: ['intimate', 'personal', 'private'],
    contentContexts: ['hacked'],
    timeframes: null,
    evidenceRequirements: [
      {
        description: 'Contact OnlyFans support immediately at support@onlyfans.com',
        reason: 'To report the compromise and initiate recovery'
      },
      {
        description: 'Provide account details (username, email) and a description of the unauthorized activity',
        reason: 'To verify ownership and understand the scope of the compromise'
      },
      {
        description: 'Enable Two-Factor Authentication (2FA) to secure the account after recovery',
        reason: 'To prevent future unauthorized access'
      }
    ],
    removalCriteria: [
      'Evidence of unauthorized access or activity',
      'Account is posting spam or fraudulent content',
      'Legitimate owner is locked out of the account'
    ]
  }
];

const acceptableUsePolicyDocument: PolicyDocument = {
  id: 'of-acceptable-use-policy',
  reference: 'OF-AUP',
  title: 'Acceptable Use Policy',
  summary: 'Comprehensive policy covering prohibited content and behavior on OnlyFans.',
  url: 'https://onlyfans.com/aup',
  accessTimestamp: '2025-06-06T00:00:00Z',
  policies: onlyfansPolicies.filter(p => p.reference?.startsWith('OF-AUP')),
  appealProcess: {
    url: 'https://onlyfans.com/help/3/16/49',
    summary: 'Users can appeal content or account decisions through the official Deactivation Appeal Form.',
    steps: [
      'Decisions on content or account deactivation are communicated via email or account notification',
      "To appeal, the user must complete and submit the official 'Deactivation Appeal Form'",
      'Appeals must be filed within six months of the decision and include the account/content URL and detailed reasons why the content does not violate policies',
      'OnlyFans reviews the appeal and may request more information before making a decision',
      'For users in the EU, disputes may be eligible for referral to a certified out-of-court dispute settlement body under the Digital Services Act (DSA)'
    ]
  }
};

const termsOfServiceDocument: PolicyDocument = {
  id: 'of-terms-of-service',
  reference: 'OF-TOS',
  title: 'Terms of Service',
  summary: 'Legal terms governing the use of OnlyFans, including content ownership and security responsibilities.',
  url: 'https://onlyfans.com/terms',
  accessTimestamp: '2025-06-06T00:00:00Z',
  policies: onlyfansPolicies.filter(p => p.reference?.startsWith('OF-TOS')),
  appealProcess: null
};

const privacyPolicyDocument: PolicyDocument = {
  id: 'of-privacy-policy',
  reference: 'OF-PP',
  title: 'Privacy Policy',
  summary: 'Privacy policy explaining how OnlyFans collects, uses, and protects user data.',
  url: 'https://onlyfans.com/privacy',
  accessTimestamp: '2025-06-06T00:00:00Z',
  policies: [],
  appealProcess: null
};

export const onlyfansPolicy: PlatformPolicies = {
  platform: 'OnlyFans',
  policyDocuments: [
    acceptableUsePolicyDocument,
    termsOfServiceDocument,
    privacyPolicyDocument
  ]
};