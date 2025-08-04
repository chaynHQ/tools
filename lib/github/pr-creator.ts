import { Octokit } from '@octokit/rest';
import { serverInstance as rollbar } from '@/lib/rollbar';

export interface PullRequestData {
  title: string;
  body: string;
  branchName: string;
  baseBranch: string;
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

  constructor(token: string, owner: string, repo: string) {
    this.octokit = new Octokit({ auth: token });
    this.owner = owner;
    this.repo = repo;
  }

  /**
   * Creates a pull request with policy changes
   */
  async createPolicyUpdatePR(data: PullRequestData): Promise<PullRequestResult> {
    try {
      rollbar.info('GitHubPRCreator: Starting PR creation', {
        branchName: data.branchName,
        filesCount: data.files.length,
        owner: this.owner,
        repo: this.repo,
      });

      // Step 1: Get the default branch SHA
      const { data: defaultBranch } = await this.octokit.rest.repos.get({
        owner: this.owner,
        repo: this.repo,
      });

      const baseSha = await this.getLatestCommitSha(data.baseBranch);

      // Step 2: Create a new branch
      await this.octokit.rest.git.createRef({
        owner: this.owner,
        repo: this.repo,
        ref: `refs/heads/${data.branchName}`,
        sha: baseSha,
      });

      rollbar.info('GitHubPRCreator: Created branch', {
        branchName: data.branchName,
        baseSha: baseSha.substring(0, 7),
      });

      // Step 3: Create/update files in the new branch
      for (const file of data.files) {
        await this.createOrUpdateFile(file.path, file.content, data.branchName);
      }

      // Step 4: Create the pull request
      const { data: pullRequest } = await this.octokit.rest.pulls.create({
        owner: this.owner,
        repo: this.repo,
        title: data.title,
        body: data.body,
        head: data.branchName,
        base: data.baseBranch,
      });

      rollbar.info('GitHubPRCreator: Successfully created PR', {
        pullRequestNumber: pullRequest.number,
        pullRequestUrl: pullRequest.html_url,
        branchName: data.branchName,
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
   * Gets the latest commit SHA for a branch
   */
  private async getLatestCommitSha(branch: string): Promise<string> {
    const { data: branchData } = await this.octokit.rest.repos.getBranch({
      owner: this.owner,
      repo: this.repo,
      branch,
    });
    return branchData.commit.sha;
  }

  /**
   * Creates or updates a file in the repository
   */
  private async createOrUpdateFile(
    path: string,
    content: string,
    branch: string
  ): Promise<void> {
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

      rollbar.info('GitHubPRCreator: Updated existing file', { path, branch });

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

        rollbar.info('GitHubPRCreator: Created new file', { path, branch });
      } else {
        throw error;
      }
    }
  }

  /**
   * Generates PR body content
   */
  static generatePRBody(
    changesSummary: string,
    validationId: string,
    documentsProcessed: number,
    totalChanges: number
  ): string {
    const timestamp = new Date().toISOString();
    
    return `## 🤖 Automated Policy Update

This pull request contains policy updates identified by our automated validation system.

### 📊 Summary
- **Validation ID**: \`${validationId}\`
- **Documents Processed**: ${documentsProcessed}
- **Total Policy Changes**: ${totalChanges}
- **Generated**: ${timestamp}

### 🔍 Changes Made

${changesSummary}

### ✅ Validation Status
- **Step 1-3**: AI analysis completed successfully
- **Step 4**: Changes aggregated and compiled
- **Step 5**: Quality check passed - all changes validated as structurally sound and semantically plausible

### 🔄 Next Steps
1. **Review**: Please review the changes in the Files Changed tab
2. **Test**: Run any necessary tests to ensure functionality
3. **Merge**: If approved, merge to deploy the updated policies

### 🤖 Automation Details
This PR was automatically generated by the Policy Validation Workflow. The changes were:
1. Identified by AI analysis of live platform documents
2. Aggregated into a cohesive policy update
3. Validated by a second AI for quality assurance
4. Automatically formatted and submitted as this PR

---
*Generated by Policy Validation Workflow v1.0*`;
  }

  /**
   * Generates branch name for policy updates
   */
  static generateBranchName(validationId: string): string {
    const timestamp = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
    return `policy-update/${timestamp}-${validationId.split('_')[1]}`;
  }

  /**
   * Generates PR title
   */
  static generatePRTitle(totalChanges: number, documentsUpdated: string[]): string {
    const platformsText = documentsUpdated.length === 1 ? 
      documentsUpdated[0] : 
      `${documentsUpdated.length} documents`;
    
    return `🤖 Policy Update: ${totalChanges} changes across ${platformsText}`;
  }
}