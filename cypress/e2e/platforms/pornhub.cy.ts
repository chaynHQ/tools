describe('Pornhub Platform Flow', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should complete the full letter generation flow for Pornhub', () => {
    // Start the process
    cy.contains('Start your request').click();

    // Verify we're on the letter generator page
    cy.url().should('include', '/letter-generator');

    // Select Pornhub and continue
    cy.contains('Pornhub').click();
    cy.contains('Continue').click();

    // Select reporting status and continue
    cy.contains("I've tried the escalated reporting process").click();
    cy.contains('Continue').click();

    // Select content type and context
    cy.contains('Intimate images').click();
    cy.contains('Source unknown').click();

    // Fill in content location
    cy.get('#imageIdentification').type('https://pornhub.com/view_video.php?viewkey=123456789');

    // Fill in dates
    cy.get('#imageUploadDate').type('15 March 2025');
    cy.get('#imageTakenDate').type('10 March 2025');

    // Fill in verification and impact
    cy.get('#ownershipEvidence').type('I can be identified in the content');
    cy.get('#impactStatement').type(
      'This has caused severe emotional distress and affected my work life'
    );

    cy.contains('Continue').click();

    // Fill in reporting process details
    cy.get('#escalatedProcessDetails').type(
      'I submitted a detailed content removal request form'
    );
    cy.get('#responseReceived').type(
      'Received an automated response but content remains online'
    );
    cy.get('#additionalStepsTaken').type(
      'I followed up through their support system multiple times'
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
    cy.contains('content@pornhub.com').should('be.visible');
  });
});