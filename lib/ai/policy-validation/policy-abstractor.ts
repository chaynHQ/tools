import { serverInstance as rollbar } from '@/lib/rollbar';
import { callAnthropic } from '../anthropic';
import { parseAIJson } from '@/lib/utils';
import { Policy } from '@/types/policies';
import { 
  PolicyAbstractionResult, 
  generatePolicyAbstractionPrompt 
} from '@/lib/prompts/policy-validation-policy-abstraction';

export async function abstractPoliciesFromDocument(
  documentUrl: string,
  documentTitle: string,
  documentReference: string,
  documentMarkdown: string,
  currentPolicies?: Policy[]
): Promise<PolicyAbstractionResult> {
  rollbar.info('abstractPoliciesFromDocument: Starting policy abstraction', {
    documentUrl,
    documentTitle,
    markdownLength: documentMarkdown.length,
    currentPoliciesCount: currentPolicies?.length || 0,
  });

  try {
    const prompt = generatePolicyAbstractionPrompt(
      documentUrl,
      documentTitle,
      documentReference,
      documentMarkdown,
      currentPolicies
    );

    const response = await callAnthropic(prompt);
    const result: PolicyAbstractionResult = parseAIJson(response);

    rollbar.info('abstractPoliciesFromDocument: Policy abstraction completed', {
      documentUrl,
      success: result.success,
      policiesFound: result.policies?.length || 0,
      hasAppealProcess: !!result.appealProcess,
    });

    return result;
  } catch (error) {
    rollbar.error('abstractPoliciesFromDocument: Error during policy abstraction', {
      documentUrl,
      error,
    });
    return {
      success: false,
      policies: [],
      appealProcess: null,
      reasoning: 'Error during policy abstraction',
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}