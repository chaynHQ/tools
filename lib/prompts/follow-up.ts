import { LetterRequest } from '@/types/letter';
import { QUALITY_CHECK_CRITERIA } from '../constants/ai';
import { getDocumentsWithRelevantPolicies, getPlatformPolicy } from '../platform-policies';
import { getPlatformPolicyId } from '../platforms';
import { serverInstance as rollbar } from '../rollbar';
import { formatInputsForAI, formatPolicyDataForAI } from './format-inputs';

export function generateFollowUpPrompt(request: LetterRequest) {
  rollbar.info('generateFollowUpPrompt: Generating follow-up questions prompt', {
    platformId: request.platformInfo.platformId,
    platformName: request.platformInfo.platformName,
    isCustom: request.platformInfo.isCustom,
  });

  // Validate required data
  if (!request.initialQuestions || !request.platformInfo) {
    rollbar.error(
      'generateFollowUpPrompt: Missing required data for generating follow-up questions',
    );
    throw new Error('Missing required data for generating follow-up questions');
  }

  // Validate platformInfo
  if (!request.platformInfo.platformName && !request.platformInfo.customName) {
    rollbar.error('generateFollowUpPrompt: Missing platform name in platformInfo', {
      platformInfo: request.platformInfo,
    });
    throw new Error('Missing platform name in platformInfo');
  }

  // Get platform policies for context
  let platformPolicyContext = '';
  if (!request.platformInfo.isCustom) {
    const policyId = getPlatformPolicyId(request.platformInfo.platformId);
    if (policyId) {
      const platformPolicies = getPlatformPolicy(policyId);
      if (platformPolicies) {
        rollbar.info('generateFollowUpPrompt: Found platform policy', {
          platformId: request.platformInfo.platformId,
          policyId,
          platformName: platformPolicies.platform,
        });
        const documentsWithPolicies = getDocumentsWithRelevantPolicies(
          platformPolicies,
          request.initialQuestions.contentType,
          request.initialQuestions.contentContext,
        );

        rollbar.info('generateFollowUpPrompt: Policy filtering results', {
          platformId: request.platformInfo.platformId,
          contentType: request.initialQuestions.contentType,
          contentContext: request.initialQuestions.contentContext,
          totalDocuments: platformPolicies.policyDocuments.length,
          relevantDocuments: documentsWithPolicies.length,
          totalPolicies: platformPolicies.policyDocuments.reduce(
            (sum, doc) => sum + doc.policies.length,
            0,
          ),
          relevantPolicies: documentsWithPolicies.reduce(
            (sum, doc) => sum + doc.policies.length,
            0,
          ),
        });

        platformPolicyContext = formatPolicyDataForAI(platformPolicies, documentsWithPolicies);
      }
    } else {
      rollbar.warning('generateFollowUpPrompt: No policy ID found for platform', {
        platformId: request.platformInfo.platformId,
      });
    }
  }

  const prompt = `# ROLE & OBJECTIVE

You are a strategic trauma-informed AI assistant specializing in platform policy enforcement. Your objective is to intelligently identify critical information gaps in a user's takedown request. You will generate a small, targeted list of follow-up questions to gather only the most essential information needed to build the strongest possible case, based on specific platform policies ${request.platformInfo.platformName || request.platformInfo.customName}.

# CRITICAL DIRECTIVES

-  **Surgical Questioning:** You must be extremely selective. ONLY ask a question if the answer is **absolutely essential** to strengthen the link between the content and a specific policy violation. Do not ask for information that is already provided or is not critical for the takedown letter.
-  **Respect Privacy & Safety:** You MUST NOT ask for any personally identifiable information (name, email), sensitive personal details (medical, financial), or any form of official documentation/ID. All questions must use sensitive, trauma-informed language and MUST NOT contain any terms from the **Banned Terms** list below.
-  **Maximum of 4 Questions:** You must return a maximum of four questions. If a thorough analysis determines that no additional information is required to write a strong letter, you MUST return an empty array.

## Banned Terms
${QUALITY_CHECK_CRITERIA.MAJOR.SENSITIVE_TERMS.map(({ term, replacement }) => `- "${term}" (use "${replacement}")`).join('\n')}

## Trauma Informed
It's critical to avoid asking questions that may be too personal, triggering, or uncomfortable to share. For example, the question "Can you describe the circumstances in which this content was originally created?" is not be appropriate for intimate content. In this case use ask confirming questions instead of open-ended questions e.g. "Was this content ever shared or intended to be shared publicly by you?", "Has this significantly impacted your personal and professional life?". 
Whilst our core purpose is to gather essential information to support violations of policies, our letter aims to avoid sharing personal information where it is not critical to the takedown request. High level details are often enough to evidence a violation - but inspect policy details to confirm requirements and infer the detail required.
Be aware of the user's previous inputs to be sensitive to previously provided information - it's important the user feels heard and is asked relevant questions. 

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
    "question": "Can you describe the context in which this content was shared online?",
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

# INPUTS

This is the complete set of information provided by the user so far. You must review all of it before deciding if any questions are necessary.

${formatInputsForAI(request)}

${platformPolicyContext}
`;
  return prompt;
}
