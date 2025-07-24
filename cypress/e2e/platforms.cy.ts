enum PlatformId {
  FACEBOOK = 'facebook',
  INSTAGRAM = 'instagram',
  TIKTOK = 'tiktok',
  ONLYFANS = 'onlyfans',
  PORNHUB = 'pornhub',
  OTHER = 'other',
}

describe('Platform Tests', () => {
  // Shared test data for all platforms
  const platformTestData = {
    [PlatformId.FACEBOOK]: {
      platformName: 'Facebook',
      contentUrl: 'https://facebook.com/post/12345',
      contentDescription: 'Content appears in a public post on the user profile @testuser',
      contentType: 'Personal content',
      contentContext: 'Posted by someone I know',
      uploadDate: '5 March 2025',
      creationDate: '20 February 2025',
      ownershipEvidence:
        'I can be identified in the content and have the original files on my device',
      impactStatement: 'This has affected my personal relationships and caused me distress',
      reportingStatus: "I've tried both processes",
      standardProcessDetails: "I reported through Facebook's in-app reporting tool on March 6th",
      escalatedProcessDetails: "I submitted a detailed report through Facebook's Help Center form",
      responseReceived: 'Facebook sent an automated response but took no further action',
      additionalStepsTaken: 'I followed up via their support email twice requesting an update',
      expectedEmail: 'records@facebook.com',
    },
    [PlatformId.INSTAGRAM]: {
      platformName: 'Instagram',
      contentUrl: 'https://instagram.com/p/ABC123DEF456',
      contentDescription: 'Content appears in story highlights and recent posts',
      contentType: 'Intimate images',
      contentContext: 'Someone is impersonating me',
      uploadDate: '10 March 2025',
      creationDate: '1 March 2025',
      ownershipEvidence:
        'I have the original photos with metadata and can verify through distinctive features',
      impactStatement:
        'This impersonation has damaged my reputation and caused significant emotional distress',
      reportingStatus: "I've tried the standard reporting process",
      standardProcessDetails: "I used Instagram's report feature multiple times over the past week",
      escalatedProcessDetails: '',
      responseReceived: "Instagram reviewed my report but said it didn't violate their guidelines",
      additionalStepsTaken: 'I tried reporting individual posts and the account itself separately',
      expectedEmail: 'records@instagram.com',
    },
    [PlatformId.TIKTOK]: {
      platformName: 'TikTok',
      contentUrl: 'https://tiktok.com/@user/video/7234567890123456789',
      contentDescription: 'Content appears in multiple videos on the account @fakeaccount',
      contentType: 'Private information',
      contentContext: 'Account was compromised',
      uploadDate: '15 March 2025',
      creationDate: '10 March 2025',
      ownershipEvidence: 'This is my personal information that was taken from my private accounts',
      impactStatement:
        'Having my private information shared publicly has made me feel unsafe and violated my privacy',
      reportingStatus: "I've tried the escalated reporting process",
      standardProcessDetails: '',
      escalatedProcessDetails:
        "I submitted a detailed privacy violation report through TikTok's specialized form",
      responseReceived: 'TikTok acknowledged my report and said they were investigating',
      additionalStepsTaken: 'I provided additional evidence when they requested more information',
      expectedEmail: 'legal@tiktok.com',
    },
    [PlatformId.ONLYFANS]: {
      platformName: 'OnlyFans',
      contentUrl: 'https://onlyfans.com/user/content-id-789',
      contentDescription: 'Content appears on a verified account that is not mine',
      contentType: 'Intimate images',
      contentContext: 'Posted by someone I know',
      uploadDate: '20 March 2025',
      creationDate: '15 March 2025',
      ownershipEvidence:
        'I am the person depicted in this content and never consented to its sharing on this platform',
      impactStatement:
        'This unauthorized sharing has violated my consent and caused me significant distress',
      reportingStatus: "I haven't tried either process yet",
      standardProcessDetails: '',
      escalatedProcessDetails: '',
      responseReceived: '',
      additionalStepsTaken: '',
      expectedEmail: 'support@onlyfans.com',
    },
    [PlatformId.PORNHUB]: {
      platformName: 'Pornhub',
      contentUrl: 'https://pornhub.com/view_video.php?viewkey=ph123456789abcdef',
      contentDescription: 'Content appears in multiple videos uploaded by different accounts',
      contentType: 'Intimate images',
      contentContext: 'Source unknown',
      uploadDate: '25 March 2025',
      creationDate: '20 March 2025',
      ownershipEvidence:
        'I am the person in this content and it was shared without my knowledge or consent',
      impactStatement:
        'Discovering this content online has been deeply distressing and violates my privacy',
      reportingStatus: "I've tried both processes",
      standardProcessDetails:
        "I used Pornhub's content removal request form and provided verification",
      escalatedProcessDetails:
        'I contacted their Trust & Safety team directly with additional documentation',
      responseReceived: 'Pornhub confirmed receipt of my request and said they were reviewing it',
      additionalStepsTaken: 'I provided additional verification documents when requested',
      expectedEmail: 'content@pornhub.com',
    },
    [PlatformId.OTHER]: {
      platformName: 'Reddit',
      contentUrl: 'https://reddit.com/r/subreddit/comments/abc123/post-title',
      contentDescription: 'Content appears in multiple subreddit posts and comments',
      contentType: 'Personal content',
      contentContext: 'Source unknown',
      uploadDate: '30 March 2025',
      creationDate: '25 March 2025',
      ownershipEvidence:
        'These are my personal photos that were taken from my social media accounts',
      impactStatement:
        'Having my personal content shared without permission has made me feel exposed and unsafe',
      reportingStatus: "I haven't tried either process yet",
      standardProcessDetails: '',
      escalatedProcessDetails: '',
      responseReceived: '',
      additionalStepsTaken: '',
      expectedEmail: "Please check the platform's help center for the appropriate contact email",
    },
  };

  // Shared helper functions
  function startFlow() {
    cy.visit('/');
    cy.dismissDevWarning();
    cy.contains('Start your request').click();
    cy.get('h2').contains('Building your takedown letter');
    cy.contains('Start your request', { timeout: 10000 }).click();
  }

  function selectPlatform(platformName: string) {
    if (platformName === 'Reddit') {
      cy.contains('Other platform').click();
      cy.get('#other-platform').type(platformName);
    } else {
      cy.get('h3').contains(platformName).click();
    }
    cy.contains('Continue').click();
  }

  function selectReportingStatus(status: string) {
    if (status !== "I haven't tried either process yet") {
      cy.contains(status).click();
      cy.contains('Continue').click();
    }
  }

  function fillInitialQuestions(data: any) {
    cy.contains(data.contentType).click();
    cy.contains(data.contentContext).click();

    cy.get('input[type="radio"][value="url"]').check();
    cy.get('input[id="contentUrl"]').type(data.contentUrl);

    cy.get('#imageUploadDate').type(data.uploadDate);
    cy.get('#imageTakenDate').type(data.creationDate);
    cy.get('#ownershipEvidence').type(data.ownershipEvidence);
    cy.get('#impactStatement').type(data.impactStatement);

    cy.contains('Continue').click();
  }

  function fillReportingDetails(data: any) {
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
    cy.contains('Analysing your responses', { timeout: 30000 });
    cy.contains('Continue', { timeout: 30000 }).click();
    cy.contains('Creating your letter', { timeout: 40000 });
    cy.contains('Review and send', { timeout: 100000 }).should('be.visible');
  }

  function verifyLetterContent(data: any) {
    cy.contains('Subject line').should('be.visible');
    cy.contains('Message content').should('be.visible');
    cy.contains(data.expectedEmail).should('be.visible');
    cy.verifyContentLocationInLetter(data.contentUrl, 'url');
  }

  function runCompleteFlow(platformKey: PlatformId) {
    const data = platformTestData[platformKey];

    startFlow();
    selectPlatform(data.platformName);
    selectReportingStatus(data.reportingStatus);
    fillInitialQuestions(data);
    fillReportingDetails(data);
    waitForLetterGeneration();
    verifyLetterContent(data);
  }

  // Individual platform tests
  it('completes Facebook takedown request flow', () => {
    runCompleteFlow(PlatformId.FACEBOOK);
  });

  it('completes Instagram takedown request flow', () => {
    runCompleteFlow(PlatformId.INSTAGRAM);
  });

  it('completes TikTok takedown request flow', () => {
    runCompleteFlow(PlatformId.TIKTOK);
  });

  it('completes OnlyFans takedown request flow', () => {
    runCompleteFlow(PlatformId.ONLYFANS);
  });

  it('completes Pornhub takedown request flow', () => {
    runCompleteFlow(PlatformId.PORNHUB);
  });

  it('completes custom platform (Reddit) takedown request flow', () => {
    runCompleteFlow(PlatformId.OTHER);
  });
});
