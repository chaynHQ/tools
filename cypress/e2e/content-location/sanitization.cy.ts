describe('Content Location Sanitization and Desanitization', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.dismissDevWarning();
  });

  it('correctly sanitizes and restores URL content location in generated letter', () => {
    const testUrl = 'https://facebook.com/test-post-12345';
    
    // Complete the flow with URL content location
    cy.contains('Start your request').click();
    cy.get('h2').contains('Building your takedown letter', {timeout: 10000});
    cy.contains('Start your request').click();
    
    // Select platform
    cy.get('h3').contains('Facebook').click();
    cy.contains('Continue').click();
    
    // Select reporting status
    cy.contains("I haven't tried either process yet").click();
    cy.contains('Continue').click();
    
    // Fill initial questions with URL
    cy.contains('Intimate images').click();
    cy.contains('Account was compromised').click();
    cy.get('input[type="radio"][value="url"]').check();
    cy.get('input[id="contentUrl"]').type(testUrl);
    cy.get('#imageUploadDate').type('1 March 2025');
    cy.get('#imageTakenDate').type('15 February 2025');
    cy.get('#ownershipEvidence').type('I can verify this is my content');
    cy.get('#impactStatement').type('This has caused significant distress');
    cy.contains('Continue').click();
    
    // Skip follow-up questions
    cy.contains('Continue', { timeout: 30000 }).click();
    
    // Wait for letter generation
    cy.contains('Review and send', { timeout: 100000 }).should('be.visible');
    
    // Verify the content location appears in the letter body (not as placeholder)
    cy.get('h4').contains('Message content').parent().within(() => {
      cy.get('div').should('contain', testUrl);
      cy.get('div').should('not.contain', '[Content Location]');
      cy.get('div').should('not.contain', '[CONTENT_LOCATION]');
    });
    
    // Verify it appears in the correct context
    cy.get('h4').contains('Message content').parent().within(() => {
      cy.get('div').should('contain', 'Content location: ' + testUrl);
    });
  });

  it('correctly sanitizes and restores description content location in generated letter', () => {
    const testDescription = 'The content appears in posts by the user @testuser in their photo album';
    
    // Complete the flow with description content location
    cy.contains('Start your request').click();
    cy.get('h2').contains('Building your takedown letter');
    cy.contains('Start your request').click();
    
    // Select platform
    cy.get('h3').contains('Instagram').click();
    cy.contains('Continue').click();
    
    // Select reporting status
    cy.contains("I haven't tried either process yet").click();
    cy.contains('Continue').click();
    
    // Fill initial questions with description
    cy.contains('Personal content').click();
    cy.contains('Someone is impersonating me').click();
    cy.get('input[type="radio"][value="description"]').check();
    cy.get('#contentDescription').type(testDescription);
    cy.get('#imageUploadDate').type('2 March 2025');
    cy.get('#imageTakenDate').type('20 February 2025');
    cy.get('#ownershipEvidence').type('I have the original files');
    cy.get('#impactStatement').type('This is affecting my reputation');
    cy.contains('Continue').click();
    
    // Skip follow-up questions
    cy.contains('Continue', { timeout: 30000 }).click();
    
    // Wait for letter generation
    cy.contains('Review and send', { timeout: 100000 }).should('be.visible');
    
    // Verify the content location appears in the letter body (not as placeholder)
    cy.get('h4').contains('Message content').parent().within(() => {
      cy.get('div').should('contain', testDescription);
      cy.get('div').should('not.contain', '[Content Location]');
      cy.get('div').should('not.contain', '[CONTENT_LOCATION]');
    });
    
    // Verify it appears in the correct context for descriptions
    cy.get('h4').contains('Message content').parent().within(() => {
      cy.get('div').should('contain', 'Content location: ' + testDescription);
    });
  });

  it('handles content location restoration for custom platforms', () => {
    const testUrl = 'https://reddit.com/r/test/comments/abc123';
    
    // Complete the flow with custom platform
    cy.contains('Start your request').click();
    cy.get('h2').contains('Building your takedown letter');
    cy.contains('Start your request').click();
    
    // Select other platform
    cy.contains('Other platform').click();
    cy.get('#other-platform').type('Reddit');
    cy.contains('Continue').click();
    
    // Fill initial questions
    cy.contains('Private information').click();
    cy.contains('Posted by someone I know').click();
    cy.get('input[type="radio"][value="url"]').check();
    cy.get('input[id="contentUrl"]').type(testUrl);
    cy.get('#imageUploadDate').type('5 March 2025');
    cy.get('#imageTakenDate').type('1 March 2025');
    cy.get('#ownershipEvidence').type('This is my personal information');
    cy.get('#impactStatement').type('This violates my privacy');
    cy.contains('Continue').click();
    
    // Skip follow-up questions
    cy.contains('Continue', { timeout: 30000 }).click();
    
    // Wait for letter generation
    cy.contains('Review and send', { timeout: 100000 }).should('be.visible');
    
    // Verify the content location is properly restored
    cy.get('h4').contains('Message content').parent().within(() => {
      cy.get('div').should('contain', testUrl);
      cy.get('div').should('not.contain', '[Content Location]');
      cy.get('div').should('not.contain', '[CONTENT_LOCATION]');
    });
  });

  it('preserves content location through letter regeneration', () => {
    const testUrl = 'https://tiktok.com/@user/video/1234567890';
    
    // Complete initial flow
    cy.contains('Start your request').click();
    cy.get('h2').contains('Building your takedown letter');
    cy.contains('Start your request').click();
    
    cy.get('h3').contains('TikTok').click();
    cy.contains('Continue').click();
    
    cy.contains("I've tried the standard reporting process").click();
    cy.contains('Continue').click();
    
    cy.contains('Intimate images').click();
    cy.contains('Posted by someone I know').click();
    cy.get('input[type="radio"][value="url"]').check();
    cy.get('input[id="contentUrl"]').type(testUrl);
    cy.get('#imageUploadDate').type('10 March 2025');
    cy.get('#imageTakenDate').type('5 March 2025');
    cy.get('#ownershipEvidence').type('I can verify ownership');
    cy.get('#impactStatement').type('This is causing distress');
    cy.contains('Continue').click();
    
    // Fill reporting details
    cy.get('#standardProcessDetails').type('I reported through TikTok reporting tool');
    cy.contains('Continue').click();
    
    // Skip follow-up questions
    cy.contains('Continue', { timeout: 30000 }).click();
    
    // Wait for initial letter generation
    cy.contains('Review and send', { timeout: 100000 }).should('be.visible');
    
    // Verify content location in first letter
    cy.get('h4').contains('Message content').parent().within(() => {
      cy.get('div').should('contain', testUrl);
    });
    
    // Regenerate the letter
    cy.contains('Regenerate').click();
    
    // Wait for regeneration
    cy.contains('Regenerating your letter', { timeout: 10000 }).should('be.visible');
    cy.contains('Message content', { timeout: 100000 }).should('be.visible');
    
    // Verify content location is still present in regenerated letter
    cy.get('h4').contains('Message content').parent().within(() => {
      cy.get('div').should('contain', testUrl);
      cy.get('div').should('not.contain', '[Content Location]');
      cy.get('div').should('not.contain', '[CONTENT_LOCATION]');
    });
  });

});