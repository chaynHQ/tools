import { getPlatformPolicy } from '@/lib/platform-policies';
import { handleApiError, serverInstance as rollbar } from '@/lib/rollbar';
import { EnvironmentValidator } from '@/lib/validation/environment-validator';
import { PolicyAggregator, ProposedUpdate } from '@/lib/validation/policy-aggregator';
import {
  createScopedPoliciesForDocument,
  getNextDocument,
  getValidationProgress,
  initializeValidationWorkflow,
  isValidationComplete,
  PolicyValidationState,
  updateValidationState,
} from '@/lib/validation/policy-workflow';
import { NextResponse } from 'next/server';

// Store active validation sessions in memory
const activeValidations = new Map<string, PolicyValidationState>();

export async function POST(request: Request) {
  rollbar.info('PolicyValidation: Starting policy validation workflow');

  try {
    // Validate environment before starting any operations
    try {
      EnvironmentValidator.validateOrThrow();
      rollbar.info('PolicyValidation: Environment validation passed', {
        environmentSummary: EnvironmentValidator.getEnvironmentSummary(),
      });
    } catch (error) {
      rollbar.error('PolicyValidation: Environment validation failed', { error });
      return NextResponse.json(
        {
          error: `Environment validation failed: ${error instanceof Error ? error.message : String(error)}`,
          environmentSummary: EnvironmentValidator.getEnvironmentSummary(),
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
              error: `Quality check failed: ${error instanceof Error ? error.message : String(error)}`,
            };
          }

          // Step 5: Create Pull Request (validation already done in Prompt B)
          let prResult = null;
          let hasPRError = false;

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
                  validationId,
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

          // Clean up validation session
          activeValidations.delete(validationId);

          // Return results with PR creation
          let finalStatus = 'completed_with_changes';
          let finalMessage = `Validation completed with ${aggregationResult.totalChanges} valid policy changes across ${aggregationResult.platformsUpdated.length} platforms and ${aggregationResult.documentsUpdated.length} documents`;

          if (hasPRError) {
            finalStatus = 'completed_with_pr_error';
            finalMessage = `Validation completed with valid changes, but PR creation failed`;
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
              pullRequest: prResult,
              changesSummary: PolicyAggregator.generateChangesSummary(aggregationResult),
              progress: getValidationProgress(validationState),
              nextStep: prResult?.pullRequestUrl
                ? 'review_and_merge'
                : 'manual_pr_creation',
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
      const scopedPolicies = createScopedPoliciesForDocument(
        validationState,
        nextDocument.reference,
      );

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

        // If we have updates, validate them with Prompt B
        if (analysisResult.status === 'updated') {
          rollbar.info('PolicyValidation: Starting change validation (Prompt B)', {
            validationId,
            platformId: nextDocument.platformId,
            documentReference: nextDocument.reference,
          });

          const validationResponse = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/policies/validate/analyze`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                validateChanges: true,
                documentUrl: nextDocument.url,
                documentReference: nextDocument.reference,
                documentTitle: nextDocument.title,
                originalPolicies: scopedPolicies.relatedPolicies,
                updatedPolicies: analysisResult.data.relatedPolicies,
              }),
            },
          );

          if (!validationResponse.ok) {
            const errorData = await validationResponse.json();
            throw new Error(errorData.error || 'Validation request failed');
          }

          const validationData = await validationResponse.json();
          analysisResult.validation = validationData.validation;

          rollbar.info('PolicyValidation: Change validation completed', {
            validationId,
            platformId: nextDocument.platformId,
            documentReference: nextDocument.reference,
            validationStatus: analysisResult.validation.status,
          });
        }
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
