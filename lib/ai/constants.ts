import { SENSITIVE_TERMS } from '../prompts/constants';

export const MAX_RETRIES = 3;
export const RETRY_DELAY = 1000; // 1 second delay between retries

// Static next steps that will be used for all letters
export const STATIC_NEXT_STEPS = [
  'They might respond asking for the evidence you listed, so make sure you have the things referenced in this letter to hand.',
  "In 48 hours, check if your content has been removed. Sometimes the platforms don't send a response but they do remove the content",
  'If the content is still available, you could try sending a follow up asking them to respond',
];

// Check for major issues that require regeneration
export function hasMajorIssues(letter: { subject: string; body: string }): boolean {
  // Check for hallucination patterns
  const hasHallucinations = SENSITIVE_TERMS.some(
    (pattern) =>
      letter.subject.toLowerCase().includes(pattern.term.toLowerCase()) ||
      letter.body.toLowerCase().includes(pattern.term.toLowerCase()),
  );

  // Check for sensitive terms
  const hasEvidenceTerms = SENSITIVE_TERMS.some(
    (pattern) =>
      pattern.term.toLocaleLowerCase().includes(letter.subject) ||
      pattern.term.toLocaleLowerCase().includes(letter.body),
  );

  const hasSensitiveTerms = SENSITIVE_TERMS.some(
    (pattern) =>
      letter.subject.toLowerCase().includes(pattern.term.toLowerCase()) ||
      letter.body.toLowerCase().includes(pattern.term.toLowerCase()),
  );

  return hasHallucinations || hasSensitiveTerms || hasEvidenceTerms;
}
