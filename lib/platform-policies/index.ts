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

function formatPolicyDataForAI(
  platformPolicies: PlatformPolicies,
  documentsWithPolicies: PolicyDocument[],
): string {
  if (!platformPolicies || !documentsWithPolicies.length) {
    return 'No relevant platform policies found.';
  }

  let output = `## Platform Policy Information for ${platformPolicies.platform}\n\n`;

  documentsWithPolicies.forEach((document) => {
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

    document.policies.forEach((policy, index) => {
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
  getDocumentsWithRelevantPolicies,
  formatPolicyDataForAI,
  getAllPoliciesForPlatform,
  getDocumentByReference,
  getPlatformPolicy,
  getPolicyById,
};
