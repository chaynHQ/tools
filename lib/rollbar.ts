import Rollbar from 'rollbar';
import { ENVIRONMENT } from './constants/env';

const clientToken = process.env.NEXT_PUBLIC_ROLLBAR_CLIENT_TOKEN || undefined;
const serverToken = process.env.ROLLBAR_SERVER_TOKEN || undefined;

const baseConfig = {
  captureUncaught: true,
  captureUnhandledRejections: true,
  environment: ENVIRONMENT,
  captureIP: 'anonymize',
  scrubTelemetryInputs: true,
  enabled: !!clientToken,
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
  accessToken: clientToken,
  ...baseConfig,
};

// Use this import for client side helper functions otherwise use the useRollbar hook in components
export const rollbar = new Rollbar(clientConfig);

// Server-side Rollbar instance
export const serverInstance = new Rollbar({
  ...baseConfig,
  accessToken: serverToken,
});

// Helper functions for error handling
export function handleApiError(
  error: unknown,
  endpoint: string,
  context?: Record<string, unknown>,
) {
  if (!serverToken) {
    console.error('API Error:', { error, endpoint, context });
  } else if (error instanceof Error) {
    serverInstance.error('API Error', {
      error,
      endpoint,
      context,
      errorMessage: error.message,
      errorStack: error.stack,
    });
  }

  if (error instanceof Error) {
    if (error.message.includes('401') || error.message.includes('unauthorized')) {
      return {
        error: 'Authentication failed',
        status: 401,
      };
    }

    if (error.message.includes('429') || error.message.includes('rate limit')) {
      return {
        error: 'Rate limit exceeded',
        status: 429,
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

export function logInfo(message: string, context?: Record<string, unknown>) {
  if (clientToken) {
    serverInstance.info(message, context);
  } else {
    console.info(message, context);
  }
}
