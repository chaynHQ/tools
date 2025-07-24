export interface Platform {
  id: string;
  name: string;
  logo: string;
  contactEmail?: string;
  flows: {
    basic: string[];
    escalated: string[];
  };
}

export const platforms: Platform[] = [
  {
    id: 'facebook',
    name: 'Facebook (Meta)',
    logo: '/platform-logos/facebook.svg',
    contactEmail: 'records@facebook.com',
    flows: {
      basic: [
        'Go to the image or video you want to report',
        'Click the three dots (...) in the top right of the post',
        'Click "Report post" or "Report photo"',
        'Follow the on-screen instructions to submit your report'
      ],
      escalated: [
        'Visit the Facebook Help Center',
        'Navigate to the "Report Something" section',
        'Select "Report a Privacy Rights Violation"',
        'Fill out the detailed form explaining your situation',
        'Provide any documentation that proves your identity',
        'Submit the form and await Facebook\'s response'
      ]
    }
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    logo: '/platform-logos/tiktok.svg',
    contactEmail: 'legal@tiktok.com',
    flows: {
      basic: [
        'Tap and hold on the video you want to report',
        'Tap "Report"',
        'Select the reason for reporting',
        'Follow the prompts to complete your report'
      ],
      escalated: [
        'Visit TikTok\'s Report Form page',
        'Select "Report content that violates your privacy"',
        'Provide detailed information about the content',
        'Include any relevant documentation or proof',
        'Submit the form for review by TikTok\'s team'
      ]
    }
  },
  {
    id: 'instagram',
    name: 'Instagram (Meta)',
    logo: '/platform-logos/instagram.svg',
    contactEmail: 'records@instagram.com',
    flows: {
      basic: [
        'Tap the three dots (...) above the post',
        'Tap "Report"',
        'Select "It\'s inappropriate"',
        'Choose the reason that best describes the issue'
      ],
      escalated: [
        'Go to Instagram\'s Help Center',
        'Navigate to "Privacy and Safety Center"',
        'Select "Report Something"',
        'Choose "Content that violates my privacy rights"',
        'Fill out the detailed privacy violation form',
        'Provide necessary documentation to verify your claim'
      ]
    }
  },
  {
    id: 'pornhub',
    name: 'Pornhub',
    logo: '/platform-logos/pornhub.png',
    contactEmail: 'content@pornhub.com',
    flows: {
      basic: [
        'Click the "Flag" button below the video',
        'Select the appropriate reason for reporting',
        'Provide additional details about your report',
        'Submit the form with any relevant documentation'
      ],
      escalated: [
        'Visit Pornhub\'s Content Removal page',
        'Fill out the Content Removal Request form',
        'Provide detailed information about the content',
        'Include any legal documentation if available',
        'Submit the form for priority review'
      ]
    }
  },
  {
    id: 'onlyfans',
    name: 'OnlyFans',
    logo: '/platform-logos/onlyfans.svg',
    contactEmail: 'support@onlyfans.com',
    flows: {
      basic: [
        'Click the flag icon on the content',
        'Select the reason for reporting',
        'Provide any additional information',
        'Submit your report through the form'
      ],
      escalated: [
        'Contact OnlyFans Support directly',
        'Select "Report Content" from the help categories',
        'Provide detailed information about the violation',
        'Include any evidence or documentation',
        'Submit for priority review by the Trust & Safety team'
      ]
    }
  }
];