# Letter Generation Documentation

This document explains the AI-powered letter generation system that creates personalized takedown requests for survivors of image-based abuse.

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
  - AI analyzes collected information against platform policies
  - Generates targeted questions (maximum 4) to strengthen the case
  - Questions focus on evidence, context, or impact details
- **Data Collected**: User responses to AI-generated questions

## AI Processing Flow

The system uses multiple AI prompts to analyze user data and generate effective letters:

### 1. Follow-Up Question Generation (`follow-up.ts`)
- **Trigger**: After initial questions are completed
- **Purpose**: Identify information gaps that would strengthen the takedown request
- **Process**:
  - Analyzes user responses against platform-specific policies
  - Identifies missing evidence or context that would support policy violations
  - Generates maximum 4 targeted, trauma-informed questions
  - Uses British English and sensitive language
- **Output**: Array of follow-up questions with context and reasoning

### 2. Letter Generation (`generate-letter.ts`)
- **Trigger**: After all user information is collected
- **Purpose**: Create a professional takedown letter
- **Process**:
  - Analyzes complete user data against relevant platform policies
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

## Data Sanitization & Privacy

### Input Sanitization
- **Purpose**: Protect user privacy while maintaining letter effectiveness
- **Process**:
  - Removes personally identifiable information (emails, phone numbers, names)
  - Replaces sensitive data with placeholders (e.g., `[EMAIL_1]`, `[PHONE_1]`)
  - Maintains content location as `[CONTENT_LOCATION]` for letter structure
  - Stores mapping between placeholders and original data
- **Security**: Sanitization mappings are cleaned up after letter generation

### Output Desanitization
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
  - Prioritizes policies with specific evidence requirements
  - Includes timeframes and removal criteria when available

### Supported Platforms
- **Facebook**: Community Standards, Terms of Service
- **Instagram**: Community Guidelines, Terms of Use  
- **TikTok**: Community Guidelines, Terms of Service
- **OnlyFans**: Acceptable Use Policy, Terms of Service
- **Pornhub**: Terms of Service, Trust and Safety Policy
- **Custom Platforms**: Generic policy guidance

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
- **Sanitization cleanup**: All temporary mappings removed after processing
- **Error isolation**: Failures don't expose user data

## Development Features

### Quick Form Fill (Development Only)
- **Trigger**: Alt+P (Windows/Linux) or Cmd+P (Mac) in development mode
- **Purpose**: Speed up testing by pre-filling forms with sample data
- **Scope**: All form fields across the entire flow
- **Data**: Realistic test data covering various scenarios

### Data Collection (Development/Preview)
- **Purpose**: Collect anonymized usage data for system improvement
- **Trigger**: Automatic in development and preview environments
- **Data**: Form responses, generated letters, completion metrics
- **Privacy**: All personally identifiable information removed

## User Experience Design

### Progressive Disclosure
- **Principle**: Only show relevant questions based on previous answers
- **Implementation**: Conditional rendering of reporting details and follow-up questions
- **Benefit**: Reduces cognitive load and form abandonment

### Trauma-Informed Design
- **Language**: Sensitive, non-judgmental terminology throughout
- **Pacing**: Users control progression through the flow
- **Support**: Clear explanations and context for each step
- **Privacy**: Emphasis on data security and anonymity

### Accessibility Features
- **Voice Input**: Available for text fields to assist users with typing difficulties
- **Clear Navigation**: Progress indicators and step-by-step guidance
- **Responsive Design**: Works across all device types and screen sizes
- **Error Handling**: Clear, actionable error messages

## Technical Architecture

### Form State Management
- **Context**: React Context API for global form state
- **Persistence**: Session-based storage, cleared on navigation away
- **Validation**: Real-time validation with user-friendly error messages
- **Reset**: Complete form reset when returning to home page

### API Endpoints
- **`/api/follow-up-questions`**: Generates targeted follow-up questions
- **`/api/generate-letter`**: Creates the takedown letter
- **`/api/quality-check-letter`**: Validates and improves letter quality
- **`/api/dev-data-collection`**: Collects development usage data

### Performance Optimization
- **Parallel Processing**: Quality check runs simultaneously with letter generation
- **Caching**: Platform policies cached for faster access
- **Lazy Loading**: Components loaded as needed
- **Error Boundaries**: Isolated error handling prevents full app crashes

## Monitoring & Analytics

### Usage Tracking
- **Events**: Platform selection, step completion, letter generation success/failure
- **Privacy**: No personally identifiable information tracked
- **Purpose**: Understand user behavior and identify improvement opportunities

### Error Monitoring
- **Service**: Rollbar integration for error tracking and alerting
- **Scope**: AI failures, API errors, user experience issues
- **Response**: Automatic alerts for critical failures

### Quality Metrics
- **Letter Generation Success Rate**: Percentage of successful letter generations
- **Follow-up Question Relevance**: User engagement with AI-generated questions
- **Policy Matching Accuracy**: Effectiveness of policy selection algorithm

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