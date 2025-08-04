import { handleApiError, serverInstance as rollbar } from '@/lib/rollbar';
import { getPlatformPolicy } from '@/lib/platform-policies';
import { PlatformPolicy } from '@/lib/platform-policies/types';
import { PolicyAggregator, ProposedUpdate } from '@/lib/validation/policy-aggregator';
import { NextResponse } from 'next/server';

// Interfaces
export interface PolicyValidationState {
  proposedUpdates: any[];
  originalPlatformPolicies: Record<string, PlatformPolicy>;
  platformIds: string[];
  currentDocumentIndex: number;
  totalDocuments: number;
  totalPlatforms: number;
  processedDocuments: string[];
  validationId: string;
  targetPlatforms: string[];
  status: 'initialized' | 'processing' | 'completed' | 'failed';
  startTime: string;
  lastUpdated: string;
}

export interface ScopedPolicies {
  legalDocumentReference: string;
  documentTitle: string;
  documentUrl: string;
  relatedPolicies: Array<{
    reference: string;
    policy: string;
    removalCriteria: string[];
    evidenceRequirements: string[];
    sourceSection: 'contentTypes' | 'contentContexts' | 'generalPolicies';
    sourceType?: string;
  }>;
}

// Store active validation sessions in memory
const activeValidations = new Map<string, PolicyValidationState>();

// Helper functions
function validateEnvironment() {
  const requiredVars = ['GOOGLE_CLOUD_PROJECT', 'ANTHROPIC_API_KEY'];
  const missingVars = requiredVars.filter(varName => !process.env[varName]);
  
  if (missingVars.length > 0) {
    throw new Error(`Missing required environment variables: ${missingVars.join(', ')}`);
  }
}

function initializeValidationWorkflow(platformIds?: string[]): PolicyValidationState {
  const validationId = `validation_${Date.now()}_${Math.random().toString(36).substring(7)}`;
  const currentTime = new Date().toISOString();

  const availablePlatforms = ['facebook', 'instagram', 'tiktok', 'onlyfans', 'pornhub'];
  const targetPlatforms = platformIds && platformIds.length > 0 ? platformIds : availablePlatforms;

  const originalPlatformPolicies: Record<string, PlatformPolicy> = {};
  const validPlatforms: string[] = [];
  let totalDocuments = 0;

  for (const platformId of targetPlatforms) {
    const policy = getPlatformPolicy(platformId);
    if (policy) {
      originalPlatformPolicies[platformId] = JSON.parse(JSON.stringify(policy)) as PlatformPolicy;
      validPlatforms.push(platformId);
      totalDocuments += policy.legalDocuments.length;
    }
  }

  if (validPlatforms.length === 0) {
    throw new Error('No valid platform policies found');
  }

  return {
    proposedUpdates: [],
    originalPlatformPolicies,
    platformIds: validPlatforms,
    currentDocumentIndex: 0,
    totalDocuments,
    totalPlatforms: validPlatforms.length,
    processedDocuments: [],
    validationId,
    targetPlatforms: validPlatforms,
    status: 'initialized',
    startTime: currentTime,
    lastUpdated: currentTime,
  };
}

function getNextDocument(state: PolicyValidationState) {
  let documentCount = 0;
  
  for (const platformId of state.platformIds) {
    const policy = state.originalPlatformPolicies[platformId];
    
    if (state.currentDocumentIndex < documentCount + policy.legalDocuments.length) {
      const documentIndex = state.currentDocumentIndex - documentCount;
      const document = policy.legalDocuments[documentIndex];
      
      return {
        ...document,
        platformId,
        platformName: policy.name,
      };
    }
    
    documentCount += policy.legalDocuments.length;
  }

  return null;
}

function createScopedPoliciesForDocument(
  state: PolicyValidationState,
  documentReference: string,
): ScopedPolicies | null {
  for (const [platformId, policy] of Object.entries(state.originalPlatformPolicies)) {
    const document = policy.legalDocuments.find((doc) => doc.reference === documentReference);
    if (document) {
      return createScopedPolicies(policy, documentReference);
    }
  }
  return null;
}

