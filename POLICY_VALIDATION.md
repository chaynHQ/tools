# Policy Validation Documentation

This document explains the automated policy validation system that keeps our platform policies up-to-date for generating accurate takedown letters.

## Overview

The policy validation system automatically monitors and updates platform policies (Terms of Service, Community Guidelines, etc.) for major platforms like Facebook, Instagram, TikTok, OnlyFans, and Pornhub. It uses AI to detect changes, extract relevant policies, and create pull requests when updates are needed.

## Policy Validation Flow

The validation process consists of several automated steps:

### 1. Document Validation
- **Purpose**: Verify that existing policy documents are still accessible and current
- **Process**: 
  - Checks each stored policy document URL for accessibility
  - Identifies documents that have moved, been updated, or become invalid
  - Searches for new relevant policy documents (e.g., new community guidelines)
  - Uses web search to discover additional relevant documents

### 2. Document Scraping
- **Purpose**: Extract the current content from policy documents
- **Process**:
  - Uses the Gaffa API to scrape policy documents and convert them to markdown
  - Handles rate limiting with controlled concurrency (max 3 concurrent requests)
  - Includes retry logic for failed scraping attempts
  - Special handling for adult content platforms that may have firewall restrictions

### 3. Policy Abstraction
- **Purpose**: Extract structured policy data from document content
- **Process**:
  - Uses AI to identify relevant policies within each document
  - Extracts key information: policy summaries, quotes, removal criteria, evidence requirements
  - Maps policies to content types (intimate, personal, private, other) and contexts (hacked, impersonation, relationship, etc.)
  - Identifies appeal processes and timeframes
  - Processes multiple documents in parallel for efficiency

### 4. Policy Comparison & Quality Check
- **Purpose**: Ensure changes are meaningful and high-quality
- **Process**:
  - Compares new policies against existing ones to identify changes
  - Performs AI-powered quality assurance to validate:
    - Policy relevance to image-based abuse cases
    - Accuracy of policy summaries vs. original quotes
    - Proper content type and context mapping
    - Trauma-informed language usage
  - Filters out purely cosmetic changes that don't improve functionality

### 5. Pull Request Creation
- **Purpose**: Submit validated changes for human review
- **Process**:
  - Creates a new branch with timestamp-based naming
  - Generates updated TypeScript policy files
  - Creates a detailed pull request with:
    - Summary of changes found
    - Reasoning for updates
    - Links to original policy documents
  - Automatically closes any existing policy PRs for the same platform

## GitHub Workflow Triggers

### Automatic Weekly Execution
- **Schedule**: Every Monday at 9:00 AM UTC
- **Scope**: Validates all platforms (Facebook, Instagram, TikTok, OnlyFans, Pornhub)
- **Cron Expression**: `0 9 * * 1`

### Manual Execution
You can manually trigger the workflow via GitHub Actions:

1. Go to **Actions** → **Policy Validation Workflow**
2. Click **Run workflow**
3. Optional parameters:
   - **Platform**: Select a specific platform or leave empty for all platforms
   - **Force Rewrite**: Check this box to ignore existing policies and rebuild from scratch

### Development Triggers (Temporary)
- **Push to `validation-flow` branch**: Currently enabled for testing (will be removed)
- **Note**: This trigger should be ignored in production usage

## Force Rewrite Mode

### When to Use Force Rewrite
Use force rewrite mode when you need to completely rebuild policies from scratch:

- **After prompt updates**: When you've modified the AI prompts for policy extraction
- **After schema changes**: When the policy data structure has been updated
- **Quality improvements**: When you want to apply improved extraction logic to all policies
- **Fresh start**: When you suspect existing policies may have accumulated errors over time

### How to Trigger Force Rewrite

#### Via GitHub Actions UI:
1. Navigate to **Actions** → **Policy Validation Workflow**
2. Click **Run workflow**
3. Select the platform (or leave empty for all platforms)
4. **Check the "Force complete rewrite" checkbox**
5. Click **Run workflow**

#### Via Command Line (for development):
```bash
npx tsx scripts/policy-validation.ts <platform> --force-rewrite
```

### What Force Rewrite Does
- Ignores all existing policies for the platform
- Treats the validation as a fresh extraction
- Rebuilds the entire policy structure from current documents
- Creates a PR marked with `[FORCE-REWRITE]` in the title

## Reviewing Policy Validation Updates

### When You Receive a Policy Update PR

#### 1. Initial Assessment
- **Check the PR title**: Look for platform name and whether it's a force rewrite
- **Review the PR description**: Contains summary of changes and reasoning
- **Check the workflow status**: Ensure all validation steps passed

