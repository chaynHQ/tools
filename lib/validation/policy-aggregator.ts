import { PlatformPolicy } from '@/lib/platform-policies/types';
import { serverInstance as rollbar } from '@/lib/rollbar';

export interface ProposedUpdate {
  legalDocumentReference: string;
  relatedPolicies: Array<{
    reference: string;
    policy: string;
    removalCriteria: string[];
    evidenceRequirements: string[];
    sourceSection: 'contentTypes' | 'contentContexts' | 'generalPolicies';
    sourceType?: string;
  }>;
  reasoning: string;
  analyzedAt: string;
}

export interface AggregationResult {
  hasChanges: boolean;
  updatedPolicy: PlatformPolicy | null;
  changesSummary: string[];
  documentsUpdated: string[];
  totalChanges: number;
}

export class PolicyAggregator {
  /**
   * Aggregates all proposed updates into a single updated PlatformPolicy
   */
  static aggregateChanges(
    originalPolicy: PlatformPolicy,
    proposedUpdates: ProposedUpdate[],
  ): AggregationResult {
    rollbar.info('PolicyAggregator: Starting change aggregation', {
      originalPolicyName: originalPolicy.name,
      proposedUpdatesCount: proposedUpdates.length,
    });

    // If no updates, return early
    if (proposedUpdates.length === 0) {
      rollbar.info('PolicyAggregator: No proposed updates found');
      return {
        hasChanges: false,
        updatedPolicy: null,
        changesSummary: [],
        documentsUpdated: [],
        totalChanges: 0,
      };
    }

    // Create deep copy of original policy
    const updatedPolicy: PlatformPolicy = JSON.parse(JSON.stringify(originalPolicy));
    const changesSummary: string[] = [];
    const documentsUpdated: string[] = [];
    let totalChanges = 0;

    // Update access timestamps for all processed documents
    this.updateAccessTimestamps(updatedPolicy, proposedUpdates);

    // Process each proposed update
    for (const update of proposedUpdates) {
      rollbar.info('PolicyAggregator: Processing update', {
        documentReference: update.legalDocumentReference,
        policiesCount: update.relatedPolicies.length,
      });

      const documentChanges = this.applyDocumentUpdate(updatedPolicy, update);

      if (documentChanges.changesApplied > 0) {
        documentsUpdated.push(update.legalDocumentReference);
        changesSummary.push(
          `**${update.legalDocumentReference}**: ${update.reasoning} (${documentChanges.changesApplied} policies updated)`,
        );
        totalChanges += documentChanges.changesApplied;

        // Add detailed changes
        changesSummary.push(...documentChanges.detailedChanges.map((change) => `  - ${change}`));
      }
    }

    rollbar.info('PolicyAggregator: Aggregation completed', {
      hasChanges: totalChanges > 0,
      documentsUpdated: documentsUpdated.length,
      totalChanges,
    });

    return {
      hasChanges: totalChanges > 0,
      updatedPolicy: totalChanges > 0 ? updatedPolicy : null,
      changesSummary,
      documentsUpdated,
      totalChanges,
    };
  }

  /**
   * Update access timestamps for all legal documents that were processed
   */
  private static updateAccessTimestamps(
    policy: PlatformPolicy,
    proposedUpdates: ProposedUpdate[],
  ): void {
    const currentTimestamp = new Date().toISOString();
    const processedDocuments = new Set(
      proposedUpdates.map((update) => update.legalDocumentReference),
    );

    policy.legalDocuments.forEach((doc) => {
      if (processedDocuments.has(doc.reference)) {
        doc.accessTimestamp = currentTimestamp;
        rollbar.info('PolicyAggregator: Updated access timestamp', {
          documentReference: doc.reference,
          timestamp: currentTimestamp,
        });
      }
    });
  }

  /**
   * Apply updates for a specific document
   */
  private static applyDocumentUpdate(
    policy: PlatformPolicy,
    update: ProposedUpdate,
  ): { changesApplied: number; detailedChanges: string[] } {
    let changesApplied = 0;
    const detailedChanges: string[] = [];

    for (const updatedPolicy of update.relatedPolicies) {
      const changeResult = this.updatePolicyInPlace(policy, updatedPolicy);

      if (changeResult.updated) {
        changesApplied++;
        detailedChanges.push(
          `Updated policy ${updatedPolicy.reference} in ${changeResult.location}`,
        );

        rollbar.info('PolicyAggregator: Applied policy update', {
          policyReference: updatedPolicy.reference,
          location: changeResult.location,
          documentReference: update.legalDocumentReference,
        });
      }
    }

    return { changesApplied, detailedChanges };
  }

