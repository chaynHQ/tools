import { PlatformReportingChannels } from '@/types/platforms';

export const pornhubReportingChannels: PlatformReportingChannels = {
  platform: 'Pornhub',
  channels: [
    {
      channelType: 'Form',
      isDMCA: false,
      isDefault: false,
      officialPurpose:
        'To submit a content removal request for any reason, including appearing in a video without consent.',
      justification:
        'This is the primary, mandatory, and most effective first step for all takedown requests. This centralized Aylo portal is designed to immediately triage all reports (NCII, copyright, privacy, etc.) to the correct specialized internal teams. Submitting a request here generates a case number, which is essential for any subsequent escalation via email.',
      contactDetail: {
        url: 'https://www.aylo.com/removal',
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
      isDefault: true,
      isDMCA: false,
      officialPurpose:
        'Direct contact for the Trust and Safety team regarding serious platform violations.',
      justification:
        'This is the most direct and effective escalation channel for severe safety-critical violations, specifically Non-Consensual Intimate Imagery (NCII). It bypasses general queues and routes the report directly to the human moderation team responsible for imminent harm. Use this to escalate an urgent case after submitting the removal form, always referencing your case number.',
      contactDetail: {
        address: 'trustandsafety@aylo.com',
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
      isDefault: false,
      isDMCA: false,
      officialPurpose: 'Contact address for the Privacy Office and Data Protection Officer (DPO).',
      justification:
        'This is a specialized escalation channel for issues concerning the exposure of personally identifiable information (doxxing) or for formal privacy complaints under regulations like GDPR. If your removal request involves significant privacy breaches beyond just the imagery itself, escalating to this address after using the form is highly effective.',
      contactDetail: {
        address: 'privacy@aylo.com',
      },
      applicableViolations: [
        {
          contentTypes: ['private', 'personal'],
          contentContexts: ['hacked', 'impersonation', 'relationship', 'unknown', 'other'],
        },
      ],
    },
    {
      channelType: 'Email',
      isDefault: false,
      isDMCA: true,
      officialPurpose:
        'Designated agent for copyright notices (DMCA) and formal legal correspondence.',
      justification:
        'This is the official channel for submitting legally compliant DMCA takedown notices and for correspondence from legal counsel. While the removal form also handles copyright, this email is the correct venue for formal legal communication or to escalate a copyright claim that was unsatisfactorily handled through the primary form.',
      contactDetail: {
        address: 'legal@aylo.com',
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