function createScopedPolicies(
  platformPolicy: PlatformPolicy,
  legalDocumentReference: string,
): ScopedPolicies | null {
  const legalDocument = platformPolicy.legalDocuments.find(
    (doc) => doc.reference === legalDocumentReference,
  );

  if (!legalDocument) {
    return null;
  }

  const relatedPolicies: ScopedPolicies['relatedPolicies'] = [];

  // Check contentTypes
  platformPolicy.contentTypes.forEach((contentType) => {
    contentType.policies.forEach((policy) => {
      const referencesDocument = policy.documents.some(
        (doc) => doc.reference === legalDocumentReference,
      );

      if (referencesDocument) {
        relatedPolicies.push({
          reference: policy.reference,
          policy: policy.policy,
          removalCriteria: [...policy.removalCriteria],
          evidenceRequirements: [...policy.evidenceRequirements],
          sourceSection: 'contentTypes',
          sourceType: contentType.type,
        });
      }
    });
  });

  // Check contentContexts
  platformPolicy.contentContexts.forEach((contentContext) => {
    contentContext.policies.forEach((policy) => {
      const referencesDocument = policy.documents.some(
        (doc) => doc.reference === legalDocumentReference,
      );

      if (referencesDocument) {
        relatedPolicies.push({
          reference: policy.reference,
          policy: policy.policy,
          removalCriteria: [...policy.removalCriteria],
          evidenceRequirements: [...policy.evidenceRequirements],
          sourceSection: 'contentContexts',
          sourceType: contentContext.context,
        });
      }
    });
  });

  // Check generalPolicies
  platformPolicy.generalPolicies.forEach((policy) => {
    const referencesDocument = policy.documents.some(
      (doc) => doc.reference === legalDocumentReference,
    );

    if (referencesDocument) {
      relatedPolicies.push({
        reference: policy.reference,
        policy: policy.policy,
        removalCriteria: [...policy.removalCriteria],
        evidenceRequirements: [...policy.evidenceRequirements],
        sourceSection: 'generalPolicies',
      });
    }
  });

  const uniquePolicies = relatedPolicies.filter(
    (policy, index, self) => index === self.findIndex((p) => p.reference === policy.reference),
  );

  return {
    legalDocumentReference,
    documentTitle: legalDocument.title,
    documentUrl: legalDocument.url,
    relatedPolicies: uniquePolicies,
  };
}

function updateValidationState(
  state: PolicyValidationState,
  documentReference: string,
  proposedUpdate?: any,
): PolicyValidationState {
  const updatedState = {
    ...state,
    currentDocumentIndex: state.currentDocumentIndex + 1,
    processedDocuments: [...state.processedDocuments, documentReference],
    lastUpdated: new Date().toISOString(),
  };

  if (proposedUpdate) {
    updatedState.proposedUpdates = [...state.proposedUpdates, proposedUpdate];
  }

  if (updatedState.currentDocumentIndex >= updatedState.totalDocuments) {
    updatedState.status = 'completed';
  } else {
    updatedState.status = 'processing';
  }

  return updatedState;
}

function isValidationComplete(state: PolicyValidationState): boolean {
  return state.currentDocumentIndex >= state.totalDocuments;
}

function getValidationProgress(state: PolicyValidationState) {
  return {
    validationId: state.validationId,
    status: state.status,
    progress: {
      current: state.currentDocumentIndex,
      total: state.totalDocuments,
      percentage: Math.round((state.currentDocumentIndex / state.totalDocuments) * 100),
    },
    processedDocuments: state.processedDocuments,
    proposedUpdatesCount: state.proposedUpdates.length,
    startTime: state.startTime,
    lastUpdated: state.lastUpdated,
  };
}

