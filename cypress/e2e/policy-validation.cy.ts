describe('Policy Validation API', () => {
  const baseUrl = Cypress.config('baseUrl');
  const apiUrl = `${baseUrl}/api/policies/validate`;

  // Mock responses
  const mockInitializeResponse = {
    success: true,
    validationId: 'validation_test_123',
    data: {
      totalDocuments: 15,
      totalPlatforms: 5,
      platforms: ['facebook', 'instagram', 'tiktok', 'onlyfans', 'pornhub'],
      nextStep: 'process_next_document'
    }
  };

  const mockProcessDocumentWithChanges = {
    success: true,
    status: 'document_processed',
    data: {
      currentDocument: {
        platformId: 'facebook',
        platformName: 'Facebook',
        reference: 'FB-TOS',
        title: 'Facebook Terms of Service',
        url: 'https://www.facebook.com/legal/terms'
      },
      analysis: {
        status: 'updated',
        reasoning: 'Found policy updates related to content removal timeframes',
        updatedPolicies: [
          {
            reference: 'FB-TOS-CONTENT',
            policy: 'Updated policy for content removal with new timeframes',
            removalCriteria: ['Content violates updated community standards'],
            evidenceRequirements: ['URL of content', 'Description of violation']
          }
        ],
        validation: {
          validationStatus: 'valid',
          reasoning: 'Changes are structurally sound and semantically consistent'
        }
      },
      progress: {
        current: 1,
        total: 15,
        percentage: 7
      },
      nextStep: 'process_next_document'
    }
  };

  const mockProcessDocumentNoChanges = {
    success: true,
    status: 'document_processed',
    data: {
      currentDocument: {
        platformId: 'instagram',
        platformName: 'Instagram',
        reference: 'IG-TOU',
        title: 'Instagram Terms of Use',
        url: 'https://help.instagram.com/581066165581870'
      },
      analysis: {
        status: 'no_change',
        reasoning: 'Document content matches current policies'
      },
      progress: {
        current: 2,
        total: 15,
        percentage: 13
      },
      nextStep: 'process_next_document'
    }
  };

  const mockCompletionWithChanges = {
    success: true,
    status: 'completed_with_pr_created',
    message: 'Validation completed with 3 policy changes across 2 platforms',
    data: {
      updatedPolicies: {
        facebook: {
          name: 'Facebook',
          legalDocuments: [],
          contentTypes: [],
          contentContexts: [],
          generalPolicies: [],
          timeframes: { response: 'Varies', removal: '48 hours for NCII' },
          appealProcess: []
        }
      },
      pullRequest: {
        url: 'https://github.com/chaynHQ/tools/pull/123',
        number: 123
      },
      totalChanges: 3,
      totalPlatformsUpdated: 2,
      platformsUpdated: ['facebook', 'instagram'],
      progress: {
        current: 15,
        total: 15,
        percentage: 100
      }
    }
  };

  const mockCompletionNoChanges = {
    success: true,
    status: 'completed_no_changes',
    message: 'All documents processed. No policy changes needed.',
    data: {
      totalDocuments: 15,
      totalPlatforms: 5,
      platforms: ['facebook', 'instagram', 'tiktok', 'onlyfans', 'pornhub'],
      progress: {
        current: 15,
        total: 15,
        percentage: 100
      }
    }
  };

  const mockErrorResponse = {
    error: 'Validation session not found'
  };

  beforeEach(() => {
    // Set up common intercepts for external dependencies
    cy.intercept('POST', '**/api/policies/validate', { fixture: 'policy-validation/responses.json' }).as('policyValidate');
  });

  describe('Initialization Flow', () => {
    it('should successfully initialize validation session', () => {
      cy.intercept('POST', apiUrl, {
        statusCode: 200,
        body: mockInitializeResponse
      }).as('initializeValidation');

      cy.request({
        method: 'POST',
        url: apiUrl,
        body: { action: 'initialize' }
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.success).to.be.true;
        expect(response.body.validationId).to.match(/^validation_/);
        expect(response.body.data.totalDocuments).to.be.a('number');
        expect(response.body.data.totalPlatforms).to.be.a('number');
        expect(response.body.data.platforms).to.be.an('array');
        expect(response.body.data.nextStep).to.eq('process_next_document');
      });

      cy.wait('@initializeValidation');
    });

    it('should handle initialization errors gracefully', () => {
      cy.intercept('POST', apiUrl, {
        statusCode: 500,
        body: { error: 'Internal server error during initialization' }
      }).as('initializeError');

      cy.request({
        method: 'POST',
        url: apiUrl,
        body: { action: 'initialize' },
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(500);
        expect(response.body.error).to.exist;
      });

      cy.wait('@initializeError');
    });
  });

  describe('Document Processing Flow', () => {
    it('should process document with policy changes', () => {
      cy.intercept('POST', apiUrl, (req) => {
        if (req.body.action === 'initialize') {
          req.reply({ statusCode: 200, body: mockInitializeResponse });
        } else if (req.body.action === 'process_next_document') {
          req.reply({ statusCode: 200, body: mockProcessDocumentWithChanges });
        }
      }).as('processDocument');

      // First initialize
      cy.request({
        method: 'POST',
        url: apiUrl,
        body: { action: 'initialize' }
      }).then((initResponse) => {
        const validationId = initResponse.body.validationId;

        // Then process a document
        cy.request({
          method: 'POST',
          url: apiUrl,
          body: {
            action: 'process_next_document',
            validationId: validationId
          }
        }).then((processResponse) => {
          expect(processResponse.status).to.eq(200);
          expect(processResponse.body.success).to.be.true;
          expect(processResponse.body.status).to.eq('document_processed');
          expect(processResponse.body.data.analysis.status).to.eq('updated');
          expect(processResponse.body.data.analysis.updatedPolicies).to.be.an('array');
          expect(processResponse.body.data.progress.current).to.be.a('number');
          expect(processResponse.body.data.progress.total).to.be.a('number');
          expect(processResponse.body.data.progress.percentage).to.be.a('number');
        });
      });
    });

    it('should process document with no changes needed', () => {
      cy.intercept('POST', apiUrl, (req) => {
        if (req.body.action === 'initialize') {
          req.reply({ statusCode: 200, body: mockInitializeResponse });
        } else if (req.body.action === 'process_next_document') {
          req.reply({ statusCode: 200, body: mockProcessDocumentNoChanges });
        }
      }).as('processDocumentNoChanges');

      // First initialize
      cy.request({
        method: 'POST',
        url: apiUrl,
        body: { action: 'initialize' }
      }).then((initResponse) => {
        const validationId = initResponse.body.validationId;

        // Then process a document
        cy.request({
          method: 'POST',
          url: apiUrl,
          body: {
            action: 'process_next_document',
            validationId: validationId
          }
        }).then((processResponse) => {
          expect(processResponse.status).to.eq(200);
          expect(processResponse.body.success).to.be.true;
          expect(processResponse.body.status).to.eq('document_processed');
          expect(processResponse.body.data.analysis.status).to.eq('no_change');
          expect(processResponse.body.data.progress.current).to.be.a('number');
        });
      });
    });

    it('should handle invalid validation ID', () => {
      cy.intercept('POST', apiUrl, {
        statusCode: 404,
        body: mockErrorResponse
      }).as('invalidValidationId');

      cy.request({
        method: 'POST',
        url: apiUrl,
        body: {
          action: 'process_next_document',
          validationId: 'invalid_id_123'
        },
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(404);
        expect(response.body.error).to.eq('Validation session not found');
      });

      cy.wait('@invalidValidationId');
    });
  });

  describe('Complete Workflow Tests', () => {
    it('should complete full validation workflow with changes and PR creation', () => {
      let validationId: string;

      cy.intercept('POST', apiUrl, (req) => {
        if (req.body.action === 'initialize') {
          req.reply({ statusCode: 200, body: mockInitializeResponse });
        } else if (req.body.action === 'process_next_document') {
          // Simulate processing multiple documents, then completion
          if (!req.body.processedCount || req.body.processedCount < 14) {
            req.reply({ statusCode: 200, body: mockProcessDocumentWithChanges });
          } else {
            req.reply({ statusCode: 200, body: mockCompletionWithChanges });
          }
        }
      }).as('fullWorkflow');

      // Initialize validation
      cy.request({
        method: 'POST',
        url: apiUrl,
        body: { action: 'initialize' }
      }).then((initResponse) => {
        validationId = initResponse.body.validationId;
        expect(initResponse.body.data.nextStep).to.eq('process_next_document');
      });

      // Process documents until completion
      const processDocuments = (count = 0) => {
        if (count < 15) {
          cy.request({
            method: 'POST',
            url: apiUrl,
            body: {
              action: 'process_next_document',
              validationId: validationId,
              processedCount: count
            }
          }).then((response) => {
            if (response.body.status === 'document_processed') {
              processDocuments(count + 1);
            } else if (response.body.status === 'completed_with_pr_created') {
              // Validation completed successfully
              expect(response.body.success).to.be.true;
              expect(response.body.data.pullRequest).to.exist;
              expect(response.body.data.pullRequest.url).to.include('github.com');
              expect(response.body.data.totalChanges).to.be.a('number');
              expect(response.body.data.totalPlatformsUpdated).to.be.a('number');
              expect(response.body.data.progress.percentage).to.eq(100);
            }
          });
        }
      };

      processDocuments();
    });

    it('should complete validation workflow with no changes needed', () => {
      let validationId: string;

      cy.intercept('POST', apiUrl, (req) => {
        if (req.body.action === 'initialize') {
          req.reply({ statusCode: 200, body: mockInitializeResponse });
        } else if (req.body.action === 'process_next_document') {
          // Simulate processing all documents with no changes, then completion
          if (!req.body.processedCount || req.body.processedCount < 14) {
            req.reply({ statusCode: 200, body: mockProcessDocumentNoChanges });
          } else {
            req.reply({ statusCode: 200, body: mockCompletionNoChanges });
          }
        }
      }).as('noChangesWorkflow');

      // Initialize validation
      cy.request({
        method: 'POST',
        url: apiUrl,
        body: { action: 'initialize' }
      }).then((initResponse) => {
        validationId = initResponse.body.validationId;
      });

      // Process documents until completion
      const processDocuments = (count = 0) => {
        if (count < 15) {
          cy.request({
            method: 'POST',
            url: apiUrl,
            body: {
              action: 'process_next_document',
              validationId: validationId,
              processedCount: count
            }
          }).then((response) => {
            if (response.body.status === 'document_processed') {
              processDocuments(count + 1);
            } else if (response.body.status === 'completed_no_changes') {
              // Validation completed with no changes
              expect(response.body.success).to.be.true;
              expect(response.body.message).to.include('No policy changes needed');
              expect(response.body.data.progress.percentage).to.eq(100);
            }
          });
        }
      };

      processDocuments();
    });
  });

  describe('Error Handling', () => {
    it('should handle malformed requests', () => {
      cy.intercept('POST', apiUrl, {
        statusCode: 400,
        body: { error: 'Invalid action' }
      }).as('malformedRequest');

      cy.request({
        method: 'POST',
        url: apiUrl,
        body: { action: 'invalid_action' },
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(400);
        expect(response.body.error).to.eq('Invalid action');
      });

      cy.wait('@malformedRequest');
    });

    it('should handle missing required parameters', () => {
      cy.intercept('POST', apiUrl, {
        statusCode: 400,
        body: { error: 'Missing required parameters' }
      }).as('missingParams');

      cy.request({
        method: 'POST',
        url: apiUrl,
        body: { action: 'process_next_document' }, // Missing validationId
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(400);
        expect(response.body.error).to.exist;
      });

      cy.wait('@missingParams');
    });

    it('should handle server errors during processing', () => {
      cy.intercept('POST', apiUrl, (req) => {
        if (req.body.action === 'initialize') {
          req.reply({ statusCode: 200, body: mockInitializeResponse });
        } else if (req.body.action === 'process_next_document') {
          req.reply({
            statusCode: 500,
            body: { error: 'AI service temporarily unavailable' }
          });
        }
      }).as('serverError');

      // Initialize first
      cy.request({
        method: 'POST',
        url: apiUrl,
        body: { action: 'initialize' }
      }).then((initResponse) => {
        const validationId = initResponse.body.validationId;

        // Then try to process and expect error
        cy.request({
          method: 'POST',
          url: apiUrl,
          body: {
            action: 'process_next_document',
            validationId: validationId
          },
          failOnStatusCode: false
        }).then((response) => {
          expect(response.status).to.eq(500);
          expect(response.body.error).to.exist;
        });
      });
    });
  });
});