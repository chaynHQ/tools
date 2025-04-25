import { platforms } from '@/lib/platforms';
import { handleApiError } from '@/lib/rollbar';
import { IncomingWebhook } from '@slack/webhook';
import { NextResponse } from 'next/server';
import { validatePolicy } from '@/lib/validation/validator';
import { webhookFormattedResponse, webhookFormattedError } from '@/lib/validation/slack';
import { getPlatformPolicy } from '@/lib/platform-policies';

// Initialize Slack webhook
const webhook = process.env.SLACK_WEBHOOK_URL ? 
  new IncomingWebhook(process.env.SLACK_WEBHOOK_URL) : 
  null;

export async function GET(
  request: Request,
  { params }: { params: { platform: string } }
) {
  try {
    if (!process.env.GOOGLE_AI_API_KEY) {
      return NextResponse.json(
        { error: 'Missing Google AI API key' },
        { status: 500 }
      );
    }

    if (!webhook) {
      return NextResponse.json(
        { error: 'Missing Slack webhook URL' },
        { status: 500 }
      );
    }

    // Get platform ID and validate it exists
    const platformId = params.platform.toLowerCase();
    const platform = platforms.find(p => p.id === platformId);
    
    if (!platform) {
      return NextResponse.json(
        { error: 'Invalid platform' },
        { status: 400 }
      );
    }

    // Get platform policy
    const policy = getPlatformPolicy(platformId);
    if (!policy) {
      return NextResponse.json(
        { error: 'No policy found for platform' },
        { status: 404 }
      );
    }

    const result = await validatePolicy(platform.name, policy);
    await webhook.send(webhookFormattedResponse(platform.name, result));

    return NextResponse.json({
      message: `${platform.name} policy validation complete`,
      result
    });

  } catch (error: any) {
    const { error: errorMessage, status } = handleApiError(error, `/api/policies/${params.platform}/validate`, {
      statusCode: error.status,
      errorType: error.name,
    });

    await webhook?.send(webhookFormattedError(params.platform, error));
    return NextResponse.json({ error: errorMessage }, { status });
  }
}