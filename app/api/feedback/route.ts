import { handleApiError, serverInstance as rollbar } from '@/lib/rollbar';
import { sendToZapier } from '@/lib/zapier';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  rollbar.info('feedback: Received feedback submission');
  try {
    if (!process.env.ZAPIER_FEEDBACK_WEBHOOK_URL) {
      return NextResponse.json({ error: 'Zapier webhook URL not configured' }, { status: 500 });
    }

    const body = await request.json();
    await sendToZapier(process.env.ZAPIER_FEEDBACK_WEBHOOK_URL, body);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    const { error: errorMessage, status } = handleApiError(error, '/api/feedback');
    rollbar.error('feedback: Error processing feedback submission', {
      error: errorMessage,
      status,
      stack: error.stack,
    });
    return NextResponse.json({ error: errorMessage }, { status });
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
