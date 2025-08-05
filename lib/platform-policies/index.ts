import { PlatformPolicy } from '../../types/policies';
import { facebookPolicy } from './facebook';
import { instagramPolicy } from './instagram';
import { onlyfansPolicy } from './onlyfans';
import { pornhubPolicy } from './pornhub';
import { tiktokPolicy } from './tiktok';

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

function getRelevantPolicies(policy: PlatformPolicy, contentType: string, contentContext: string) {
  if (!policy) return null;

  // Find matching content type and context policies
  const typePolicy = policy.contentTypes.find((t) => t.type === contentType);
  const contextPolicy = policy.contentContexts.find((c) => c.context === contentContext);

  // Combine all relevant policies
  const allPolicies = [
    ...(typePolicy?.policies || []),
    ...(contextPolicy?.policies || []),
    ...policy.generalPolicies,
  ];

  return allPolicies;
}

export { getPlatformPolicy, getRelevantPolicies };
