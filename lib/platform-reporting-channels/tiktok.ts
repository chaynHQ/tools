import { PlatformReportingChannels } from '@/types/platforms';

export const tiktokReportingChannels: PlatformReportingChannels = {
  platform: 'TikTok',
  channels: [
    {
      channelType: 'Form',
      isDMCA: false,
      isDefault: false,
      officialPurpose:
        'To report a violation of your privacy, including the sharing of personal imagery or information without consent.',
      justification:
        "This is the most direct and efficient primary channel for all privacy complaints that are not impersonation or copyright. It is structured to gather the specific evidence needed by TikTok's privacy review team, ensuring the report is categorized and triaged correctly for the fastest review.",
      contactDetail: {
        url: 'https://www.tiktok.com/legal/report/privacy',
      },
      applicableViolations: [
        {
          contentTypes: ['intimate', 'personal', 'private'],
          contentContexts: ['hacked', 'relationship', 'unknown', 'other'],
        },
      ],
    },
    {
      channelType: 'Form',
      isDMCA: false,
      isDefault: false,
      officialPurpose: 'To report an account that is impersonating you or someone else.',
      justification:
        "This is the mandatory and most effective primary channel for impersonation reports. The form's structure is designed to collect the required identity verification evidence, which is essential for TikTok to take action and cannot be processed via standard email.",
      contactDetail: {
        url: 'https://www.tiktok.com/legal/report/impersonation',
      },
      applicableViolations: [
        {
          contentTypes: ['intimate', 'personal', 'private', 'other'],
          contentContexts: ['impersonation'],
        },
      ],
    },
    {
      channelType: 'Form',
      isDMCA: true,
      isDefault: false,
      officialPurpose: 'To submit a report of copyright infringement.',
      justification:
        'This is the mandatory first-step channel for copyright claims. Using this form ensures you provide all information required by law (e.g., under the DMCA), which is necessary for TikTok to process the takedown. Reports lacking this specific information submitted elsewhere will be rejected.',
      contactDetail: {
        url: 'https://www.tiktok.com/legal/report/Copyright',
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
      officialPurpose: 'General legal inquiries and reports of severe platform violations.',
      justification:
        "This inbox is monitored by TikTok's legal team for severe safety and policy violations that have legal implications, such as Non-Consensual Intimate Imagery (NCII) or doxxing. Use this for urgent escalations, framing the subject line clearly (e.g., 'URGENT Safety Report: NCII') to ensure it is prioritized over general inquiries.",
      contactDetail: {
        address: 'legal@tiktok.com',
      },
      applicableViolations: [
        {
          contentTypes: ['intimate', 'private'],
          contentContexts: ['hacked', 'relationship', 'unknown'],
        },
      ],
    },
    {
      channelType: 'Email',
      isDMCA: false,
      isDefault: false,
      officialPurpose:
        'Designated Data Protection Officer (DPO) contact for the European Region (EEA, UK, and Switzerland).',
      justification:
        'This is a formal, high-level escalation channel for unresolved privacy complaints for users protected by GDPR. It should only be used after a report has been submitted via the privacy form and the outcome was unsatisfactory or no response was received. Reference your original report number. This is the most direct email to the team responsible for legal privacy compliance in Europe.',
      contactDetail: {
        address: 'privacy_dpo_eu@tiktok.com',
      },
      applicableViolations: [
        {
          contentTypes: ['intimate', 'personal', 'private'],
          contentContexts: ['hacked', 'impersonation', 'relationship', 'unknown'],
        },
      ],
    },
    {
      channelType: 'Email',
      isDMCA: true,
      isDefault: false,
      officialPurpose: 'Designated agent for receiving reports of copyright infringement.',
      justification:
        "This is the officially registered email address for TikTok's copyright agent. While the web form is the preferred method for initial reports, this email should be used for formal legal correspondence from legal counsel regarding copyright, or to escalate a copyright claim if the form has been unresponsive. Ensure any communication includes all legally required elements of a DMCA notice.",
      contactDetail: {
        address: 'copyright@tiktok.com',
      },
      applicableViolations: [
        {
          contentTypes: ['intimate', 'personal', 'other'],
          contentContexts: ['hacked', 'impersonation', 'relationship', 'unknown', 'other'],
        },
      ],
    },
  ],
};
