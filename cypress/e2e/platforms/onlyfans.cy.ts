describe('OnlyFans Platform Flow', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should complete the full letter generation flow for OnlyFans', () => {
    // Start the process
    cy.contains('Start your request').click();

    // Verify we're on the letter generator page
    cy.url().should('include', '/letter-generator');

    // Select OnlyFans and continue
    cy.contains('OnlyFans').click();
    cy.contains('Continue').click();

    // Select reporting status and continue
    cy.contains("I've tried the standard reporting process").click();
    cy.contains('Continue').click();

    // Select content type and context
    cy.contains('Private information').click();
    cy.contains('Someone is impersonating me').click();

    // Fill in content location
    cy.get('#imageIdentification').type('https://onlyfans.com/users/123456789');

    // Fill in dates
    cy.get('#imageUploadDate').type('10 March 2025');
    cy.get('#imageTakenDate').type('5 March 2025');

    // Fill in verification and impact
    cy.get('#ownershipEvidence').type('I can provide proof of my identity and original content');
    cy.get('#impactStatement').type(
      'This impersonation has affected my reputation and business'
    );

    cy.contains('Continue').click();

    // Fill in reporting process details
    cy.get('#standardProcessDetails').type(
      'I reported the content through OnlyFans reporting system'
    );
    cy.get('#responseReceived').type(
      'OnlyFans sent an automated response but no action was taken'
    );
    cy.get('#additionalStepsTaken').type(
      'I tried contacting support through email'
    );

    cy.contains('Continue', {timeout: 30000}).click();

    // Wait for AI to generate follow-up questions
    cy.contains('Analysing your responses', { timeout: 30000 });

    cy.contains('Continue', { timeout: 30000 }).click();

    // Wait for letter generation
    cy.contains('Creating your personalised letter', { timeout: 40000 });

    // Verify letter was generated
    cy.contains('Your personalised letter', { timeout: 60000 }).should('be.visible');
    cy.contains('Subject line').should('be.visible');
    cy.contains('Message content').should('be.visible');
    cy.contains('support@onlyfans.com').should('be.visible');
  });
});