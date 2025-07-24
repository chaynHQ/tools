describe('Instagram Platform Flow', () => {
  const testData = {
    contentUrl: 'https://instagram.com/p/ABC123DEF456',
    contentDescription: 'Content appears in story highlights and recent posts',
    contentType: 'Intimate images',
    contentContext: 'Someone is impersonating me',
    uploadDate: '10 March 2025',
    creationDate: '1 March 2025',
    ownershipEvidence: 'I have the original photos with metadata and can verify through distinctive features',
    impactStatement: 'This impersonation has damaged my reputation and caused significant emotional distress',
    reportingStatus: "I've tried the standard reporting process",
    standardProcessDetails: 'I used Instagram\'s report feature multiple times over the past week',
    responseReceived: 'Instagram reviewed my report but said it didn\'t violate their guidelines',
    additionalStepsTaken: 'I tried reporting individual posts and the account itself separately'
  };

  function startFlow() {
    cy.visit('/');
    cy.dismissDevWarning();
    cy.contains('Start your request').click();
    cy.get('h2').contains('Building your takedown letter');
    cy.contains('Start your request', { timeout: 10000 }).click();
  }

  function selectPlatform() {
    cy.get('h3').contains('Instagram').click();
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
    cy.contains('records@instagram.com').should('be.visible');
    cy.verifyContentLocationInLetter(testData.contentUrl, 'url');
  }

  it('completes Instagram impersonation takedown request flow', () => {
    startFlow();
    selectPlatform();
    selectReportingStatus();
    fillInitialQuestions();
    fillReportingDetails();
    waitForLetterGeneration();
    verifyLetterContent();
  });
});