#### 2. Review Process

##### What to Look For:
- **Meaningful changes**: Are the updates actually improving our policy coverage?
- **Accuracy**: Do the policy summaries accurately reflect the quoted text?
- **Relevance**: Are the policies relevant to image-based abuse cases?
- **Content mapping**: Are content types and contexts properly assigned?
- **Language quality**: Is the language trauma-informed and appropriate?

##### Red Flags:
- Policies that seem unrelated to image takedown requests
- Summaries that don't match the quoted policy text
- Overly explicit or inappropriate language
- Missing important policies that should be present
- Policies that are actually just informational text, not rules

#### 3. Decision Making

##### ✅ **Approve and Merge** if:
- Changes improve policy coverage or accuracy
- New relevant policies have been discovered
- Updates reflect genuine platform policy changes
- Quality check passed and changes look sensible

##### ❌ **Close Without Merging** if:
- Changes are purely cosmetic with no functional benefit
- New policies are irrelevant or incorrectly extracted
- Quality appears worse than existing policies
- Updates seem to be based on outdated or incorrect information

##### 🔄 **Re-run Validation** if:
- Workflow failed due to temporary issues
- You suspect the extraction could be improved
- You want to test after making prompt adjustments

### Re-running Policy Validation

#### For Failed Workflows:
1. Go to **Actions** → **Policy Validation Workflow**
2. Find the failed run
3. Click **Re-run failed jobs** or **Re-run all jobs**

#### For New Validation:
1. Close the existing PR if you don't want those changes
2. Go to **Actions** → **Policy Validation Workflow**
3. Click **Run workflow**
4. Select the same platform and settings
5. A new PR will be created (old PRs are automatically closed)

### Important Notes

#### Parallel Execution
- **All platforms run simultaneously**: The workflow uses a matrix strategy to validate all platforms in parallel
- **Independent failures**: If one platform fails, others continue running
- **Separate PRs**: Each platform gets its own pull request
- **Individual review**: You can approve/reject each platform's changes independently

#### Notifications
- **Slack notifications**: The team receives notifications about validation results
- **PR notifications**: GitHub will notify relevant team members about new PRs
- **Failure alerts**: Failed validations trigger alerts for investigation

#### Rate Limiting & Reliability
- **Built-in retries**: All AI calls and web requests include automatic retry logic
- **Rate limiting**: Gaffa scraping is rate-limited to avoid overwhelming external services
- **Graceful degradation**: Partial failures don't stop the entire process

#### Data Safety
- **No data loss**: Existing policies are never deleted until new ones are validated
- **Rollback capability**: Changes can be reverted by closing PRs or reverting commits
- **Audit trail**: All changes are tracked through Git history and PR discussions

## Troubleshooting

### Common Issues

#### Workflow Failures
- **API rate limits**: Wait and re-run, or check if API keys need renewal
- **Network timeouts**: Usually resolved by re-running the workflow
- **AI service issues**: Temporary Anthropic API issues, retry usually resolves

#### Quality Check Failures
- **Invalid policies extracted**: May indicate platform policy changes that need manual review
- **Mapping errors**: Content type/context assignments may need prompt refinement
- **Language issues**: Trauma-informed language checks may need adjustment

#### PR Creation Failures
- **GitHub token issues**: Check if the GitHub token has proper permissions
- **Branch conflicts**: Usually resolved automatically by the cleanup process
- **File permission issues**: Rare, but may require manual intervention

### Getting Help
- **Check workflow logs**: Detailed logs are available in the GitHub Actions interface
- **Review Slack notifications**: Error messages are sent to the team channel
- **Consult this documentation**: Most common scenarios are covered here
- **Ask the development team**: For complex issues or system modifications

## Best Practices

### For Team Members
- **Review PRs promptly**: Policy updates help maintain accurate takedown letters
- **Be thorough but practical**: Focus on meaningful improvements over perfection
- **Document concerns**: Use PR comments to explain approval/rejection decisions
- **Monitor notifications**: Stay aware of validation results and failures

### For Developers
- **Test prompt changes**: Use force rewrite mode after modifying extraction prompts
- **Monitor quality scores**: Track the AI quality assessments over time
- **Update documentation**: Keep this guide current with system changes
- **Handle failures gracefully**: Ensure the system degrades gracefully under load

### For Platform Policy Changes
- **Expect regular updates**: Major platforms frequently update their policies
- **Validate manually**: Spot-check important policy changes against original documents
- **Consider impact**: Think about how policy changes affect our takedown letter effectiveness
- **Communicate changes**: Share significant policy updates with the broader team