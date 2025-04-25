/**
 * Creates a prompt for policy validation
 */
export function createPrompt(platform: string, policyData: any) {
  return `
You are tasked with validating ${platform}'s for content removal and privacy violations. Here is the current policy data:

${JSON.stringify(policyData, null, 2)}

Please conduct a thorough review of these policies against ${platform}'s current policies that are valid today. Focus on:
1. Accuracy of policy references and URLs
2. Correctness of policy content and descriptions
3. Completeness of criteria and requirements
4. Currency of processes and timeframes

CRITICAL INSTRUCTIONS:
- Only return data you have high confidence in
- Do not fabricate or guess at policies
- If you cannot verify something, mark it as needing verification
- Focus on substantive policy changes, not minor wording differences
- Consider any major policy updates in the past year
- Verify all URLs and policy references against official sources

Return your analysis in this structured JSON format only:
{
  "suggestedChanges": [
    {
      "section": "string (e.g., 'legalBasis', 'contentPolicies.intimate')",
      "reason": "string (explanation of why this needs updating)"
    }
  ],
  "confidence": number (0-1, your confidence in this analysis)
}
In the suggestedChanges array include only sections where there is a high confidence that updates are needed.
`;
}