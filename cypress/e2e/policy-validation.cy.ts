describe('Policy Validation Workflow', () => {
  it('should have the policy validation script file', () => {
    cy.task('fileExists', 'scripts/policy-validation.ts').should('be.true');
  });

  it('should contain required imports and logic', () => {
    cy.readFile('scripts/policy-validation.ts').then((content) => {
      // Check for required imports
      expect(content).to.include('ANTHROPIC_API_KEY');
      expect(content).to.include('GITHUB_TOKEN');
      expect(content).to.include('GAFFA_API_KEY');
      expect(content).to.include('SLACK_WEBHOOK_URL');
    });
  });

  it('should have the workflow configured for all platforms', () => {
    cy.readFile('.github/workflows/policy-validation.yml').then((content) => {
      // Check that all platforms are included in the matrix
      expect(content).to.include('facebook');
      expect(content).to.include('instagram');
      expect(content).to.include('tiktok');
      expect(content).to.include('onlyfans');
      expect(content).to.include('pornhub');
    });
  });

  it('should validate script dependencies are available', () => {
    // Check that the script can import required modules
    cy.readFile('scripts/policy-validation.ts').then((content) => {
      expect(content).to.include('orchestratePolicyValidation');
      expect(content).to.include('PLATFORM_NAMES');
      expect(content).to.include('getPlatformPolicy');
      expect(content).to.include('GitHubPRCreator');
    });
  });

  it('should have proper error handling in the script', () => {
    cy.readFile('scripts/policy-validation.ts').then((content) => {
      // Check for proper error handling patterns
      expect(content).to.include('try {');
      expect(content).to.include('catch (error)');
      expect(content).to.include('process.exit(1)');
      expect(content).to.include('rollbar.error');
    });
  });

  it('should validate platform parameter handling', () => {
    cy.readFile('scripts/policy-validation.ts').then((content) => {
      // Check that the script properly handles platform parameter
      expect(content).to.include('process.argv[2]');
      expect(content).to.include('Platform parameter is required');
      expect(content).to.include('Invalid platform');
    });
  });

  it('should have GitHub Actions output format', () => {
    cy.readFile('scripts/policy-validation.ts').then((content) => {
      // Check for GitHub Actions output format
      expect(content).to.include('::set-output name=status::');
      expect(content).to.include('::set-output name=platform::');
      expect(content).to.include('::set-output name=reasoning::');
    });
  });

  it('should validate workflow triggers are configured', () => {
    cy.readFile('.github/workflows/policy-validation.yml').then((content) => {
      // Check workflow triggers
      expect(content).to.include('schedule:');
      expect(content).to.include('workflow_dispatch:');
      expect(content).to.include('cron:');
    });
  });

  it('should have proper permissions configured', () => {
    cy.readFile('.github/workflows/policy-validation.yml').then((content) => {
      // Check required permissions
      expect(content).to.include('contents: read');
      expect(content).to.include('pull-requests: write');
    });
  });

  it('should validate notification logic exists', () => {
    cy.readFile('.github/workflows/policy-validation.yml').then((content) => {
      // Check for Slack notification logic
      expect(content).to.include('Send completion notification');
      expect(content).to.include('SLACK_WEBHOOK_URL');
      expect(content).to.include('curl -X POST');
    });
  });
});
