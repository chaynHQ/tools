import { getPlatformPolicy } from '@/lib/platform-policies';
import { platforms } from '@/lib/platforms';
import { handleApiError, serverInstance as rollbar } from '@/lib/rollbar';
import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: { params: Promise<{ platform: string }> }) {
  const { platform: platformParam } = await params;
  rollbar.info('ValidatePolicy: Received request to validate policy', {
    platform: platformParam,
  });
  try {
    if (!process.env.GOOGLE_AI_API_KEY) {
      rollbar.error('Google AI API key not configured');
      return NextResponse.json({ error: 'Missing Google AI API key' }, { status: 500 });
    }

    // Get platform ID and validate it exists
    const platformId = platformParam.toLowerCase();
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

    // Return immediately that validation has started
    return NextResponse.json({
      message: `${platform.name} policy validation started`,
      status: 'pending',
    });
  } catch (error: any) {
    rollbar.error('ValidatePolicy: Error processing validation request', {
      error: error.message,
      stack: error.stack,
      platform: platformParam,
    });
    const { error: errorMessage, status } = handleApiError(
      error,
      `/api/policies/${platformParam}/validate`,
      {
        statusCode: error.status,
        errorType: error.name,
      },
    );

    return NextResponse.json({ error: errorMessage }, { status });
  }
}
