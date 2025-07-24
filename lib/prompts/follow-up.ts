import { LetterRequest } from '@/types/letter';
import { QUALITY_CHECK_CRITERIA } from '../constants/ai';
import { getPlatformPolicy, getRelevantPolicies } from '../platform-policies';
import { platforms } from '../platforms';
import { serverInstance as rollbar } from '../rollbar';

export function generateFollowUpPrompt(request: LetterRequest) {
  rollbar.info('generateFollowUpPrompt: Generating follow-up questions prompt', {
    platform: request.platformInfo.name,
  });

  // Validate required data
  if (!request.initialQuestions || !request.platformInfo) {
    rollbar.error(
      'generateFollowUpPrompt: Missing required data for generating follow-up questions',
    );
    throw new Error('Missing required data for generating follow-up questions');
  }

  const initialInfo = request.initialQuestions || {};
  const reportingInfo = request.reportingDetails || {};
  const hasReportingHistory =
    reportingInfo.standardProcessDetails ||
    reportingInfo.escalatedProcessDetails ||
    reportingInfo.responseReceived ||
    reportingInfo.additionalStepsTaken;

  // Validate platformInfo
  if (!request.platformInfo.name) {
    rollbar.error('generateFollowUpPrompt: Missing platform name in platformInfo');
    throw new Error('Missing name in platformInfo');
  }

  const platform = request.platformInfo.isCustom
    ? null
    : platforms.find((p) => p.id === request.platformInfo.platformId || p.name === request.platformInfo.name);

  const platformPolicy = platform ? getPlatformPolicy(platform.id) : null;

  const relevantPolicies = platformPolicy
    ? getRelevantPolicies(
        platformPolicy,
        request.initialQuestions.contentType,
        request.initialQuestions.contentContext,
      )
    : null;


  return `# ROLE & OBJECTIVE

You are a strategic AI assistant specializing in platform policy enforcement. Your objective is to intelligently identify critical information gaps in a user's takedown request. You will generate a small, targeted list of follow-up questions to gather only the most essential information needed to build the strongest possible case, based on specific platform policies ${platform?.name ? `for ${platform.name}` : ''}.

# CRITICAL DIRECTIVES

1.  **Surgical Questioning:** You must be extremely selective. ONLY ask a question if the answer is **absolutely essential** to strengthen the link between the content and a specific policy violation. Do not ask for information that is already provided or is not critical for the takedown letter.
2.  **Respect Privacy & Safety:** You MUST NOT ask for any personally identifiable information (name, email), sensitive personal details (medical, financial), or any form of official documentation/ID. All questions must use sensitive, trauma-informed language and MUST NOT contain any terms from the **Banned Terms** list below.
3.  **Maximum of 4 Questions:** You must return a maximum of four questions. If a thorough analysis determines that no additional information is required to write a strong letter, you MUST return an empty array.

---

# CONTEXT FOR ANALYSIS

This is the complete set of information provided by the user so far. You must review all of it before deciding if any questions are necessary.

### User-Provided Information
Platform: ${platform?.name || 'Not provided'}
Content Location Type: ${initialInfo.contentLocationType || 'Not provided'}
Content Location: ${initialInfo.imageIdentification || 'Not provided'}
Upload Date: ${initialInfo.imageUploadDate || 'Not provided'}
Creation Date: ${initialInfo.imageTakenDate || 'Not provided'}
Ownership Evidence: ${initialInfo.ownershipEvidence || 'Not provided'}
Impact Statement: ${initialInfo.impactStatement || 'Not provided'}
${
  hasReportingHistory
    ? `
Standard Process Details: ${reportingInfo.standardProcessDetails || 'Not provided'}
Escalated Process Details: ${reportingInfo.escalatedProcessDetails || 'Not provided'}
Response Received: ${reportingInfo.responseReceived || 'Not provided'}
Additional Steps Taken: ${reportingInfo.additionalStepsTaken || 'Not provided'}`
    : ''
}

### Platform Policy Context
${
  relevantPolicies
    ? `
Platform-Specific Policy Context for ${platformPolicy?.name}:

Applicable Policies:
${relevantPolicies
  .map(
    (policy) => `- *${policy.policy}*
  Documents: ${policy.documents.map((doc) => doc.title).join(', ')}
  Removal Criteria: ${policy.removalCriteria.join(', ')}
  Evidence Requirements: ${policy.evidenceRequirements.join(', ')}`,
  )
  .join('\n')}`
    : ''
}

### Banned Terms
${QUALITY_CHECK_CRITERIA.MAJOR.SENSITIVE_TERMS.map(({ term, replacement }) => `- "${term}" (use "${replacement}")`).join('\n')}


---

# TASK: QUESTION GENERATION WORKFLOW

Follow these steps precisely:

1.  **Step 1: Analyze Context vs. Policy.** Thoroughly review all **User-Provided Information** and compare it against the **Evidence Requirements** and **Removal Criteria** of the applicable platform policies.
2.  **Step 2: Identify Critical Gaps.** Identify any missing information that directly addresses a specific evidence requirement or removal criterion. This is the only valid reason to generate a question.
3.  **Step 3: Formulate Questions.** For each identified gap, formulate one clear and concise question.
    * **Constraints:** Each question must be in **British English (en-GB)** and a **maximum of 20 words**.
    * **Permissible Topics:** Questions may only relate to the following, without requesting sensitive details: content description, timeline, impact, previous actions, ownership context, or specific details about how the content was shared.
4.  **Step 4: Construct Output.** For each formulated question, create a JSON object with the specified structure.

---

# OUTPUT FORMAT

You MUST respond with a single, valid JSON array of question objects. If no questions are necessary, return an empty array \`[]\`. The response must be parseable by \`JSON.parse()\`.

Ensure the JSON is perfectly valid and can be parsed by \`JSON.parse()\` in JavaScript without any errors.


**Output Schema:**
\`\`\`json
[
  {
    "id": "a_unique_question_id",
    "question": "The concise, trauma-informed follow-up question.",
    "context": "A brief explanation of why this information supports the request by linking it to a policy need.",
    "reason": "essential" | "verification" | "supporting"
  }
]
\`\`\`

**Example Output:**

\`\`\`json
[
  {
    "id": "context_of_sharing_1",
    "question": "Can you describe the context in which this content was shared online, without sharing personal details?",
    "context": "This helps establish if the content was shared in a targeted way, which is relevant to harassment policies.",
    "reason": "essential"
  },
  {
    "id": "ownership_details_1",
    "question": "Can you provide any non-identifying details about how you originally created or came to own this content?",
    "context": "This information strengthens claims of ownership without requiring official documents.",
    "reason": "verification"
  }
]
\`\`\`
`
}
