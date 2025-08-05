import { serverInstance as rollbar } from '@/lib/rollbar';
import { Octokit } from '@octokit/rest';

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
      rollbar.info('GitHubPRCreator: Starting PR creation', {
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

      rollbar.info('GitHubPRCreator: Created branch', {
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
   * Creates a pull request for policy updates with all the logic moved from the route
   */
  async createPolicyPullRequest(
    session: any,
    updatedPolicies: Record<string, any>,
    totalChanges: number,
  ): Promise<{ url: string; number: number } | null> {
    if (!process.env.GITHUB_TOKEN) {
      rollbar.warning('PolicyValidation: GitHub token not configured, skipping PR creation');
      return null;
    }

    try {
      rollbar.info('PolicyValidation: Creating PR', {
        validationId: session.validationId,
        totalChanges,
        platformsUpdated: Object.keys(updatedPolicies).length,
      });

      const branchName = GitHubPRCreator.generateBranchName(session.validationId);
      const prTitle = GitHubPRCreator.generatePRTitle(totalChanges, Object.keys(updatedPolicies));
      const prBody = GitHubPRCreator.generatePRBody(
        `Policy validation completed with ${totalChanges} changes across ${Object.keys(updatedPolicies).length} platforms`,
        session.validationId,
        session.processedDocuments.length,
        totalChanges,
      );

      // Create files for all updated platforms
      const files = [];
      for (const [platformId, policy] of Object.entries(updatedPolicies)) {
        const policyFileName = `${platformId}.ts`;
        if (!policyFileName) {
          rollbar.error('PolicyValidation: Unknown platform ID', { platformId });
          continue;
        }

        files.push({
          path: `lib/platform-policies/${policyFileName}`,
          content: generatePolicyFileContent(policy, policyFileName),
        });
      }

      const prResult = await this.createPolicyUpdatePR({
        title: prTitle,
        body: prBody,
        branchName,
        files,
      });

      if (prResult.success) {
        rollbar.info('PolicyValidation: Successfully created PR', {
          validationId: session.validationId,
          pullRequestUrl: prResult.pullRequestUrl,
          pullRequestNumber: prResult.pullRequestNumber,
        });

        return {
          url: prResult.pullRequestUrl!,
          number: prResult.pullRequestNumber!,
        };
      } else {
        rollbar.error('PolicyValidation: Failed to create PR', {
          validationId: session.validationId,
          error: prResult.error,
        });
        return null;
      }
    } catch (error) {
      rollbar.error('PolicyValidation: PR creation failed', {
        validationId: session.validationId,
        error,
      });
      return null;
    }
  }

  /**
   * Generates PR body content
   */
  static generatePRBody(
    changesSummary: string,
    validationId: string,
    documentsProcessed: number,
    totalChanges: number,
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
  static generatePRTitle(totalChanges: number, platformsUpdated: string[]): string {
    const platformsText =
      platformsUpdated.length === 1
        ? platformsUpdated[0].toUpperCase()
        : `${platformsUpdated.length} platforms`;

    return `🤖 Policy Update: ${totalChanges} changes across ${platformsText}`;
  }
}

/**
 * Generates the TypeScript file content for a platform policy
 */
export function generatePolicyFileContent(updatedPolicy: any, fileName: string): string {
  const exportName = fileName.replace('.ts', 'Policy');

  return `import { ContentContext, ContentType, LegalDocument, PlatformPolicy } from './types';

const legalDocuments: LegalDocument[] = ${JSON.stringify(updatedPolicy.legalDocuments, null, 2)};

const contentTypes: ContentType[] = ${JSON.stringify(updatedPolicy.contentTypes, null, 2)};

const contentContexts: ContentContext[] = ${JSON.stringify(updatedPolicy.contentContexts, null, 2)};

const generalPolicies = ${JSON.stringify(updatedPolicy.generalPolicies, null, 2)};

export const ${exportName}: PlatformPolicy = {
  name: '${updatedPolicy.name}',
  legalDocuments,
  contentTypes,
  contentContexts,
  generalPolicies,
  timeframes: ${JSON.stringify(updatedPolicy.timeframes, null, 2)},
  appealProcess: ${JSON.stringify(updatedPolicy.appealProcess, null, 2)},
};
`;
}
