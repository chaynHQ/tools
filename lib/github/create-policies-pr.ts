import { serverInstance as rollbar } from '@/lib/rollbar';
import { Octokit } from '@octokit/rest';

import { PlatformPolicies } from '@/types/policies';

export interface PullRequestData {
  title: string;
  body: string;
  branchName: string;
  files: Array<{
    path: string;
    content: string;
  }>;
}

export interface PullRequestResult {
  success: boolean;
  pullRequestUrl?: string;
  pullRequestNumber?: number;
  error?: string;
}

export class GitHubPRCreator {
  private octokit: Octokit;
  private owner: string;
  private repo: string;

  constructor() {
    this.octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
    this.owner = 'chaynHQ'; // Github owner
    this.repo = 'tools'; // Github repository
  }

  /**
   * Creates a pull request with policy changes
   */
  async createPolicyUpdatePR(data: PullRequestData): Promise<PullRequestResult> {
    try {
      // Step 1: Get the default branch SHA
      const { data: repo } = await this.octokit.rest.repos.get({
        owner: this.owner,
        repo: this.repo,
      });

      const { data: baseBranch } = await this.octokit.rest.repos.getBranch({
        owner: this.owner,
        repo: this.repo,
        // branch: repo.default_branch,
        // TEMP for testing/replacing initial policies
        branch: 'validation-flow-update-policies',
      });

      const baseBranchSha = baseBranch.commit.sha;

      // Step 2: Handle branch creation/update
      const finalBranchName = await this.createOrUpdateBranch(data.branchName, baseBranchSha);

      // Step 3: Create/update files in the new branch
      for (const file of data.files) {
        await this.createOrUpdateFile(file.path, file.content, finalBranchName);
      }

      // Step 4: Create the pull request
      const { data: pullRequest } = await this.octokit.rest.pulls.create({
        owner: this.owner,
        repo: this.repo,
        title: data.title,
        body: data.body,
        head: finalBranchName,
        // base: repo.default_branch,
        // TEMP for testing/replacing initial policies
        base: 'validation-flow-update-policies',
      });

      rollbar.info('Policy validation: PR created successfully', {
        pullRequestNumber: pullRequest.number,
        pullRequestUrl: pullRequest.html_url,
        branchName: finalBranchName,
        filesCount: data.files.length,
      });

      return {
        success: true,
        pullRequestUrl: pullRequest.html_url,
        pullRequestNumber: pullRequest.number,
      };
    } catch (error) {
      rollbar.error('Policy validation: PR creation failed', {
        error: error instanceof Error ? error.message : String(error),
        branchName: data.branchName,
        stack: error instanceof Error ? error.stack : undefined,
      });

      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred',
      };
    }
  }

  /**
   * Creates a new branch after cleaning up any existing policy update branches/PRs for this platform
   */
  private async createOrUpdateBranch(branchName: string, baseSha: string): Promise<string> {
    // Extract platform from branch name (format: policy-update/{platformId}/{timestamp})
    const platformMatch = branchName.match(/^policy-update\/([^\/]+)\//);
    const platformId = platformMatch ? platformMatch[1] : null;

    let includeUniqueStamp = false;
    if (platformId) {
      // Clean up any existing policy update branches/PRs for this platform
      includeUniqueStamp = await this.cleanupExistingPolicyBranches(platformId);
    }

    const timestampTime = new Date().toISOString().split('T')[1];
    const ref = `refs/heads/${branchName}${includeUniqueStamp ? `-${timestampTime}` : ''}`;

    // Create the new branch
    try {
      await this.octokit.rest.git.createRef({
        owner: this.owner,
        repo: this.repo,
        ref: `refs/heads/${branchName}${includeUniqueStamp && `-${timestampTime}`}`,
        sha: baseSha,
      });

      return branchName;
    } catch (error: any) {
      // If branch creation fails for any reason, log and re-throw
      rollbar.error('Policy validation: Failed to create branch', {
        branchName,
        error: error instanceof Error ? error.message : String(error),
      });
      throw error;
    }
  }

  /**
   * Cleans up existing policy update branches and PRs for a specific platform
   */
  private async cleanupExistingPolicyBranches(platformId: string): Promise<boolean> {
    try {
      // Find all open PRs that match the policy update pattern for this platform
      const { data: pulls } = await this.octokit.rest.pulls.list({
        owner: this.owner,
        repo: this.repo,
        state: 'open',
        per_page: 100, // Get more results to catch all policy PRs
      });

      // Filter PRs that match our policy update pattern for this platform
      const policyPRs = pulls.filter((pr) =>
        pr.head.ref.startsWith(`policy-update/${platformId}/`),
      );

      if (policyPRs.length > 0) {
        rollbar.info('Policy validation: Cleaning up existing policy PRs', {
          platformId,
          prCount: policyPRs.length,
          prNumbers: policyPRs.map((pr) => pr.number),
        });

        // Close existing PRs and delete their branches
        for (const pr of policyPRs) {
          try {
            // Close the PR
            await this.octokit.rest.pulls.update({
              owner: this.owner,
              repo: this.repo,
              pull_number: pr.number,
              state: 'closed',
            });

            // Add a comment explaining why it was closed
            await this.octokit.rest.issues.createComment({
              owner: this.owner,
              repo: this.repo,
              issue_number: pr.number,
              body: '🤖 This PR was automatically closed because a new policy validation run has generated updated changes. A new PR will be created with the latest policy updates.',
            });

            // Delete the branch
            try {
              await this.octokit.rest.git.deleteRef({
                owner: this.owner,
                repo: this.repo,
                ref: `heads/${pr.head.ref}`,
              });
            } catch (deleteError) {
              // Branch deletion is not critical, just log the warning
              rollbar.warning('Policy validation: Could not delete branch', {
                branchName: pr.head.ref,
                error: deleteError instanceof Error ? deleteError.message : String(deleteError),
              });
            }
          } catch (prError) {
            rollbar.warning('Policy validation: Could not close existing PR', {
              prNumber: pr.number,
              branchName: pr.head.ref,
              error: prError instanceof Error ? prError.message : String(prError),
            });
          }
        }
        return true;
      }
      return false;
    } catch (error) {
      // Don't throw - cleanup failure shouldn't prevent new PR creation
      rollbar.warning('Policy validation: Error during cleanup', {
        platformId,
        error: error instanceof Error ? error.message : String(error),
      });
      return true;
    }
  }

  /**
   * Creates or updates a file in the repository
   */
  private async createOrUpdateFile(path: string, content: string, branch: string): Promise<void> {
    try {
      // Try to get existing file to get its SHA
      const { data: existingFile } = await this.octokit.rest.repos.getContent({
        owner: this.owner,
        repo: this.repo,
        path,
        ref: branch,
      });

      // Update existing file
      await this.octokit.rest.repos.createOrUpdateFileContents({
        owner: this.owner,
        repo: this.repo,
        path,
        message: `Update ${path} - Policy validation changes`,
        content: Buffer.from(content).toString('base64'),
        branch,
        sha: Array.isArray(existingFile) ? undefined : existingFile.sha,
      });
    } catch (error: any) {
      if (error.status === 404) {
        // File doesn't exist, create it
        await this.octokit.rest.repos.createOrUpdateFileContents({
          owner: this.owner,
          repo: this.repo,
          path,
          message: `Create ${path} - Policy validation changes`,
          content: Buffer.from(content).toString('base64'),
          branch,
        });
      } else {
        throw error;
      }
    }
  }

  /**
   * Creates a pull request for a single platform policy update
   */
  async createPolicyPullRequest(
    platformId: string,
    updatedPolicy: PlatformPolicies,
    reasoning: string,
    forceRewrite: boolean,
  ): Promise<{ url: string; number: number } | null> {
    if (!process.env.GITHUB_TOKEN) {
      rollbar.warning('Policy validation: GitHub token not configured, skipping PR creation');
      return null;
    }

    try {
      const time = new Date().toISOString();
      const timestamp = `${time.split('T')[0]} ${time.split('T')[1].split('.')[0]}`;
      const branchName = GitHubPRCreator.generateBranchName(platformId, timestamp);
      const prTitle = GitHubPRCreator.generatePRTitle(updatedPolicy.platform, forceRewrite);
      const prBody = GitHubPRCreator.generatePRBody(
        updatedPolicy.platform,
        reasoning,
        forceRewrite,
        timestamp,
      );

      const policyFileName = `${platformId}.ts`;
      const files = [
        {
          path: `lib/platform-policies/${policyFileName}`,
          content: generatePolicyFileContent(updatedPolicy, policyFileName),
        },
      ];

      const prResult = await this.createPolicyUpdatePR({
        title: prTitle,
        body: prBody,
        branchName,
        files,
      });

      if (prResult.success) {
        return {
          url: prResult.pullRequestUrl!,
          number: prResult.pullRequestNumber!,
        };
      } else {
        // Enhanced error with more context
        const errorMessage = `PR creation failed: ${prResult.error || 'Unknown error'}`;
        rollbar.error('Policy validation: PR creation failed with context', {
          platformId,
          error: prResult.error,
          branchName,
        });
        throw new Error(errorMessage);
      }
    } catch (error) {
      rollbar.error('Policy validation: Exception during PR creation', {
        platformId,
        error: error instanceof Error ? error.message : String(error),
        stack: error instanceof Error ? error.stack : undefined,
      });
      throw error;
    }
  }

  /**
   * Generates PR body content
   */
  static generatePRBody(
    platformName: string,
    reasoning: string,
    forceRewrite: boolean,
    timestamp: string,
  ): string {
    return `## 🤖 Automated Policy Update

This pull request contains policy updates identified by our automated validation system.

### 📊 Summary
- **Platform**: ${platformName} 
- **Generated**: ${timestamp}

### 🔍 Changes Made
${
  forceRewrite
    ? `
  
**Forced rewrite mode**: The policies were fetched as new without providing our existing policies.
  `
    : ''
}
${reasoning}

### ✅ Validation Status
- **Step 1**: AI analysis completed successfully
- **Step 2**: Quality check passed - all changes validated as genuine and meaningful
- **Step 3**: Pull request automatically created

### 🔄 Next Steps
1. **Review**: Please review the changes in the Files Changed tab
2. **Test**: Run any necessary tests to ensure functionality
3. **Merge**: If approved, merge to deploy the updated policies

### 🤖 Automation Details
This PR was automatically generated by the Policy Validation Workflow. The changes were:
1. Identified by AI analysis of live platform documents
2. Validated by a second AI for quality assurance
3. Automatically formatted and submitted as this PR

---
`;
  }

  /**
   * Generates PR title
   */
  static generatePRTitle(platformName: string, forceRewrite: boolean): string {
    return `Policy Update: ${platformName}${forceRewrite ? ' (Replace/rewrite)' : ''} `;
  }

  /**
   * Generates Branch name
   */
  static generateBranchName(platformId: string, timestamp: string): string {
    return `policy-update/${platformId}/${timestamp}`;
  }
}

/**
 * Generates the TypeScript file content for a platform policy
 */
export function generatePolicyFileContent(
  updatedPolicy: PlatformPolicies,
  fileName: string,
): string {
  const platformName = updatedPolicy.platform;
  const exportName = `${fileName.replace('.ts', '')}Policy`;

  return `import { PlatformPolicies } from '../../types/policies';

export const ${exportName}: PlatformPolicies = {
  platform: '${platformName}',
  policyDocuments: ${JSON.stringify(updatedPolicy.policyDocuments, null, 2)},
};
`;
}
