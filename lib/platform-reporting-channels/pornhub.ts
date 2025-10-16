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
        'Contact for privacy-related inquiries and the Data Protection Officer (DPO).',
      justification:
        'This is the direct channel to the team responsible for privacy compliance and data protection (e.g., GDPR). It is the most effective escalation path for reports involving the exposure of sensitive personal information (doxxing) or other severe privacy violations after the initial report has been filed via the form.',
      contactDetail: {
        address: 'privacy@pornhub.com',
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
  ],
};