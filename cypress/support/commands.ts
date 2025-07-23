/// <reference types="cypress" />

// Add custom commands here
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands

Cypress.Commands.add('dismissDevWarning', () => {
  // Check if development warning dialog is present and dismiss it
  cy.get('h1').contains('Survivor AI').should('be.visible'); // checking that the page loads
  cy.get('body').then(($body) => {
    if ($body.find('[role="dialog"]').length > 0) {
      cy.get('[role="dialog"]').within(() => {
        cy.contains('Testing mode - remember we save data').should('be.visible');
        cy.contains('Happy to help').click();
      });

      // Wait for dialog to close
      cy.get('[role="dialog"]').should('not.exist');
    }
  });
});

Cypress.Commands.add('verifyDevSessionId', () => {
  // Wait for the development mode notice to appear
  cy.contains('Testing mode', { timeout: 10000 }).should('be.visible');

  // Verify the notice content
  cy.contains('Copy this ID to quote it when giving us feedback').should('be.visible');

  // Wait for session ID to be generated and displayed (12 characters max)
  cy.get('code')
    .contains(/^[a-z0-9]{12}$/)
    .should('be.visible');

  // Verify copy button is present and functional
  cy.contains('Copy').should('be.visible').and('not.be.disabled');
});

Cypress.Commands.add('verifyDevWarningContent', () => {
  cy.get('[role="dialog"]').within(() => {
    // Verify title
    cy.contains('Testing mode - remember we save data').should('be.visible');

    // Verify data collection details
    cy.contains('All form inputs you provide are collected and stored').should('be.visible');
    cy.contains('AI-generated follow-up questions are saved').should('be.visible');
    cy.contains('Your final takedown letter is stored for analysis').should('be.visible');

    // Verify privacy option
    cy.contains('Want complete privacy?').should('be.visible');
    cy.contains('Use our user-facing site at tools.chayn.co where no data is stored').should(
      'be.visible',
    );
    cy.contains(
      'By continuing, you consent to data collection for development purposes only',
    ).should('be.visible');

    // Verify buttons
    cy.contains('I prefer privacy').should('be.visible');
    cy.contains('Happy to help').should('be.visible');
  });
});

Cypress.Commands.add('verifyContentLocationInLetter', (expectedLocation: string, locationType: 'url' | 'description') => {
  // Verify the content location appears in the letter body
  cy.get('h4').contains('Message content').parent().within(() => {
    cy.get('div').should('contain', expectedLocation);
    cy.get('div').should('not.contain', '[Content Location]');
    cy.get('div').should('not.contain', '[CONTENT_LOCATION]');
    
    // Verify the correct format based on type
    if (locationType === 'url') {
      cy.get('div').should('contain', 'The content can be found at ' + expectedLocation);
    } else {
      cy.get('div').should('contain', 'The content can be found at the following location: ' + expectedLocation);
    }
  });
});

Cypress.Commands.add('fillBasicLetterForm', (platform: string, contentLocation: string, locationType: 'url' | 'description') => {
  // Start the process
  cy.contains('Start your request').click();
  cy.get('h2').contains('Building your takedown letter');
  cy.contains('Start your request').click();
  
  // Select platform
  if (platform === 'Other') {
    cy.contains('Other platform').click();
    cy.get('#other-platform').type('TestPlatform');
  } else {
    cy.get('h3').contains(platform).click();
  }
  cy.contains('Continue').click();
  
  // Skip removal process for known platforms or handle custom platforms
  if (platform !== 'Other') {
    cy.contains("I haven't tried either process yet").click();
    cy.contains('Continue').click();
  }
  
  // Fill initial questions
  cy.contains('Intimate images').click();
  cy.contains('Account was compromised').click();
  
  if (locationType === 'url') {
    cy.get('input[type="radio"][value="url"]').check();
    cy.get('input[id="contentUrl"]').type(contentLocation);
  } else {
    cy.get('input[type="radio"][value="description"]').check();
    cy.get('#contentDescription').type(contentLocation);
  }
  
  cy.get('#imageUploadDate').type('1 March 2025');
  cy.get('#imageTakenDate').type('15 February 2025');
  cy.get('#ownershipEvidence').type('I can verify this content');
  cy.get('#impactStatement').type('This has caused significant distress');
  cy.contains('Continue').click();
  
  // Skip follow-up questions and wait for letter generation
  cy.contains('Continue', { timeout: 30000 }).click();
  cy.contains('Review and send', { timeout: 100000 }).should('be.visible');
});