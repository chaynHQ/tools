import { serverInstance as rollbar } from './rollbar';

export async function sendToZapier(webhookUrl: string, payload: Record<string, any>) {
  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      rollbar.error('Failed to submit data to Zapier', {
        status: response.status,
        payload: JSON.stringify(payload),
      });
      throw new Error('Failed to submit data to Zapier');
    }

    rollbar.info('Successfully submitted data to Zapier', {
      status: response.status,
      payload: JSON.stringify(payload),
    });

    return response;
  } catch (error) {
    rollbar.error('Error sending data to Zapier', {
      error,
      payload: JSON.stringify(payload),
    });
    throw error;
  }
}