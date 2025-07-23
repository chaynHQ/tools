function startFacebookFlow() {
  cy.visit('/');
  // Dismiss development warning if it appears
  cy.dismissDevWarning();
  cy.contains('Start your request').click();
  cy.get('h2').contains('Building your takedown letter');
  cy.contains('Start your request').click();
  cy.get('h3').contains('Facebook').click();
  cy.contains('Continue').click();
  cy.log('Started Facebook flow');
}

function selectFacebookReportingStatus() {
  cy.contains("I've tried both processes").click();
  cy.log('Selected Facebook reporting status');
  cy.contains('Continue').click();
}

function selectFacebookContentTypeAndContext() {
  cy.contains('Personal content').click();
  cy.contains('Posted by someone I know').click();
  cy.log('Selected Facebook content type and context');
}

function fillFacebookContentLocationAndDates() {
  cy.get('input[type="radio"][value="url"]').check();
  cy.get('input[id="contentUrl"]').type('https://facebook.com/harmful-post-123');
  cy.get('#imageUploadDate').type('1 March 2025');
  cy.get('#imageTakenDate').type('15 February 2025');
  cy.log('Filled Facebook content location and dates');
}

function fillFacebookVerificationAndImpact() {
  cy.get('#ownershipEvidence').type('I can be identified in the content and have original copies');
  cy.get('#impactStatement').type(
    'This has affected my personal and professional relationships significantly.',
  );
  cy.contains('Continue').click();
  cy.log('Filled Facebook verification and impact statements');
}

function fillFacebookReportingProcessDetails() {
  cy.get('#standardProcessDetails').type(
    "I reported through Facebook's reporting tool on March 2nd, 2025",
  );
  cy.get('#escalatedProcessDetails').type(
    "I submitted a detailed report through Facebook's Help Center",
  );
  cy.get('#responseReceived').type('Facebook acknowledged my report but no action was taken');
  cy.get('#additionalStepsTaken').type('I tried contacting Facebook support multiple times');
  cy.contains('Continue').click();
  cy.log('Filled Facebook reporting process details');
}

describe('Facebook Platform Flow', () => {
  it('waits for AI follow-up and generates the letter', () => {
    const testUrl = 'https://facebook.com/harmful-post-123';
    
    startFacebookFlow();
    selectFacebookReportingStatus();
    selectFacebookContentTypeAndContext();
    cy.get('input[type="radio"][value="url"]').check();
    cy.get('input[id="contentUrl"]').type(testUrl);
    cy.get('#imageUploadDate').type('1 March 2025');
    cy.get('#imageTakenDate').type('15 February 2025');
    cy.log('Filled Facebook content location and dates');
    fillFacebookVerificationAndImpact();
    fillFacebookReportingProcessDetails();
    cy.contains('Analysing your responses', { timeout: 30000 });
    cy.contains('Continue', { timeout: 30000 }).click();
    cy.contains('Creating your letter', { timeout: 40000 });
    cy.contains('Review and send', { timeout: 100000 }).should('be.visible');
    cy.contains('Subject line').should('be.visible');
    cy.contains('Message content').should('be.visible');
    cy.contains('records@facebook.com').should('be.visible');
    
    // Verify content location is properly restored in the letter
    cy.verifyContentLocationInLetter(testUrl, 'url');
  });
});
