describe('Pornhub Platform Flow', () => {
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
    platform: 'Pornhub',
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
    additionalStepsTaken: 'I provided additional verification documents when requested',
    expectedEmail: 'content@pornhub.com',
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

  it('completes Pornhub non-consensual content takedown request flow', () => {
    runCompleteFlow(testData);
  });
});