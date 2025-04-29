import { handleApiError } from '@/lib/rollbar';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    if (!process.env.NEXT_PUBLIC_ZAPIER_WEBHOOK_URL) {
      return NextResponse.json(
        { error: 'Zapier webhook URL not configured' },
        { status: 500 }
      );
    }

    const body = await request.json();

    const response = await fetch(process.env.NEXT_PUBLIC_ZAPIER_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      },
      body: JSON.stringify(body)
    });

    if (!response.ok) {
      throw new Error('Failed to submit feedback to Zapier');
    }

    return NextResponse.json({ success: true });

  } catch (error: any) {
    const { error: errorMessage, status } = handleApiError(error, '/api/feedback');
    return NextResponse.json({ error: errorMessage }, { status });
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    },
  });
}