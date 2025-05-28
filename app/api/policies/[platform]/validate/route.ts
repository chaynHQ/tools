import { handleAuthError, validateZapierAuth } from '@/lib/auth/zapier-auth.guard';
import { getPlatformPolicy } from '@/lib/platform-policies';
import { platforms } from '@/lib/platforms';
import { handleApiError, serverInstance as rollbar } from '@/lib/rollbar';
import { webhookFormattedError } from '@/lib/validation/slack';
import { validatePolicy } from '@/lib/validation/validator';
import { IncomingWebhook } from '@slack/webhook';
import { NextResponse } from 'next/server';

// Initialize Slack webhook
const webhook = process.env.SLACK_WEBHOOK_URL
  ? new IncomingWebhook(process.env.SLACK_WEBHOOK_URL)
  : null;

export async function GET(request: Request, { params }: { params: { platform: string } }) {
  rollbar.info('ValidatePolicy: Received request to validate policy', {
    platform: params.platform,
  });
  try {
    // Validate Zapier authentication
    try {
      validateZapierAuth(request);
      rollbar.info('Zapier auth validation successful');
    } catch (error) {
      rollbar.error('Zapier auth validation failed', { error });
      return handleAuthError(error);
    }

    if (!process.env.GOOGLE_AI_API_KEY) {
      rollbar.error('Google AI API key not configured');
      return NextResponse.json({ error: 'Missing Google AI API key' }, { status: 500 });
    }

    if (!webhook) {
      rollbar.error('Slack webhook URL not configured');
      return NextResponse.json({ error: 'Missing Slack webhook URL' }, { status: 500 });
    }

    // Get platform ID and validate it exists
    const platformId = params.platform.toLowerCase();
    const platform = platforms.find((p) => p.id === platformId);

    if (!platform) {
      rollbar.error('Invalid platform ID', { platformId });
      return NextResponse.json({ error: 'Invalid platform' }, { status: 400 });
    }

    // Get platform policy
    const policy = getPlatformPolicy(platformId);
    if (!policy) {
      rollbar.error('No policy found for platform', { platformId });
      return NextResponse.json({ error: 'No policy found for platform' }, { status: 404 });
    }
    rollbar.info(`Starting validation for ${platform.name}`, { platformId });
    // Start validation asynchronously
    validatePolicy(platform.name, policy);
    // Return immediately that validation has started
    return NextResponse.json({
      message: `${platform.name} policy validation started`,
      status: 'pending',
    });
  } catch (error: any) {
    rollbar.error('ValidatePolicy: Error processing validation request', {
      error: error.message,
      stack: error.stack,
      platform: params.platform,
    });
    const { error: errorMessage, status } = handleApiError(
      error,
      `/api/policies/${params.platform}/validate`,
      {
        statusCode: error.status,
        errorType: error.name,
      },
    );

    if (webhook) {
      try {
        await webhook.send(webhookFormattedError(params.platform, error));
      } catch (webhookError) {
        console.error('Failed to send error to Slack:', webhookError);
      }
    }

    return NextResponse.json({ error: errorMessage }, { status });
  }
}
