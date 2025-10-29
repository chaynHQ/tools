import { handleApiError, serverInstance as rollbar } from '@/lib/rollbar';
import { sendToZapier } from '@/lib/zapier';
import { NextRequest, NextResponse } from 'next/server';

interface ResponseFeedback {
  platform: string;
  responseType: string;
  timeframe: string;
  details?: string;
  email?: string;
  submittedAt: string;
  source: string;
}

export async function POST(request: NextRequest) {
  rollbar.info('response-feedback: Received response feedback submission');
  
  try {
    if (!process.env.ZAPIER_RESPONSE_FEEDBACK_WEBHOOK_URL) {
      return NextResponse.json(
        { error: 'Response feedback webhook URL not configured' },
        { status: 500 }
      );
    }

    const data: ResponseFeedback = await request.json();
    
    // Validate required fields
    if (!data.platform || !data.responseType || !data.timeframe) {
      return NextResponse.json(
        { error: 'Platform, response type, and timeframe are required' },
        { status: 400 }
      );
    }

    // Send to Zapier
    await sendToZapier(process.env.ZAPIER_RESPONSE_FEEDBACK_WEBHOOK_URL, data);

    // Log for analytics (without sensitive data)
    rollbar.info('Response feedback submitted successfully', {
      platform: data.platform,
      responseType: data.responseType,
      timeframe: data.timeframe,
      hasDetails: !!data.details,
      hasEmail: !!data.email,
      source: data.source,
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Feedback received successfully' 
    });

  } catch (error: any) {
    const { error: errorMessage, status } = handleApiError(error, '/api/response-feedback');
    rollbar.error('response-feedback: Error processing response feedback submission', {
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