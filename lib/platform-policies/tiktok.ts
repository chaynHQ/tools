import { ContentContext, ContentType, LegalDocument, PlatformPolicy } from '../../types/policies';

const legalDocuments: LegalDocument[] = [
  {
    reference: 'TT-TOS',
    title: 'Terms of Service',
    url: 'https://www.tiktok.com/legal/page/us/terms-of-service/en',
    accessTimestamp: '2025-06-06T00:00:00Z',
    notes:
      'The foundational legal agreement that requires users to comply with the Community Guidelines and outlines rules for content ownership and intellectual property (copyright).',
  },
  {
    reference: 'TT-CG',
    title: 'Community Guidelines',
    url: 'https://www.tiktok.com/community-guidelines/en/',
    accessTimestamp: '2025-06-06T00:00:00Z',
    notes:
      'A major update took effect on May 17, 2025. This is the core rulebook for all content and behavior, with specific, detailed sections on NCII, AI, harassment, privacy, and impersonation.',
  },
  {
    reference: 'TT-PP',
    title: 'Privacy Policy',
    url: 'https://www.tiktok.com/legal/page/us/privacy-policy/en',
    accessTimestamp: '2025-06-06T00:00:00Z',
    notes:
      'Governs how user data is collected and used. It is directly relevant to violations involving the exposure of private information (doxing).',
  },
  {
    reference: 'TAKE-IT-DOWN-ACT-2025',
    title: 'TAKE IT DOWN Act of 2025',
    url: 'https://www.congress.gov/bill/118th-congress/house-bill/7891',
    accessTimestamp: '2025-06-06T00:00:00Z',
    notes:
      'A U.S. federal law signed on May 19, 2025. It legally mandates that platforms like TikTok remove non-consensual intimate imagery (NCII), including AI-generated deepfakes, within 48 hours of a valid report.',
  },
];

const contentTypes: ContentType[] = [
  {
    type: 'intimate',
    label: 'Intimate images',
    description:
      'Photos or videos of a private or sexual nature. This severe violation can simultaneously breach rules on consent, AI, harassment, privacy, and copyright.',
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
          'TikTok partners with StopNCII.org to help prevent the spread of intimate images.',
        ],
      },
      {
        reference: 'TT-CG-AI',
        policy:
          'Prohibits using AI to create non-consensual intimate imagery. Requires labeling for other realistic AI content.',
        documents: [legalDocuments[1]], // TT-CG
        removalCriteria: [
          'AI-generated content is used to create a deepfake for NCII.',
          "Other realistic manipulated media is not clearly disclosed using a label like 'AI-generated'.",
        ],
        evidenceRequirements: [
          'Link to the video.',
          'Description of how the content is a deepfake or violates policy.',
        ],
      },
      {
        reference: 'TT-CG-HARASSMENT',
        policy:
          'Prohibits bullying and harassment. Sharing intimate images of someone without their consent is considered a form of severe harassment.',
        documents: [legalDocuments[1]], // TT-CG
        removalCriteria: [
          'Content targets a private individual for abuse or degradation.',
          'Content includes shaming material, such as non-consensual intimate imagery.',
        ],
        evidenceRequirements: [
          'Link to the harassing content.',
          'Description of the harassment and its targeted nature.',
        ],
      },
      {
        reference: 'TT-CG-PRIVACY',
        policy:
          "Prohibits violations of privacy. Sharing someone's private, intimate media without their consent is a fundamental breach of privacy.",
        documents: [legalDocuments[1], legalDocuments[2]], // TT-CG, TT-PP
        removalCriteria: [
          'Content consists of private media shared without consent.',
          'The sharing of the content violates a reasonable expectation of privacy.',
        ],
        evidenceRequirements: [
          'Link to the content containing private media.',
          'Description of the privacy violation.',
        ],
      },
      {
        reference: 'TT-TOS-IP',
        policy:
          'Prohibits copyright infringement. If the intimate image was created and owned by the victim or a photographer, its unauthorized posting is a copyright violation.',
        documents: [legalDocuments[0]], // TT-TOS
        removalCriteria: [
          "Content is an original work (photo, video) posted without the copyright owner's permission.",
        ],
        evidenceRequirements: [
          "A formal copyright infringement report submitted through TikTok's IP form.",
          'Proof of original ownership of the content.',
          'URL(s) of the infringing content.',
        ],
      },
    ],
  },
  {
    type: 'personal',
    label: 'Personal content for harassment',
    description:
      'Non-intimate photos, videos, or text shared to bully or harass someone. This can overlap with privacy violations if the content includes personal data.',
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
      {
        reference: 'TT-CG-PRIVACY',
        policy:
          'Prohibits sharing personally identifiable information (PII) to harass someone. Harassing content often includes or leads to privacy violations.',
        documents: [legalDocuments[1], legalDocuments[2]], // TT-CG, TT-PP
        removalCriteria: [
          'Content reveals private, personal, or identifying information to enable harassment.',
          "Information is shared without the subject's consent.",
        ],
        evidenceRequirements: [
          'Link to the content containing PII.',
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
        reference: 'TT-CG-PRIVACY',
        policy:
          'Prohibits sharing personally identifiable information (PII) without consent, a practice known as doxing.',
        documents: [legalDocuments[1], legalDocuments[2]], // TT-CG, TT-PP
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
      {
        reference: 'TT-CG-HARASSMENT',
        policy:
          'Prohibits bullying and harassment. Doxing is considered a form of severe harassment intended to intimidate, endanger, or silence an individual.',
        documents: [legalDocuments[1]], // TT-CG
        removalCriteria: [
          'Content targets a private individual for abuse by exposing their private information.',
          'The intent is to incite harassment or cause fear.',
        ],
        evidenceRequirements: [
          'Link to the content.',
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
      {
        reference: 'TT-CG-ALL',
        policy:
          'All content must adhere to the Community Guidelines. Content posted from a hacked account is still subject to removal if it violates any rule.',
        documents: [legalDocuments[1]], // TT-CG
        removalCriteria: [
          'Content posted by the unauthorized user violates any Community Guideline (e.g., spam, scams, harassment, NCII).',
        ],
        evidenceRequirements: [
          'Once account access is restored, report the specific content through the standard in-app reporting flows.',
          'Link to the violating content.',
          'Identification of the specific Community Guideline violated.',
        ],
      },
    ],
  },
  {
    context: 'impersonation',
    label: 'Someone is impersonating me',
    description:
      'An account is pretending to be you or another entity. This is often a tool for other violations like harassment, fraud, or copyright infringement.',
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
      {
        reference: 'TT-CG-HARASSMENT',
        policy:
          'Prohibits bullying and harassment. Impersonation is often used as a tool to harass the person being impersonated or to deceive and harass others.',
        documents: [legalDocuments[1]], // TT-CG
        removalCriteria: [
          'The impersonating account is being used to send abusive messages or post harassing content.',
        ],
        evidenceRequirements: [
          'Link to the impersonating account and the harassing content.',
          'Description of the harassment.',
        ],
      },
      {
        reference: 'TT-TOS-IP',
        policy:
          'Prohibits copyright infringement. Impersonators often steal and re-upload the content of the person they are impersonating.',
        documents: [legalDocuments[0]], // TT-TOS
        removalCriteria: [
          'The impersonating account is posting content to which you own the copyright.',
        ],
        evidenceRequirements: [
          'A formal copyright infringement report.',
          'Proof of original ownership of the content.',
          "URL(s) of the infringing content on the impersonator's page.",
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
