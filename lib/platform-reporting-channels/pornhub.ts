import { PlatformReportingChannels } from '@/types/platforms';

export const pornhubReportingChannels: PlatformReportingChannels = {
  platform: 'Pornhub',
  channels: [
    {
      channelType: 'Form',
      isDMCA: false,
      isDefault: false,
      officialPurpose:
        'To report content you want removed for any reason, including non-consensual content, copyright, or privacy violations.',
      justification:
        'This is the official, mandatory, and most effective first step for all takedown requests. This form is hosted directly by Pornhub and is designed to collect all necessary information to triage the report to the correct internal team (NCII, legal, etc.). Submitting through this form creates a trackable case and is a prerequisite for any effective escalation.',
      contactDetail: {
        url: 'https://www.pornhub.com/content-removal',
      },
      applicableViolations: [
        {
          contentTypes: ['intimate', 'personal', 'private', 'other'],
          contentContexts: [
            'hacked',
            'impersonation',
            'relationship',
            'unknown',
            'other',
          ],
        },
      ],
    },
    {
      channelType: 'Email',
      isDMCA: true,
      isDefault: false,
      officialPurpose: 'Designated agent for copyright notices (DMCA).',
      justification:
        'This is the official, legally designated email for submitting formal DMCA takedown notices. It is monitored by their legal compliance team. Use this for copyright-specific claims or to escalate a copyright issue if the content removal form was ineffective. Ensure the email contains all legally required DMCA elements.',
      contactDetail: {
        address: 'dmca@pornhub.com',
      },
      applicableViolations: [
        {
          contentTypes: ['intimate', 'personal', 'other'],
          contentContexts: [
            'hacked',
            'impersonation',
            'relationship',
            'unknown',
            'other',
          ],
        },
      ],
    },
    {
      channelType: 'Email',
      isDMCA: false,
      isDefault: true,
      officialPurpose:
        'Direct contact for the Data Protection Officer (DPO) for formal privacy inquiries.',
      justification:
        'This is the correct, specialized channel for escalating severe privacy violations and data protection matters (e.g., under GDPR) directly to the DPO. It is the most effective escalation path for reports involving sensitive personal information (doxxing) after an initial report has been filed via the form.',
      contactDetail: {
        address: 'dpo@pornhub.com',
      },
      applicableViolations: [
        {
          contentTypes: ['private'],
          contentContexts: [
            'hacked',
            'impersonation',
            'relationship',
            'unknown',
            'other',
          ],
        },
      ],
    },
    {
      channelType: 'Email',
      isDMCA: false,
      isDefault: false,
      officialPurpose: 'General support and user rights inquiries.',
      justification:
        'This is a valid, but more general, support channel. It is best used for follow-up questions, exercising data rights (like rectification), or for situations where the specialized DPO and DMCA channels are not appropriate. Response times may be slower for content removal issues compared to the primary form.',
      contactDetail: {
        address: 'support@pornhub.com',
      },
      applicableViolations: [
        {
          contentTypes: ['intimate', 'personal', 'private', 'other'],
          contentContexts: [
            'hacked',
            'impersonation',
            'relationship',
            'unknown',
            'other',
          ],
        },
      ],
    },
  ],
};