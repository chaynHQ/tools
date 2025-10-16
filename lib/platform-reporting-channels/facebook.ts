import { PlatformReportingChannels } from '@/types/platforms';

export const facebookReportingChannels: PlatformReportingChannels = {
  platform: 'Facebook',
  channels: [
    {
      channelType: 'Form',
      isDMCA: false,
      isDefault: false,
      officialPurpose: 'To report non-consensual intimate images (NCII).',
      justification:
        "This is Meta's dedicated and most effective channel for NCII takedowns. Submissions through this form are routed directly to a specialized human review team for expedited action, often utilizing hashing technology (PhotoDNA) to prevent re-uploads across platforms. This is the mandatory first step for all NCII reports.",
      contactDetail: {
        url: 'https://www.facebook.com/help/contact/634636250523119',
      },
      applicableViolations: [
        {
          contentTypes: ['intimate'],
          contentContexts: ['hacked', 'relationship', 'unknown'],
        },
      ],
    },
    {
      channelType: 'Form',
      isDMCA: false,
      isDefault: false,
      officialPurpose:
        'To report a violation of your privacy rights through the unauthorized sharing of personal photos or videos.',
      justification:
        "This is the primary channel for reporting unauthorized use of personal images or videos that do not qualify as NCII but still violate Meta's privacy policies. It is specifically designed to handle reports where you appear in the content but do not own the copyright, ensuring it is routed to the correct privacy operations team.",
      contactDetail: {
        url: 'https://www.facebook.com/help/contact/567360146613371',
      },
      applicableViolations: [
        {
          contentTypes: ['personal', 'private'],
          contentContexts: ['hacked', 'relationship', 'unknown', 'other'],
        },
      ],
    },
    {
      channelType: 'Form',
      isDMCA: true,
      isDefault: false,
      officialPurpose: 'To report copyright infringement (DMCA).',
      justification:
        "This is Meta's mandatory and sole channel for processing legally valid DMCA/copyright notices. It is the only effective route when you are the copyright holder of the image. Reports for other policy violations submitted here will be rejected.",
      contactDetail: {
        url: 'https://www.facebook.com/help/contact/634636770043106',
      },
      applicableViolations: [
        {
          contentTypes: ['intimate', 'personal', 'other'],
          contentContexts: ['hacked', 'impersonation', 'relationship', 'unknown', 'other'],
        },
      ],
    },
    {
      channelType: 'Form',
      isDMCA: false,
      isDefault: false,
      officialPurpose: 'To report an impersonating account on Facebook.',
      justification:
        'This is the required first step for all Facebook impersonation reports. The form is mandatory because it gathers the necessary identity verification evidence (e.g., a photo of a government-issued ID), which cannot be securely processed via email.',
      contactDetail: {
        url: 'https://www.facebook.com/help/contact/295309487309948',
      },
      applicableViolations: [
        {
          contentTypes: ['intimate', 'personal', 'private', 'other'],
          contentContexts: ['impersonation'],
        },
      ],
    },
    {
      channelType: 'Email',
      isDMCA: true,
      isDefault: false,
      officialPurpose: 'Designated agent for copyright and intellectual property (IP) notices.',
      justification:
        "While the webform is the preferred intake channel, this is the official, legally designated email address for Meta's copyright agent. It should be used for submitting formal, legally compliant DMCA notices when the form is inaccessible or for complex legal correspondence related to copyright. Non-copyright matters sent here will be ignored.",
      contactDetail: {
        address: 'ip@fb.com',
      },
      applicableViolations: [
        {
          contentTypes: ['intimate', 'personal', 'other'],
          contentContexts: ['hacked', 'impersonation', 'relationship', 'unknown', 'other'],
        },
      ],
    },
    {
      channelType: 'Email',
      isDMCA: false,
      isDefault: true,
      officialPurpose: "Contact address for Meta's Data Protection Officer (DPO).",
      justification:
        'This is a high-level escalation channel for severe and complex privacy violations, particularly for users under GDPR jurisdiction. It is not for initial reporting. Use this to escalate a case only after the standard privacy or NCII forms have proven ineffective or received no response. You must reference your original report number for context.',
      contactDetail: {
        address: 'dpo@fb.com',
      },
      applicableViolations: [
        {
          contentTypes: ['intimate', 'personal', 'private'],
          contentContexts: ['hacked', 'impersonation', 'relationship', 'unknown'],
        },
      ],
    },
  ],
};
