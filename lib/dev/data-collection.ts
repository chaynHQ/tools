import { IS_DEVELOPMENT } from '../constants/common';
import { rollbar } from '../rollbar';

interface DevDataCollectionPayload {
  formData: any;
  generatedLetter: any;
  sessionId?: string;
  completionTimeSeconds?: number;
}

export async function sendDevDataToZapier(payload: DevDataCollectionPayload): Promise<boolean> {
  // Only send data in development environment
  if (!IS_DEVELOPMENT) {
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

function generateSessionId(): string {
  return `dev_${Date.now()}_${Math.random().toString(36).substring(2, 15)}`;
}

export { IS_DEVELOPMENT };
