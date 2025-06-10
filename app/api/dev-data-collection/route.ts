import { IS_DEVELOPMENT, IS_PREVIEW } from '@/lib/constants/common';
import { handleApiError, serverInstance as rollbar } from '@/lib/rollbar';
import { sendToZapier } from '@/lib/zapier';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  rollbar.info('dev-data-collection: Received development data submission');

  try {
    // Only allow in development environment
    if (!IS_DEVELOPMENT && !IS_PREVIEW) {
      rollbar.warning('dev-data-collection: Attempted to use in non-development environment');
      return NextResponse.json(
        { error: 'This endpoint is only available in development' },
        { status: 403 },
      );
    }

    if (!process.env.ZAPIER_DEVELOPMENT_INPUT_COLLECTION_WEBHOOK_URL) {
      rollbar.warning('dev-data-collection: Zapier development webhook URL not configured');
      return NextResponse.json(
        { error: 'Development webhook URL not configured' },
        { status: 500 },
      );
    }

    const body = await request.json();

    // Validate required fields
    if (!body.formData || !body.generatedLetter) {
      rollbar.error('dev-data-collection: Missing required fields', { body });
      return NextResponse.json(
        { error: 'Missing required fields: formData and generatedLetter' },
        { status: 400 },
      );
    }

    // Prepare the payload for Zapier
    const zapierPayload = {
      timestamp: new Date().toISOString(),
      environment: 'development',

      // Platform Information
      platform_id: body.formData.platformInfo?.platformId || '',
      platform_name: body.formData.platformInfo?.platformName || '',
      platform_is_custom: body.formData.platformInfo?.isCustom || false,
      platform_custom_name: body.formData.platformInfo?.customName || '',

      // Reporting Information
      reporting_status: body.formData.reportingInfo?.status || '',

      // Initial Questions
      content_type: body.formData.initialQuestions?.contentType || '',
      content_context: body.formData.initialQuestions?.contentContext || '',
      content_location_type: body.formData.initialQuestions?.contentLocationType || '',
      content_url: body.formData.initialQuestions?.contentUrl || '',
      content_description: body.formData.initialQuestions?.contentDescription || '',
      image_upload_date: body.formData.initialQuestions?.imageUploadDate || '',
      image_taken_date: body.formData.initialQuestions?.imageTakenDate || '',
      ownership_evidence: body.formData.initialQuestions?.ownershipEvidence || '',
      impact_statement: body.formData.initialQuestions?.impactStatement || '',

      // Reporting Details
      standard_process_details: body.formData.reportingDetails?.standardProcessDetails || '',
      escalated_process_details: body.formData.reportingDetails?.escalatedProcessDetails || '',
      response_received: body.formData.reportingDetails?.responseReceived || '',
      additional_steps_taken: body.formData.reportingDetails?.additionalStepsTaken || '',

      // Follow-up Data
      follow_up_questions_count: body.formData.followUpData?.questions?.length || 0,
      follow_up_answers: JSON.stringify(body.formData.followUpData?.answers || {}),

      // Generated Letter
      letter_subject: body.generatedLetter?.subject || '',
      letter_body: body.generatedLetter?.body || '',
      letter_next_steps: JSON.stringify(body.generatedLetter?.nextSteps || []),

      // Additional metadata
      session_id: body.sessionId || '',
      user_agent: request.headers.get('user-agent') || '',
      completion_time_seconds: body.completionTimeSeconds || 0,
    };

    await sendToZapier(process.env.ZAPIER_DEVELOPMENT_INPUT_COLLECTION_WEBHOOK_URL, zapierPayload);

    rollbar.info('dev-data-collection: Successfully sent development data to Zapier', {
      platform: zapierPayload.platform_name,
      contentType: zapierPayload.content_type,
      hasFollowUp: zapierPayload.follow_up_questions_count > 0,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    const { error: errorMessage, status } = handleApiError(error, '/api/dev-data-collection');
    rollbar.error('dev-data-collection: Error processing development data submission', {
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
