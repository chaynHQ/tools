describe('OnlyFans Platform Flow', () => {
  const testData = {
    contentUrl: 'https://onlyfans.com/user/content-id-789',
    contentDescription: 'Content appears on a verified account that is not mine',
    contentType: 'Intimate images',
    contentContext: 'Posted by someone I know',
    uploadDate: '20 March 2025',
    creationDate: '15 March 2025',
    ownershipEvidence: 'I am the person depicted in this content and never consented to its sharing on this platform',
    impactStatement: 'This unauthorized sharing has violated my consent and caused me significant distress',
    reportingStatus: "I haven't tried either process yet",
    standardProcessDetails: '',
    escalatedProcessDetails: '',
    responseReceived: '',
    additionalStepsTaken: ''
  };

  function startFlow() {
    cy.visit('/');
    cy.dismissDevWarning();
    cy.contains('Start your request').click();
    cy.get('h2').contains('Building your takedown letter');
    cy.contains('Start your request', { timeout: 10000 }).click();
  }

  function selectPlatform() {
    cy.contains('OnlyFans').click();
    cy.contains('Continue').click();
  }

  function selectReportingStatus() {
    cy.contains(testData.reportingStatus).click();
    cy.contains('Continue').click();
  }

  function fillInitialQuestions() {
    cy.contains(testData.contentType).click();
    cy.contains(testData.contentContext).click();
    
    cy.get('input[type="radio"][value="url"]').check();
    cy.get('input[id="contentUrl"]').type(testData.contentUrl);
    
    cy.get('#imageUploadDate').type(testData.uploadDate);
    cy.get('#imageTakenDate').type(testData.creationDate);
    cy.get('#ownershipEvidence').type(testData.ownershipEvidence);
    cy.get('#impactStatement').type(testData.impactStatement);
    
    cy.contains('Continue').click();
  }

  function waitForLetterGeneration() {
    cy.contains('Analysing your responses', { timeout: 30000 });
    cy.contains('Continue', { timeout: 30000 }).click();
    cy.contains('Creating your letter', { timeout: 40000 });
    cy.contains('Review and send', { timeout: 100000 }).should('be.visible');
  }

  function verifyLetterContent() {
    cy.contains('Subject line').should('be.visible');
    cy.contains('Message content').should('be.visible');
    cy.contains('support@onlyfans.com').should('be.visible');
    cy.verifyContentLocationInLetter(testData.contentUrl, 'url');
  }

  it('completes OnlyFans non-consensual content takedown request flow', () => {
    startFlow();
    selectPlatform();
    selectReportingStatus();
    fillInitialQuestions();
    // Skip reporting details since user hasn't tried either process
    waitForLetterGeneration();
    verifyLetterContent();
  });
});