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
      console.log('GitHubPRCreator: Starting PR creation', {
        branchName: data.branchName,
        filesCount: data.files.length,
        owner: this.owner,
        repo: this.repo,
      });

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

      console.log('GitHubPRCreator: Created branch', {
        branchName: finalBranchName,
        baseSha: baseBranchSha.substring(0, 7),
      });

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

      console.log('GitHubPRCreator: Successfully created PR', {
        pullRequestNumber: pullRequest.number,
        pullRequestUrl: pullRequest.html_url,
        branchName: finalBranchName,
      });

      return {
        success: true,
        pullRequestUrl: pullRequest.html_url,
        pullRequestNumber: pullRequest.number,
      };
    } catch (error) {
      rollbar.error('GitHubPRCreator: Error creating PR', {
        error: error instanceof Error ? error.message : String(error),
        branchName: data.branchName,
        owner: this.owner,
        repo: this.repo,
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
      
      console.log('GitHubPRCreator: Created new branch', { branchName });
      return branchName;
    } catch (error: any) {
      if (error.status === 422 && error.message?.includes('already exists')) {
        console.log('GitHubPRCreator: Branch already exists, handling conflict', { branchName });
        
        // Check if there's an existing open PR for this branch
        const existingPR = await this.findExistingPR(branchName);
        
        if (existingPR) {
          console.log('GitHubPRCreator: Found existing PR, closing it', {
            branchName,
            prNumber: existingPR.number,
            prUrl: existingPR.html_url,
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
          console.log('GitHubPRCreator: Deleted existing branch', { branchName });
        } catch (deleteError) {
          console.warn('GitHubPRCreator: Could not delete existing branch', {
            branchName,
            error: deleteError,
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
        
        console.log('GitHubPRCreator: Created unique branch after conflict', {
          originalBranch: branchName,
          uniqueBranch: uniqueBranchName,
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
  private async findExistingPR(branchName: string): Promise<{ number: number; html_url: string } | null> {
    try {
      const { data: pulls } = await this.octokit.rest.pulls.list({
        owner: this.owner,
        repo: this.repo,
        head: `${this.owner}:${branchName}`,
        state: 'open',
      });
      
      return pulls.length > 0 ? { number: pulls[0].number, html_url: pulls[0].html_url } : null;
    } catch (error) {
      console.warn('GitHubPRCreator: Error finding existing PR', { branchName, error });
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

      console.log('GitHubPRCreator: Updated existing file', { path, branch });
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

        console.log('GitHubPRCreator: Created new file', { path, branch });
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
      rollbar.warning('PolicyValidation: GitHub token not configured, skipping PR creation');
      return null;
    }

    try {
      const timestamp = new Date().toISOString().split('T')[0];
      const branchName = `policy-update/${timestamp}-${platformId}`;
      const prTitle = GitHubPRCreator.generatePRTitle(
        platformId,
        updatedPolicy.platform,
        forceRewrite,
      );
      const prBody = GitHubPRCreator.generatePRBody(
        platformId,
        updatedPolicy.platform,
        reasoning,
        forceRewrite,
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
        console.log('PolicyValidation: Successfully created PR', {
          platformId,
          pullRequestUrl: prResult.pullRequestUrl,
          pullRequestNumber: prResult.pullRequestNumber,
        });

        return {
          url: prResult.pullRequestUrl!,
          number: prResult.pullRequestNumber!,
        };
      } else {
        // Enhanced error with more context
        const errorMessage = `PR creation failed: ${prResult.error || 'Unknown error'}`;
        rollbar.error('PolicyValidation: PR creation failed with detailed context', {
          platformId,
          error: prResult.error,
          branchName,
          prTitle,
          filesCount: files.length,
        });
        throw new Error(errorMessage);
      }
    } catch (error) {
      rollbar.error('PolicyValidation: Exception during PR creation', {
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
    platformId: string,
    platformName: string,
    reasoning: string,
    forceRewrite: boolean,
  ): string {
    const timestamp = new Date().toISOString();

    return `## 🤖 Automated Policy Update

This pull request contains policy updates identified by our automated validation system.

### 📊 Summary
- **Platform**: ${platformName} (\`${platformId}\`)
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
  static generatePRTitle(platformId: string, platformName: string, forceRewrite: boolean): string {
    return `[Policy Update]: ${platformName} ${platformId}${forceRewrite ? ' (Replace/rewrite)' : ''}`;
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
