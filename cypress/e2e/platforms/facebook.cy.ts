describe('Facebook Platform Flow', () => {
  const testData = {
    contentUrl: 'https://facebook.com/post/12345',
    contentDescription: 'Content appears in a public post on the user profile @testuser',
    contentType: 'Personal content',
    contentContext: 'Posted by someone I know',
    uploadDate: '5 March 2025',
    creationDate: '20 February 2025',
    ownershipEvidence: 'I can be identified in the content and have the original files on my device',
    impactStatement: 'This has affected my personal relationships and caused me distress',
    reportingStatus: "I've tried both processes",
    standardProcessDetails: 'I reported through Facebook\'s in-app reporting tool on March 6th',
    escalatedProcessDetails: 'I submitted a detailed report through Facebook\'s Help Center form',
    responseReceived: 'Facebook sent an automated response but took no further action',
    additionalStepsTaken: 'I followed up via their support email twice requesting an update'
  };

  function startFlow() {
    cy.visit('/');
    cy.dismissDevWarning();
    cy.contains('Start your request').click();
    cy.get('h2').contains('Building your takedown letter');
    cy.contains('Start your request', { timeout: 10000 }).click();
  }

  function selectPlatform() {
    cy.get('h3').contains('Facebook').click();
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

  function fillReportingDetails() {
    cy.get('#standardProcessDetails').type(testData.standardProcessDetails);
    cy.get('#escalatedProcessDetails').type(testData.escalatedProcessDetails);
    cy.get('#responseReceived').type(testData.responseReceived);
    cy.get('#additionalStepsTaken').type(testData.additionalStepsTaken);
    
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
    cy.contains('records@facebook.com').should('be.visible');
    cy.verifyContentLocationInLetter(testData.contentUrl, 'url');
  }

  it('completes full Facebook takedown request flow', () => {
    startFlow();
    selectPlatform();
    selectReportingStatus();
    fillInitialQuestions();
    fillReportingDetails();
    waitForLetterGeneration();
    verifyLetterContent();
  });
});