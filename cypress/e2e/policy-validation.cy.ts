describe('Policy Validation API', () => {
  const baseUrl = Cypress.config('baseUrl') || 'http://localhost:3000';
  const apiUrl = `${baseUrl}/api/policies/validate`;

  beforeEach(() => {
    // Set test environment variable
    cy.window().then((win) => {
      win.localStorage.setItem('CYPRESS_TEST_MODE', 'true');
    });
  });

  afterEach(() => {
    // Clean up test environment
    cy.window().then((win) => {
      win.localStorage.removeItem('CYPRESS_TEST_MODE');
    });
  });

  describe('Initialization', () => {
    it('should initialize validation session successfully', () => {
      cy.request({
        method: 'POST',
        url: apiUrl,
        headers: {
          'Content-Type': 'application/json',
          'X-Cypress-Test': 'true'
        },
        body: {
          action: 'initialize'
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('success', true);
        expect(response.body).to.have.property('validationId');
        expect(response.body.validationId).to.match(/^validation_\d+_[a-z0-9]+$/);
        expect(response.body.data).to.have.property('totalDocuments');
        expect(response.body.data).to.have.property('totalPlatforms');
        expect(response.body.data).to.have.property('platforms');
        expect(response.body.data).to.have.property('nextStep', 'process_next_document');
        expect(response.body.data.totalDocuments).to.be.greaterThan(0);
        expect(response.body.data.totalPlatforms).to.be.greaterThan(0);
        expect(response.body.data.platforms).to.be.an('array');
      });
    });

    it('should handle initialization with custom platforms', () => {
      cy.request({
        method: 'POST',
        url: apiUrl,
        headers: {
          'Content-Type': 'application/json',
          'X-Cypress-Test': 'true'
        },
        body: {
          action: 'initialize',
          platforms: ['facebook', 'instagram']
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.success).to.be.true;
        expect(response.body.data.platforms).to.include.members(['facebook', 'instagram']);
      });
    });
  });

  describe('Document Processing', () => {
    let validationId: string;

    beforeEach(() => {
      // Initialize a session before each test
      cy.request({
        method: 'POST',
        url: apiUrl,
        headers: {
          'Content-Type': 'application/json',
          'X-Cypress-Test': 'true'
        },
        body: {
          action: 'initialize'
        }
      }).then((response) => {
        validationId = response.body.validationId;
      });
    });

    it('should process first document successfully', () => {
      cy.request({
        method: 'POST',
        url: apiUrl,
        headers: {
          'Content-Type': 'application/json',
          'X-Cypress-Test': 'true'
        },
        body: {
          action: 'process_next_document',
          validationId: validationId
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.success).to.be.true;
        expect(response.body.status).to.eq('document_processed');
        expect(response.body.data).to.have.property('currentDocument');
        expect(response.body.data).to.have.property('analysis');
        expect(response.body.data).to.have.property('progress');
        expect(response.body.data.currentDocument).to.have.property('title');
        expect(response.body.data.currentDocument).to.have.property('reference');
        expect(response.body.data.analysis).to.have.property('status');
        expect(response.body.data.progress).to.have.property('current', 1);
        expect(response.body.data.progress).to.have.property('total');
        expect(response.body.data.progress).to.have.property('percentage');
      });
    });

    it('should handle invalid validation ID', () => {
      cy.request({
        method: 'POST',
        url: apiUrl,
        headers: {
          'Content-Type': 'application/json',
          'X-Cypress-Test': 'true'
        },
        body: {
          action: 'process_next_document',
          validationId: 'invalid_id'
        },
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(404);
        expect(response.body).to.have.property('error', 'Validation session not found');
      });
    });

    it('should process document with updates found', () => {
      cy.request({
        method: 'POST',
        url: apiUrl,
        headers: {
          'Content-Type': 'application/json',
          'X-Cypress-Test': 'true',
          'X-Mock-Analysis': 'updated'
        },
        body: {
          action: 'process_next_document',
          validationId: validationId
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.data.analysis.status).to.eq('updated');
        expect(response.body.data.analysis).to.have.property('reasoning');
        expect(response.body.data.analysis).to.have.property('updatedPolicies');
        expect(response.body.data.analysis).to.have.property('validation');
        expect(response.body.data.analysis.validation).to.have.property('validationStatus', 'valid');
      });
    });

    it('should process document with no changes needed', () => {
      cy.request({
        method: 'POST',
        url: apiUrl,
        headers: {
          'Content-Type': 'application/json',
          'X-Cypress-Test': 'true',
          'X-Mock-Analysis': 'no_change'
        },
        body: {
          action: 'process_next_document',
          validationId: validationId
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.data.analysis.status).to.eq('no_change');
        expect(response.body.data.analysis).to.have.property('reasoning');
        expect(response.body.data.analysis).to.not.have.property('updatedPolicies');
      });
    });
  });

  describe('Complete Workflow', () => {
    it('should complete full validation workflow with changes', () => {
      let validationId: string;

      // Step 1: Initialize
      cy.request({
        method: 'POST',
        url: apiUrl,
        headers: {
          'Content-Type': 'application/json',
          'X-Cypress-Test': 'true'
        },
        body: {
          action: 'initialize',
          platforms: ['facebook'] // Use single platform for faster test
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
        validationId = response.body.validationId;
        const totalDocuments = response.body.data.totalDocuments;

        // Step 2: Process all documents
        const processAllDocuments = (currentDoc = 0) => {
          if (currentDoc >= totalDocuments) {
            return; // All documents processed
          }

          cy.request({
            method: 'POST',
            url: apiUrl,
            headers: {
              'Content-Type': 'application/json',
              'X-Cypress-Test': 'true',
              'X-Mock-Analysis': currentDoc === 0 ? 'updated' : 'no_change' // First doc has changes
            },
            body: {
              action: 'process_next_document',
              validationId: validationId
            }
          }).then((response) => {
            expect(response.status).to.eq(200);
            
            if (response.body.status === 'document_processed') {
              // Continue processing
              processAllDocuments(currentDoc + 1);
            } else if (response.body.status === 'completed_with_changes') {
              // Validation completed with changes
              expect(response.body.data).to.have.property('updatedPolicies');
              expect(response.body.data).to.have.property('totalChanges');
              expect(response.body.data).to.have.property('totalPlatformsUpdated');
              expect(response.body.data.totalChanges).to.be.greaterThan(0);
              expect(response.body.data.totalPlatformsUpdated).to.be.greaterThan(0);
            }
          });
        };

        processAllDocuments();
      });
    });

    it('should complete validation workflow with no changes', () => {
      let validationId: string;

      // Step 1: Initialize
      cy.request({
        method: 'POST',
        url: apiUrl,
        headers: {
          'Content-Type': 'application/json',
          'X-Cypress-Test': 'true'
        },
        body: {
          action: 'initialize',
          platforms: ['facebook'] // Use single platform for faster test
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
        validationId = response.body.validationId;
        const totalDocuments = response.body.data.totalDocuments;

        // Step 2: Process all documents with no changes
        const processAllDocuments = (currentDoc = 0) => {
          if (currentDoc >= totalDocuments) {
            return; // All documents processed
          }

          cy.request({
            method: 'POST',
            url: apiUrl,
            headers: {
              'Content-Type': 'application/json',
              'X-Cypress-Test': 'true',
              'X-Mock-Analysis': 'no_change' // All docs have no changes
            },
            body: {
              action: 'process_next_document',
              validationId: validationId
            }
          }).then((response) => {
            expect(response.status).to.eq(200);
            
            if (response.body.status === 'document_processed') {
              // Continue processing
              processAllDocuments(currentDoc + 1);
            } else if (response.body.status === 'completed_no_changes') {
              // Validation completed with no changes
              expect(response.body.message).to.include('No policy changes needed');
              expect(response.body.data.progress.percentage).to.eq(100);
            }
          });
        };

        processAllDocuments();
      });
    });
  });

  describe('Error Handling', () => {
    it('should handle invalid action', () => {
      cy.request({
        method: 'POST',
        url: apiUrl,
        headers: {
          'Content-Type': 'application/json',
          'X-Cypress-Test': 'true'
        },
        body: {
          action: 'invalid_action'
        },
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(400);
        expect(response.body).to.have.property('error', 'Invalid action');
      });
    });

    it('should handle missing action', () => {
      cy.request({
        method: 'POST',
        url: apiUrl,
        headers: {
          'Content-Type': 'application/json',
          'X-Cypress-Test': 'true'
        },
        body: {},
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(400);
        expect(response.body).to.have.property('error', 'Invalid action');
      });
    });

    it('should handle malformed JSON', () => {
      cy.request({
        method: 'POST',
        url: apiUrl,
        headers: {
          'Content-Type': 'application/json',
          'X-Cypress-Test': 'true'
        },
        body: 'invalid json',
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.be.oneOf([400, 500]);
        expect(response.body).to.have.property('error');
      });
    });
  });
});