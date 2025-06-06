describe('Other Platform Flow', () => {
  before(() => {
    cy.visit('/');
  });

  it('completes flow for Other Platforms', () => {
    cy.contains('Start your request').click();
    cy.get('h2').contains('Building your takedown letter');
    cy.contains('Start your request').click();
    cy.url().should('include', '/letter-generator');
    // Select Other platform
    cy.contains('Other platform').click();

    // Fill in custom platform name
    cy.get('#other-platform').type('Reddit');
    cy.contains('Continue').click();
    cy.contains('Intimate images').click();
    cy.contains('Account was compromised').click();

    cy.get('input[type="radio"][value="url"]').check();
    cy.get('input[id="contentUrl"]').type('https://reddit.com/harmful-post-123');
    cy.get('#imageUploadDate').type('1 March 2025');
    cy.get('#imageTakenDate').type('15 February 2025');

    cy.get('#ownershipEvidence').type('https://facebook.com/myprofile');
    cy.get('#impactStatement').type(
      'This has caused me significant anxiety and affected my mental health.',
    );
    cy.contains('Continue').click();
    cy.contains('Analysing your responses', { timeout: 30000 });
    cy.contains('Continue', { timeout: 30000 }).click();
    cy.contains('Creating your letter', { timeout: 40000 });
    cy.contains('Review and send', { timeout: 100000 }).should('be.visible');
    cy.contains('Subject line').should('be.visible');
    cy.contains('Message content').should('be.visible');
  });
});
