import { PlatformPolicies, PolicyDocument, Policy } from '../../types/policies';

const facebookPolicies: Policy[] = [
  {
    id: 'fb-ncii-policy',
    reference: 'CS-NCSII',
    summary: 'Prohibits sharing non-consensual intimate images (NCII), including AI-generated or deepfake content.',
    quote: "We prohibit sharing non-consensual intimate images (NCII), including AI-generated or 'deepfake' content.",
    contentTypes: ['intimate'],
    contentContexts: ['hacked', 'impersonation', 'relationship', 'unknown', 'other'],
    timeframes: {
      response: { value: 48, unit: 'hours', description: 'Priority review for severe harms like NCII' },
      removal: { value: 48, unit: 'hours', description: 'Mandated removal under TAKE IT DOWN Act' }
    },
    evidenceRequirements: [
      {
        description: 'URL(s) of the infringing content',
        reason: 'To locate and identify the specific content for removal'
      },
      {
        description: 'Statement made in good faith that the content is non-consensual',
        reason: 'To establish that consent was not given for sharing'
      },
      {
        description: 'Information to identify the victim and locate the content',
        reason: 'To verify the request and process removal effectively'
      }
    ],
    removalCriteria: [
      'Content depicts nudity or sexual activity',
      'Image/video shared without the consent of the depicted individual',
      'The content is an authentic or AI-generated intimate depiction',
      'Subject is identifiable'
    ]
  },
  {
    id: 'fb-sextortion-policy',
    reference: 'CS-SEXTORTION',
    summary: 'Prohibits threatening to share intimate images for purposes of extortion or coercion (sextortion).',
    quote: 'We prohibit threatening to share intimate images for purposes of extortion or coercion (sextortion).',
    contentTypes: ['intimate'],
    contentContexts: ['relationship', 'unknown', 'other'],
    timeframes: null,
    evidenceRequirements: [
      {
        description: 'URL(s) of threatening content or messages',
        reason: 'To identify and review the threatening behavior'
      },
      {
        description: 'Description of threats or demands made',
        reason: 'To understand the nature and severity of the extortion'
      },
      {
        description: 'Evidence of the intimate content being used for the threat',
        reason: 'To establish the connection between the threat and the intimate material'
      }
    ],
    removalCriteria: [
      'Evidence of threats to share intimate content',
      'Content is being used for extortion or harassment',
      'Subject identifies themselves as the victim'
    ]
  },
  {
    id: 'fb-bullying-policy',
    reference: 'CS-BULLYING',
    summary: 'Prohibits bullying and harassment, including sharing intimate images without consent as a severe form of bullying.',
    quote: 'We prohibit bullying and harassment. Sharing intimate images without consent is considered a severe form of bullying.',
    contentTypes: ['intimate', 'personal'],
    contentContexts: ['impersonation', 'relationship', 'unknown', 'other'],
    timeframes: null,
    evidenceRequirements: [
      {
        description: 'URL(s) of the content',
        reason: 'To locate and review the harassing material'
      },
      {
        description: 'Description of how the content constitutes targeted harassment',
        reason: 'To assess the nature and impact of the harassment'
      },
      {
        description: 'Information identifying the victim',
        reason: 'To verify the target of harassment and process the report'
      }
    ],
    removalCriteria: [
      'Content targets a private individual for abuse',
      'Content includes degrading or shaming material, such as non-consensual intimate imagery',
      'The behavior is unwanted and causes severe emotional distress'
    ]
  },
  {
    id: 'fb-privacy-policy',
    reference: 'CS-PRIVACY',
    summary: 'Prohibits violations of privacy, including sharing intimate media or personal information without consent.',
    quote: 'We prohibit violations of privacy. Sharing intimate media of a person without their consent is a severe privacy violation.',
    contentTypes: ['intimate', 'personal', 'private'],
    contentContexts: ['hacked', 'impersonation', 'relationship', 'unknown', 'other'],
    timeframes: null,
    evidenceRequirements: [
      {
        description: 'URL(s) of the content',
        reason: 'To identify the privacy-violating material'
      },
      {
        description: "Description of how the content violates the victim's privacy",
        reason: 'To understand the nature of the privacy violation'
      },
      {
        description: 'Evidence that the media was private and shared without permission',
        reason: 'To establish that consent was not given for sharing'
      }
    ],
    removalCriteria: [
      'Content consists of private media shared without consent',
      'The sharing of the content violates a reasonable expectation of privacy',
      'Content contains PII used maliciously or for harassment'
    ]
  },
  {
    id: 'fb-impersonation-policy',
    reference: 'CS-IMPERSONATION',
    summary: 'Prohibits impersonating others, including individuals and organizations, with an intent to deceive.',
    quote: 'We prohibit impersonating others, including individuals and organizations, with an intent to deceive.',
    contentTypes: ['intimate', 'personal', 'private'],
    contentContexts: ['impersonation'],
    timeframes: null,
    evidenceRequirements: [
      {
        description: 'URL of the impersonating profile or page',
        reason: 'To identify the impersonating account'
      },
      {
        description: 'Proof of identity',
        example: 'Government ID for a person, business documents for an organization',
        reason: 'To verify you are the person or entity being impersonated'
      },
      {
        description: 'Description of the impersonation',
        reason: 'To understand how the account is misrepresenting your identity'
      }
    ],
    removalCriteria: [
      'Account uses name, photos, or other identifying information without authorization',
      'The profile or page is intended to mislead or deceive others',
      'The account is not clearly marked as a parody or fan account'
    ]
  },
  {
    id: 'fb-copyright-policy',
    reference: 'FB-TOS-IP',
    summary: 'Prohibits copyright infringement, including unauthorized use of intimate images owned by others.',
    quote: 'We prohibit copyright infringement. If the intimate image was created and owned by someone else, its unauthorized use is a copyright violation.',
    contentTypes: ['intimate', 'personal'],
    contentContexts: ['hacked', 'impersonation', 'relationship', 'unknown', 'other'],
    timeframes: null,
    evidenceRequirements: [
      {
        description: 'A formal DMCA takedown notice',
        reason: 'Legal requirement for copyright infringement claims'
      },
      {
        description: 'Proof of original ownership of the content',
        reason: 'To establish copyright ownership'
      },
      {
        description: 'URL(s) of the infringing content',
        reason: 'To identify the specific content that infringes copyright'
      }
    ],
    removalCriteria: [
      "Content is an original work (photo, video) posted without the copyright owner's permission"
    ]
  },
  {
    id: 'fb-hacked-account-policy',
    reference: 'FB-HC-HACKED',
    summary: 'Provides a process to report and recover compromised accounts via facebook.com/hacked.',
    quote: 'We provide a process to report and recover compromised accounts via facebook.com/hacked.',
    contentTypes: ['intimate', 'personal', 'private'],
    contentContexts: ['hacked'],
    timeframes: null,
    evidenceRequirements: [
      {
        description: 'Account details (email, phone number)',
        reason: 'To identify and verify ownership of the compromised account'
      },
      {
        description: 'Access to a previously linked email or phone number to receive a recovery code',
        reason: 'To securely restore access to the legitimate account owner'
      },
      {
        description: 'Government ID may be required if other methods fail',
        example: 'Driver\'s license, passport',
        reason: 'To prove ownership when standard recovery methods are unavailable'
      }
    ],
    removalCriteria: [
      'Evidence of unauthorized access or activity',
      'The legitimate owner is locked out of the account',
      'The account is posting spam or malicious content'
    ]
  }
];

