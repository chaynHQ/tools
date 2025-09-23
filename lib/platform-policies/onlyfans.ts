import { PlatformPolicies } from '../../types/policies';

export const onlyfansPolicy: PlatformPolicies = {
  platform: 'OnlyFans',
  policyDocuments: [
    {
      id: 'of-acceptable-use-policy',
      reference: 'OF-AUP',
      title: 'Acceptable Use Policy',
      summary: 'Comprehensive policy covering prohibited content and behavior on OnlyFans.',
      url: 'https://onlyfans.com/aup',
      accessTimestamp: '2025-06-06T00:00:00Z',
      policies: [],
      appealProcess: null,
    },
    {
      id: 'of-terms-of-service',
      reference: 'OF-TOS',
      title: 'Terms of Service',
      summary:
        'Legal terms governing the use of OnlyFans, including content ownership and security responsibilities.',
      url: 'https://onlyfans.com/terms',
      accessTimestamp: '2025-06-06T00:00:00Z',
      policies: [],
      appealProcess: null,
    },
    {
      id: 'of-privacy-policy',
      reference: 'OF-PP',
      title: 'Privacy Policy',
      summary: 'Privacy policy explaining how OnlyFans collects, uses, and protects user data.',
      url: 'https://onlyfans.com/privacy',
      accessTimestamp: '2025-06-06T00:00:00Z',
      policies: [],
      appealProcess: null,
    },
  ],
};
