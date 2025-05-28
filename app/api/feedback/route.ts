import { handleApiError, serverInstance as rollbar } from '@/lib/rollbar';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  rollbar.info('feedback: Received feedback submission');
  try {
    if (!process.env.NEXT_PUBLIC_ZAPIER_WEBHOOK_URL) {
      return NextResponse.json({ error: 'Zapier webhook URL not configured' }, { status: 500 });
    }

    const body = await request.json();

    const response = await fetch(process.env.NEXT_PUBLIC_ZAPIER_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      rollbar.error('feedback: Failed to submit feedback to Zapier');
      throw new Error('Failed to submit feedback to Zapier');
    }
    rollbar.info('feedback: Successfully submitted feedback to Zapier', {
      status: response.status,
      body: JSON.stringify(body),
    });

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
