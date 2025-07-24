describe('Development Warning', () => {
  beforeEach(() => {
    // Clear localStorage to ensure warning appears
    cy.clearLocalStorage();
  });

  it('shows development warning on first visit', () => {
    cy.visit('/');

    // Verify development warning dialog appears
    cy.get('[role="dialog"]').should('be.visible');
    cy.contains('Testing mode - remember we save data').should('be.visible');

    // Verify warning content
    cy.contains('All form inputs you provide are collected and stored').should('be.visible');
    cy.contains('AI-generated follow-up questions are saved').should('be.visible');
    cy.contains('Your final takedown letter is stored for analysis').should('be.visible');

    // Verify privacy section
    cy.contains('Want complete privacy?').should('be.visible');
    cy.contains('Use our user-facing site at tools.chayn.co where no data is stored').should(
      'be.visible',
    );
    cy.contains(
      'By continuing, you consent to data collection for development purposes only',
    ).should('be.visible');

    // Verify buttons are present
    cy.contains('I prefer privacy').should('be.visible');
    cy.contains('Happy to help').should('be.visible');
  });

  it('dismisses warning and does not show again', () => {
    cy.visit('/');

    // Dismiss the warning
    cy.get('[role="dialog"]').within(() => {
      cy.contains('Happy to help').click();
    });

    // Verify dialog is closed
    cy.get('[role="dialog"]').should('not.exist');

    // Verify localStorage is set
    cy.window().then((win) => {
      expect(win.localStorage.getItem('dev-warning-acknowledged')).to.equal('true');
    });

    // Reload page and verify warning doesn't appear again
    cy.reload();
    cy.get('[role="dialog"]').should('not.exist');
  });

  it('provides production site redirect option', () => {
    cy.visit('/');

    // Mock window.open to prevent actual navigation
    cy.window().then((win) => {
      cy.stub(win, 'open').as('windowOpen');
    });

    cy.get('[role="dialog"]').within(() => {
      cy.contains('I prefer privacy').click();
    });

    // Verify production site would be opened
    cy.get('@windowOpen').should('have.been.calledWith', 'https://tools.chayn.co', '_blank');
  });

  it('verifies complete warning content structure', () => {
    cy.visit('/');
    cy.verifyDevWarningContent();
  });
});
