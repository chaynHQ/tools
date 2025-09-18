const { orchestratePolicyValidation } = require('../lib/ai/policy-validation/orchestrator');
const { PLATFORM_NAMES } = require('../lib/constants/platforms');
const { getPlatformPolicy } = require('../lib/platform-policies');
const { GitHubPRCreator } = require('../lib/github/create-policies-pr');
const { serverInstance: rollbar } = require('../lib/rollbar');

async function validatePlatformPolicies() {
  try {
    const platform = process.argv[2];

    if (!platform) {
      console.error('Error: Platform parameter is required');
      process.exit(1);
    }

    // Validate platform
    if (!PLATFORM_NAMES[platform]) {
      rollbar.warning('PolicyValidation: Invalid platform requested', { platform });
      console.error(`Error: Invalid platform: ${platform}`);
      process.exit(1);
    }

    const platformPolicy = getPlatformPolicy(platform);
    if (!platformPolicy) {
      rollbar.error('PolicyValidation: Platform policy not found', { platform });
      console.error(`Error: Platform policy not found for: ${platform}`);
      process.exit(1);
    }

    rollbar.info('PolicyValidation: Starting validation for platform', {
      platform,
      documentsCount: platformPolicy.policyDocuments.length,
    });

    console.log(`Starting policy validation for platform: ${platform}`);
    console.log(`Platform name: ${PLATFORM_NAMES[platform]}`);
    console.log(`Current documents: ${platformPolicy.policyDocuments.length}`);

    // Run the orchestrated policy validation flow
    console.log('PolicyValidation: Calling orchestratePolicyValidation', { platform });
    const validationResult = await orchestratePolicyValidation(
      platform,
      PLATFORM_NAMES[platform],
      platformPolicy,
    );

    console.log('PolicyValidation: Orchestration completed', {
      platform,
      status: validationResult.status,
      hasUpdatedPolicies: !!validationResult.data.updatedPolicies,
      hasGitHubToken: !!process.env.GITHUB_TOKEN,
    });

    rollbar.info('PolicyValidation: Orchestration completed', {
      platform,
      status: validationResult.status,
      hasUpdatedPolicies: !!validationResult.data.updatedPolicies,
      hasGitHubToken: !!process.env.GITHUB_TOKEN,
    });

    // Create PR if validation passed and changes are valid
    console.log('PolicyValidation: Checking PR creation conditions', {
      status: validationResult.status,
      hasUpdatedPolicies: !!validationResult.data.updatedPolicies,
      hasGitHubToken: !!process.env.GITHUB_TOKEN,
    });

    if (
      validationResult.status === 'completed_with_valid_changes' &&
      validationResult.data.updatedPolicies &&
      process.env.GITHUB_TOKEN
    ) {
      console.log('PolicyValidation: Creating PR for valid changes');
      rollbar.info('PolicyValidation: Creating PR for valid changes', {
        platform,
        updatedPoliciesCount: validationResult.data.updatedPolicies.policyDocuments.length,
      });

      try {
        const prCreator = new GitHubPRCreator();
        const pullRequest = await prCreator.createPolicyPullRequest(
          platform,
          validationResult.data.updatedPolicies,
          validationResult.reasoning,
        );

        console.log('PolicyValidation: PR created successfully', {
          platform,
          pullRequestUrl: pullRequest?.url,
          pullRequestNumber: pullRequest?.number,
        });

        rollbar.info('PolicyValidation: PR created successfully', {
          platform,
          pullRequestUrl: pullRequest?.url,
          pullRequestNumber: pullRequest?.number,
        });

        // Set GitHub Actions outputs
        console.log(`::set-output name=status::completed_with_pr_created`);
        console.log(`::set-output name=platform::${platform}`);
        console.log(`::set-output name=platform_name::${PLATFORM_NAMES[platform]}`);
        console.log(`::set-output name=pr_url::${pullRequest?.url || 'none'}`);
        console.log(`::set-output name=pr_number::${pullRequest?.number || 'none'}`);
        console.log(`::set-output name=reasoning::${validationResult.reasoning}`);
      } catch (error) {
        console.error('PolicyValidation: PR creation failed', {
          platform,
          error: error instanceof Error ? error.message : String(error),
        });

        rollbar.error('PolicyValidation: PR creation failed', {
          platform,
          error: error instanceof Error ? error.message : String(error),
          stack: error instanceof Error ? error.stack : undefined,
        });

        // Set GitHub Actions outputs for PR error
        console.log(`::set-output name=status::completed_with_pr_error`);
        console.log(`::set-output name=platform::${platform}`);
        console.log(`::set-output name=platform_name::${PLATFORM_NAMES[platform]}`);
        console.log(`::set-output name=reasoning::${validationResult.reasoning}`);
        console.log(
          `::set-output name=error::${error instanceof Error ? error.message : 'Unknown PR creation error'}`,
        );
      }
    } else {
      console.log('PolicyValidation: PR creation conditions not met', {
        status: validationResult.status,
        hasUpdatedPolicies: !!validationResult.data.updatedPolicies,
        hasGitHubToken: !!process.env.GITHUB_TOKEN,
        reasoning: 'One or more conditions for PR creation were not satisfied',
      });

      rollbar.info('PolicyValidation: PR creation conditions not met', {
        platform,
        status: validationResult.status,
        hasUpdatedPolicies: !!validationResult.data.updatedPolicies,
        hasGitHubToken: !!process.env.GITHUB_TOKEN,
      });

      // Set GitHub Actions outputs
      console.log(`::set-output name=status::${validationResult.status}`);
      console.log(`::set-output name=platform::${platform}`);
      console.log(`::set-output name=platform_name::${PLATFORM_NAMES[platform]}`);
      console.log(`::set-output name=reasoning::${validationResult.reasoning}`);
    }

    console.log('PolicyValidation: Validation completed', {
      platform,
      status: validationResult.status,
    });

    rollbar.info('PolicyValidation: Validation completed', {
      platform,
      status: validationResult.status,
    });
  } catch (error) {
    console.error('PolicyValidation: Unexpected error', {
      error: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
    });

    rollbar.error('PolicyValidation: Unexpected error in script', {
      error: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
    });

    // Set GitHub Actions outputs for error
    console.log(`::set-output name=status::error`);
    console.log(
      `::set-output name=error::${error instanceof Error ? error.message : 'Unknown error'}`,
    );

    process.exit(1);
  }
}

// Run the validation
validatePlatformPolicies().catch((error) => {
  console.error('PolicyValidation: Fatal error', error);
  process.exit(1);
});
