describe.skip('TikTok Platform Flow', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should complete the full letter generation flow for TikTok', () => {
    // Start the process
    cy.contains('Start your request').click();

    // Verify we're on the letter generator page
    cy.url().should('include', '/letter-generator');

    // Select TikTok and continue
    cy.contains('TikTok').click();
    cy.contains('Continue').click();

    // Select reporting status and continue
    cy.contains("I haven't tried either process yet").click();
    cy.contains('Continue').click();

    // Select content type and context
    cy.contains('Intimate images').click();
    cy.contains('Account was compromised').click();

    // Fill in content location using URL option
    cy.get('input[type="radio"][value="url"]').check();
    cy.get('input[type="url"]').type('https://tiktok.com/@username/video/123456789');

    // Fill in dates
    cy.get('#imageUploadDate').type('5 March 2025');
    cy.get('#imageTakenDate').type('1 March 2025');

    // Fill in verification and impact
    cy.get('#ownershipEvidence').type('The content was taken from my private account');
    cy.get('#impactStatement').type(
      'This has caused significant distress and affected my mental health'
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
    cy.contains('legal@tiktok.com').should('be.visible');
  });
});