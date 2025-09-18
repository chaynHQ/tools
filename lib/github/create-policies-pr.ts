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
        branch: repo.default_branch,
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
        base: repo.default_branch,
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
   * Creates a new branch or updates existing branch, handling conflicts gracefully
   */
  private async createOrUpdateBranch(branchName: string, baseSha: string): Promise<string> {
    try {
      // Try to create the branch first
      await this.octokit.rest.git.createRef({
        owner: this.owner,
        repo: this.repo,
        ref: `refs/heads/${branchName}`,
        sha: baseSha,
      });

      return branchName;
    } catch (error: any) {
      if (error.status === 422 && error.message?.includes('already exists')) {
        // Check if there's an existing open PR for this branch
        const existingPR = await this.findExistingPR(branchName);

        if (existingPR) {
          rollbar.info('Policy validation: Closing existing PR for branch update', {
            branchName,
            prNumber: existingPR.number,
          });

          // Close the existing PR
          await this.octokit.rest.pulls.update({
            owner: this.owner,
            repo: this.repo,
            pull_number: existingPR.number,
            state: 'closed',
          });

          // Add a comment explaining why it was closed
          await this.octokit.rest.issues.createComment({
            owner: this.owner,
            repo: this.repo,
            issue_number: existingPR.number,
            body: '🤖 This PR was automatically closed because a new policy validation run has generated updated changes. A new PR will be created with the latest policy updates.',
          });
        }

        // Delete the existing branch
        try {
          await this.octokit.rest.git.deleteRef({
            owner: this.owner,
            repo: this.repo,
            ref: `heads/${branchName}`,
          });
        } catch (deleteError) {
          rollbar.warning('Policy validation: Could not delete existing branch', {
            branchName,
            error: deleteError instanceof Error ? deleteError.message : String(deleteError),
          });
        }

        // Create the branch with a unique suffix to avoid any remaining conflicts
        const timestamp = Date.now();
        const uniqueBranchName = `${branchName}-${timestamp}`;

        await this.octokit.rest.git.createRef({
          owner: this.owner,
          repo: this.repo,
          ref: `refs/heads/${uniqueBranchName}`,
          sha: baseSha,
        });

        return uniqueBranchName;
      } else {
        // Re-throw other errors
        throw error;
      }
    }
  }

  /**
   * Finds an existing open PR for the given branch
   */
  private async findExistingPR(
    branchName: string,
  ): Promise<{ number: number; html_url: string } | null> {
    try {
      const { data: pulls } = await this.octokit.rest.pulls.list({
        owner: this.owner,
        repo: this.repo,
        head: `${this.owner}:${branchName}`,
        state: 'open',
      });

      return pulls.length > 0 ? { number: pulls[0].number, html_url: pulls[0].html_url } : null;
    } catch (error) {
      rollbar.warning('Policy validation: Error finding existing PR', {
        branchName,
        error: error instanceof Error ? error.message : String(error),
      });
      return null;
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
      const timestamp = new Date().toISOString().split('T')[0];
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
