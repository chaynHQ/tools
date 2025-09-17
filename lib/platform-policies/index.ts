import { PlatformPolicies, PolicyDocument } from '../../types/policies';
import { facebookPolicy } from './facebook';
import { instagramPolicy } from './instagram';
import { onlyfansPolicy } from './onlyfans';
import { pornhubPolicy } from './pornhub';
import { tiktokPolicy } from './tiktok';

const platformPolicies: Record<string, PlatformPolicies> = {
  facebook: facebookPolicy,
  instagram: instagramPolicy,
  tiktok: tiktokPolicy,
  onlyfans: onlyfansPolicy,
  pornhub: pornhubPolicy,
};

function getPlatformPolicy(platformId: string): PlatformPolicies | null {
  return platformPolicies[platformId] || null;
}

function getDocumentsWithRelevantPolicies(
  platformPolicies: PlatformPolicies,
  contentType: string,
  contentContext: string,
): PolicyDocument[] {
  if (!platformPolicies) return [];

  return platformPolicies.policyDocuments
    .map((document) => {
      // Filter policies that match the content type and context
      const relevantPolicies = document.policies.filter((policy) => {
        const matchesContentType = policy.contentTypes.includes(contentType as any);
        const matchesContentContext = policy.contentContexts.includes(contentContext as any);
        return matchesContentType && matchesContentContext;
      });

      // Sort policies by relevance within each document
      const sortedPolicies = relevantPolicies.sort((a, b) => {
        // Prioritize policies with timeframes (more actionable)
        const aHasTimeframes = a.timeframes ? 1 : 0;
        const bHasTimeframes = b.timeframes ? 1 : 0;
        if (aHasTimeframes !== bHasTimeframes) {
          return bHasTimeframes - aHasTimeframes;
        }

        // Then by number of removal criteria (more specific policies first)
        return b.removalCriteria.length - a.removalCriteria.length;
      });

      return {
        ...document,
        policies: sortedPolicies,
      };
    })
    .filter((document) => document.policies.length > 0); // Only return documents with relevant policies
}

export { getDocumentsWithRelevantPolicies, getPlatformPolicy };
