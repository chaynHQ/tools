import { ContentContext, ContentType, LegalDocument, PlatformPolicy } from './types';

const legalDocuments: LegalDocument[] = [
  {
    reference: 'FB-TOS',
    title: 'Facebook Terms of Service',
    url: 'https://www.facebook.com/legal/terms',
    accessTimestamp: '2025-06-06T00:00:00Z',
    notes:
      'Updates effective January 1, 2025, include stronger language on data scraping and clarify that users grant Meta a license to use content while retaining ownership. The terms require adherence to all platform policies, including the Community Standards.',
  },
  {
    reference: 'META-CS',
    title: 'Meta Community Standards',
    url: 'https://transparency.fb.com/policies/community-standards/',
    accessTimestamp: '2025-06-06T00:00:00Z',
    notes:
      'Unified across Meta platforms (Facebook, Instagram, etc.) on November 12, 2024. These are the core rules governing content and behavior, covering everything from NCII and bullying to impersonation and privacy.',
  },
  {
    reference: 'META-PP',
    title: 'Meta Privacy Policy',
    url: 'https://www.facebook.com/privacy/policy/',
    accessTimestamp: '2025-06-06T00:00:00Z',
    notes:
      'Governs how user data is collected, used, and shared. It is relevant to privacy violations where personal data is exposed.',
  },
  {
    reference: 'FB-HC-Reporting',
    title: 'Facebook Help Center - Reporting & Account Recovery',
    url: 'https://www.facebook.com/help/181495968648557',
    accessTimestamp: '2025-06-06T00:00:00Z',
    notes:
      'Provides practical steps and tools for users to report violations and recover compromised accounts (e.g., via facebook.com/hacked).',
  },
  {
    reference: 'TAKE-IT-DOWN-ACT-2025',
    title: 'TAKE IT DOWN Act of 2025',
    url: 'https://www.congress.gov/bill/118th-congress/house-bill/7891',
    accessTimestamp: '2025-06-06T00:00:00Z',
    notes:
      'A U.S. federal law signed on May 19, 2025. It legally mandates that platforms like Meta remove non-consensual intimate imagery (NCII), including AI-generated deepfakes, within 48 hours of receiving a valid report.',
  },
];

