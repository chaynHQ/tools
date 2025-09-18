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
      rollbar.warning('PolicyValidation: Invalid platform requested', { platform });
      console.error(`Error: Invalid platform: ${platform}`);
      process.exit(1);
    }

    let platformPolicy;

    if (forceRewrite) {
      console.log(`Force rewrite mode enabled for platform: ${platform}`);
      console.log('All policies will be treated as new and completely rewritten');

      // Create empty platform policies object for force rewrite
      platformPolicy = {
        platform: PLATFORM_NAMES[platform],
        policyDocuments: [],
      };

      rollbar.info('PolicyValidation: Force rewrite mode enabled', {
        platform,
        platformName: PLATFORM_NAMES[platform],
      });
    } else {
      platformPolicy = getPlatformPolicy(platform);
      if (!platformPolicy) {
        rollbar.error('PolicyValidation: Platform policy not found', { platform });
        console.error(`Error: Platform policy not found for: ${platform}`);
        process.exit(1);
      }
    }

    if (!forceRewrite && !platformPolicy) {
      rollbar.error('PolicyValidation: Platform policy not found', { platform });
      console.error(`Error: Platform policy not found for: ${platform}`);
      process.exit(1);
    }

    rollbar.info('PolicyValidation: Starting validation for platform', {
      platform,
      forceRewrite,
      documentsCount: platformPolicy.policyDocuments.length,
    });

    console.log(
      `Starting policy validation for platform: ${platform}${forceRewrite ? ' (FORCE REWRITE MODE)' : ''}`,
    );
    console.log(`Platform name: ${PLATFORM_NAMES[platform]}`);
    console.log(
      `Current documents: ${platformPolicy.policyDocuments.length}${forceRewrite ? ' (will be ignored)' : ''}`,
    );

    // Run the orchestrated policy validation flow
    console.log('PolicyValidation: Calling orchestratePolicyValidation', { platform });
    const validationResult = await orchestratePolicyValidation(
      platform,
      PLATFORM_NAMES[platform],
      platformPolicy,
    );

    console.log('PolicyValidation: Orchestration completed', {
      platform,
      forceRewrite,
      status: validationResult.status,
      hasUpdatedPolicies: !!validationResult.data.updatedPolicies,
      hasGitHubToken: !!process.env.GITHUB_TOKEN,
    });

    rollbar.info('PolicyValidation: Orchestration completed', {
      platform,
      forceRewrite,
      status: validationResult.status,
      hasUpdatedPolicies: !!validationResult.data.updatedPolicies,
      hasGitHubToken: !!process.env.GITHUB_TOKEN,
    });

    // Create PR if validation passed and changes are valid
    console.log('PolicyValidation: Checking PR creation conditions', {
      status: validationResult.status,
      hasUpdatedPolicies: !!validationResult.data.updatedPolicies,
      hasGitHubToken: !!process.env.GITHUB_TOKEN,
      forceRewrite,
    });

    if (
      validationResult.status === 'completed_with_valid_changes' &&
      validationResult.data.updatedPolicies &&
      process.env.GITHUB_TOKEN
    ) {
      console.log(
        `PolicyValidation: Creating PR for valid changes${forceRewrite ? ' (force rewrite)' : ''}`,
      );
      rollbar.info('PolicyValidation: Creating PR for valid changes', {
        platform,
        forceRewrite,
        updatedPoliciesCount: validationResult.data.updatedPolicies.policyDocuments.length,
      });

      try {
        const prCreator = new GitHubPRCreator();

        const pullRequest = await prCreator.createPolicyPullRequest(
          platform,
          validationResult.data.updatedPolicies,
          validationResult.reasoning,
          forceRewrite,
        );

        console.log('PolicyValidation: PR created successfully', {
          platform,
          forceRewrite,
          pullRequestUrl: pullRequest?.url,
          pullRequestNumber: pullRequest?.number,
        });

        rollbar.info('PolicyValidation: PR created successfully', {
          platform,
          forceRewrite,
          pullRequestUrl: pullRequest?.url,
          pullRequestNumber: pullRequest?.number,
        });

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
        console.error('PolicyValidation: PR creation failed', {
          platform,
          forceRewrite,
          error: error instanceof Error ? error.message : String(error),
        });

        rollbar.error('PolicyValidation: PR creation failed', {
          platform,
          forceRewrite,
          error: error instanceof Error ? error.message : String(error),
          stack: error instanceof Error ? error.stack : undefined,
        });

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
        console.error('PolicyValidation: CRITICAL FAILURE - Valid policy updates found but PR creation failed');
        process.exit(1);
      }
    } else {
      console.log('PolicyValidation: PR creation conditions not met', {
        status: validationResult.status,
        hasUpdatedPolicies: !!validationResult.data.updatedPolicies,
        hasGitHubToken: !!process.env.GITHUB_TOKEN,
        forceRewrite,
        reasoning: 'One or more conditions for PR creation were not satisfied',
      });

      rollbar.info('PolicyValidation: PR creation conditions not met', {
        platform,
        forceRewrite,
        status: validationResult.status,
        hasUpdatedPolicies: !!validationResult.data.updatedPolicies,
        hasGitHubToken: !!process.env.GITHUB_TOKEN,
      });

      // Set GitHub Actions outputs
      console.log(
        `::set-output name=status::${validationResult.status}${forceRewrite ? '_force_rewrite' : ''}`,
      );
      console.log(`::set-output name=platform::${platform}`);
      console.log(`::set-output name=platform_name::${PLATFORM_NAMES[platform]}`);
      console.log(`::set-output name=reasoning::${validationResult.reasoning}`);
      console.log(`::set-output name=force_rewrite::${forceRewrite}`);
    }

    console.log('PolicyValidation: Validation completed', {
      platform,
      forceRewrite,
      status: validationResult.status,
    });

    rollbar.info('PolicyValidation: Validation completed', {
      platform,
      forceRewrite,
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
