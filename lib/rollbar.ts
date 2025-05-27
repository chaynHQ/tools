import Rollbar from 'rollbar';
import { ENVIRONMENT } from './constants/common';

const baseConfig = {
  captureUncaught: true,
  captureUnhandledRejections: true,
  environment: ENVIRONMENT,
  captureIP: 'anonymize',
  payload: {
    environment: ENVIRONMENT,
    client: {
      javascript: {
        source_map_enabled: true,
        code_version: process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA,
        guess_uncaught_frames: true,
      },
    },
  },
};

export const clientConfig = {
  accessToken: process.env.NEXT_PUBLIC_ROLLBAR_CLIENT_TOKEN,
  ...baseConfig,
};

export const rollbar = new Rollbar(clientConfig);


// Helper functions for error handling
export function handleApiError(error: unknown, endpoint: string, context?: Record<string, unknown>) {
  if (error instanceof Error) {    
    if (error.message.includes('401') || error.message.includes('unauthorized')) {
      return {
        error: 'Authentication failed',
        status: 401,
        message: error.message
      };
    }
    
    if (error.message.includes('429') || error.message.includes('rate limit')) {
      return {
        error: 'Rate limit exceeded',
        status: 429,
        message: error.message
      };
    }

    return {
      error: error.message,
      status: 500,
      message: error.message,
    };
  }

  return {
    error: 'An unexpected error occurred',
    status: 500,
  };
}