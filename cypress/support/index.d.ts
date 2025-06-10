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
  }
}
