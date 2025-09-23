import { PlatformPolicies } from '../../types/policies';

export const pornhubPolicy: PlatformPolicies = {
  platform: 'Pornhub',
  policyDocuments: [
    {
      id: 'ph-terms-of-service',
      reference: 'PH-TOS',
      title: 'Pornhub Terms of Service',
      summary:
        'Legal terms governing the use of Pornhub, including content ownership, security responsibilities, and prohibited behavior.',
      url: 'https://www.pornhub.com/information/terms',
      accessTimestamp: '2025-06-06T00:00:00Z',
      policies: [],
      appealProcess: null,
    },
    {
      id: 'ph-privacy-policy',
      reference: 'PH-PP',
      title: 'Pornhub Privacy Policy',
      summary: 'Privacy policy explaining how Pornhub collects, uses, and protects user data.',
      url: 'https://www.pornhub.com/information/privacy',
      accessTimestamp: '2025-06-06T00:00:00Z',
      policies: [],
      appealProcess: null,
    },
    {
      id: 'ph-trust-and-safety',
      reference: 'PH-CONTENT-POLICY',
      title: 'Pornhub Trust and Safety Policy',
      summary:
        'Comprehensive policy covering content moderation, verification requirements, and safety measures.',
      url: 'https://www.pornhub.com/information/trust-and-safety',
      accessTimestamp: '2025-06-06T00:00:00Z',
      policies: [],
      appealProcess: null,
    },
    {
      id: 'us-take-it-down-act',
      reference: 'S.146',
      title: 'TAKE IT DOWN Act',
      summary:
        'US policy prohibits publishing nonconsensual intimate visual depictions of individuals, both authentic and computer-generated.',
      url: 'https://www.congress.gov/bill/119th-congress/senate-bill/146/text',
      accessTimestamp: '2025-06-06T00:00:00Z',
      policies: [],
      appealProcess: null,
    },
  ],
};
