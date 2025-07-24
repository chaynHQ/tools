describe('Other Platform Flow', () => {
  const testData = {
    platformName: 'Reddit',
    contentUrl: 'https://reddit.com/r/subreddit/comments/abc123/post-title',
    contentDescription: 'Content appears in multiple subreddit posts and comments',
    contentType: 'Personal content',
    contentContext: 'Source unknown',
    uploadDate: '30 March 2025',
    creationDate: '25 March 2025',
    ownershipEvidence: 'These are my personal photos that were taken from my social media accounts',
    impactStatement: 'Having my personal content shared without permission has made me feel exposed and unsafe'
  };

  function startFlow() {
    cy.visit('/');
    cy.dismissDevWarning();
    cy.contains('Start your request').click();
    cy.get('h2').contains('Building your takedown letter');
    cy.contains('Start your request', { timeout: 10000 }).click();
  }

  function selectPlatform() {
    cy.contains('Other platform').click();
    cy.get('#other-platform').type(testData.platformName);
    cy.contains('Continue').click();
  }

  function fillInitialQuestions() {
    cy.contains(testData.contentType).click();
    cy.contains(testData.contentContext).click();
    
    cy.get('input[type="radio"][value="description"]').check();
    cy.get('#contentDescription').type(testData.contentDescription);
    
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
    cy.verifyContentLocationInLetter(testData.contentDescription, 'description');
  }

  it('completes custom platform takedown request flow using content description', () => {
    startFlow();
    selectPlatform();
    fillInitialQuestions();
    waitForLetterGeneration();
    verifyLetterContent();
  });
});