import { randomBytes } from 'crypto';
import { IS_DEVELOPMENT, IS_PREVIEW } from '../constants/common';
import { rollbar } from '../rollbar';

interface DevDataCollectionPayload {
  formData: any;
  generatedLetter: any;
  sessionId?: string;
  completionTimeSeconds?: number;
}

export async function sendDevDataToZapier(payload: DevDataCollectionPayload): Promise<boolean> {
  // Only send data in development environment
  if (!IS_DEVELOPMENT && !IS_PREVIEW) {
    return false;
  }

  try {
    const response = await fetch('/api/dev-data-collection', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...payload,
        sessionId: payload.sessionId || generateSessionId(),
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to send development data');
    }

    console.log('Development data collection: Successfully sent data to Zapier');
    return true;
  } catch (error) {
    rollbar.error('Development data collection: Error sending data to Zapier', {
      error,
      payload: {
        ...payload,
        // Don't log sensitive data in error logs
        formData: 'redacted',
        generatedLetter: 'redacted',
      },
    });
    console.error('Development data collection error:', error);
    return false;
  }
}

export function generateSessionId(): string {
  // Generate a timestamp for session code
  return randomBytes(6).toString('hex'); // Generate a secure random string
}
