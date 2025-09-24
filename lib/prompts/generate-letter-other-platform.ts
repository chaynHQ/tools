import { LetterRequest } from '@/types/letter';
import { QUALITY_CHECK_CRITERIA } from '../constants/ai';
import { serverInstance as rollbar } from '../rollbar';
import { formatInputsForAI } from './format-inputs';

export function generateOtherPlatformLetterPrompt(request: LetterRequest) {
  rollbar.info('generateOtherPlatformLetterPrompt: Generating takedown letter prompt for other platform', {
    platformName: request.platformInfo.platformName,
    customName: request.platformInfo.customName,
    isCustom: request.platformInfo.isCustom,
  });

  const platformName = request.platformInfo.customName || request.platformInfo.platformName || 'the platform';

  const prompt = `You are an expert AI assistant specializing in platform policy enforcement and strategic communication. Your task is to write a takedown letter for ${platformName} that achieves the perfect balance between clinical effectiveness for a content moderator and empathetic representation of a user's experience.

# 1. CRITICAL RESEARCH PHASE: POLICY DISCOVERY

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

## Priority 2: US Federal Laws (FALLBACK)
If no reliable platform policies can be found, reference applicable US federal laws:
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

# 2. CORE PRINCIPLE: BALANCE EFFECTIVENESS WITH EMPATHY
While the letter must be concise and scannable for moderators, it must also respectfully reflect the user's voice and the severity of their situation. Use the first-person ('I', 'my') where appropriate to center their experience.

# 3. INTERNAL THOUGHT PROCESS & EXECUTION PLAN
Before writing, you MUST follow these internal steps:
1. **Research Platform Policies**: Use web search to find official policies for ${platformName}
2. **Verify Policy Sources**: Ensure all policies are from official sources and currently accessible
3. **Analyze the Case**: Thoroughly review the \`userInputs\` to understand the core facts
4. **Synthesize Key Facts**: Distill the user's report into 2-4 concise, factual bullet points written from the user's first-person perspective
5. **Match Facts to Policies**: Connect the key facts to the most relevant verified policies or applicable laws
6. **Construct the Letter**: Use the synthesized facts and verified policies to write the letter

---

# 4. GUIDELINES & CRITICAL RULES
You must adhere to all of the following rules when generating the letter.

### Core Directives
- **Single Source of Truth:** You MUST base the entire response *only* on the variables provided in the \`# INPUTS\` section and verified policies found through research
- **Professional Tone:** The tone must always be professional, direct, and respectful. Avoid demanding, aggressive, threatening, or overly legalistic language
- **Content Location:** The letter MUST include the exact statement: \`Content location: [CONTENT_LOCATION]\`. This specific placeholder must be used
- **Policy Accuracy:** Only reference policies you can verify and quote directly from official sources

### Style & Language
- **Language:** All text must be in British English (en-GB)
- **Sensitivity:** Adopt a trauma-informed and respectful approach. Be sensitive to the user's experience and ensure feminist principles are applied
- **Banned Terms:** The following terms are banned. The presence of any of these is a critical failure.
    ${QUALITY_CHECK_CRITERIA.MAJOR.SENSITIVE_TERMS.map(
      ({ term, replacement }) => `- Do not use "${term}". Instead, use "${replacement}".`,
    ).join('\n')}

### Information & Evidence
- **Placeholders:** Maintain the exact placeholders (e.g., \`[URL]\`, \`[PHONE]\`) from the \`# INPUTS\` data. DO NOT create new placeholders
- **Confidentiality:** DO NOT mention or request identity verification, government IDs, proof of residence, or similar official documentation

### Impact Statements
You MUST summarize the user's description of impact according to these rules:
- **Factual Basis:** The summary must be based strictly on the user's input, without exaggeration
- **Privacy-Preserving:** Generalise sensitive details using approved phrases like:
  - \`This is causing significant emotional distress.\`
  - \`This is negatively affecting my mental wellbeing.\`
  - \`This is impacting my personal safety and security.\`
  - \`This is affecting my professional life.\`

---

# 5. OPTIMIZED LETTER BLUEPRINT
Construct the letter following this exact structure for maximum clarity and impact:

1. **Subject:** A clear and factual subject line, with keywords for routing
2. **Introduction:** Begin with a direct but personal statement that frames the issue from the user's perspective
3. **Content details:** A clean, scannable key-value list for essential data:
   - \`Content location: [CONTENT_LOCATION]\`
   - \`Upload Date: [DD/MM/YYYY]\` (Format user-provided dates to DD/MM/YYYY, using ${new Date().toLocaleDateString('en-GB')} as today's date for reference)
   - \`Creation Date: [DD/MM/YYYY]\`
4. **Content summary:** Present the key facts as a short, **first-person** bulleted list (using "I" or "my")
5. **Policy violations:** Present the violated policies as a clean, bulleted list:
   - **Format for verified platform policies:** \`- [Policy Document Title]: [Exact Policy Quote]\`
   - **Format for federal laws:** \`- [Law Name]: [Relevant Legal Provision]\`
   - **Format for generic statements:** \`- Platform Responsibility: [Generic but accurate statement]\`
6. **Reporting history:** If provided, list previous reporting attempts in a bulleted list
7. **Impact statement & requested action:** Closing paragraph with privacy-preserving impact statement and requested action
8. **Closing:** End with \`Sincerely,\`

---

# 6. FINAL OUTPUT FORMAT
You MUST respond with a single, valid JSON object that is parseable by \`JSON.parse()\`.
- The JSON object must contain exactly two keys: \`subject\` and \`body\`
- The \`body\` value must be a single string with all new lines represented by \`\\n\`

**Example:**
\`\`\`json
{
  "subject": "Formal Request for Content Removal - Violation of Platform Policies",
  "body": "Dear ${platformName} Support Team,\\n\\nI am writing to formally request the removal of content that violates your stated policies...\\n\\nSincerely,\\n"
}
\`\`\`

# INPUTS
${formatInputsForAI(request)}

RESPOND WITH VALID JSON ONLY:`;

  return prompt;
}