describe('Pornhub Platform Flow', () => {
  const testData = {
    contentUrl: 'https://pornhub.com/view_video.php?viewkey=ph123456789abcdef',
    contentDescription: 'Content appears in multiple videos uploaded by different accounts',
    contentType: 'Intimate images',
    contentContext: 'Source unknown',
    uploadDate: '25 March 2025',
    creationDate: '20 March 2025',
    ownershipEvidence: 'I am the person in this content and it was shared without my knowledge or consent',
    impactStatement: 'Discovering this content online has been deeply distressing and violates my privacy',
    reportingStatus: "I've tried both processes",
    standardProcessDetails: 'I used Pornhub\'s content removal request form and provided verification',
    escalatedProcessDetails: 'I contacted their Trust & Safety team directly with additional documentation',
    responseReceived: 'Pornhub confirmed receipt of my request and said they were reviewing it',
    additionalStepsTaken: 'I provided additional verification documents when requested'
  };

  function startFlow() {
    cy.visit('/');
    cy.dismissDevWarning();
    cy.contains('Start your request').click();
    cy.get('h2').contains('Building your takedown letter');
    cy.contains('Start your request', { timeout: 10000 }).click();
  }

  function selectPlatform() {
    cy.contains('Pornhub').click();
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
    cy.contains('content@pornhub.com').should('be.visible');
    cy.verifyContentLocationInLetter(testData.contentUrl, 'url');
  }

  it('completes Pornhub non-consensual content takedown request flow', () => {
    startFlow();
    selectPlatform();
    selectReportingStatus();
    fillInitialQuestions();
    fillReportingDetails();
    waitForLetterGeneration();
    verifyLetterContent();
  });
});