describe('Policy Validation API', () => {
  const platforms = ['facebook', 'instagram', 'tiktok', 'onlyfans', 'pornhub'];

  beforeEach(() => {
    // Set up environment variables for testing
    cy.intercept('POST', '/api/policy-validation/*').as('policyValidation');
  });

  platforms.forEach((platform) => {
    it(`should validate ${platform} policies`, () => {
      cy.request({
        method: 'POST',
        url: `/api/policy-validation/${platform}`,
        headers: {
          'Content-Type': 'application/json',
        },
        body: {},
        timeout: 60000, // 60 seconds timeout for AI processing
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('success', true);
        expect(response.body).to.have.property('status');
        expect(response.body).to.have.property('platform', platform);
        expect(response.body).to.have.property('data');

        // Check status is one of expected values
        const validStatuses = [
          'completed_no_changes',
          'completed_with_valid_changes',
          'completed_with_invalid_changes',
          'completed_with_pr_created',
          'completed_with_pr_error',
        ];
        expect(validStatuses).to.include(response.body.status);

        // Check data structure based on status
        if (response.body.status !== 'completed_no_changes') {
          expect(response.body.data).to.have.property('analysis');
          expect(response.body.data.analysis).to.have.property('status');
          expect(response.body.data.analysis).to.have.property('reasoning');
        }

        if (response.body.status.includes('pr_created')) {
          expect(response.body.data).to.have.property('pullRequest');
          expect(response.body.data.pullRequest).to.have.property('url');
          expect(response.body.data.pullRequest).to.have.property('number');
        }
      });
    });
  });

  it('should return 400 for invalid platform', () => {
    cy.request({
      method: 'POST',
      url: '/api/policy-validation/invalid-platform',
      headers: {
        'Content-Type': 'application/json',
      },
      body: {},
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.property('error', 'Invalid platform');
    });
  });

  it('should return 404 for platform without policy', () => {
    // Mock a platform that exists in PLATFORM_NAMES but has no policy
    cy.intercept('GET', '/lib/platform-policies/test', { statusCode: 404 });

    cy.request({
      method: 'POST',
      url: '/api/policy-validation/test',
      headers: {
        'Content-Type': 'application/json',
      },
      body: {},
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(404);
      expect(response.body).to.have.property('error', 'Platform policy not found');
    });
  });

  it('should handle OPTIONS requests', () => {
    platforms.forEach((platform) => {
      cy.request({
        method: 'OPTIONS',
        url: `/api/policy-validation/${platform}`,
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.headers).to.have.property('access-control-allow-origin', '*');
        expect(response.headers).to.have.property('access-control-allow-methods', 'POST, OPTIONS');
        expect(response.headers).to.have.property('access-control-allow-headers', 'Content-Type');
      });
    });
  });
});
