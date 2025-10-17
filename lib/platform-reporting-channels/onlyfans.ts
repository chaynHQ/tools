import { PlatformReportingChannels } from '@/types/platforms';

export const onlyfansReportingChannels: PlatformReportingChannels = {
  platform: 'OnlyFans',
  channels: [
    {
      channelType: 'Form',
      isDMCA: true,
      isDefault: false,
      officialPurpose: 'To report copyright infringement (DMCA).',
      justification:
        'This is the most structured, prioritized, and effective channel for all image takedown requests on OnlyFans. Because creators must own the rights to content they post, any unauthorized use (including NCII or impersonation with your photos) is a copyright violation that can be actioned through this form.',
      contactDetail: {
        url: 'https://onlyfans.com/dmca',
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
      isDMCA: true,
      isDefault: false,
      officialPurpose:
        'Designated agent for DMCA notices and other intellectual property complaints.',
      justification:
        "This is the direct email for the specialized team that processes legally mandated takedowns, making it highly effective for all copyright-based reports. It is the primary email escalation path for NCII and leaked content, as these are fundamentally copyright violations under OnlyFans' terms. This address is prioritized over general support.",
      contactDetail: {
        address: 'dmca@onlyfans.com',
      },
      applicableViolations: [
        {
          contentTypes: ['intimate', 'personal', 'private', 'other'],
          contentContexts: ['hacked', 'impersonation', 'relationship', 'unknown', 'other'],
        },
      ],
    },
    {
      channelType: 'Email',
      isDMCA: false,
      isDefault: true,
      officialPurpose: 'General user support and Terms of Service violation reporting.',
      justification:
        'This is the main public contact and serves as a catch-all for violations that do not strictly fit the DMCA framework, such as impersonation without the use of your copyrighted images or other general privacy concerns. While response times may be slower than the DMCA channel, it is the correct avenue for initiating non-IP related violation reports.',
      contactDetail: {
        address: 'support@onlyfans.com',
      },
      applicableViolations: [
        {
          contentTypes: ['intimate', 'personal', 'private', 'other'],
          contentContexts: ['hacked', 'impersonation', 'relationship', 'unknown', 'other'],
        },
      ],
    },
  ],
};