const contentTypes: ContentType[] = [
  {
    type: 'intimate',
    label: 'Intimate images',
    description:
      'Photos or videos of a private, intimate, or sexual nature, including authentic and AI-generated media. This type of content can also be a form of bullying, impersonation, or a privacy violation.',
    policies: [
      {
        reference: 'CS-NCSII',
        policy:
          "Prohibits sharing non-consensual intimate images (NCII), including AI-generated or 'deepfake' content.",
        documents: [legalDocuments[1], legalDocuments[4]], // META-CS, TAKE-IT-DOWN-ACT-2025
        removalCriteria: [
          'Content depicts nudity or sexual activity.',
          'Image/video shared without the consent of the depicted individual.',
          'The content is an authentic or AI-generated intimate depiction.',
          'Subject is identifiable.',
        ],
        evidenceRequirements: [
          'URL(s) of the infringing content.',
          'A statement made in good faith that the content is non-consensual.',
          'Information to identify the victim and locate the content.',
          'Meta also partners with StopNCII.org, which allows potential victims to proactively create digital fingerprints (hashes) of images to prevent their spread.',
        ],
      },
      {
        reference: 'CS-SEXTORTION',
        policy:
          'Prohibits threatening to share intimate images for purposes of extortion or coercion (sextortion).',
        documents: [legalDocuments[1]], // META-CS
        removalCriteria: [
          'Evidence of threats to share intimate content.',
          'Content is being used for extortion or harassment.',
          'Subject identifies themselves as the victim.',
        ],
        evidenceRequirements: [
          'URL(s) of threatening content or messages.',
          'Description of threats or demands made.',
          'Evidence of the intimate content being used for the threat.',
        ],
      },
      {
        reference: 'CS-BULLYING',
        policy:
          'Prohibits bullying and harassment. Sharing intimate images without consent is considered a severe form of bullying.',
        documents: [legalDocuments[1]], // META-CS
        removalCriteria: [
          'Content targets a private individual for abuse.',
          'Content includes degrading or shaming material, such as non-consensual intimate imagery.',
          'The behavior is unwanted and causes severe emotional distress.',
        ],
        evidenceRequirements: [
          'URL(s) of the content.',
          'Description of how the content constitutes targeted harassment.',
          'Information identifying the victim.',
        ],
      },
      {
        reference: 'CS-PRIVACY',
        policy:
          'Prohibits violations of privacy. Sharing intimate media of a person without their consent is a severe privacy violation.',
        documents: [legalDocuments[1], legalDocuments[2]], // META-CS, META-PP
        removalCriteria: [
          'Content consists of private media shared without consent.',
          'The sharing of the content violates a reasonable expectation of privacy.',
        ],
        evidenceRequirements: [
          'URL(s) of the content.',
          "Description of how the content violates the victim's privacy.",
          'Evidence that the media was private and shared without permission.',
        ],
      },
      {
        reference: 'FB-TOS-IP',
        policy:
          'Prohibits copyright infringement. If the intimate image was created and owned by someone else (e.g., a photographer, or the victim themself), its unauthorized use is a copyright violation.',
        documents: [legalDocuments[0]], // FB-TOS
        removalCriteria: [
          "Content is an original work (photo, video) posted without the copyright owner's permission.",
        ],
        evidenceRequirements: [
          'A formal DMCA takedown notice.',
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
        reference: 'CS-BULLYING',
        policy:
          'Prohibits bullying and harassment, which includes posting content to mock, humiliate, or direct abuse at a private individual.',
        documents: [legalDocuments[1]], // META-CS
        removalCriteria: [
          'Content targets a private individual for abuse.',
          'Content includes abusive language, calls for harassment, or degrading comments.',
          'The behavior is unwanted and repeated.',
        ],
        evidenceRequirements: [
          'URL(s) of the content (posts, comments, messages).',
          'Description of how the content constitutes targeted harassment.',
          'Information identifying the victim.',
        ],
      },
      {
        reference: 'CS-PRIVACY',
        policy:
          'Prohibits sharing personally identifiable information (PII) to harass or blackmail (doxing). Harassing content often includes or leads to privacy violations.',
        documents: [legalDocuments[1], legalDocuments[2]], // META-CS, META-PP
        removalCriteria: [
          'Content contains PII (e.g., phone number, address) used maliciously.',
          'Information is shared without consent and is intended to harass or incite harassment.',
          'Content is used for doxing or blackmail.',
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
        reference: 'CS-PRIVACY',
        policy:
          'Prohibits sharing personally identifiable information (PII) without consent, especially to harass or blackmail (doxing).',
        documents: [legalDocuments[1], legalDocuments[2]], // META-CS, META-PP
        removalCriteria: [
          'Content reveals private information like residential addresses, personal phone numbers, financial info, or medical records.',
          'Information is shared without authorization and with malicious intent.',
          'The act of sharing violates a reasonable expectation of privacy.',
        ],
        evidenceRequirements: [
          'URL(s) of the content.',
          'Description of the private information exposed.',
          'Identification of the specific PII that was shared.',
        ],
      },
      {
        reference: 'CS-BULLYING',
        policy:
          'Prohibits bullying and harassment. Doxing is considered a form of severe harassment intended to intimidate and endanger an individual.',
        documents: [legalDocuments[1]], // META-CS
        removalCriteria: [
          'Content targets a private individual for abuse by exposing their private information.',
          'The intent is to incite harassment, cause fear, or silence the victim.',
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
        reference: 'FB-HC-HACKED',
        policy:
          'Provides a process to report and recover compromised accounts via facebook.com/hacked.',
        documents: [legalDocuments[3]], // FB-HC-Reporting
        removalCriteria: [
          'Evidence of unauthorized access or activity.',
          'The legitimate owner is locked out of the account.',
          'The account is posting spam or malicious content.',
        ],
        evidenceRequirements: [
          'Account details (email, phone number).',
          'Access to a previously linked email or phone number to receive a recovery code.',
          'If other methods fail, submission of a government ID may be required to prove ownership.',
        ],
      },
      {
        reference: 'META-CS-ALL',
        policy:
          'All content must adhere to the full scope of the Community Standards. Content posted from a hacked account is still subject to removal if it violates any rule.',
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
        reference: 'CS-IMPERSONATION',
        policy:
          'Prohibits impersonating others, including individuals and organizations, with an intent to deceive.',
        documents: [legalDocuments[1]], // META-CS
        removalCriteria: [
          'Account uses name, photos, or other identifying information without authorization.',
          'The profile or page is intended to mislead or deceive others.',
          'The account is not clearly marked as a parody or fan account.',
        ],
        evidenceRequirements: [
          'URL of the impersonating profile or page.',
          'Proof of identity (e.g., government ID for a person, business documents for an organization).',
          'Description of the impersonation.',
        ],
      },
      {
        reference: 'CS-BULLYING',
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
        reference: 'CS-NCSII',
        policy:
          'Prohibits sharing non-consensual intimate images. An impersonating account might be created specifically to share such content.',
        documents: [legalDocuments[1], legalDocuments[4]], // META-CS, TAKE-IT-DOWN-ACT-2025
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
    reference: 'FB-TOS-CONTENT',
    policy:
      'Users grant Meta a license to use their content but retain ownership. Meta can remove any content that violates its Terms of Service.',
    documents: [legalDocuments[0]], // FB-TOS
    removalCriteria: [
      'Content violates any policy within the Terms of Service.',
      'Content infringes on intellectual property rights.',
      'Content is illegal or violates other platform policies.',
    ],
    evidenceRequirements: [
      'URL(s) of the content.',
      'Description of the specific violation.',
      'Evidence of ownership or rights, if applicable.',
    ],
  },
  {
    reference: 'META-CS-ALL',
    policy:
      'All content must adhere to the full scope of the Community Standards. This is a catch-all policy for any violation not covered by a more specific rule.',
    documents: [legalDocuments[1]], // META-CS
    removalCriteria: [
      'Content violates any Community Standard, such as those against hate speech, violence, or scams.',
      'Content poses a risk to platform or user safety.',
    ],
    evidenceRequirements: [
      'URL(s) of the content.',
      'Identification of the specific Community Standard violated.',
      'Description of the violation.',
    ],
  },
];

export const facebookPolicy: PlatformPolicy = {
  name: 'Facebook (Meta)',
  legalDocuments,
  contentTypes,
  contentContexts,
  generalPolicies,
  timeframes: {
    response:
      'Varies; aims to review reports as quickly as possible, with priority given to severe harms like NCII and imminent threats.',
    removal:
      'For NCII, removal is mandated within 48 hours of a valid request under the TAKE IT DOWN Act. For other violations, removal typically follows quickly after a violation is confirmed, but no specific timeframe is publicly guaranteed.',
  },
  appealProcess: [
    "A notification of the content decision is sent to the user's Support Inbox.",
    "Users must first appeal the decision internally through a 'Request Review' or similar option provided in the notification.",
    'If the internal appeal is unsuccessful, users may be eligible to appeal the decision to the independent Oversight Board.',
    'An appeal to the Oversight Board requires a reference ID provided by Meta after its final decision.',
    "The Oversight Board can make binding decisions to uphold or overturn Meta's original ruling, unless doing so would violate the law.",
  ],
};
