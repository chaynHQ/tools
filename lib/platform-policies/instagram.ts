import { ContentContext, ContentType, LegalDocument, PlatformPolicy } from './types';

const legalDocuments: LegalDocument[] = [
  {
    reference: 'IG-TOU',
    title: 'Instagram Terms of Use',
    url: 'https://help.instagram.com/581066165581870',
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
    url: 'https://privacycenter.instagram.com/policy',
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
      'Photos or videos of a private, intimate, or sexual nature, including authentic and AI-generated media.',
    policies: [
      {
        reference: 'META-CS-NCSII',
        policy:
          "Prohibits sharing non-consensual intimate images (NCII), including AI-generated or 'deepfake' content, and threatening to share them (sextortion).",
        documents: [legalDocuments[1], legalDocuments[3]], // META-CS, TAKE-IT-DOWN-ACT-2025
        removalCriteria: [
          'Content depicts nudity or sexual activity.',
          'Image/video is shared without the consent of the depicted individual.',
          'The content is an authentic or AI-generated intimate depiction.',
          'A threat to share intimate media exists.',
        ],
        evidenceRequirements: [
          'URL(s) of the infringing content or threatening messages.',
          'A statement made in good faith that the content is non-consensual.',
          'Information to identify the victim and locate the content.',
          'Meta partners with StopNCII.org and TakeItDown.NCMEC.org to proactively block intimate images from being shared.',
        ],
      },
    ],
  },
  {
    type: 'personal',
    label: 'Personal content',
    description:
      'Non-intimate photos or videos shared without permission for purposes of harassment.',
    policies: [
      {
        reference: 'META-CS-BULLYING',
        policy:
          'Prohibits targeted harassment, bullying, and threats, which can include the posting of personal content without consent to degrade or shame an individual.',
        documents: [legalDocuments[1]], // META-CS
        removalCriteria: [
          'Content is used to target an individual with unwanted and harassing contact.',
          'Content contains degrading or shaming material about a private individual.',
        ],
        evidenceRequirements: [
          'Link to harassing content (posts, comments, DMs).',
          'Description of the harassment and its targeted nature.',
          'Information identifying the victim.',
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
        reference: 'META-CS-PRIVACY',
        policy:
          'Prohibits sharing Personally Identifiable Information (PII) without consent to harass or threaten, a practice known as doxing.',
        documents: [legalDocuments[1]], // META-CS
        removalCriteria: [
          'Content reveals private information (e.g., home address, personal phone number, financial information) without consent.',
          'Information is shared with malicious or harassing intent.',
          'The sharing of information poses a privacy or security risk to an individual.',
        ],
        evidenceRequirements: [
          'Link to content containing PII.',
          'Description of the private information exposed.',
          'Evidence of the privacy violation and its impact.',
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
        reference: 'IG-HC-HACKED',
        policy:
          'Provides a centralized process to report and recover compromised accounts via instagram.com/hacked.',
        documents: [],
        removalCriteria: [
          'Evidence of unauthorized access (e.g., changed username, password, or email).',
          'Suspicious account activity, such as posts or messages not made by the owner.',
          'The legitimate owner is locked out of the account.',
        ],
        evidenceRequirements: [
          'Access to a previously linked email or phone number to receive a recovery code.',
          'If standard recovery fails, users may be asked to verify their identity via a selfie video to confirm ownership.',
          'For some users, paid Meta Verified support offers a faster channel for recovery assistance.',
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
        reference: 'META-CS-IMPERSONATION',
        policy:
          'Prohibits impersonating others (individuals, organizations) with an intent to deceive or mislead.',
        documents: [legalDocuments[1]], // META-CS
        removalCriteria: [
          "Account uses another's name, photos, or other identifying information without authorization.",
          'The profile is intended to mislead or deceive others about who is behind it.',
          'The account is not clearly marked as a parody or fan account.',
        ],
        evidenceRequirements: [
          'URL of the impersonating profile.',
          'Proof of identity, such as a government-issued ID for a person or business documents for an organization.',
          'Description of how the account is impersonating you or your entity.',
        ],
      },
    ],
  },
];

const generalPolicies = [
  {
    reference: 'IG-TOU-CONTENT',
    policy:
      'Users grant Instagram a license to use their content but retain ownership. Instagram can remove any content that violates its Terms of Use or Community Standards.',
    documents: [legalDocuments[0]], // IG-TOU
    removalCriteria: [
      'Content violates any part of the Terms of Use.',
      'Content infringes on intellectual property rights.',
      'Content is illegal or violates other platform policies.',
    ],
    evidenceRequirements: [
      'Link to the content.',
      'Description of the specific violation.',
      'Evidence of ownership or rights, if applicable.',
    ],
  },
  {
    reference: 'META-CS-ALL',
    policy: 'All content must adhere to the full scope of the unified Meta Community Standards.',
    documents: [legalDocuments[1]], // META-CS
    removalCriteria: [
      'Content violates any Community Standard (e.g., hate speech, violence, bullying).',
      'Content poses a risk to platform or user safety.',
    ],
    evidenceRequirements: [
      'Link to the content.',
      'Identification of the specific Community Standard that was violated.',
      'Description of the violation.',
    ],
  },
];

export const instagramPolicy: PlatformPolicy = {
  name: 'Instagram (Meta)',
  legalDocuments,
  contentTypes,
  contentContexts,
  generalPolicies,
  timeframes: {
    response:
      'Varies; aims to review reports efficiently, with priority given to severe harms like NCII.',
    removal:
      'For NCII, removal is mandated within 48 hours of a valid request under the TAKE IT DOWN Act. For other violations, removal typically occurs promptly after a violation is confirmed, but no specific timeframe is publicly guaranteed.',
  },
  appealProcess: [
    "A notification of the content decision is sent via in-app notification in 'Support Requests'.",
    "Users must first appeal the decision internally by selecting the 'Request a Review' option.",
    'If the internal review is unsuccessful, the user may be eligible to appeal the decision to the independent Oversight Board.',
    'An appeal to the Oversight Board requires a reference ID provided by Meta in the Support Requests inbox after its final decision.',
    "The Oversight Board's decisions are binding, and Meta will reverse its original decision unless doing so would violate the law.",
  ],
};
