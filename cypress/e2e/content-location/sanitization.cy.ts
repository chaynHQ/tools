describe('Content Location Sanitization and Desanitization', () => {
  interface TestScenario {
    platform: string;
    contentLocation: string;
    locationType: 'url' | 'description';
    contentType: string;
    contentContext: string;
    reportingStatus: string;
    uploadDate: string;
    creationDate: string;
    ownershipEvidence: string;
    impactStatement: string;
    standardProcessDetails?: string;
    escalatedProcessDetails?: string;
    responseReceived?: string;
    additionalStepsTaken?: string;
  }

  beforeEach(() => {
    cy.visit('/');
    cy.dismissDevWarning();
  });

  // Test data for different scenarios
  const testScenarios: Record<string, TestScenario> = {
    facebookUrl: {
      platform: 'Facebook',
      contentLocation: 'https://facebook.com/test-post-12345',
      locationType: 'url' as const,
      contentType: 'Intimate images',
      contentContext: 'Account was compromised',
      reportingStatus: "I haven't tried either process yet",
      uploadDate: '1 March 2025',
      creationDate: '15 February 2025',
      ownershipEvidence: 'I can verify this is my content',
      impactStatement: 'This has caused significant distress',
    },
    instagramDescription: {
      platform: 'Instagram',
      contentLocation: 'The content appears in posts by the user @testuser in their photo album',
      locationType: 'description' as const,
      contentType: 'Personal content',
      contentContext: 'Someone is impersonating me',
      reportingStatus: "I haven't tried either process yet",
      uploadDate: '2 March 2025',
      creationDate: '20 February 2025',
      ownershipEvidence: 'I have the original files',
      impactStatement: 'This is affecting my reputation',
    },
    redditUrl: {
      platform: 'Reddit',
      contentLocation: 'https://reddit.com/r/test/comments/abc123',
      locationType: 'url' as const,
      contentType: 'Private information',
      contentContext: 'Posted by someone I know',
      reportingStatus: "I haven't tried either process yet",
      uploadDate: '5 March 2025',
      creationDate: '1 March 2025',
      ownershipEvidence: 'This is my personal information',
      impactStatement: 'This violates my privacy',
    },
    tiktokRegeneration: {
      platform: 'TikTok',
      contentLocation: 'https://tiktok.com/@user/video/1234567890',
      locationType: 'url' as const,
      contentType: 'Intimate images',
      contentContext: 'Posted by someone I know',
      reportingStatus: "I've tried the standard reporting process",
      uploadDate: '10 March 2025',
      creationDate: '5 March 2025',
      ownershipEvidence: 'I can verify ownership',
      impactStatement: 'This is causing distress',
      standardProcessDetails: 'I reported through TikTok reporting tool',
    },
  };

  function startFlow() {
    cy.contains('Start your request').click();
    cy.get('h2').contains('Building your takedown letter', { timeout: 10000 });
    cy.contains('Start your request').click();
  }

  function selectPlatform(platformName: string) {
    if (platformName === 'Reddit') {
      cy.contains('Other platform').click();
      cy.get('#other-platform').type('Reddit');
    } else {
      cy.get('h3').contains(platformName).click();
    }
    cy.contains('Continue').click();
  }

  function selectReportingStatus(status: string) {
    cy.contains(status).click();
    cy.contains('Continue').click();
  }

  function fillInitialQuestions(data: typeof testScenarios.facebookUrl) {
    cy.contains(data.contentType).click();
    cy.contains(data.contentContext).click();

    if (data.locationType === 'url') {
      cy.get('input[type="radio"][value="url"]').check();
      cy.get('input[id="contentUrl"]').type(data.contentLocation);
    } else {
      cy.get('input[type="radio"][value="description"]').check();
      cy.get('#contentDescription').type(data.contentLocation);
    }

    cy.get('#imageUploadDate').type(data.uploadDate);
    cy.get('#imageTakenDate').type(data.creationDate);
    cy.get('#ownershipEvidence').type(data.ownershipEvidence);
    cy.get('#impactStatement').type(data.impactStatement);
    cy.contains('Continue').click();
  }

  function fillReportingDetails(data: typeof testScenarios.tiktokRegeneration) {
    if (data.standardProcessDetails) {
      cy.get('#standardProcessDetails').type(data.standardProcessDetails);
    }
    cy.contains('Continue').click();
  }

  function waitForLetterGeneration() {
    cy.contains('Continue', { timeout: 30000 }).click();
    cy.contains('Review and send', { timeout: 100000 }).should('be.visible');
  }

  function verifyContentLocationInLetter(
    expectedLocation: string,
    locationType: 'url' | 'description',
  ) {
    cy.get('h4')
      .contains('Message content')
      .parent()
      .within(() => {
        cy.get('div').should('contain', expectedLocation);
        cy.get('div').should('not.contain', '[Content Location]');
        cy.get('div').should('not.contain', '[CONTENT_LOCATION]');
        cy.get('div').should('contain', 'Content location: ' + expectedLocation);
      });
  }

  function regenerateLetter() {
    cy.contains('Regenerate').click();
    cy.contains('Regenerating your letter', { timeout: 10000 }).should('be.visible');
    cy.contains('Message content', { timeout: 100000 }).should('be.visible');
  }

  it('correctly sanitizes and restores URL content location in generated letter', () => {
    const data = testScenarios.facebookUrl;

    startFlow();
    selectPlatform(data.platform);
    selectReportingStatus(data.reportingStatus);
    fillInitialQuestions(data);
    waitForLetterGeneration();
    verifyContentLocationInLetter(data.contentLocation, data.locationType);
  });

  it('correctly sanitizes and restores description content location in generated letter', () => {
    const data = testScenarios.instagramDescription;

    startFlow();
    selectPlatform(data.platform);
    selectReportingStatus(data.reportingStatus);
    fillInitialQuestions(data);
    waitForLetterGeneration();
    verifyContentLocationInLetter(data.contentLocation, data.locationType);
  });

  it('handles content location restoration for custom platforms', () => {
    const data = testScenarios.redditUrl;

    startFlow();
    selectPlatform(data.platform);
    fillInitialQuestions(data);
    waitForLetterGeneration();
    verifyContentLocationInLetter(data.contentLocation, data.locationType);
  });

  it('preserves content location through letter regeneration', () => {
    const data = testScenarios.tiktokRegeneration;

    startFlow();
    selectPlatform(data.platform);
    selectReportingStatus(data.reportingStatus);
    fillInitialQuestions(data);
    fillReportingDetails(data);
    waitForLetterGeneration();

    // Verify content location in first letter
    verifyContentLocationInLetter(data.contentLocation, data.locationType);

    // Regenerate the letter
    regenerateLetter();

    // Verify content location is still present in regenerated letter
    verifyContentLocationInLetter(data.contentLocation, data.locationType);
  });
});
