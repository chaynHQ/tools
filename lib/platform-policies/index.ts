import { PlatformPolicies, Policy } from '../../types/policies';
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

function getRelevantPolicies(
  platformPolicies: PlatformPolicies,
  contentType: string,
  contentContext: string,
): Policy[] {
  if (!platformPolicies) return [];

  const allPolicies: Policy[] = [];
  
  // Collect all policies from all documents
  platformPolicies.policyDocuments.forEach(document => {
    allPolicies.push(...document.policies);
  });

  // Filter policies that match the content type and context
  return allPolicies.filter(policy => {
    const matchesContentType = policy.contentTypes.includes(contentType as any);
    const matchesContentContext = policy.contentContexts.includes(contentContext as any);
    return matchesContentType && matchesContentContext;
  });
}

function getAllPoliciesForPlatform(platformPolicies: PlatformPolicies): Policy[] {
  if (!platformPolicies) return [];

  const allPolicies: Policy[] = [];
  
  // Collect all policies from all documents
  platformPolicies.policyDocuments.forEach(document => {
    allPolicies.push(...document.policies);
  });

  return allPolicies;
}

function getPolicyById(platformPolicies: PlatformPolicies, policyId: string): Policy | null {
  if (!platformPolicies) return null;

  for (const document of platformPolicies.policyDocuments) {
    const policy = document.policies.find(p => p.id === policyId);
    if (policy) return policy;
  }

  return null;
}

function getDocumentByReference(platformPolicies: PlatformPolicies, reference: string) {
  if (!platformPolicies) return null;

  return platformPolicies.policyDocuments.find(doc => doc.reference === reference) || null;
}

export { 
  getPlatformPolicy, 
  getRelevantPolicies, 
  getAllPoliciesForPlatform,
  getPolicyById,
  getDocumentByReference
};