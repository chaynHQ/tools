export const ENVIRONMENT =
  process.env.NEXT_PUBLIC_ENV || process.env.VERCEL_ENV || process.env.NODE_ENV;
export const IS_PRODUCTION = ENVIRONMENT === 'production';
export const IS_DEVELOPMENT = ENVIRONMENT === 'development';
export const IS_PREVIEW = ENVIRONMENT === 'preview';
