import { ContentContext, ContentType, LegalDocument, PlatformPolicy } from './types';

const legalDocuments: LegalDocument[] = [
  {
    reference: 'PH-TOS',
    title: 'Pornhub Terms of Service',
    url: 'https://www.pornhub.com/information/terms',
    accessTimestamp: '2025-06-06T00:00:00Z',
    notes:
      "The foundational legal agreement. It prohibits illegal content, requires all uploaders to be verified, and contains the platform's DMCA/copyright policy.",
  },
  {
    reference: 'PH-PP',
    title: 'Pornhub Privacy Policy',
    url: 'https://www.pornhub.com/information/privacy',
    accessTimestamp: '2025-06-06T00:00:00Z',
    notes:
      'Outlines data collection practices, including the personal information required for the mandatory Uploader Verification System. Relevant to doxing and privacy violations.',
  },
  {
    reference: 'PH-CONTENT-POLICY',
    title: 'Pornhub Trust and Safety Policy',
    url: 'https://www.pornhub.com/information/trust-and-safety',
    accessTimestamp: '2025-06-06T00:00:00Z',
    notes:
      "Details the platform's core safety measures, including its zero-tolerance policy for illegal content, the Uploader Verification System, and the process for content removal.",
  },
  {
    reference: 'TAKE-IT-DOWN-ACT-2025',
    title: 'TAKE IT DOWN Act of 2025',
    url: 'https://www.congress.gov/bill/118th-congress/house-bill/7891',
    accessTimestamp: '2025-06-06T00:00:00Z',
    notes:
      'A U.S. federal law signed on May 19, 2025. It legally mandates that platforms like Pornhub remove non-consensual intimate imagery (NCII), including AI-generated deepfakes, within 48 hours of a valid report.',
  },
];

