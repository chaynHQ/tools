# Letter Generation Documentation

This document explains the AI-powered letter generation system that creates personalised takedown requests for survivors of image-based abuse.

## Overview

The letter generation system guides users through a multi-step process to collect necessary information, then uses AI to generate professional, trauma-informed takedown letters. The system is designed with privacy, security, and user experience as top priorities.

## User Flow & Data Collection

The letter generation process consists of several user-facing steps that collect information needed for effective takedown requests:

### 1. Platform Selection

- **Purpose**: Identify the platform where content needs to be removed
- **Options**: Facebook, Instagram, TikTok, OnlyFans, Pornhub, or custom platform
- **Data Collected**: Platform ID, platform name, custom platform name (if applicable)
- **Context**: Different platforms have different policies and contact methods

### 2. Removal Process Information

- **Purpose**: Understand what reporting steps the user has already taken
- **Options**:
  - Standard process completed (used platform's basic reporting)
  - Escalated process completed (used platform's advanced/legal reporting)
  - Both processes completed
  - No reporting completed yet
- **Data Collected**: Reporting status for tailoring letter approach

### 3. Initial Questions

- **Purpose**: Gather core information about the content and situation
- **Data Collected**:
  - **Content Type**: Intimate images, personal content, private information, or other
  - **Content Context**: How content was obtained (hacked account, impersonation, relationship, unknown, other)
  - **Content Location**: URL or description of where content is located
  - **Upload Date**: When content appeared online (if known)
  - **Creation Date**: When content was originally created (if known)
  - **Ownership Evidence**: How user can prove they own/appear in the content
  - **Impact Statement**: How the content sharing has affected the user

### 4. Reporting Details (Conditional)

- **Purpose**: Gather details about previous reporting attempts
- **Shown When**: User indicated they've tried reporting before
- **Data Collected**:
  - Details about standard reporting process attempts
  - Details about escalated reporting process attempts
  - Any responses received from the platform
  - Additional steps taken beyond platform reporting

### 5. Follow-Up Questions (AI-Generated)

- **Purpose**: Fill critical information gaps identified by AI analysis
- **Process**:
  - AI analyses collected information against platform policies
  - Generates targeted questions (maximum 4) to strengthen the case
  - Questions focus on evidence, context, or impact details
- **Data Collected**: User responses to AI-generated questions

## AI Processing Flow

The system uses multiple AI prompts to analyse user data and generate effective letters:

### 1. Follow-Up Question Generation (`follow-up.ts`)

- **Trigger**: After initial questions are completed
- **Purpose**: Identify information gaps that would strengthen the takedown request
- **Process**:
  - Analyses user responses against platform-specific policies
  - Identifies missing evidence or context that would support policy violations
  - Generates maximum 4 targeted, trauma-informed questions
  - Uses British English and sensitive language
- **Output**: Array of follow-up questions with context and reasoning

### 2. Letter Generation (`generate-letter.ts`)

- **Trigger**: After all user information is collected
- **Purpose**: Create a professional takedown letter
- **Process**:
  - Analyses complete user data against relevant platform policies
  - Selects most applicable policies (up to 4) that match the situation
  - Constructs letter following specific structure and tone guidelines
  - Uses trauma-informed language and avoids banned terms
  - Includes policy violations, evidence, impact, and requested actions
- **Output**: JSON object with subject line and letter body

### 3. Quality Check (`letter-quality-check.ts`)

- **Trigger**: Immediately after letter generation
- **Purpose**: Validate letter quality and fix issues
- **Process**:
  - Checks for hallucinations (information not provided by user)
  - Validates policy accuracy and relevance
  - Ensures trauma-informed language compliance
  - Verifies proper structure and required elements
  - Generates improved version if issues found
- **Output**: Issues list and improved letter (if needed)

## Data Sanitisation & Privacy

### Input Sanitisation

- **Purpose**: Protect user privacy while maintaining letter effectiveness
- **Process**:
  - Removes personally identifiable information (emails, phone numbers, names)
  - Replaces sensitive data with placeholders (e.g., `[EMAIL_1]`, `[PHONE_1]`)
  - Maintains content location as `[CONTENT_LOCATION]` for letter structure
  - Stores mapping between placeholders and original data
- **Security**: Sanitisation mappings are cleaned up after letter generation

### Output Desanitisation

- **Purpose**: Restore user's actual information in final letter
- **Process**:
  - Replaces placeholders with original user data
  - Maintains privacy by only restoring data in final output
  - Cleans up all temporary mappings after completion

## Platform Policy Integration

### Policy Matching

- **Purpose**: Select most relevant policies for each case
- **Process**:
  - Maps user's content type and context to platform policies
  - Filters policies based on relevance scoring
  - Prioritises policies with specific evidence requirements
  - Includes timeframes and removal criteria when available

## Error Handling & Reliability

### Retry Logic

- **Implementation**: All AI calls use `retryWithDelay` function
- **Configuration**: Maximum 2 retries with 1-second delays
- **Scope**: Letter generation, follow-up questions, quality checks
- **Fallback**: Graceful error messages if all retries fail

### Quality Assurance

- **Multiple validation layers**: Input validation, AI quality check, output validation
- **Banned terms detection**: Prevents trauma-insensitive language
- **Hallucination prevention**: Ensures letters only use provided information
- **Policy accuracy**: Validates policy citations against actual platform rules

### Data Safety

- **No persistent storage**: User data is never stored permanently
- **Session-based**: All data cleared when user leaves or refreshes
- **Sanitisation cleanup**: All temporary mappings removed after processing
- **Error isolation**: Failures don't expose user data

## Development Features

### Quick Form Fill (Development Only)

- **Trigger**: Alt+P (Windows/Linux) or Cmd+P (Mac) in development mode
- **Purpose**: Speed up testing by pre-filling forms with sample data
- **Scope**: All form fields across the entire flow
- **Data**: Realistic test data covering various scenarios

### Data Collection (Development/Preview)

- **Purpose**: Collect anonymised usage data for system improvement
- **Trigger**: Automatic in development and preview environments
- **Data**: Form responses, generated letters, completion metrics
- **Privacy**: All personally identifiable information removed

## Best Practices

### For Users

- **Be Specific**: Provide detailed information for more effective letters
- **Take Your Time**: No rush - the system saves progress within sessions
- **Review Carefully**: Check the generated letter before sending
- **Keep Records**: Save copies of letters and any platform responses

### For Developers

- **Test Thoroughly**: Use development quick-fill for comprehensive testing
- **Monitor Quality**: Watch for patterns in quality check failures
- **Update Policies**: Keep platform policies current for accurate letter generation
- **Maintain Privacy**: Never log or store user-provided sensitive information

### For Content Review

- **Validate AI Output**: Regularly review generated letters for quality and accuracy
- **Update Prompts**: Refine AI prompts based on user feedback and letter effectiveness
- **Monitor Banned Terms**: Ensure trauma-informed language standards are maintained
- **Track Success Rates**: Monitor takedown request success rates to improve system effectiveness
