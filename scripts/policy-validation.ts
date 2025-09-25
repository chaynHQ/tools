const { orchestratePolicyValidation } = require('../lib/ai/policy-validation/orchestrator');
const { PLATFORM_NAMES } = require('../lib/constants/platforms');
const { getPlatformPolicy } = require('../lib/platform-policies');
const { GitHubPRCreator } = require('../lib/github/create-policies-pr');
const { serverInstance: rollbar } = require('../lib/rollbar');

async function validatePlatformPolicies() {
  try {
    const platform = process.argv[2];
    const forceRewrite = process.argv.includes('--force-rewrite');

    if (!platform) {
      console.error('Error: Platform parameter is required');
      process.exit(1);
    }

    // Validate platform
    if (!PLATFORM_NAMES[platform]) {
      rollbar.error('Policy validation: Invalid platform requested', { platform });
      console.error(`Error: Invalid platform: ${platform}`);
      process.exit(1);
    }

    let platformPolicy;

    if (forceRewrite) {
      // Create empty platform policies object for force rewrite
      platformPolicy = {
        platform: PLATFORM_NAMES[platform],
        policyDocuments: [],
      };
    } else {
      platformPolicy = getPlatformPolicy(platform);
      if (!platformPolicy) {
        rollbar.error('Policy validation: Platform policy not found', { platform });
        console.error(`Error: Platform policy not found for: ${platform}`);
        process.exit(1);
      }
    }

    if (!forceRewrite && !platformPolicy) {
      rollbar.error('Policy validation: Platform policy not found', { platform });
      console.error(`Error: Platform policy not found for: ${platform}`);
      process.exit(1);
    }

    rollbar.info('Policy validation: Starting validation', {
      platform,
      forceRewrite,
      documentsCount: platformPolicy.policyDocuments.length,
    });

    // Run the orchestrated policy validation flow
    const validationResult = await orchestratePolicyValidation(
      platform,
      PLATFORM_NAMES[platform],
      platformPolicy,
    );

    // Create PR if validation passed and changes are valid

    if (
      validationResult.status === 'completed_with_valid_changes' &&
      validationResult.data.updatedPolicies &&
      process.env.GITHUB_TOKEN
    ) {
      try {
        const prCreator = new GitHubPRCreator();

        const pullRequest = await prCreator.createPolicyPullRequest(
          platform,
          validationResult.data.updatedPolicies,
          validationResult.reasoning,
          forceRewrite,
        );

        // Set GitHub Actions outputs
        console.log(
          `::set-output name=status::completed_with_pr_created${forceRewrite ? '_force_rewrite' : ''}`,
        );
        console.log(`::set-output name=platform::${platform}`);
        console.log(`::set-output name=platform_name::${PLATFORM_NAMES[platform]}`);
        console.log(`::set-output name=pr_url::${pullRequest?.url || 'none'}`);
        console.log(`::set-output name=pr_number::${pullRequest?.number || 'none'}`);
        console.log(`::set-output name=reasoning::${validationResult.reasoning}`);
        console.log(`::set-output name=force_rewrite::${forceRewrite}`);
      } catch (error) {
        // Set GitHub Actions outputs for PR error and exit with failure
        console.log(
          `::set-output name=status::completed_with_pr_error${forceRewrite ? '_force_rewrite' : ''}`,
        );
        console.log(`::set-output name=platform::${platform}`);
        console.log(`::set-output name=platform_name::${PLATFORM_NAMES[platform]}`);
        console.log(`::set-output name=reasoning::${validationResult.reasoning}`);
        console.log(`::set-output name=force_rewrite::${forceRewrite}`);
        console.log(
          `::set-output name=error::${error instanceof Error ? error.message : 'Unknown PR creation error'}`,
        );

        // CRITICAL: Exit with failure when PR creation fails for valid policy updates
        // This ensures the GitHub Actions job fails and alerts are sent
        console.error(
          `CRITICAL FAILURE: Valid policy updates found but PR creation failed - ${error instanceof Error ? error.message : String(error)}`,
        );
        process.exit(1);
      }
    } else {
      // Set GitHub Actions outputs
      console.log(
        `::set-output name=status::${validationResult.status}${forceRewrite ? '_force_rewrite' : ''}`,
      );
      console.log(`::set-output name=platform::${platform}`);
      console.log(`::set-output name=platform_name::${PLATFORM_NAMES[platform]}`);
      console.log(`::set-output name=reasoning::${validationResult.reasoning}`);
      console.log(`::set-output name=force_rewrite::${forceRewrite}`);
    }

    rollbar.info('Policy validation: Completed validation', {
      platform,
      status: validationResult.status,
    });
  } catch (error) {
    rollbar.error('Policy validation: Unexpected error in script', {
      error: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
    });

    // Set GitHub Actions outputs for error
    console.log(`::set-output name=status::error`);
    console.log(
      `::set-output name=error::${error instanceof Error ? error.message : 'Unknown error'}`,
    );

    console.error('Policy validation: Fatal error - script failed');
    process.exit(1);
  }
}

// Run the validation
validatePlatformPolicies().catch((error) => {
  console.error('Policy validation: Fatal error - script crashed', error);
  process.exit(1);
});
