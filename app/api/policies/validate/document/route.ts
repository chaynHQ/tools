import { facebookPolicy } from '@/lib/platform-policies/facebook';
import { handleApiError, serverInstance as rollbar } from '@/lib/rollbar';
import { createScopedPolicies } from '@/lib/validation/policy-workflow';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  rollbar.info('PolicyValidation: Processing individual document');

  try {
    const body = await request.json();
    const { documentReference } = body;

    if (!documentReference) {
      return NextResponse.json({ error: 'Document reference required' }, { status: 400 });
    }

    // Load the Facebook policy
    const platformPolicy = JSON.parse(JSON.stringify(facebookPolicy));

    // Find the document
    const document = platformPolicy.legalDocuments.find(
      (doc) => doc.reference === documentReference,
    );

    if (!document) {
      rollbar.error('PolicyValidation: Document not found', { documentReference });
      return NextResponse.json({ error: 'Document not found' }, { status: 404 });
    }

    // Create scoped policies for this document
    const scopedPolicies = createScopedPolicies(platformPolicy, documentReference);

    if (!scopedPolicies) {
      rollbar.error('PolicyValidation: Failed to create scoped policies', { documentReference });
      return NextResponse.json({ error: 'Failed to create scoped policies' }, { status: 500 });
    }

    rollbar.info('PolicyValidation: Successfully created scoped policies', {
      documentReference,
      relatedPoliciesCount: scopedPolicies.relatedPolicies.length,
    });

    return NextResponse.json({
      success: true,
      message: `Scoped policies created for ${document.title}`,
      data: {
        document: {
          reference: document.reference,
          title: document.title,
          url: document.url,
          accessTimestamp: document.accessTimestamp,
        },
        scopedPolicies,
      },
    });
  } catch (error: any) {
    rollbar.error('PolicyValidation: Error processing document', {
      error: error.message,
      stack: error.stack,
    });

    const { error: errorMessage, status } = handleApiError(
      error,
      '/api/policies/validate/document',
      {
        statusCode: error.status,
        errorType: error.name,
      },
    );

    return NextResponse.json({ error: errorMessage }, { status });
  }
}

export async function GET(request: Request) {
  try {
    // Return all available documents for testing
    const documents = facebookPolicy.legalDocuments.map((doc) => ({
      reference: doc.reference,
      title: doc.title,
      url: doc.url,
      accessTimestamp: doc.accessTimestamp,
    }));

    return NextResponse.json({
      success: true,
      message: 'Available documents for validation',
      data: {
        totalDocuments: documents.length,
        documents,
      },
    });
  } catch (error: any) {
    const { error: errorMessage, status } = handleApiError(
      error,
      '/api/policies/validate/document',
    );
    return NextResponse.json({ error: errorMessage }, { status });
  }
}
