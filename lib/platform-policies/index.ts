import { PlatformPolicy } from './types';
import { facebookPolicy } from './facebook';
import { instagramPolicy } from './instagram';
import { tiktokPolicy } from './tiktok';
import { onlyfansPolicy } from './onlyfans';
import { pornhubPolicy } from './pornhub';

const platformPolicies: Record<string, PlatformPolicy> = {
  facebook: facebookPolicy,
  instagram: instagramPolicy,
  tiktok: tiktokPolicy,
  onlyfans: onlyfansPolicy,
  pornhub: pornhubPolicy,
};

function getPlatformPolicy(platformId: string): PlatformPolicy | null {
  return platformPolicies[platformId] || null;
}

function getRelevantPolicies(
  policy: PlatformPolicy,
  contentType: string,
  contentContext: string
) {
  if (!policy) return null;

  const relevantPolicies = {
    legalBasis: [] as typeof policy.legalBasis,
    contentPolicies: [] as { reference: string; policy: string; section?: string }[],
    removalCriteria: [] as string[],
    evidenceRequirements: [] as string[]
  };

  // Add type-specific policies
  if (contentType in policy.contentPolicies) {
    relevantPolicies.contentPolicies.push(
      ...policy.contentPolicies[contentType as keyof typeof policy.contentPolicies]
    );
    relevantPolicies.removalCriteria.push(
      ...policy.removalCriteria[contentType as keyof typeof policy.removalCriteria]
    );
    relevantPolicies.evidenceRequirements.push(
      ...policy.evidenceRequirements[contentType as keyof typeof policy.evidenceRequirements]
    );
  }

  // Add context-specific policies
  if (contentContext in policy.contentPolicies) {
    relevantPolicies.contentPolicies.push(
      ...policy.contentPolicies[contentContext as keyof typeof policy.contentPolicies]
    );
    relevantPolicies.removalCriteria.push(
      ...policy.removalCriteria[contentContext as keyof typeof policy.removalCriteria]
    );
    relevantPolicies.evidenceRequirements.push(
      ...policy.evidenceRequirements[contentContext as keyof typeof policy.evidenceRequirements]
    );
  }

  // Add general policies
  relevantPolicies.contentPolicies.push(...policy.contentPolicies.general);
  relevantPolicies.removalCriteria.push(...policy.removalCriteria.general);
  relevantPolicies.evidenceRequirements.push(...policy.evidenceRequirements.general);

  // Add legal basis
  relevantPolicies.legalBasis = policy.legalBasis;

  return relevantPolicies;
}

export { getPlatformPolicy, getRelevantPolicies };