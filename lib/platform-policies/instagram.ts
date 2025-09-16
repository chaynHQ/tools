import { PlatformPolicies, PolicyDocument, Policy } from '../../types/policies';

const instagramPolicies: Policy[] = [
  {
    id: 'ig-ncii-policy',
    reference: 'META-CS-NCSII',
    summary: 'Prohibits sharing non-consensual intimate images (NCII), including AI-generated or deepfake content, and threatening to share them (sextortion).',
    quote: "We prohibit sharing non-consensual intimate images (NCII), including AI-generated or 'deepfake' content, and threatening to share them (sextortion).",
    contentTypes: ['intimate'],
    contentContexts: ['hacked', 'impersonation', 'relationship', 'unknown', 'other'],
    timeframes: {
      response: { value: 48, unit: 'hours', description: 'Priority review for severe harms like NCII' },
      removal: { value: 48, unit: 'hours', description: 'Mandated removal under TAKE IT DOWN Act' }
    },
    evidenceRequirements: [
      {
        description: 'URL(s) of the infringing content or threatening messages',
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
      'Image/video is shared without the consent of the depicted individual',
      'The content is an authentic or AI-generated intimate depiction',
      'A threat to share intimate media exists'
    ]
  },
  {
    id: 'ig-bullying-policy',
    reference: 'META-CS-BULLYING',
    summary: 'Prohibits bullying and harassment, including sharing intimate images without consent as a severe form of bullying.',
    quote: 'We prohibit bullying and harassment. Sharing intimate images of someone without their consent is considered a severe form of bullying.',
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
      'Content targets a private individual for abuse or degradation',
      'Content includes shaming material, such as non-consensual intimate imagery'
    ]
  },
  {
    id: 'ig-privacy-policy',
    reference: 'META-CS-PRIVACY',
    summary: 'Prohibits violations of privacy, including sharing private intimate media or personal information without consent.',
    quote: "We prohibit violations of privacy. Sharing someone's private, intimate media without their consent is a fundamental breach of privacy.",
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
        description: 'Identification of the specific PII that was shared',
        reason: 'To assess the severity and scope of the privacy violation'
      }
    ],
    removalCriteria: [
      'Content consists of private media shared without consent',
      'The sharing of the content violates a reasonable expectation of privacy',
      'Content contains PII used maliciously',
      'Information is shared without consent and is intended to harass or incite harassment'
    ]
  },
  {
    id: 'ig-impersonation-policy',
    reference: 'META-CS-IMPERSONATION',
    summary: 'Prohibits impersonating others (individuals, organizations) with an intent to deceive or mislead.',
    quote: 'We prohibit impersonating others (individuals, organizations) with an intent to deceive or mislead.',
    contentTypes: ['intimate', 'personal', 'private'],
    contentContexts: ['impersonation'],
    timeframes: null,
    evidenceRequirements: [
      {
        description: 'URL of the impersonating profile',
        reason: 'To identify the impersonating account'
      },
      {
        description: 'Proof of identity',
        example: 'Government-issued ID for a person or business documents for an organization',
        reason: 'To verify you are the person or entity being impersonated'
      },
      {
        description: 'Description of how the account is impersonating you or your entity',
        reason: 'To understand the nature and extent of the impersonation'
      }
    ],
    removalCriteria: [
      "Account uses another's name, photos, or other identifying information without authorization",
      'The profile is intended to mislead or deceive others about who is behind it',
      'The account is not clearly marked as a parody or fan account'
    ]
  },
  {
    id: 'ig-copyright-policy',
    reference: 'IG-TOU-IP',
    summary: 'Prohibits copyright infringement, including unauthorized posting of intimate images owned by the victim or photographer.',
    quote: 'We prohibit copyright infringement. If the intimate image was created and owned by the victim or a photographer, its unauthorized posting is a copyright violation.',
    contentTypes: ['intimate', 'personal'],
    contentContexts: ['hacked', 'impersonation', 'relationship', 'unknown', 'other'],
    timeframes: null,
    evidenceRequirements: [
      {
        description: "A formal DMCA takedown notice submitted through Instagram's copyright form",
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
    id: 'ig-hacked-account-policy',
    reference: 'IG-HC-HACKED',
    summary: 'Provides a centralized process to report and recover compromised accounts via instagram.com/hacked.',
    quote: 'We provide a centralized process to report and recover compromised accounts via instagram.com/hacked.',
    contentTypes: ['intimate', 'personal', 'private'],
    contentContexts: ['hacked'],
    timeframes: null,
    evidenceRequirements: [
      {
        description: 'Access to a previously linked email or phone number to receive a recovery code',
        reason: 'To securely restore access to the legitimate account owner'
      },
      {
        description: 'Selfie video verification if standard recovery fails',
        reason: 'To confirm ownership when other methods are unavailable'
      },
      {
        description: 'Meta Verified support for faster recovery assistance',
        example: 'Paid verification service',
        reason: 'To access priority support channels for account recovery'
      }
    ],
    removalCriteria: [
      'Evidence of unauthorized access (e.g., changed username, password, or email)',
      'Suspicious account activity, such as posts or messages not made by the owner',
      'The legitimate owner is locked out of the account'
    ]
  }
];

const communityStandardsDocument: PolicyDocument = {
  id: 'ig-community-standards',
  reference: 'META-CS',
  title: 'Meta Community Standards',
  summary: 'Unified community guidelines covering prohibited content and behavior across Meta platforms including Instagram.',
  url: 'https://transparency.fb.com/policies/community-standards/',
  accessTimestamp: '2025-06-06T00:00:00Z',
  policies: instagramPolicies.filter(p => p.reference?.startsWith('META-CS')),
  appealProcess: {
    url: 'https://help.instagram.com/contact/396169787183059',
    summary: 'Users can appeal content decisions through internal review and the independent Oversight Board.',
    steps: [
      "A notification of the content decision is sent via in-app notification in 'Support Requests'",
      "Users must first appeal the decision internally by selecting the 'Request a Review' option",
      'If the internal review is unsuccessful, the user may be eligible to appeal the decision to the independent Oversight Board',
      'An appeal to the Oversight Board requires a reference ID provided by Meta in the Support Requests inbox after its final decision',
      "The Oversight Board's decisions are binding, and Meta will reverse its original decision unless doing so would violate the law"
    ]
  }
};

const termsOfUseDocument: PolicyDocument = {
  id: 'ig-terms-of-use',
  reference: 'IG-TOU',
  title: 'Instagram Terms of Use',
  summary: 'Legal terms governing the use of Instagram, including content ownership and intellectual property rights.',
  url: 'https://help.instagram.com/581066165581870',
  accessTimestamp: '2025-06-06T00:00:00Z',
  policies: instagramPolicies.filter(p => p.reference?.startsWith('IG-TOU')),
  appealProcess: null
};

const privacyPolicyDocument: PolicyDocument = {
  id: 'ig-privacy-policy',
  reference: 'META-PP',
  title: 'Meta Privacy Policy',
  summary: 'Privacy policy explaining how Meta collects, uses, and protects user data across its platforms.',
  url: 'https://privacycenter.instagram.com/policy',
  accessTimestamp: '2025-06-06T00:00:00Z',
  policies: [],
  appealProcess: null
};

export const instagramPolicy: PlatformPolicies = {
  platform: 'Instagram',
  policyDocuments: [
    communityStandardsDocument,
    termsOfUseDocument,
    privacyPolicyDocument
  ]
};