export async function POST(request: Request) {
  rollbar.info('PolicyValidation: Starting policy validation workflow');

  try {
    // Validate environment before starting any operations
    try {
      validateEnvironment();
      rollbar.info('PolicyValidation: Environment validation passed');
    } catch (error) {
      rollbar.error('PolicyValidation: Environment validation failed', { error });
      return NextResponse.json(
        {
          error: `Environment validation failed: ${error instanceof Error ? error.message : String(error)}`,
        },
        { status: 500 },
      );
    }

    const body = await request.json();
    const { action, validationId, platforms } = body;

    if (action === 'initialize') {
      // Step 1: Initialize the workflow
      const validationState = initializeValidationWorkflow(platforms);

      // Store the validation state
      activeValidations.set(validationState.validationId, validationState);

      rollbar.info('PolicyValidation: Workflow initialized successfully', {
        validationId: validationState.validationId,
        platforms: validationState.targetPlatforms,
        totalPlatforms: validationState.totalPlatforms,
        totalDocuments: validationState.totalDocuments,
      });

      return NextResponse.json({
        success: true,
        validationId: validationState.validationId,
        status: 'initialized',
        message: 'Policy validation workflow initialized',
        data: {
          platforms: validationState.targetPlatforms,
          totalPlatforms: validationState.totalPlatforms,
          totalDocuments: validationState.totalDocuments,
          documentsToProcess: Object.entries(validationState.originalPlatformPolicies).flatMap(
            ([platformId, policy]) =>
              policy.legalDocuments.map((doc) => ({
                platformId,
                platformName: policy.name,
                reference: doc.reference,
                title: doc.title,
                url: doc.url,
              })),
          ),
          nextStep: 'process_next_document',
        },
      });
    }

    if (action === 'process_next_document') {
      if (!validationId) {
        return NextResponse.json({ error: 'Validation ID required' }, { status: 400 });
      }

      const validationState = activeValidations.get(validationId);
      if (!validationState) {
        return NextResponse.json({ error: 'Validation session not found' }, { status: 404 });
      }

      // Check if validation is complete
      if (isValidationComplete(validationState)) {
        // Step 4: Aggregate all changes into final policy
        rollbar.info('PolicyValidation: Starting change aggregation', {
          validationId,
          proposedUpdatesCount: validationState.proposedUpdates.length,
        });

        const aggregationResult = PolicyAggregator.aggregateChanges(
          validationState.originalPlatformPolicies,
          validationState.proposedUpdates as ProposedUpdate[],
        );

        rollbar.info('PolicyValidation: Change aggregation completed', {
          validationId,
          hasChanges: aggregationResult.hasChanges,
          totalChanges: aggregationResult.totalChanges,
          platformsUpdated: aggregationResult.platformsUpdated.length,
          documentsUpdated: aggregationResult.documentsUpdated.length,
        });

        if (aggregationResult.hasChanges) {
          // Step 5: AI Quality Check
          rollbar.info('PolicyValidation: Starting AI quality check', {
            validationId,
            totalChanges: aggregationResult.totalChanges,
          });

          let qualityCheckResult = null;
          let hasQualityError = false;

          try {
            const qualityResponse = await fetch(
              `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/policies/validate/quality-check`,
              {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  originalPolicies: validationState.originalPlatformPolicies,
                  updatedPolicies: aggregationResult.updatedPolicies,
                }),
              },
            );

            if (!qualityResponse.ok) {
              const errorData = await qualityResponse.json();
              throw new Error(errorData.error || 'Quality check request failed');
            }

            const qualityData = await qualityResponse.json();
            qualityCheckResult = qualityData.qualityCheck;

            rollbar.info('PolicyValidation: AI quality check completed', {
              validationId,
              validationStatus: qualityCheckResult.validationStatus,
            });
          } catch (error) {
            rollbar.error('PolicyValidation: AI quality check failed', {
              validationId,
              error: error instanceof Error ? error.message : String(error),
            });
            hasQualityError = true;
            qualityCheckResult = {
              validationStatus: 'error',
              reasoning: `Quality check failed: ${error instanceof Error ? error.message : String(error)}`,
              diffSummary: 'Quality check could not be completed due to technical error',
              error: true,
            };
          }

          // Step 6: Create Pull Request (if quality check passed)
          let prResult = null;
          let hasPRError = false;

          if (!hasQualityError && qualityCheckResult?.validationStatus === 'valid') {
            try {
              rollbar.info('PolicyValidation: Starting PR creation', {
                validationId,
                totalChanges: aggregationResult.totalChanges,
              });

              const prResponse = await fetch(
                `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/policies/validate/create-pr`,
                {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    originalPolicies: validationState.originalPlatformPolicies,
                    updatedPolicies: aggregationResult.updatedPolicies,
                    changesSummary: PolicyAggregator.generateChangesSummary(aggregationResult),
                    totalChanges: aggregationResult.totalChanges,
                    platformsUpdated: aggregationResult.platformsUpdated,
                    documentsUpdated: aggregationResult.documentsUpdated,
                    documentsProcessed: validationState.processedDocuments.length,
                  }),
                },
              );

              if (!prResponse.ok) {
                const errorData = await prResponse.json();
                throw new Error(errorData.error || 'PR creation request failed');
              }

              const prData = await prResponse.json();
              prResult = prData.data;

              rollbar.info('PolicyValidation: PR creation completed', {
                validationId,
                pullRequestUrl: prResult.pullRequestUrl,
                pullRequestNumber: prResult.pullRequestNumber,
              });
            } catch (error) {
              rollbar.error('PolicyValidation: PR creation failed', {
                validationId,
                error: error instanceof Error ? error.message : String(error),
              });
              hasPRError = true;
              prResult = {
                error: `PR creation failed: ${error instanceof Error ? error.message : String(error)}`,
              };
            }
          }

          // Clean up validation session
          activeValidations.delete(validationId);

          // Return results with quality check and PR creation
          let finalStatus = 'completed_with_valid_changes';
          let finalMessage = `Validation completed with ${aggregationResult.totalChanges} valid policy changes across ${aggregationResult.platformsUpdated.length} platforms and ${aggregationResult.documentsUpdated.length} documents`;

          if (hasQualityError) {
            finalStatus = 'completed_with_quality_error';
            finalMessage = `Validation completed with ${aggregationResult.totalChanges} changes, but quality check failed`;
          } else if (qualityCheckResult?.validationStatus !== 'valid') {
            finalStatus = 'completed_with_invalid_changes';
            finalMessage = `Validation completed but proposed changes failed quality check`;
          } else if (hasPRError) {
            finalStatus = 'completed_with_pr_error';
            finalMessage = `Validation and quality check completed successfully, but PR creation failed`;
          } else if (prResult?.pullRequestUrl) {
            finalStatus = 'completed_with_pr_created';
            finalMessage = `Validation completed successfully and PR created: ${prResult.pullRequestUrl}`;
          }

          return NextResponse.json({
            success: true,
            status: finalStatus,
            message: finalMessage,
            data: {
              aggregationResult,
              qualityCheck: qualityCheckResult,
              pullRequest: prResult,
              changesSummary: PolicyAggregator.generateChangesSummary(aggregationResult),
              progress: getValidationProgress(validationState),
              nextStep: prResult?.pullRequestUrl
                ? 'review_and_merge'
                : qualityCheckResult?.validationStatus === 'valid'
                  ? 'manual_pr_creation'
                  : 'manual_review',
            },
          });
        } else {
          // Clean up validation session
          activeValidations.delete(validationId);

          return NextResponse.json({
            success: true,
            status: 'completed_no_changes',
            message: 'All documents processed. No policy changes needed.',
            data: {
              aggregationResult,
              changesSummary: PolicyAggregator.generateChangesSummary(aggregationResult),
              progress: getValidationProgress(validationState),
            },
          });
        }
      }

      // Step 2: Get next document and create scoped policies
      const nextDocument = getNextDocument(validationState);
      if (!nextDocument) {
        return NextResponse.json({ error: 'No more documents to process' }, { status: 400 });
      }

      rollbar.info('PolicyValidation: Processing document', {
        validationId,
        platformId: nextDocument.platformId,
        platformName: nextDocument.platformName,
        documentReference: nextDocument.reference,
        documentTitle: nextDocument.title,
      });

      // Create scoped policies for this document
      const scopedPolicies = createScopedPoliciesForDocument(validationState, nextDocument.reference);

      if (!scopedPolicies) {
        rollbar.error('PolicyValidation: Failed to create scoped policies', {
          validationId,
          platformId: nextDocument.platformId,
          documentReference: nextDocument.reference,
        });
        return NextResponse.json({ error: 'Failed to create scoped policies' }, { status: 500 });
      }

      // Step 3: Perform AI analysis using Gemini
      let analysisResult = null;
      let hasAnalysisError = false;

      try {
        rollbar.info('PolicyValidation: Starting Gemini analysis', {
          validationId,
          platformId: nextDocument.platformId,
          documentReference: nextDocument.reference,
          documentUrl: nextDocument.url,
        });

        const analysisResponse = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/policies/validate/analyze`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              documentUrl: nextDocument.url,
              scopedPolicies,
            }),
          },
        );

        if (!analysisResponse.ok) {
          const errorData = await analysisResponse.json();
          throw new Error(errorData.error || 'Analysis request failed');
        }

        const analysisData = await analysisResponse.json();
        analysisResult = analysisData.analysis;

        rollbar.info('PolicyValidation: Gemini analysis completed', {
          validationId,
          platformId: nextDocument.platformId,
          documentReference: nextDocument.reference,
          analysisStatus: analysisResult.status,
          hasUpdates: analysisResult.status === 'updated',
        });
      } catch (error) {
        rollbar.error('PolicyValidation: AI analysis failed', {
          validationId,
          platformId: nextDocument.platformId,
          documentReference: nextDocument.reference,
          error: error instanceof Error ? error.message : String(error),
        });
        hasAnalysisError = true;
        analysisResult = {
          status: 'error',
          reasoning: `AI analysis failed: ${error instanceof Error ? error.message : String(error)}`,
          error: true,
        };
      }

      // Update validation state with analysis results
      const updatedState = updateValidationState(
        validationState,
        nextDocument.reference,
        analysisResult?.status === 'updated'
          ? {
              legalDocumentReference: analysisResult.data.legalDocumentReference,
              relatedPolicies: analysisResult.data.relatedPolicies,
              reasoning: analysisResult.reasoning,
              analyzedAt: new Date().toISOString(),
            }
          : null,
      );
      activeValidations.set(validationId, updatedState);

      rollbar.info('PolicyValidation: Scoped policies created', {
        validationId,
        documentReference: nextDocument.reference,
        relatedPoliciesCount: scopedPolicies.relatedPolicies.length,
        analysisStatus: analysisResult?.status || 'unknown',
      });

      return NextResponse.json({
        success: true,
        status: hasAnalysisError ? 'document_processed_with_error' : 'document_processed',
        message: `Processed document: ${nextDocument.title} (${nextDocument.platformName})`,
        data: {
          currentDocument: {
            platformId: nextDocument.platformId,
            platformName: nextDocument.platformName,
            reference: nextDocument.reference,
            title: nextDocument.title,
            url: nextDocument.url,
          },
          scopedPolicies,
          analysis: analysisResult,
          progress: getValidationProgress(updatedState),
          nextStep: isValidationComplete(updatedState) ? 'completed' : 'process_next_document',
        },
      });
    }

    if (action === 'get_progress') {
      if (!validationId) {
        return NextResponse.json({ error: 'Validation ID required' }, { status: 400 });
      }

      const validationState = activeValidations.get(validationId);
      if (!validationState) {
        return NextResponse.json({ error: 'Validation session not found' }, { status: 404 });
      }

      return NextResponse.json({
        success: true,
        data: {
          progress: getValidationProgress(validationState),
        },
      });
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
  } catch (error: any) {
    rollbar.error('PolicyValidation: Error initializing workflow', {
      error: error.message,
      stack: error.stack,
    });

    const { error: errorMessage, status } = handleApiError(error, '/api/policies/validate', {
      statusCode: error.status,
      errorType: error.name,
    });

    return NextResponse.json({ error: errorMessage }, { status });
  }
}

export async function GET(request: Request) {
  try {
    // Return all available platform policy structures for inspection
    const availablePlatforms = ['facebook', 'instagram', 'tiktok', 'onlyfans', 'pornhub'];
    const policyStructures: Record<string, any> = {};
    let totalDocuments = 0;

    for (const platformId of availablePlatforms) {
      const policy = getPlatformPolicy(platformId);
      if (policy) {
        policyStructures[platformId] = {
          name: policy.name,
          legalDocumentsCount: policy.legalDocuments.length,
          contentTypesCount: policy.contentTypes.length,
          contentContextsCount: policy.contentContexts.length,
          generalPoliciesCount: policy.generalPolicies.length,
          legalDocuments: policy.legalDocuments.map((doc) => ({
            reference: doc.reference,
            title: doc.title,
            url: doc.url,
            lastAccessed: doc.accessTimestamp,
          })),
        };
        totalDocuments += policy.legalDocuments.length;
      }
    }

    const summary = {
      availablePlatforms,
      totalPlatforms: Object.keys(policyStructures).length,
      totalDocuments,
      platforms: policyStructures,
    };

    return NextResponse.json({
      success: true,
      message: 'All platform policy structures retrieved',
      data: summary,
    });
  } catch (error: any) {
    const { error: errorMessage, status } = handleApiError(error, '/api/policies/validate');
    return NextResponse.json({ error: errorMessage }, { status });
  }
}