const contentTypes: ContentType[] = [
  {
    type: 'intimate',
    label: 'Intimate images',
    description:
      'Photos or videos of a private or sexual nature. On Pornhub, this violation can simultaneously breach rules on consent, copyright, privacy, and AI.',
    policies: [
      {
        reference: 'PH-POLICY-NCSII',
        policy:
          'Maintains a zero-tolerance policy for non-consensual content. Provides a dedicated Content Removal Request Form for anyone to request the removal of content depicting them for any reason.',
        documents: [legalDocuments[0], legalDocuments[2], legalDocuments[3]], // PH-TOS, PH-CONTENT-POLICY, TAKE-IT-DOWN-ACT-2025
        removalCriteria: [
          'Content is identified as non-consensual.',
          'A person depicted in the content requests its removal via the official form.',
          'The uploader cannot provide proof of consent for all depicted individuals.',
        ],
        evidenceRequirements: [
          'URL(s) of the infringing content.',
          "Use the dedicated 'Content Removal Request Form' available on the site.",
          'Provide information to identify yourself as the person in the video or as an authorized representative.',
        ],
      },
      {
        reference: 'PH-TOS-COPYRIGHT',
        policy:
          "Prohibits copyright infringement. If an intimate video is stolen from another creator or posted without the owner's permission, it can be removed via a DMCA notice.",
        documents: [legalDocuments[0]], // PH-TOS
        removalCriteria: [
          "Content is an original work posted without the copyright owner's permission.",
        ],
        evidenceRequirements: [
          'A formal DMCA Takedown Notice submitted through the process outlined on the site.',
          'Proof of original ownership of the content.',
          'URL(s) of the infringing content.',
        ],
      },
      {
        reference: 'PH-POLICY-AI',
        policy:
          "Prohibits AI-generated 'deepfake' videos that impersonate real individuals without their explicit, documented consent.",
        documents: [legalDocuments[0], legalDocuments[2]], // PH-TOS, PH-CONTENT-POLICY
        removalCriteria: [
          'Content is an AI-generated deepfake of an identifiable real person.',
          'The depicted person has not provided explicit consent for the creation and distribution of the content.',
        ],
        evidenceRequirements: [
          'URL(s) of the content.',
          'Evidence that the content is a deepfake and that the person depicted did not consent.',
          'Reporting is done through the Content Removal Request Form.',
        ],
      },
      {
        reference: 'PH-TOS-PRIVACY',
        policy:
          'Prohibits the violation of privacy. Sharing intimate content without consent is a severe privacy violation.',
        documents: [legalDocuments[0], legalDocuments[1]], // PH-TOS, PH-PP
        removalCriteria: [
          'Content consists of private media shared without consent.',
          'The sharing violates a reasonable expectation of privacy.',
        ],
        evidenceRequirements: [
          'URL(s) of the content.',
          'Description of the privacy violation submitted via the Content Removal Request Form.',
        ],
      },
    ],
  },
  {
    type: 'personal',
    label: 'Personal content for harassment',
    description:
      'Non-intimate content is not a primary use case, but harassment in comments and messages is prohibited.',
    policies: [
      {
        reference: 'PH-TOS-HARASSMENT',
        policy:
          'Prohibits harassment, threats, and hate speech in comments and other interactions on the platform.',
        documents: [legalDocuments[0]], // PH-TOS
        removalCriteria: [
          'Comments or messages contain targeted harassment, abuse, or threats.',
          'Content promotes hate speech against protected groups.',
        ],
        evidenceRequirements: [
          'URL(s) of the video where comments appear or the user profile sending messages.',
          'Screenshots of the harassing comments or messages.',
          'Use the reporting flag available on all videos and comments.',
        ],
      },
    ],
  },
  {
    type: 'private',
    label: 'Private information (Doxing)',
    description:
      'Sharing personal documents or identifying details in video titles, descriptions, or comments. This is a form of harassment.',
    policies: [
      {
        reference: 'PH-TOS-PRIVACY',
        policy:
          'Prohibits the violation of privacy, including the unauthorized publication of personally identifiable information (doxing).',
        documents: [legalDocuments[0], legalDocuments[1]], // PH-TOS, PH-PP
        removalCriteria: [
          'Content (video, comments, etc.) reveals private information without consent.',
          'The information poses a privacy or security risk to an individual.',
        ],
        evidenceRequirements: [
          'URL(s) of the content containing private information.',
          'Description of the private information exposed.',
          'Reporting is done through the standard content removal process or flagging.',
        ],
      },
      {
        reference: 'PH-TOS-HARASSMENT',
        policy:
          'Prohibits harassment. Doxing is considered a form of harassment intended to intimidate and endanger.',
        documents: [legalDocuments[0]], // PH-TOS
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
        reference: 'PH-TOS-SECURITY',
        policy:
          'Users are responsible for their account security. If an account is compromised, the user should contact support immediately to secure the account and report unauthorized activity.',
        documents: [legalDocuments[0]], // PH-TOS
        removalCriteria: [
          'Evidence of unauthorized access or activity.',
          'The account is being used to upload content that violates platform policies.',
          'The legitimate owner is locked out of their account.',
        ],
        evidenceRequirements: [
          'Contact Pornhub support with the account username and email.',
          'Provide a description of the unauthorized activity.',
          'Evidence of account ownership may be required for recovery.',
        ],
      },
      {
        reference: 'PH-TOS-CONTENT',
        policy:
          'All content, even that posted by an unauthorized user, must adhere to the Terms of Service and will be removed if it is found to be in violation.',
        documents: [legalDocuments[0]], // PH-TOS
        removalCriteria: [
          'Content posted from the compromised account violates any rule (e.g., non-consensual, copyright infringement).',
        ],
        evidenceRequirements: [
          'After recovering the account, report any violating content through the standard reporting channels (Content Removal Form, DMCA notice).',
          'URL(s) of the content.',
        ],
      },
    ],
  },
  {
    context: 'impersonation',
    label: 'Someone is impersonating me',
    description:
      'An account is pretending to be you or another entity. This is a severe violation that often overlaps with copyright infringement and non-consensual content.',
    policies: [
      {
        reference: 'PH-POLICY-IMPERSONATION',
        policy:
          'Prohibits impersonation. This is primarily enforced through the mandatory Uploader Verification System, which requires all uploaders to prove their identity.',
        documents: [legalDocuments[0], legalDocuments[2]], // PH-TOS, PH-CONTENT-POLICY
        removalCriteria: [
          'An account is found to be impersonating a real person.',
          'An uploader is found to have used fraudulent documents during verification.',
          'An account is proven to be operated by someone other than the verified individual.',
        ],
        evidenceRequirements: [
          'All uploaders must be verified with government-issued ID.',
          'To report impersonation, use the Content Removal Request Form.',
          'Provide the URL of the impersonating content/profile and evidence of your own identity.',
        ],
      },
      {
        reference: 'PH-TOS-COPYRIGHT',
        policy:
          "Prohibits copyright infringement. Impersonation on Pornhub most often involves creating a fake account to upload another creator's stolen videos.",
        documents: [legalDocuments[0]], // PH-TOS
        removalCriteria: [
          'The impersonating account is posting content to which you own the copyright.',
        ],
        evidenceRequirements: [
          'File a formal DMCA Takedown Notice through the process outlined on the site.',
          'Proof of original ownership of the content.',
          "URL(s) of the infringing content on the impersonator's page.",
        ],
      },
      {
        reference: 'PH-POLICY-NCSII',
        policy:
          'Prohibits non-consensual content. An impersonating account could be used to upload NCII of the person being impersonated.',
        documents: [legalDocuments[0], legalDocuments[2], legalDocuments[3]], // PH-TOS, PH-CONTENT-POLICY, TAKE-IT-DOWN-ACT-2025
        removalCriteria: [
          'The impersonating account has posted intimate content of you without your consent.',
        ],
        evidenceRequirements: [
          'Use the Content Removal Request Form.',
          'Provide the URL(s) of the content and evidence of your identity.',
        ],
      },
    ],
  },
];

const generalPolicies = [
  {
    reference: 'PH-TOS-CONTENT',
    policy:
      'All content uploaded must be owned by the verified uploader or they must have explicit, documented rights from the copyright holder. Re-uploading content from other creators is prohibited.',
    documents: [legalDocuments[0]], // PH-TOS
    removalCriteria: [
      "Content violates Pornhub's Terms of Service.",
      "Content infringes on another person's copyright (DMCA).",
    ],
    evidenceRequirements: [
      'URL(s) of the infringing content.',
      'For copyright claims, file a formal DMCA Takedown Notice through the process outlined on the site.',
      'Evidence of original ownership of the content.',
    ],
  },
];

export const pornhubPolicy: PlatformPolicy = {
  name: 'Pornhub',
  legalDocuments,
  contentTypes,
  contentContexts,
  generalPolicies,
  timeframes: {
    response:
      'Varies. The platform aims to review reports from its dedicated removal form within 24-48 hours.',
    removal:
      'For NCII, removal is mandated within 48 hours of a valid request under the TAKE IT DOWN Act. For other confirmed violations, removal typically occurs promptly after review.',
  },
  appealProcess: [
    'If content is removed or an account is terminated, a notification is typically sent via email.',
    'Uploaders can appeal a decision by contacting support and providing the content URL and a reason for the appeal.',
    'The appeal is reviewed by the Trust and Safety team.',
    'The final decision is communicated back to the user via email.',
  ],
};
