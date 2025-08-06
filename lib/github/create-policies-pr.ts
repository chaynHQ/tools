import { serverInstance as rollbar } from '@/lib/rollbar';
import { Octokit } from '@octokit/rest';

import { PlatformPolicy } from '@/types/policies';

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

      // Step 2: Create a new branch
      await this.octokit.rest.git.createRef({
        owner: this.owner,
        repo: this.repo,
        ref: `refs/heads/${data.branchName}`,
        sha: baseBranchSha,
      });

      console.log('GitHubPRCreator: Created branch', {
        branchName: data.branchName,
        baseSha: baseBranchSha.substring(0, 7),
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
        base: repo.default_branch,
      });

      console.log('GitHubPRCreator: Successfully created PR', {
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
    updatedPolicy: PlatformPolicy,
    reasoning: string,
  ): Promise<{ url: string; number: number } | null> {
    if (!process.env.GITHUB_TOKEN) {
      rollbar.warning('PolicyValidation: GitHub token not configured, skipping PR creation');
      return null;
    }

    try {
      const timestamp = new Date().toISOString().split('T')[0];
      const branchName = `policy-update/${timestamp}-${platformId}`;
      const prTitle = GitHubPRCreator.generatePRTitle(platformId, updatedPolicy.name);
      const prBody = GitHubPRCreator.generatePRBody(platformId, updatedPolicy.name, reasoning);

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
        throw new Error(prResult.error || 'Unknown PR creation error');
      }
    } catch (error) {
      throw error;
    }
  }

  /**
   * Generates PR body content
   */
  static generatePRBody(platformId: string, platformName: string, reasoning: string): string {
    const timestamp = new Date().toISOString();

    return `## 🤖 Automated Policy Update

This pull request contains policy updates identified by our automated validation system.

### 📊 Summary
- **Platform**: ${platformName} (\`${platformId}\`)
- **Generated**: ${timestamp}

### 🔍 Changes Made

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
*Generated by Policy Validation Workflow v1.0*`;
  }

  /**
   * Generates PR title
   */
  static generatePRTitle(platformId: string, platformName: string): string {
    return `🤖 Policy Update: ${platformName} (${platformId})`;
  }
}

/**
 * Generates the TypeScript file content for a platform policy
 */
export function generatePolicyFileContent(updatedPolicy: PlatformPolicy, fileName: string): string {
  const platformName = updatedPolicy.name;
  const exportName = `${fileName.replace('.ts', '')}Policy`;

  return `import { ContentContext, ContentType, LegalDocument, PlatformPolicy } from './types';

const legalDocuments: LegalDocument[] = ${JSON.stringify(updatedPolicy.legalDocuments, null, 2)};

const contentTypes: ContentType[] = ${JSON.stringify(updatedPolicy.contentTypes, null, 2)};

const contentContexts: ContentContext[] = ${JSON.stringify(updatedPolicy.contentContexts, null, 2)};

const generalPolicies = ${JSON.stringify(updatedPolicy.generalPolicies, null, 2)};

export const ${exportName}: PlatformPolicy = {
  name: '${platformName}',
  legalDocuments,
  contentTypes,
  contentContexts,
  generalPolicies,
  timeframes: ${JSON.stringify(updatedPolicy.timeframes, null, 2)},
  appealProcess: ${JSON.stringify(updatedPolicy.appealProcess, null, 2)},
};
`;
}
