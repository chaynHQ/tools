// cypress/support/index.ts
declare namespace Cypress {
  interface Chainable {
    /**
     * Dismisses the development warning dialog if present.
     * This is useful for tests that run in development mode.
     */
    dismissDevWarning(): Chainable<Element>;

    /**
     * Verifies the session ID in development mode.
     * Ensures the notice is visible and contains a valid session ID.
     */
    verifyDevSessionId(): Chainable<Element>;

    /**
     * Verifies the content of the development warning dialog.
     * Checks all expected text and buttons are present.
     */
    verifyDevWarningContent(): Chainable<Element>;

    /**
     * Verifies that content location appears correctly in the generated letter.
     * Checks that placeholders are replaced and format is correct.
     */
    verifyContentLocationInLetter(expectedLocation: string, locationType: 'url' | 'description'): Chainable<Element>;

    /**
     * Fills out a basic letter generation form with the specified parameters.
     * Useful for setting up tests that focus on specific functionality.
     */
    fillBasicLetterForm(platform: string, contentLocation: string, locationType: 'url' | 'description'): Chainable<Element>;
  }
}