  /**
   * Find and update a specific policy within the platform policy structure
   */
  private static updatePolicyInPlace(
    platformPolicy: PlatformPolicy,
    updatedPolicy: {
      reference: string;
      policy: string;
      removalCriteria: string[];
      evidenceRequirements: string[];
      sourceSection: 'contentTypes' | 'contentContexts' | 'generalPolicies';
      sourceType?: string;
    },
  ): { updated: boolean; location: string } {
    // Search in the appropriate section
    switch (updatedPolicy.sourceSection) {
      case 'contentTypes':
        return this.updateInContentTypes(platformPolicy, updatedPolicy);

      case 'contentContexts':
        return this.updateInContentContexts(platformPolicy, updatedPolicy);

      case 'generalPolicies':
        return this.updateInGeneralPolicies(platformPolicy, updatedPolicy);

      default:
        rollbar.error('PolicyAggregator: Unknown source section', {
          sourceSection: updatedPolicy.sourceSection,
          policyReference: updatedPolicy.reference,
        });
        return { updated: false, location: 'unknown' };
    }
  }

  /**
   * Update policy in contentTypes section
   */
  private static updateInContentTypes(
    platformPolicy: PlatformPolicy,
    updatedPolicy: any,
  ): { updated: boolean; location: string } {
    for (const contentType of platformPolicy.contentTypes) {
      if (updatedPolicy.sourceType && contentType.type === updatedPolicy.sourceType) {
        for (const policy of contentType.policies) {
          if (policy.reference === updatedPolicy.reference) {
            policy.policy = updatedPolicy.policy;
            policy.removalCriteria = [...updatedPolicy.removalCriteria];
            policy.evidenceRequirements = [...updatedPolicy.evidenceRequirements];
            return {
              updated: true,
              location: `contentTypes[${contentType.type}]`,
            };
          }
        }
      }
    }
    return { updated: false, location: 'contentTypes' };
  }

  /**
   * Update policy in contentContexts section
   */
  private static updateInContentContexts(
    platformPolicy: PlatformPolicy,
    updatedPolicy: any,
  ): { updated: boolean; location: string } {
    for (const contentContext of platformPolicy.contentContexts) {
      if (updatedPolicy.sourceType && contentContext.context === updatedPolicy.sourceType) {
        for (const policy of contentContext.policies) {
          if (policy.reference === updatedPolicy.reference) {
            policy.policy = updatedPolicy.policy;
            policy.removalCriteria = [...updatedPolicy.removalCriteria];
            policy.evidenceRequirements = [...updatedPolicy.evidenceRequirements];
            return {
              updated: true,
              location: `contentContexts[${contentContext.context}]`,
            };
          }
        }
      }
    }
    return { updated: false, location: 'contentContexts' };
  }

  /**
   * Update policy in generalPolicies section
   */
  private static updateInGeneralPolicies(
    platformPolicy: PlatformPolicy,
    updatedPolicy: any,
  ): { updated: boolean; location: string } {
    for (const policy of platformPolicy.generalPolicies) {
      if (policy.reference === updatedPolicy.reference) {
        policy.policy = updatedPolicy.policy;
        policy.removalCriteria = [...updatedPolicy.removalCriteria];
        policy.evidenceRequirements = [...updatedPolicy.evidenceRequirements];
        return { updated: true, location: 'generalPolicies' };
      }
    }
    return { updated: false, location: 'generalPolicies' };
  }

  /**
   * Generate a human-readable summary of changes
   */
  static generateChangesSummary(result: AggregationResult): string {
    if (!result.hasChanges) {
      return 'No changes detected. All policies are up to date.';
    }

    const summary = [
      `## Policy Update Summary`,
      ``,
      `**Total Changes**: ${result.totalChanges} policies updated across ${result.documentsUpdated.length} documents`,
      ``,
      `**Updated Documents**: ${result.documentsUpdated.join(', ')}`,
      ``,
      `### Detailed Changes:`,
      ``,
      ...result.changesSummary,
    ];

    return summary.join('\n');
  }
}
