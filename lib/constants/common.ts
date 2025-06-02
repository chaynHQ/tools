export const ENVIRONMENT =
  process.env.NEXT_PUBLIC_ENV || process.env.VERCEL_ENV || process.env.NODE_ENV;
export const IS_PRODUCTION = ENVIRONMENT === 'production';
export const IS_DEVELOPMENT = ENVIRONMENT === 'development';
export const AI_MODEL = process.env.ANTHROPIC_AI_MODEL || 'claude-sonnet-4-20250514';
export const AI_TEMPERATURE = process.env.ANTHROPIC_AI_TEMPERATURE
  ? parseFloat(process.env.ANTHROPIC_AI_TEMPERATURE)
  : 0.3;