const communityStandardsDocument: PolicyDocument = {
  id: 'fb-community-standards',
  reference: 'META-CS',
  title: 'Meta Community Standards',
  summary: 'Comprehensive community guidelines covering prohibited content and behavior across Meta platforms.',
  url: 'https://transparency.fb.com/policies/community-standards/',
  accessTimestamp: '2025-06-06T00:00:00Z',
  policies: facebookPolicies.filter(p => p.reference?.startsWith('CS-')),
  appealProcess: {
    url: 'https://www.facebook.com/help/contact/260749603972907',
    summary: 'Users can appeal content decisions through internal review and the independent Oversight Board.',
    steps: [
      "A notification of the content decision is sent to the user's Support Inbox",
      "Users must first appeal the decision internally through a 'Request Review' or similar option provided in the notification",
      'If the internal appeal is unsuccessful, users may be eligible to appeal the decision to the independent Oversight Board',
      'An appeal to the Oversight Board requires a reference ID provided by Meta after its final decision',
      "The Oversight Board can make binding decisions to uphold or overturn Meta's original ruling, unless doing so would violate the law"
    ]
  }
};

const termsOfServiceDocument: PolicyDocument = {
  id: 'fb-terms-of-service',
  reference: 'FB-TOS',
  title: 'Facebook Terms of Service',
  summary: 'Legal terms governing the use of Facebook, including content ownership and intellectual property rights.',
  url: 'https://www.facebook.com/legal/terms',
  accessTimestamp: '2025-06-06T00:00:00Z',
  policies: facebookPolicies.filter(p => p.reference?.startsWith('FB-TOS')),
  appealProcess: null
};

const privacyPolicyDocument: PolicyDocument = {
  id: 'fb-privacy-policy',
  reference: 'META-PP',
  title: 'Meta Privacy Policy',
  summary: 'Privacy policy explaining how Meta collects, uses, and protects user data.',
  url: 'https://www.facebook.com/privacy/policy/',
  accessTimestamp: '2025-06-06T00:00:00Z',
  policies: [],
  appealProcess: null
};

const helpCenterDocument: PolicyDocument = {
  id: 'fb-help-center',
  reference: 'FB-HC-Reporting',
  title: 'Facebook Help Center - Reporting & Account Recovery',
  summary: 'Help documentation for reporting violations and recovering compromised accounts.',
  url: 'https://www.facebook.com/help/181495968648557',
  accessTimestamp: '2025-06-06T00:00:00Z',
  policies: facebookPolicies.filter(p => p.reference?.startsWith('FB-HC')),
  appealProcess: null
};

export const facebookPolicy: PlatformPolicies = {
  platform: 'Facebook',
  policyDocuments: [
    communityStandardsDocument,
    termsOfServiceDocument,
    privacyPolicyDocument,
    helpCenterDocument
  ]
};