describe('Facebook Platform Flow', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should complete the full letter generation flow for Facebook', () => {
    // Start the process
    cy.contains('Start your request').click();

    // Verify we're on the letter generator page
    cy.url().should('include', '/letter-generator');

    // Select Facebook and continue
    cy.contains('Facebook').click();
    cy.contains('Continue').click();

    // Select reporting status and continue
    cy.contains("I've tried both processes").click();
    cy.contains('Continue').click();

    // Select content type and context
    cy.contains('Personal content').click();
    cy.contains('Posted by someone I know').click();

    // Fill in content location
    cy.get('#imageIdentification').type('https://facebook.com/harmful-post-123');

    // Fill in dates
    cy.get('#imageUploadDate').type('1 March 2025');
    cy.get('#imageTakenDate').type('15 February 2025');

    // Fill in verification and impact
    cy.get('#ownershipEvidence').type('I can be identified in the content and have original copies');
    cy.get('#impactStatement').type(
      'This has affected my personal and professional relationships significantly.'
    );

    cy.contains('Continue').click();

    // Fill in reporting process details
    cy.get('#standardProcessDetails').type(
      'I reported through Facebook\'s reporting tool on March 2nd, 2025'
    );
    cy.get('#escalatedProcessDetails').type(
      'I submitted a detailed report through Facebook\'s Help Center'
    );
    cy.get('#responseReceived').type(
      'Facebook acknowledged my report but no action was taken'
    );
    cy.get('#additionalStepsTaken').type(
      'I tried contacting Facebook support multiple times'
    );

    cy.contains('Continue').click();

    // Wait for AI to generate follow-up questions
    cy.contains('Analysing your responses', { timeout: 30000 });

    cy.contains('Continue', { timeout: 30000 }).click();

    // Wait for letter generation
    cy.contains('Creating your personalised letter', { timeout: 40000 });

    // Verify letter was generated
    cy.contains('Your personalised letter', { timeout: 60000 }).should('be.visible');
    cy.contains('Subject line').should('be.visible');
    cy.contains('Message content').should('be.visible');
    cy.contains('records@facebook.com').should('be.visible');
  });
});