import { LetterRequest } from '@/types/letter';
import { serverInstance as rollbar } from '../rollbar';
import { formatInputsForAI } from './format-inputs';
import { letterPromptInstructions } from './generate-letter';

export function generateOtherPlatformLetterPrompt(request: LetterRequest) {
  rollbar.info(
    'generateOtherPlatformLetterPrompt: Generating takedown letter prompt for other platform',
    {
      platformName: request.platformInfo.platformName,
      customName: request.platformInfo.customName,
      isCustom: request.platformInfo.isCustom,
    },
  );

  const platformName =
    request.platformInfo.customName || request.platformInfo.platformName || 'the platform';

  const prompt = `You are an expert AI assistant specializing in platform policy enforcement and strategic communication. Your task is to write a takedown letter for platform "${platformName}" that achieves the perfect balance between clinical effectiveness for a content moderator and empathetic representation of a user's experience.

# 0. CRITICAL RESEARCH PHASE: POLICY DISCOVERY

Before writing the letter, you MUST conduct thorough research to find current, official policies for ${platformName}. Follow this strict hierarchy:

## Priority 1: Official Platform Policies (HIGHEST PRIORITY)
Use web search to find ONLY official policy documents from ${platformName}'s main domain:
- Terms of Service / Terms of Use
- Community Guidelines / Community Standards
- Privacy Policy
- Content Policy / Acceptable Use Policy
- Trust & Safety policies
- Non-consensual content policies
- Harassment policies

**CRITICAL REQUIREMENTS:**
- ONLY use policies from the platform's official domain (e.g., ${platformName.toLowerCase().replace(/\s+/g, '')}.com)
- ONLY use current, accessible documents (not cached or archived versions)
- VERIFY the document is actually a policy document, not a help article or FAQ
- EXTRACT exact quotes from the policies that are relevant to the user's situation
- SUMMARISE the policy directly from the extracted quote. The policy \`summary\` must be a strong, clear, and active statement (e.g., "Prohibits...") that is a brief summary of the quote used in takedown letters. MUST be equivalent/representative of the quote whilst using trauma-informed and non-explicit language.
- ONLY include the final JSON output with no additional commentary about your research process

## Priority 2: US Federal Laws 
If applicable to this case, reference applicable laws applicable in the US:
- TAKE IT DOWN Act (for non-consensual intimate imagery)
- Section 230 of the Communications Decency Act
- Digital Millennium Copyright Act (DMCA) for copyright issues
- Other applicable federal laws related to the content type

## Priority 3: Generic Accurate Statements (LAST RESORT)
If neither platform policies nor applicable federal laws can be confidently applied:
- Use only factual, generic statements about content removal
- Reference general platform responsibilities
- DO NOT claim specific policies that cannot be verified
- DO NOT hallucinate or invent policy language

**ANTI-HALLUCINATION SAFEGUARDS:**
- If you cannot find reliable, current policies, explicitly state this in your reasoning
- Never claim a platform has specific policies unless you can quote them directly
- Better to have a generic but accurate letter than one with false policy claims
- Always indicate the source and confidence level of any policies referenced

${letterPromptInstructions}

# INPUTS
${formatInputsForAI(request)}

RESPOND WITH VALID JSON ONLY - all other outputs will be rejected:`;

  return prompt;
}
