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
        // Check if policy applies to the specific content type
        const matchesContentType = policy.contentTypes.includes(contentType as any) ||
          // Include policies marked as 'other' if no specific match and user selected 'other'
          (contentType === 'other' && policy.contentTypes.includes('other')) ||
          // Include broad policies that cover multiple types when user has 'other'
          (contentType === 'other' && policy.contentTypes.length > 2);
        
        // Check if policy applies to the specific content context
        const matchesContentContext = policy.contentContexts.includes(contentContext as any) ||
          // Include policies marked as 'unknown' if no specific match and user selected 'unknown'
          (contentContext === 'unknown' && policy.contentContexts.includes('unknown')) ||
          // Include policies marked as 'other' if no specific match and user selected 'other'
          (contentContext === 'other' && policy.contentContexts.includes('other')) ||
          // Include broad policies that cover multiple contexts when user has 'unknown' or 'other'
          ((contentContext === 'unknown' || contentContext === 'other') && policy.contentContexts.length > 3);
        
        return matchesContentType && matchesContentContext;
      });

      // Sort policies by relevance within each document
      const sortedPolicies = relevantPolicies.sort((a, b) => {
        // Prioritize policies with exact matches over broad/fallback matches
        const aExactType = a.contentTypes.includes(contentType as any) && contentType !== 'other';
        const bExactType = b.contentTypes.includes(contentType as any) && contentType !== 'other';
        const aExactContext = a.contentContexts.includes(contentContext as any) && contentContext !== 'unknown' && contentContext !== 'other';
        const bExactContext = b.contentContexts.includes(contentContext as any) && contentContext !== 'unknown' && contentContext !== 'other';
        
        const aExactness = (aExactType ? 2 : 0) + (aExactContext ? 2 : 0);
        const bExactness = (bExactType ? 2 : 0) + (bExactContext ? 2 : 0);
        
        if (aExactness !== bExactness) {
          return bExactness - aExactness;
        }
        
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
