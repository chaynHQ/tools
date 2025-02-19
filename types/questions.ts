export interface FollowUpQuestion {
  id: string;
  question: string;
  context: string;
  reason: 'insufficient' | 'clarification' | 'support';
}