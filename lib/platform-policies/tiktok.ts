import { ContentContext, ContentType, LegalDocument, PlatformPolicy } from './types';

const legalDocuments: LegalDocument[] = [
  {
    reference: 'TT-TOS',
    title: 'Terms of Service',
    url: 'https://www.tiktok.com/legal/page/us/terms-of-service/en',
    accessTimestamp: '2025-06-06T00:00:00Z',
  },
  {
    reference: 'TT-CG',
    title: 'Community Guidelines',
    url: 'https://www.tiktok.com/community-guidelines/en/',
    accessTimestamp: '2025-06-06T00:00:00Z',
  },
  {
    reference: 'TT-PP',
    title: 'Privacy Policy',
    url: 'https://www.tiktok.com/legal/page/us/privacy-policy/en',
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
        reference: 'TT-CG-NCSII',
        policy:
          'Strictly prohibits adult nudity, sexual exploitation, and the sharing of non-consensual intimate imagery (NCII), including deepfakes.',
        documents: [legalDocuments[1], legalDocuments[3]], // TT-CG, TAKE-IT-DOWN-ACT-2025
        removalCriteria: [
          'Content depicts adult nudity, sexual activity, or is sexually suggestive.',
          'Content is an intimate image or video (authentic or AI-generated) shared without the consent of the depicted individual.',
          'Content threatens to share intimate imagery (sextortion).',
        ],
        evidenceRequirements: [
          'Link to the video, content, or user profile.',
          'Description of the violation.',
          'TikTok partners with StopNCII.org to help prevent the spread of intimate images by allowing potential victims to create a unique hash of their images.',
        ],
      },
      {
        reference: 'TT-CG-AI',
        policy: 'Requires creators to label realistic AI-generated content to prevent deception.',
        documents: [legalDocuments[1]], // TT-CG
        removalCriteria: [
          "Content is realistic manipulated media that is not clearly disclosed using a label like 'AI-generated'.",
          'AI-generated content violates other guidelines (e.g., creating a deepfake for harassment or NCII).',
        ],
        evidenceRequirements: [
          'Link to the video.',
          'Description of how the content is misleading or violates policy.',
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
        reference: 'TT-CG-HARASSMENT',
        policy:
          'Prohibits bullying, harassment, and abusive behavior, including posting content to mock, humiliate, or harass someone.',
        documents: [legalDocuments[1]], // TT-CG
        removalCriteria: [
          'Content constitutes targeted harassment or bullying.',
          'Content contains abusive statements about a private individual.',
          'Unwanted sexualization or advances.',
        ],
        evidenceRequirements: [
          'Link to the harassing content or user profile.',
          'Description of the harassment and its targeted nature.',
          'Screenshots of comments or messages if applicable.',
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
        reference: 'TT-CG-PRIVACY',
        policy:
          'Prohibits sharing personally identifiable information (PII) without consent, a practice known as doxing.',
        documents: [legalDocuments[1]], // TT-CG
        removalCriteria: [
          'Content reveals private, personal, or identifying information (e.g., phone number, home address, non-public email).',
          "Information is shared without the subject's consent.",
          'Content shows private media of an individual without their permission.',
        ],
        evidenceRequirements: [
          'Link to the content containing PII.',
          'Description of the private information exposed.',
          'Confirmation that the information was shared without consent.',
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
        reference: 'TT-HC-HACKED',
        policy: 'Provides a process for users to recover a compromised account.',
        documents: [],
        removalCriteria: [
          'Evidence of unauthorized access (e.g., password, phone number, or email changed without permission).',
          'Account is posting spam or content the owner did not create.',
          'Legitimate owner is locked out of the account.',
        ],
        evidenceRequirements: [
          "Use the 'Find your account' recovery feature.",
          'Provide username, phone number, or email associated with the account to receive a verification code.',
          'If recovery fails, contact TikTok support directly through the feedback form with details of the compromise.',
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
        reference: 'TT-CG-IMPERSONATION',
        policy:
          'Prohibits impersonating individuals or organizations in a deceptive manner. Parody or fan accounts must be clearly stated in the account name or bio.',
        documents: [legalDocuments[1]], // TT-CG
        removalCriteria: [
          "Account uses another's name, bio, or profile picture to mislead others.",
          "The account's intent is to deceive users about its identity.",
          'The account is not clearly marked as a parody or fan page.',
        ],
        evidenceRequirements: [
          'Link to the impersonating profile.',
          'Evidence of your authentic identity (e.g., a photo of your government-issued ID).',
          'Description of how the account is impersonating you or your entity.',
        ],
      },
    ],
  },
];

const generalPolicies = [
  {
    reference: 'TT-TOS-CONTENT',
    policy:
      'Users must have the rights to the content they post and grant TikTok a license to use it. TikTok can remove content that violates its terms or guidelines.',
    documents: [legalDocuments[0]], // TT-TOS
    removalCriteria: [
      'Content violates the Terms of Service or Community Guidelines.',
      "Content infringes on another's intellectual property rights (e.g., copyright, trademark).",
    ],
    evidenceRequirements: [
      'Link to the content.',
      'Description of the specific violation.',
      'For IP claims, submission of a formal copyright or trademark infringement report.',
    ],
  },
];

export const tiktokPolicy: PlatformPolicy = {
  name: 'TikTok',
  legalDocuments,
  contentTypes,
  contentContexts,
  generalPolicies,
  timeframes: {
    response:
      'Varies. TikTok uses automated systems and human moderators to review reports but does not provide a specific public timeframe for a response.',
    removal:
      'For NCII, removal is mandated within 48 hours of a valid request under the TAKE IT DOWN Act. For other violations, removal occurs after a review confirms a violation, with no specific timeframe guaranteed.',
  },
  appealProcess: [
    "Notifications about violations and enforcement actions (e.g., video removal, account strike) are sent to the user's inbox and can be viewed in the 'Account Status' page.",
    "An 'Appeal' option is provided directly within the notification for the specific violation.",
    'Users can submit an appeal for review. If the appeal is successful, the content will be restored and any penalty will be removed.',
    'If an account is banned, the user will receive a banner notification on login with an option to file an appeal.',
    'Appeal decisions are communicated via in-app notification.',
  ],
};
