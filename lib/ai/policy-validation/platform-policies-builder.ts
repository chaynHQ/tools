import { PolicyAbstractionResult } from '@/lib/prompts/policy-validation-policy-abstraction';
import { serverInstance as rollbar } from '@/lib/rollbar';
import { PlatformPolicies, PolicyDocument } from '@/types/platforms';

export interface DocumentProcessingResult {
  documentId: string;
  success: boolean;
  policies: PolicyAbstractionResult;
  error?: string;
}

export function buildPlatformPolicies(
  platformName: string,
  documentResults: Array<{
    document: {
      id: string;
      reference: string | null;
      title: string;
      summary: string;
      url: string;
    };
    abstraction: PolicyAbstractionResult;
  }>,
): PlatformPolicies {
  const policyDocuments: PolicyDocument[] = [];
  const currentTimestamp = new Date().toISOString();

  for (const { document, abstraction } of documentResults) {
    if (!abstraction.success) {
      rollbar.warning('Policy validation: Skipping failed document abstraction', {
        documentId: document.id,
      });
      continue;
    }

    const policyDocument: PolicyDocument = {
      id: document.id,
      reference: document.reference,
      title: document.title,
      summary: document.summary,
      url: document.url,
      accessTimestamp: currentTimestamp,
      policies: abstraction.policies,
      appealProcess: abstraction.appealProcess,
    };

    policyDocuments.push(policyDocument);
  }

  const platformPolicies: PlatformPolicies = {
    platform: platformName,
    policyDocuments,
  };

  return platformPolicies;
}

export function comparePlatformPolicies(
  oldPolicies: PlatformPolicies,
  newPolicies: PlatformPolicies,
): {
  hasChanges: boolean;
  summary: {
    documentsAdded: number;
    documentsRemoved: number;
    documentsModified: number;
    policiesAdded: number;
    policiesRemoved: number;
    policiesModified: number;
  };
  details: {
    addedDocuments: string[];
    removedDocuments: string[];
    modifiedDocuments: Array<{
      id: string;
      changes: string[];
    }>;
  };
} {
  const oldDocMap = new Map(oldPolicies.policyDocuments.map((doc) => [doc.id, doc]));
  const newDocMap = new Map(newPolicies.policyDocuments.map((doc) => [doc.id, doc]));

  const addedDocuments: string[] = [];
  const removedDocuments: string[] = [];
  const modifiedDocuments: Array<{ id: string; changes: string[] }> = [];

  let policiesAdded = 0;
  let policiesRemoved = 0;
  let policiesModified = 0;

  // Check for added documents
  for (const [docId, newDoc] of newDocMap) {
    if (!oldDocMap.has(docId)) {
      addedDocuments.push(docId);
      policiesAdded += newDoc.policies.length;
    }
  }

  // Check for removed documents
  for (const [docId, oldDoc] of oldDocMap) {
    if (!newDocMap.has(docId)) {
      removedDocuments.push(docId);
      policiesRemoved += oldDoc.policies.length;
    }
  }

  // Check for modified documents
  for (const [docId, newDoc] of newDocMap) {
    const oldDoc = oldDocMap.get(docId);
    if (oldDoc) {
      const changes: string[] = [];

      // Check basic document properties
      if (oldDoc.title !== newDoc.title) changes.push('title');
      if (oldDoc.summary !== newDoc.summary) changes.push('summary');
      if (oldDoc.url !== newDoc.url) changes.push('url');

      // Check policies
      const oldPolicyMap = new Map(oldDoc.policies.map((p) => [p.id, p]));
      const newPolicyMap = new Map(newDoc.policies.map((p) => [p.id, p]));

      for (const [policyId] of newPolicyMap) {
        if (!oldPolicyMap.has(policyId)) {
          policiesAdded++;
          changes.push(`added policy: ${policyId}`);
        }
      }

      for (const [policyId] of oldPolicyMap) {
        if (!newPolicyMap.has(policyId)) {
          policiesRemoved++;
          changes.push(`removed policy: ${policyId}`);
        }
      }

      // Check for modified policies (simplified comparison)
      for (const [policyId, newPolicy] of newPolicyMap) {
        const oldPolicy = oldPolicyMap.get(policyId);
        if (oldPolicy && JSON.stringify(oldPolicy) !== JSON.stringify(newPolicy)) {
          policiesModified++;
          changes.push(`modified policy: ${policyId}`);
        }
      }

      // Check appeal process
      if (JSON.stringify(oldDoc.appealProcess) !== JSON.stringify(newDoc.appealProcess)) {
        changes.push('appeal process');
      }

      if (changes.length > 0) {
        modifiedDocuments.push({ id: docId, changes });
      }
    }
  }

  const hasChanges =
    addedDocuments.length > 0 || removedDocuments.length > 0 || modifiedDocuments.length > 0;

  const result = {
    hasChanges,
    summary: {
      documentsAdded: addedDocuments.length,
      documentsRemoved: removedDocuments.length,
      documentsModified: modifiedDocuments.length,
      policiesAdded,
      policiesRemoved,
      policiesModified,
    },
    details: {
      addedDocuments,
      removedDocuments,
      modifiedDocuments,
    },
  };

  return result;
}
