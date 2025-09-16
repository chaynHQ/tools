import { PlatformPolicies, PolicyDocument, Policy } from '../../types/policies';

const tiktokPolicies: Policy[] = [
  {
    id: 'tt-ncii-policy',
    reference: 'TT-CG-NCSII',
    summary: 'Strictly prohibits adult nudity, sexual exploitation, and the sharing of non-consensual intimate imagery (NCII), including deepfakes.',
    quote: 'We strictly prohibit adult nudity, sexual exploitation, and the sharing of non-consensual intimate imagery (NCII), including deepfakes.',
    contentTypes: ['intimate'],
    contentContexts: ['hacked', 'impersonation', 'relationship', 'unknown', 'other'],
    timeframes: {
      response: null,
      removal: { value: 48, unit: 'hours', description: 'Mandated removal under TAKE IT DOWN Act' }
    },
    evidenceRequirements: [
      {
        description: 'Link to the video, content, or user profile',
        reason: 'To locate and identify the specific content for removal'
      },
      {
        description: 'Description of the violation',
        reason: 'To understand the nature of the policy violation'
      }
    ],
    removalCriteria: [
      'Content depicts adult nudity, sexual activity, or is sexually suggestive',
      'Content is an intimate image or video (authentic or AI-generated) shared without the consent of the depicted individual',
      'Content threatens to share intimate imagery (sextortion)'
    ]
  },
  {
    id: 'tt-ai-policy',
    reference: 'TT-CG-AI',
    summary: 'Prohibits using AI to create non-consensual intimate imagery and requires labeling for other realistic AI content.',
    quote: "We prohibit using AI to create non-consensual intimate imagery. Requires labeling for other realistic AI content.",
    contentTypes: ['intimate'],
    contentContexts: ['impersonation', 'unknown', 'other'],
    timeframes: null,
    evidenceRequirements: [
      {
        description: 'Link to the video',
        reason: 'To identify the AI-generated content'
      },
      {
        description: 'Description of how the content is a deepfake or violates policy',
        reason: 'To understand the nature of the AI violation'
      }
    ],
    removalCriteria: [
      'AI-generated content is used to create a deepfake for NCII',
      "Other realistic manipulated media is not clearly disclosed using a label like 'AI-generated'"
    ]
  },
  {
    id: 'tt-harassment-policy',
    reference: 'TT-CG-HARASSMENT',
    summary: 'Prohibits bullying, harassment, and abusive behavior, including posting content to mock, humiliate, or harass someone.',
    quote: 'We prohibit bullying, harassment, and abusive behavior, including posting content to mock, humiliate, or harass someone.',
    contentTypes: ['intimate', 'personal', 'private'],
    contentContexts: ['impersonation', 'relationship', 'unknown', 'other'],
    timeframes: null,
    evidenceRequirements: [
      {
        description: 'Link to the harassing content or user profile',
        reason: 'To identify and review the harassing material'
      },
      {
        description: 'Description of the harassment and its targeted nature',
        reason: 'To assess the nature and impact of the harassment'
      },
      {
        description: 'Screenshots of comments or messages if applicable',
        reason: 'To provide evidence of the harassing behavior'
      }
    ],
    removalCriteria: [
      'Content constitutes targeted harassment or bullying',
      'Content contains abusive statements about a private individual',
      'Unwanted sexualization or advances',
      'Content targets a private individual for abuse by exposing their private information'
    ]
  },
  {
    id: 'tt-privacy-policy',
    reference: 'TT-CG-PRIVACY',
    summary: 'Prohibits sharing personally identifiable information (PII) without consent, a practice known as doxing.',
    quote: 'We prohibit sharing personally identifiable information (PII) without consent, a practice known as doxing.',
    contentTypes: ['intimate', 'personal', 'private'],
    contentContexts: ['hacked', 'impersonation', 'relationship', 'unknown', 'other'],
    timeframes: null,
    evidenceRequirements: [
      {
        description: 'Link to the content containing PII',
        reason: 'To identify the privacy-violating material'
      },
      {
        description: 'Description of the private information exposed',
        reason: 'To understand the nature and scope of the privacy violation'
      },
      {
        description: 'Confirmation that the information was shared without consent',
        reason: 'To establish that consent was not given for sharing'
      }
    ],
    removalCriteria: [
      'Content reveals private, personal, or identifying information (e.g., phone number, home address, non-public email)',
      "Information is shared without the subject's consent",
      'Content shows private media of an individual without their permission',
      'Content reveals private, personal, or identifying information to enable harassment'
    ]
  },
  {
    id: 'tt-impersonation-policy',
    reference: 'TT-CG-IMPERSONATION',
    summary: 'Prohibits impersonating individuals or organizations in a deceptive manner. Parody or fan accounts must be clearly stated.',
    quote: 'We prohibit impersonating individuals or organizations in a deceptive manner. Parody or fan accounts must be clearly stated in the account name or bio.',
    contentTypes: ['intimate', 'personal', 'private'],
    contentContexts: ['impersonation'],
    timeframes: null,
    evidenceRequirements: [
      {
        description: 'Link to the impersonating profile',
        reason: 'To identify the impersonating account'
      },
      {
        description: 'Evidence of your authentic identity',
        example: 'Photo of your government-issued ID',
        reason: 'To verify you are the person or entity being impersonated'
      },
      {
        description: 'Description of how the account is impersonating you or your entity',
        reason: 'To understand the nature and extent of the impersonation'
      }
    ],
    removalCriteria: [
      "Account uses another's name, bio, or profile picture to mislead others",
      "The account's intent is to deceive users about its identity",
      'The account is not clearly marked as a parody or fan page'
    ]
  },
  {
    id: 'tt-copyright-policy',
    reference: 'TT-TOS-IP',
    summary: 'Prohibits copyright infringement, including unauthorized posting of intimate images owned by the victim or photographer.',
    quote: 'We prohibit copyright infringement. If the intimate image was created and owned by the victim or a photographer, its unauthorized posting is a copyright violation.',
    contentTypes: ['intimate', 'personal'],
    contentContexts: ['hacked', 'impersonation', 'relationship', 'unknown', 'other'],
    timeframes: null,
    evidenceRequirements: [
      {
        description: 'A formal copyright infringement report',
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
    id: 'tt-hacked-account-policy',
    reference: 'TT-HC-HACKED',
    summary: 'Provides a process for users to recover a compromised account.',
    quote: 'We provide a process for users to recover a compromised account.',
    contentTypes: ['intimate', 'personal', 'private'],
    contentContexts: ['hacked'],
    timeframes: null,
    evidenceRequirements: [
      {
        description: "Use the 'Find your account' recovery feature",
        reason: 'To initiate the account recovery process'
      },
      {
        description: 'Provide username, phone number, or email associated with the account to receive a verification code',
        reason: 'To verify ownership and restore access'
      },
      {
        description: 'Contact TikTok support directly through the feedback form with details of the compromise if recovery fails',
        reason: 'To get additional assistance when standard recovery methods fail'
      }
    ],
    removalCriteria: [
      'Evidence of unauthorized access (e.g., password, phone number, or email changed without permission)',
      'Account is posting spam or content the owner did not create',
      'Legitimate owner is locked out of the account'
    ]
  }
];

const communityGuidelinesDocument: PolicyDocument = {
  id: 'tt-community-guidelines',
  reference: 'TT-CG',
  title: 'Community Guidelines',
  summary: 'Comprehensive community guidelines covering prohibited content and behavior on TikTok.',
  url: 'https://www.tiktok.com/community-guidelines/en/',
  accessTimestamp: '2025-06-06T00:00:00Z',
  policies: tiktokPolicies.filter(p => p.reference?.startsWith('TT-CG')),
  appealProcess: {
    summary: 'Users can appeal content decisions through in-app notifications and account status pages.',
    steps: [
      "Notifications about violations and enforcement actions (e.g., video removal, account strike) are sent to the user's inbox and can be viewed in the 'Account Status' page",
      "An 'Appeal' option is provided directly within the notification for the specific violation",
      'Users can submit an appeal for review. If the appeal is successful, the content will be restored and any penalty will be removed',
      'If an account is banned, the user will receive a banner notification on login with an option to file an appeal',
      'Appeal decisions are communicated via in-app notification'
    ]
  }
};

const termsOfServiceDocument: PolicyDocument = {
  id: 'tt-terms-of-service',
  reference: 'TT-TOS',
  title: 'Terms of Service',
  summary: 'Legal terms governing the use of TikTok, including content ownership and intellectual property rights.',
  url: 'https://www.tiktok.com/legal/page/us/terms-of-service/en',
  accessTimestamp: '2025-06-06T00:00:00Z',
  policies: tiktokPolicies.filter(p => p.reference?.startsWith('TT-TOS')),
  appealProcess: null
};

const privacyPolicyDocument: PolicyDocument = {
  id: 'tt-privacy-policy',
  reference: 'TT-PP',
  title: 'Privacy Policy',
  summary: 'Privacy policy explaining how TikTok collects, uses, and protects user data.',
  url: 'https://www.tiktok.com/legal/page/us/privacy-policy/en',
  accessTimestamp: '2025-06-06T00:00:00Z',
  policies: [],
  appealProcess: null
};

export const tiktokPolicy: PlatformPolicies = {
  platform: 'TikTok',
  policyDocuments: [
    communityGuidelinesDocument,
    termsOfServiceDocument,
    privacyPolicyDocument
  ]
};