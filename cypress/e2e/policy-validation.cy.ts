describe('Policy Validation API', () => {
  beforeEach(() => {
    // Mock external AI service calls (Gemini)
    cy.intercept('POST', '**/v1beta/models/gemini-*:generateContent', {
      statusCode: 200,
      body: {
        candidates: [{
          content: {
            parts: [{
              text: JSON.stringify({
                status: 'updated',
                reasoning: 'Found policy updates based on document analysis',
                updatedPolicies: [{
                  reference: 'FB-TOS',
                  policy: 'Updated policy based on document changes',
                  removalCriteria: ['Updated removal criteria'],
                  evidenceRequirements: ['Updated evidence requirements']
                }]
              })
            }]
          }
        }]
      }
    }).as('geminiCall');

    // Mock GitHub API calls for PR creation
    cy.intercept('GET', 'https://api.github.com/repos/chaynHQ/tools', {
      statusCode: 200,
      body: {
        default_branch: 'main'
      }
    }).as('getRepo');

    cy.intercept('GET', 'https://api.github.com/repos/chaynHQ/tools/branches/main', {
      statusCode: 200,
      body: {
        commit: { sha: 'abc123' }
      }
    }).as('getBranch');

    cy.intercept('POST', 'https://api.github.com/repos/chaynHQ/tools/git/refs', {
      statusCode: 201,
      body: { ref: 'refs/heads/test-branch' }
    }).as('createBranch');

    cy.intercept('PUT', 'https://api.github.com/repos/chaynHQ/tools/contents/**', {
      statusCode: 200,
      body: { commit: { sha: 'def456' } }
    }).as('createFile');

    cy.intercept('POST', 'https://api.github.com/repos/chaynHQ/tools/pulls', {
      statusCode: 201,
      body: {
        html_url: 'https://github.com/chaynHQ/tools/pull/123',
        number: 123
      }
    }).as('createPR');
  });

  describe('Initialization', () => {
    it('should successfully initialize validation session', () => {
      cy.request({
        method: 'POST',
        url: '/api/policies/validate',
        body: {
          action: 'initialize'
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('success', true);
        expect(response.body).to.have.property('validationId');
        expect(response.body.data).to.have.property('totalDocuments');
        expect(response.body.data).to.have.property('totalPlatforms');
        expect(response.body.data).to.have.property('platforms');
        expect(response.body.data).to.have.property('nextStep', 'process_next_document');
        
        // Validate structure
        expect(response.body.validationId).to.match(/^validation_\d+_[a-z0-9]+$/);
        expect(response.body.data.totalDocuments).to.be.a('number');
        expect(response.body.data.totalPlatforms).to.be.a('number');
        expect(response.body.data.platforms).to.be.an('array');
      });
    });

    it('should handle invalid action during initialization', () => {
      cy.request({
        method: 'POST',
        url: '/api/policies/validate',
        body: {
          action: 'invalid_action'
        },
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(400);
        expect(response.body).to.have.property('error', 'Invalid action');
      });
    });
  });

  describe('Document Processing', () => {
    let validationId: string;

    beforeEach(() => {
      // Initialize a session first
      cy.request({
        method: 'POST',
        url: '/api/policies/validate',
        body: {
          action: 'initialize'
        }
      }).then((response) => {
        validationId = response.body.validationId;
      });
    });

    it('should process documents and find changes', () => {
      cy.then(() => {
        cy.request({
          method: 'POST',
          url: '/api/policies/validate',
          body: {
            action: 'process_next_document',
            validationId: validationId
          }
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property('success', true);
          expect(response.body).to.have.property('status', 'document_processed');
          expect(response.body.data).to.have.property('currentDocument');
          expect(response.body.data).to.have.property('analysis');
          expect(response.body.data).to.have.property('progress');
          
          // Validate progress structure
          expect(response.body.data.progress).to.have.property('current');
          expect(response.body.data.progress).to.have.property('total');
          expect(response.body.data.progress).to.have.property('percentage');
          
          // Validate analysis structure
          expect(response.body.data.analysis).to.have.property('status');
          expect(response.body.data.analysis).to.have.property('reasoning');
          
          // Check that AI was called
          cy.get('@geminiCall').should('have.been.called');
        });
      });
    });

    it('should handle invalid validation ID', () => {
      cy.request({
        method: 'POST',
        url: '/api/policies/validate',
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

    it('should handle missing validation ID', () => {
      cy.request({
        method: 'POST',
        url: '/api/policies/validate',
        body: {
          action: 'process_next_document'
        },
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(404);
        expect(response.body).to.have.property('error', 'Validation session not found');
      });
    });
  });

  describe('Complete Workflow', () => {
    it('should complete full validation workflow with changes and PR creation', () => {
      let validationId: string;
      
      // Step 1: Initialize
      cy.request({
        method: 'POST',
        url: '/api/policies/validate',
        body: {
          action: 'initialize'
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
        validationId = response.body.validationId;
        const totalDocuments = response.body.data.totalDocuments;
        
        // Step 2: Process all documents
        const processAllDocuments = (currentIndex = 0) => {
          if (currentIndex >= totalDocuments) {
            return; // All documents processed
          }
          
          cy.request({
            method: 'POST',
            url: '/api/policies/validate',
            body: {
              action: 'process_next_document',
              validationId: validationId
            }
          }).then((response) => {
            expect(response.status).to.eq(200);
            
            if (response.body.data.nextStep === 'completed') {
              // Workflow completed
              expect(response.body).to.have.property('status');
              expect(['completed_with_pr_created', 'completed_no_changes', 'completed_with_changes']).to.include(response.body.status);
              
              if (response.body.status === 'completed_with_pr_created') {
                expect(response.body.data).to.have.property('pullRequest');
                expect(response.body.data.pullRequest).to.have.property('url');
                expect(response.body.data.pullRequest).to.have.property('number');
                
                // Verify GitHub API calls were made
                cy.get('@getRepo').should('have.been.called');
                cy.get('@getBranch').should('have.been.called');
                cy.get('@createBranch').should('have.been.called');
                cy.get('@createFile').should('have.been.called');
                cy.get('@createPR').should('have.been.called');
              }
              
              expect(response.body.data).to.have.property('progress');
              expect(response.body.data.progress.percentage).to.eq(100);
            } else {
              // Continue processing
              processAllDocuments(currentIndex + 1);
            }
          });
        };
        
        processAllDocuments();
      });
    });
  });

  describe('Error Handling', () => {
    it('should handle AI service failures gracefully', () => {
      // Override the Gemini mock to return an error
      cy.intercept('POST', '**/v1beta/models/gemini-*:generateContent', {
        statusCode: 500,
        body: { error: 'AI service unavailable' }
      }).as('geminiError');
      
      let validationId: string;
      
      cy.request({
        method: 'POST',
        url: '/api/policies/validate',
        body: {
          action: 'initialize'
        }
      }).then((response) => {
        validationId = response.body.validationId;
        
        cy.request({
          method: 'POST',
          url: '/api/policies/validate',
          body: {
            action: 'process_next_document',
            validationId: validationId
          }
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property('success', true);
          expect(response.body).to.have.property('status', 'document_processed_with_error');
          expect(response.body.data.analysis).to.have.property('status', 'error');
          expect(response.body.data.analysis.reasoning).to.include('Processing failed');
        });
      });
    });

    it('should handle GitHub API failures gracefully', () => {
      // Override GitHub mocks to return errors
      cy.intercept('GET', 'https://api.github.com/repos/chaynHQ/tools', {
        statusCode: 500,
        body: { message: 'GitHub API unavailable' }
      }).as('githubError');
      
      // Mock Gemini to return changes so we trigger PR creation
      cy.intercept('POST', '**/v1beta/models/gemini-*:generateContent', {
        statusCode: 200,
        body: {
          candidates: [{
            content: {
              parts: [{
                text: JSON.stringify({
                  status: 'updated',
                  reasoning: 'Found changes',
                  updatedPolicies: [{
                    reference: 'FB-TOS',
                    policy: 'Updated policy',
                    removalCriteria: ['Updated criteria'],
                    evidenceRequirements: ['Updated requirements']
                  }]
                })
              }]
            }
          }]
        }
      }).as('geminiWithChanges');
      
      let validationId: string;
      
      cy.request({
        method: 'POST',
        url: '/api/policies/validate',
        body: {
          action: 'initialize'
        }
      }).then((response) => {
        validationId = response.body.validationId;
        
        // Process documents until completion
        const processUntilComplete = () => {
          cy.request({
            method: 'POST',
            url: '/api/policies/validate',
            body: {
              action: 'process_next_document',
              validationId: validationId
            }
          }).then((response) => {
            if (response.body.data.nextStep === 'completed') {
              // Should complete with PR error
              expect(response.body.status).to.eq('completed_with_pr_error');
              expect(response.body.data).to.have.property('error');
            } else {
              processUntilComplete();
            }
          });
        };
        
        processUntilComplete();
      });
    });
  });
});