import { PlatformPolicies, Policy, PolicyDocument } from '../../types/policies';
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

function formatPolicyDataForAI(
  platformPolicies: PlatformPolicies,
  relevantPolicies: Policy[],
): string {
  if (!platformPolicies || !relevantPolicies.length) {
    return 'No relevant platform policies found.';
  }

  let output = `## Platform Policy Information for ${platformPolicies.platform}\n\n`;

  // Group policies by their source document
  const policiesByDocument = new Map<string, { document: PolicyDocument; policies: Policy[] }>();

  platformPolicies.policyDocuments.forEach((document) => {
    const documentPolicies = relevantPolicies.filter((policy) =>
      document.policies.some((docPolicy) => docPolicy.id === policy.id),
    );
    if (documentPolicies.length > 0) {
      policiesByDocument.set(document.id, { document, policies: documentPolicies });
    }
  });

  // Format each document and its relevant policies
  policiesByDocument.forEach(({ document, policies }) => {
    output += `### Document: ${document.title}\n`;
    output += `- **Reference**: ${document.reference || 'N/A'}\n`;
    output += `- **URL**: ${document.url}\n`;
    output += `- **Summary**: ${document.summary}\n\n`;

    if (document.appealProcess) {
      output += `**Appeal Process**:\n`;
      output += `- Summary: ${document.appealProcess.summary}\n`;
      if (document.appealProcess.url) {
        output += `- Appeal URL: ${document.appealProcess.url}\n`;
      }
      output += `- Steps:\n`;
      document.appealProcess.steps.forEach((step, index) => {
        output += `  ${index + 1}. ${step}\n`;
      });
      output += '\n';
    }

    output += `**Relevant Policies from this Document**:\n\n`;

    policies.forEach((policy, index) => {
      output += `#### Policy ${index + 1}: ${policy.summary}\n`;
      output += `- **Reference**: ${policy.reference || 'N/A'}\n`;
      output += `- **Quote**: "${policy.quote}"\n`;
      output += `- **Content Types**: ${policy.contentTypes.join(', ')}\n`;
      output += `- **Content Contexts**: ${policy.contentContexts.join(', ')}\n\n`;

      if (policy.timeframes) {
        output += `**Timeframes**:\n`;
        if (policy.timeframes.response) {
          output += `- Response: ${policy.timeframes.response.value} ${policy.timeframes.response.unit} (${policy.timeframes.response.description})\n`;
        }
        if (policy.timeframes.removal) {
          output += `- Removal: ${policy.timeframes.removal.value} ${policy.timeframes.removal.unit} (${policy.timeframes.removal.description})\n`;
        }
        output += '\n';
      }

      output += `**Evidence Requirements**:\n`;
      policy.evidenceRequirements.forEach((req, reqIndex) => {
        output += `${reqIndex + 1}. **${req.description}**\n`;
        if (req.example) {
          output += `   - Example: ${req.example}\n`;
        }
        output += `   - Reason: ${req.reason}\n`;
      });
      output += '\n';

      output += `**Removal Criteria**:\n`;
      policy.removalCriteria.forEach((criteria, criteriaIndex) => {
        output += `${criteriaIndex + 1}. ${criteria}\n`;
      });
      output += '\n---\n\n';
    });
  });

  return output;
}

function getRelevantPolicies(
  platformPolicies: PlatformPolicies,
  contentType: string,
  contentContext: string,
): Policy[] {
  if (!platformPolicies) return [];

  const allPolicies: Policy[] = [];

  // Collect all policies from all documents
  platformPolicies.policyDocuments.forEach((document) => {
    allPolicies.push(...document.policies);
  });

  // Filter policies that match the content type and context
  return allPolicies.filter((policy) => {
    const matchesContentType = policy.contentTypes.includes(contentType as any);
    const matchesContentContext = policy.contentContexts.includes(contentContext as any);
    return matchesContentType && matchesContentContext;
  });
}

function getAllPoliciesForPlatform(platformPolicies: PlatformPolicies): Policy[] {
  if (!platformPolicies) return [];

  const allPolicies: Policy[] = [];

  // Collect all policies from all documents
  platformPolicies.policyDocuments.forEach((document) => {
    allPolicies.push(...document.policies);
  });

  return allPolicies;
}

function getPolicyById(platformPolicies: PlatformPolicies, policyId: string): Policy | null {
  if (!platformPolicies) return null;

  for (const document of platformPolicies.policyDocuments) {
    const policy = document.policies.find((p) => p.id === policyId);
    if (policy) return policy;
  }

  return null;
}

function getDocumentByReference(platformPolicies: PlatformPolicies, reference: string) {
  if (!platformPolicies) return null;

  return platformPolicies.policyDocuments.find((doc) => doc.reference === reference) || null;
}

export {
  formatPolicyDataForAI,
  getAllPoliciesForPlatform,
  getDocumentByReference,
  getPlatformPolicy,
  getPolicyById,
  getRelevantPolicies,
};
