describe('TikTok Platform Flow', () => {
  const testData = {
    contentUrl: 'https://tiktok.com/@user/video/7234567890123456789',
    contentDescription: 'Content appears in multiple videos on the account @fakeaccount',
    contentType: 'Private information',
    contentContext: 'Account was compromised',
    uploadDate: '15 March 2025',
    creationDate: '10 March 2025',
    ownershipEvidence: 'This is my personal information that was taken from my private accounts',
    impactStatement: 'Having my private information shared publicly has made me feel unsafe and violated my privacy',
    reportingStatus: "I've tried the escalated reporting process",
    escalatedProcessDetails: 'I submitted a detailed privacy violation report through TikTok\'s specialized form',
    responseReceived: 'TikTok acknowledged my report and said they were investigating',
    additionalStepsTaken: 'I provided additional evidence when they requested more information'
  };

  function startFlow() {
    cy.visit('/');
    cy.dismissDevWarning();
    cy.contains('Start your request').click();
    cy.get('h2').contains('Building your takedown letter');
    cy.contains('Start your request', { timeout: 10000 }).click();
  }

  function selectPlatform() {
    cy.contains('TikTok').click();
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
    cy.contains('legal@tiktok.com').should('be.visible');
    cy.verifyContentLocationInLetter(testData.contentUrl, 'url');
  }

  it('completes TikTok privacy violation takedown request flow', () => {
    startFlow();
    selectPlatform();
    selectReportingStatus();
    fillInitialQuestions();
    fillReportingDetails();
    waitForLetterGeneration();
    verifyLetterContent();
  });
});