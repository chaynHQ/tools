describe('Development Data Collection', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.dismissDevWarning();
  });

  it('collects and sends development data after letter generation', () => {
    // Intercept the development data collection API call
    cy.intercept('POST', '/api/dev-data-collection', {
      statusCode: 200,
      body: { success: true },
    }).as('devDataCollection');

    // Complete a full flow
    cy.contains('Start your request').click();
    cy.get('h2').contains('Building your takedown letter');
    cy.contains('Start your request').click();

    // Platform selection
    cy.get('h3').contains('Instagram').click();
    cy.contains('Continue').click();

    // Reporting status
    cy.contains("I've tried both processes").click();
    cy.contains('Continue').click();

    // Initial questions
    cy.contains('Personal content').click();
    cy.contains('Posted by someone I know').click();
    cy.get('input[type="radio"][value="url"]').check();
    cy.get('input[id="contentUrl"]').type('https://instagram.com/test-post');
    cy.get('#imageUploadDate').type('1 March 2025');
    cy.get('#imageTakenDate').type('15 February 2025');
    cy.get('#ownershipEvidence').type('I can verify this is my content');
    cy.get('#impactStatement').type('This has caused significant distress');
    cy.contains('Continue').click();

    // Reporting details
    cy.get('#standardProcessDetails').type('I reported through Instagram reporting tool');
    cy.get('#escalatedProcessDetails').type('I contacted Instagram support directly');
    cy.get('#responseReceived').type('Instagram acknowledged but took no action');
    cy.get('#additionalStepsTaken').type('I followed up multiple times');
    cy.contains('Continue').click();

    // Follow-up questions
    cy.contains('Continue', { timeout: 30000 }).click();

    // Wait for letter generation and review page
    cy.contains('Review and send', { timeout: 100000 }).should('be.visible');

    // Verify development data was sent
    cy.wait('@devDataCollection', { timeout: 20000 }).then((interception) => {
      expect(interception.request.body).to.have.property('formData');
      expect(interception.request.body).to.have.property('generatedLetter');
      expect(interception.request.body).to.have.property('sessionId');
      expect(interception.request.body.sessionId).to.match(/^[a-z0-9]{12}$/);
    });

    // Verify session ID is displayed
    cy.verifyDevSessionId();
  });

  it('handles data collection errors gracefully', () => {
    // Intercept with error response
    cy.intercept('POST', '/api/dev-data-collection', {
      statusCode: 500,
      body: { error: 'Server error' },
    }).as('devDataCollectionError');

    // Complete minimal flow
    cy.contains('Start your request').click();
    cy.get('h2').contains('Building your takedown letter');
    cy.contains('Start your request').click();
    cy.contains('Other platform').click();
    cy.get('#other-platform').type('TestPlatform');
    cy.contains('Continue').click();

    cy.contains('Intimate images').click();
    cy.contains('Account was compromised').click();
    cy.get('input[type="radio"][value="description"]').check();
    cy.get('#contentDescription').type('Test content');
    cy.contains('Continue').click();

    cy.contains('Continue', { timeout: 30000 }).click();
    cy.contains('Review and send', { timeout: 100000 }).should('be.visible');

    // Verify error was handled (should still show development mode notice)
    cy.contains('Testing mode').should('be.visible');

    // Should show error state or fallback message
    cy.contains('Generating session ID').should('be.visible');
  });
});
