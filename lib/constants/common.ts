export const ENVIRONMENT =
  process.env.NEXT_PUBLIC_ENV || process.env.VERCEL_ENV || process.env.NODE_ENV;
export const IS_PRODUCTION = ENVIRONMENT === 'production';
export const IS_DEVELOPMENT = ENVIRONMENT === 'development';
export const AI_MODEL = process.env.NEXT_PUBLIC_AI_MODEL || 'claude-sonnet-4-20250514';
