describe('Initial Flow', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should complete the full letter generation flow with URL input', () => {
    // Start the process
    cy.contains('Start your request').click();

    // Verify we're on the letter generator page
    cy.url().should('include', '/letter-generator');

    // Select Instagram and continue
    cy.contains('Instagram').click();
    cy.contains('Continue').click();

    // Select reporting status and continue
    cy.contains("I've tried both processes").click();
    cy.contains('Continue').click();

    // Select content type and context
    cy.contains('Intimate images').click();
    cy.contains('Account was compromised').click();

    // Fill in content location using URL option
    cy.get('input[type="radio"][value="url"]').check();
    cy.get('input[type="url"]').type('https://example.com/harmful-content');

    // Fill in dates
    cy.get('#imageUploadDate').type('15 January 2025');
    cy.get('#imageTakenDate').type('1 January 2025');

    // Fill in verification and impact
    cy.get('#ownershipEvidence').type('https://facebook.com/myprofile');
    cy.get('#impactStatement').type(
      'This has caused me significant anxiety and affected my mental health.'
    );

    cy.contains('Continue').click();

    // Fill in reporting process details
    cy.get('#standardProcessDetails').type(
      "I reported the content through the platform's reporting tool on 10th January 2025"
    );
    cy.get('#escalatedProcessDetails').type(
      "I escalated through the platform's suggested route"
    );
    cy.get('#responseReceived').type(
      'No response was received from the platform'
    );
    cy.get('#additionalStepsTaken').type(
      'I sent a follow-up email to request an update'
    );

    cy.contains('Continue').click();

    // Wait for AI to generate follow-up questions
    cy.contains('Analysing your responses', { timeout: 30000 });

    cy.contains('Continue', { timeout: 30000 }).click();

    // Wait for letter generation
    cy.contains('Creating your personalised letter', { timeout: 40000 });

    // Verify letter was generated
    cy.contains('Your personalised letter', { timeout: 60000 }).should(
      'be.visible'
    );
    cy.contains('Subject line').should('be.visible');
    cy.contains('Message content').should('be.visible');
  });

  it('should complete the full letter generation flow with description input', () => {
    // Start the process
    cy.contains('Start your request').click();

    // Verify we're on the letter generator page
    cy.url().should('include', '/letter-generator');

    // Select Instagram and continue
    cy.contains('Instagram').click();
    cy.contains('Continue').click();

    // Select reporting status and continue
    cy.contains("I've tried both processes").click();
    cy.contains('Continue').click();

    // Select content type and context
    cy.contains('Intimate images').click();
    cy.contains('Account was compromised').click();

    // Fill in content location using description option
    cy.get('input[type="radio"][value="description"]').check();
    cy.get('textarea[id="contentDescription"]').type('The content appears in posts by the user @username in an album titled "Summer 2024"');

    // Fill in dates
    cy.get('#imageUploadDate').type('15 January 2025');
    cy.get('#imageTakenDate').type('1 January 2025');

    // Fill in verification and impact
    cy.get('#ownershipEvidence').type('I can be identified by specific features in the content');
    cy.get('#impactStatement').type(
      'This has caused me significant anxiety and affected my mental health.'
    );

    cy.contains('Continue').click();

    // Fill in reporting process details
    cy.get('#standardProcessDetails').type(
      "I reported the content through the platform's reporting tool on 10th January 2025"
    );
    cy.get('#escalatedProcessDetails').type(
      "I escalated through the platform's suggested route"
    );
    cy.get('#responseReceived').type(
      'No response was received from the platform'
    );
    cy.get('#additionalStepsTaken').type(
      'I sent a follow-up email to request an update'
    );

    cy.contains('Continue').click();

    // Wait for AI to generate follow-up questions
    cy.contains('Analysing your responses', { timeout: 30000 });

    cy.contains('Continue', { timeout: 30000 }).click();

    // Wait for letter generation
    cy.contains('Creating your personalised letter', { timeout: 40000 });

    // Verify letter was generated
    cy.contains('Your personalised letter', { timeout: 60000 }).should(
      'be.visible'
    );
    cy.contains('Subject line').should('be.visible');
    cy.contains('Message content').should('be.visible');
  });
});