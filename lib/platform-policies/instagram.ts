import { ContentContext, ContentType, LegalDocument, PlatformPolicy } from '../../types/policies';

const legalDocuments: LegalDocument[] = [
  {
    reference: 'IG-TOU',
    title: 'Instagram Terms of Use',
    url: 'https://help.instagram.com/581066165581870',
    accessTimestamp: '2025-06-06T00:00:00Z',
    notes:
      'Terms updated effective January 1, 2025. They require all users to comply with the Meta Community Standards and grant Instagram a license to use content posted on the platform.',
  },
  {
    reference: 'META-CS',
    title: 'Meta Community Standards',
    url: 'https://transparency.fb.com/policies/community-standards/',
    accessTimestamp: '2025-06-06T00:00:00Z',
    notes:
      'As of November 12, 2024, these unified standards replaced the separate Instagram Community Guidelines. They are the primary rulebook for all content on Instagram, covering NCII, bullying, impersonation, and more.',
  },
  {
    reference: 'META-PP',
    title: 'Meta Privacy Policy',
    url: 'https://privacycenter.instagram.com/policy',
    accessTimestamp: '2025-06-06T00:00:00Z',
    notes:
      'Governs how Meta handles user data across its products, including Instagram. It is directly relevant to violations involving the exposure of private information.',
  },
  {
    reference: 'TAKE-IT-DOWN-ACT-2025',
    title: 'TAKE IT DOWN Act of 2025',
    url: 'https://www.congress.gov/bill/118th-congress/house-bill/7891',
    accessTimestamp: '2025-06-06T00:00:00Z',
    notes:
      'A U.S. federal law signed on May 19, 2025. It legally mandates that platforms like Instagram remove non-consensual intimate imagery (NCII), including AI-generated deepfakes, within 48 hours of a valid report.',
  },
];

const contentTypes: ContentType[] = [
  {
    type: 'intimate',
    label: 'Intimate images',
    description:
      'Photos or videos of a private, intimate, or sexual nature, including authentic and AI-generated media. This is a severe violation that overlaps with bullying, privacy, and copyright rules.',
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
          'Meta partners with StopNCII.org to proactively block intimate images from being shared.',
        ],
      },
      {
        reference: 'META-CS-BULLYING',
        policy:
          'Prohibits bullying and harassment. Sharing intimate images of someone without their consent is considered a severe form of bullying.',
        documents: [legalDocuments[1]], // META-CS
        removalCriteria: [
          'Content targets a private individual for abuse or degradation.',
          'Content includes shaming material, such as non-consensual intimate imagery.',
        ],
        evidenceRequirements: [
          'URL(s) of the content.',
          'Description of how the content constitutes targeted harassment.',
          'Information identifying the victim.',
        ],
      },
      {
        reference: 'META-CS-PRIVACY',
        policy:
          "Prohibits violations of privacy. Sharing someone's private, intimate media without their consent is a fundamental breach of privacy.",
        documents: [legalDocuments[1], legalDocuments[2]], // META-CS, META-PP
        removalCriteria: [
          'Content consists of private media shared without consent.',
          'The sharing of the content violates a reasonable expectation of privacy.',
        ],
        evidenceRequirements: [
          'URL(s) of the content.',
          "Description of how the content violates the victim's privacy.",
        ],
      },
      {
        reference: 'IG-TOU-IP',
        policy:
          'Prohibits copyright infringement. If the intimate image was created and owned by the victim or a photographer, its unauthorized posting is a copyright violation.',
        documents: [legalDocuments[0]], // IG-TOU
        removalCriteria: [
          "Content is an original work (photo, video) posted without the copyright owner's permission.",
        ],
        evidenceRequirements: [
          "A formal DMCA takedown notice submitted through Instagram's copyright form.",
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
        reference: 'META-CS-BULLYING',
        policy:
          'Prohibits targeted harassment, bullying, and threats, which can include posting personal content without consent to degrade or shame an individual.',
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
      {
        reference: 'META-CS-PRIVACY',
        policy:
          'Prohibits sharing personally identifiable information (PII) to harass or blackmail (doxing). Harassing content often includes or leads to privacy violations.',
        documents: [legalDocuments[1], legalDocuments[2]], // META-CS, META-PP
        removalCriteria: [
          'Content contains PII used maliciously.',
          'Information is shared without consent and is intended to harass or incite harassment.',
        ],
        evidenceRequirements: [
          'URL(s) of the content.',
          'Description of how privacy was violated.',
          'Identification of the specific PII that was shared.',
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
        reference: 'META-CS-PRIVACY',
        policy:
          'Prohibits sharing Personally Identifiable Information (PII) without consent to harass or threaten, a practice known as doxing.',
        documents: [legalDocuments[1], legalDocuments[2]], // META-CS, META-PP
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
      {
        reference: 'META-CS-BULLYING',
        policy:
          'Prohibits bullying and harassment. Doxing is considered a form of severe harassment intended to intimidate, endanger, or silence an individual.',
        documents: [legalDocuments[1]], // META-CS
        removalCriteria: [
          'Content targets a private individual for abuse by exposing their private information.',
          'The intent is to incite harassment or cause fear.',
        ],
        evidenceRequirements: [
          'URL(s) of the content.',
          'Description of how the doxing is being used to harass or threaten.',
          'Information identifying the victim.',
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
      {
        reference: 'META-CS-ALL',
        policy:
          'All content must adhere to the full scope of the unified Meta Community Standards. Content posted from a hacked account is still subject to removal if it violates any rule.',
        documents: [legalDocuments[1]], // META-CS
        removalCriteria: [
          'Content posted by the unauthorized user violates any Community Standard (e.g., spam, scams, harassment, NCII).',
        ],
        evidenceRequirements: [
          'Once account access is restored, report the specific content through the standard reporting flows.',
          'URL(s) of the violating content.',
          'Identification of the specific Community Standard violated.',
        ],
      },
    ],
  },
  {
    context: 'impersonation',
    label: 'Someone is impersonating me',
    description:
      'An account is pretending to be you or your organization. The content posted by this account may also violate other policies like harassment or NCII.',
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
      {
        reference: 'META-CS-BULLYING',
        policy:
          'Prohibits bullying and harassment. Impersonation is often used as a tool to harass the person being impersonated or to deceive and harass others.',
        documents: [legalDocuments[1]], // META-CS
        removalCriteria: [
          'The impersonating account is being used to send abusive messages or post harassing content.',
        ],
        evidenceRequirements: [
          'URL(s) of the impersonating account and the harassing content.',
          'Description of the harassment.',
        ],
      },
      {
        reference: 'META-CS-NCSII',
        policy:
          'Prohibits sharing non-consensual intimate images. An impersonating account might be created specifically to share such content.',
        documents: [legalDocuments[1], legalDocuments[3]], // META-CS, TAKE-IT-DOWN-ACT-2025
        removalCriteria: [
          'The impersonating account has posted intimate images or videos of someone without their consent.',
        ],
        evidenceRequirements: [
          'URL(s) of the infringing content.',
          'A statement that the content is non-consensual.',
          'Evidence of your identity to prove both impersonation and that you are the victim.',
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
    policy:
      'All content must adhere to the full scope of the unified Meta Community Standards. This is a catch-all policy for any violation not covered by a more specific rule.',
    documents: [legalDocuments[1]], // META-CS
    removalCriteria: [
      'Content violates any Community Standard (e.g., hate speech, violence, scams).',
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
  name: 'Instagram',
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
