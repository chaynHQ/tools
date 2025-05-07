describe('Other Platform Flow', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('should skip removal process when selecting Other platform', () => {
      // Start the process
      cy.contains('Start your request').click();
  
      // Verify we're on the letter generator page
      cy.url().should('include', '/letter-generator');
  
      // Select Other platform
      cy.contains('Other platform').click();
      
      // Fill in custom platform name
      cy.get('#other-platform').type('Reddit');
      
      cy.contains('Continue').click();
  
      // Verify we skip the removal process and go straight to initial questions
      cy.contains('Tell us about the content').should('be.visible');
      cy.contains('Review removal process').should('not.exist');
  
      // Fill in content type and context
      cy.contains('Personal content').click();
      cy.contains('Posted by someone I know').click();
  
      // Fill in content location using description
      cy.get('input[type="radio"][value="description"]').check();
      cy.get('textarea[id="contentDescription"]').type('The content appears on a personal blog at example-blog.com/post123');
  
      // Fill in dates
      cy.get('#imageUploadDate').type('1 March 2025');
      cy.get('#imageTakenDate').type('15 February 2025');
  
      // Fill in verification and impact
      cy.get('#ownershipEvidence').type('I can provide proof of ownership of the original content');
      cy.get('#impactStatement').type(
        'This unauthorized sharing has affected my personal and professional relationships'
      );
  
      cy.contains('Continue').click();
  
      // Wait for AI to generate follow-up questions
      cy.contains('Analysing your responses', { timeout: 30000 });
  
      cy.contains('Continue', { timeout: 30000 }).click();
  
      // Wait for letter generation
      cy.contains('Creating your personalised letter', { timeout: 40000 });
  
      // Verify letter was generated
      cy.contains('Your personalised letter', { timeout: 60000 }).should('be.visible');
      cy.contains('Subject line').should('be.visible');
      cy.contains('Message content').should('be.visible');
  
      // Verify the custom platform name is used in the letter
      cy.contains('Reddit').should('be.visible');
    });
  
    it('should show messaging platform warning when appropriate', () => {
      // Start the process
      cy.contains('Start your request').click();
  
      // Select Other platform
      cy.contains('Other platform').click();
      
      // Type WhatsApp and verify warning appears
      cy.get('#other-platform').type('WhatsApp');
      cy.contains('Reminder about messaging platforms').should('be.visible');
      cy.contains('you can report the individual sharing it from within the app').should('be.visible');
  
      // Clear and type Signal to verify warning appears
      cy.get('#other-platform').clear().type('Signal');
      cy.contains('Reminder about messaging platforms').should('be.visible');
  
      // Clear and type regular website to verify warning disappears
      cy.get('#other-platform').clear().type('My Blog');
      cy.contains('Reminder about messaging platforms').should('not.exist');
    });
  });