describe('Tiktok Platform Flow', () => {
  before(() => {
    cy.visit('/');
  });

  it('starts the request and navigates to the letter generator', () => {
    cy.contains('Start your request').click();
    cy.get('h2').contains('Building your takedown letter');
    cy.contains('Start your request').click();
    cy.url().should('include', '/letter-generator');

    cy.contains('TikTok').click();
    cy.contains('Continue').click();
    cy.contains("I've tried both processes").click();
    cy.contains('Continue').click();
    cy.contains('Intimate images').click();
    cy.contains('Account was compromised').click();

    cy.get('input[type="radio"][value="url"]').check();
    cy.get('input[id="contentUrl"]').type('https://tiktok.com/harmful-post-123');
    cy.get('#imageUploadDate').type('1 March 2025');
    cy.get('#imageTakenDate').type('15 February 2025');

    cy.get('#ownershipEvidence').type('https://facebook.com/myprofile');
    cy.get('#impactStatement').type(
      'This has caused me significant anxiety and affected my mental health.',
    );
    cy.contains('Continue').click();

    cy.get('#standardProcessDetails').type(
      "I reported the content through the platform's reporting tool on 10th January 2025",
    );
    cy.get('#escalatedProcessDetails').type("I escalated through the platform's suggested route");
    cy.get('#responseReceived').type('No response was received from the platform');
    cy.get('#additionalStepsTaken').type('I sent a follow-up email to request an update');
    cy.contains('Continue').click();

    cy.contains('Analysing your responses', { timeout: 30000 });
    cy.contains('Continue', { timeout: 30000 }).click();
    cy.contains('Creating your letter', { timeout: 40000 });
    cy.contains('Review and send', { timeout: 100000 }).should('be.visible');
    cy.contains('Subject line').should('be.visible');
    cy.contains('Message content').should('be.visible');
  });
});
