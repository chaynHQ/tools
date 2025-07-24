describe('TikTok Platform Flow', () => {
  interface PlatformTestData {
    platform: string;
    contentUrl: string;
    contentDescription: string;
    contentType: string;
    contentContext: string;
    uploadDate: string;
    creationDate: string;
    ownershipEvidence: string;
    impactStatement: string;
    reportingStatus: string;
    standardProcessDetails?: string;
    escalatedProcessDetails?: string;
    responseReceived?: string;
    additionalStepsTaken?: string;
    expectedEmail: string;
    locationType: 'url' | 'description';
  }

  const testData: PlatformTestData = {
    platform: 'TikTok',
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
    additionalStepsTaken: 'I provided additional evidence when they requested more information',
    expectedEmail: 'legal@tiktok.com',
    locationType: 'url'
  };

  beforeEach(() => {
    cy.visit('/');
    cy.dismissDevWarning();
  });

  function startFlow() {
    cy.contains('Start your request').click();
    cy.get('h2').contains('Building your takedown letter', { timeout: 10000 });
    cy.contains('Start your request').click();
  }

  function selectPlatform(platformName: string) {
    if (platformName === 'Other') {
      cy.contains('Other platform').click();
      cy.get('#other-platform').type('TestPlatform');
    } else {
      cy.get('h3').contains(platformName).click();
    }
    cy.contains('Continue').click();
  }

  function selectReportingStatus(status: string) {
    cy.contains(status).click();
    cy.contains('Continue').click();
  }

  function fillInitialQuestions(data: PlatformTestData) {
    cy.contains(data.contentType).click();
    cy.contains(data.contentContext).click();

    if (data.locationType === 'url') {
      cy.get('input[type="radio"][value="url"]').check();
      cy.get('input[id="contentUrl"]').type(data.contentUrl);
    } else {
      cy.get('input[type="radio"][value="description"]').check();
      cy.get('#contentDescription').type(data.contentDescription);
    }

    cy.get('#imageUploadDate').type(data.uploadDate);
    cy.get('#imageTakenDate').type(data.creationDate);
    cy.get('#ownershipEvidence').type(data.ownershipEvidence);
    cy.get('#impactStatement').type(data.impactStatement);
    cy.contains('Continue').click();
  }

  function fillReportingDetails(data: PlatformTestData) {
    if (data.standardProcessDetails) {
      cy.get('#standardProcessDetails').type(data.standardProcessDetails);
    }
    if (data.escalatedProcessDetails) {
      cy.get('#escalatedProcessDetails').type(data.escalatedProcessDetails);
    }
    if (data.responseReceived) {
      cy.get('#responseReceived').type(data.responseReceived);
    }
    if (data.additionalStepsTaken) {
      cy.get('#additionalStepsTaken').type(data.additionalStepsTaken);
    }
    cy.contains('Continue').click();
  }

  function waitForLetterGeneration() {
    cy.contains('Continue', { timeout: 30000 }).click();
    cy.contains('Review and send', { timeout: 100000 }).should('be.visible');
    cy.get('h4').contains('Message content', { timeout: 10000 }).should('be.visible');
  }

  function verifyLetterContent(data: PlatformTestData) {
    cy.contains('Subject line').should('be.visible');
    cy.contains('Message content').should('be.visible');
    cy.contains(data.expectedEmail).should('be.visible');
    
    const expectedLocation = data.locationType === 'url' ? data.contentUrl : data.contentDescription;
    cy.verifyContentLocationInLetter(expectedLocation, data.locationType);
  }

  function runCompleteFlow(data: PlatformTestData) {
    startFlow();
    selectPlatform(data.platform);
    selectReportingStatus(data.reportingStatus);
    fillInitialQuestions(data);
    
    // Only fill reporting details if we have previous attempts
    if (data.reportingStatus !== "I haven't tried either process yet") {
      fillReportingDetails(data);
    }
    
    waitForLetterGeneration();
    verifyLetterContent(data);
  }

  it('completes TikTok privacy violation takedown request flow', () => {
    runCompleteFlow(testData);
  });
});