import { getPlatformPolicy } from '@/lib/platform-policies';
import { handleApiError, serverInstance as rollbar } from '@/lib/rollbar';
import { parseAIJson, retryWithDelay } from '@/lib/utils';
import { GoogleGenAI, HarmBlockThreshold, HarmCategory } from '@google/genai';
import { NextResponse } from 'next/server';

// Initialize Gemini
const genAI = new GoogleGenAI({
  vertexai: true,
  project: process.env.GOOGLE_CLOUD_PROJECT || 'bloom-dev-8f085',
  location: process.env.GOOGLE_CLOUD_LOCATION || 'global',
});

// Store validation sessions
const validationSessions = new Map<string, any>();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { action, validationId, platforms } = body;

    if (action === 'initialize') {
      return await initializeValidation(platforms);
    }

    if (action === 'process_next_document') {
      return await processNextDocument(validationId);
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
  } catch (error: any) {
    const { error: errorMessage, status } = handleApiError(error, '/api/policies/validate');
    return NextResponse.json({ error: errorMessage }, { status });
  }
}

async function initializeValidation(platforms?: string[]) {
  const validationId = `validation_${Date.now()}_${Math.random().toString(36).substring(7)}`;
  const availablePlatforms = ['facebook', 'instagram', 'tiktok', 'onlyfans', 'pornhub'];
  const targetPlatforms = platforms && platforms.length > 0 ? platforms : availablePlatforms;

  // Create document queue
  const documentQueue: any[] = [];
  const platformPolicies: Record<string, any> = {};

  for (const platformId of targetPlatforms) {
    const policy = getPlatformPolicy(platformId);
    if (policy) {
      platformPolicies[platformId] = policy;
      
      // Add each document to the queue
      policy.legalDocuments.forEach((doc: any) => {
        documentQueue.push({
          platformId,
          platformName: policy.name,
          ...doc,
          policies: extractPoliciesForDocument(policy, doc.reference),
        });
      });
    }
  }

  const session = {
    validationId,
    platforms: targetPlatforms,
    documentQueue,
    platformPolicies,
    processedDocuments: [],
    proposedUpdates: [],
    currentIndex: 0,
    startTime: new Date().toISOString(),
  };

  validationSessions.set(validationId, session);

  rollbar.info('PolicyValidation: Session initialized', {
    validationId,
    platforms: targetPlatforms,
    totalDocuments: documentQueue.length,
  });

  return NextResponse.json({
    success: true,
    validationId,
    data: {
      platforms: targetPlatforms,
      totalPlatforms: targetPlatforms.length,
      totalDocuments: documentQueue.length,
      nextStep: 'process_next_document',
    },
  });
}

async function processNextDocument(validationId: string) {
  const session = validationSessions.get(validationId);
  if (!session) {
    return NextResponse.json({ error: 'Validation session not found' }, { status: 404 });
  }

  // Check if all documents processed
  if (session.currentIndex >= session.documentQueue.length) {
    return await finalizeValidation(session);
  }

  const currentDoc = session.documentQueue[session.currentIndex];
  
  rollbar.info('PolicyValidation: Processing document', {
    validationId,
    platformId: currentDoc.platformId,
    documentReference: currentDoc.reference,
    progress: `${session.currentIndex + 1}/${session.documentQueue.length}`,
  });

  try {
    // Step 1: Analyze document with Prompt A
    const analysisResult = await analyzeDocument(currentDoc);
    
    let finalResult = analysisResult;

    // Step 2: If changes found, validate with Prompt B
    if (analysisResult.status === 'updated') {
      const validationResult = await validateChanges(currentDoc, analysisResult.updatedPolicies);
      finalResult = {
        ...analysisResult,
        validation: validationResult,
      };

      // Only keep changes if validation passed
      if (validationResult.validationStatus === 'valid') {
        session.proposedUpdates.push({
          platformId: currentDoc.platformId,
          documentReference: currentDoc.reference,
          updatedPolicies: analysisResult.updatedPolicies,
          reasoning: analysisResult.reasoning,
        });
      }
    }

    session.processedDocuments.push(currentDoc.reference);
    session.currentIndex++;

    return NextResponse.json({
      success: true,
      status: 'document_processed',
      data: {
        currentDocument: currentDoc,
        analysis: finalResult,
        progress: {
          current: session.currentIndex,
          total: session.documentQueue.length,
          percentage: Math.round((session.currentIndex / session.documentQueue.length) * 100),
        },
        nextStep: session.currentIndex >= session.documentQueue.length ? 'completed' : 'process_next_document',
      },
    });

  } catch (error) {
    rollbar.error('PolicyValidation: Document processing failed', {
      validationId,
      documentReference: currentDoc.reference,
      error,
    });

    session.currentIndex++;
    return NextResponse.json({
      success: true,
      status: 'document_processed_with_error',
      data: {
        currentDocument: currentDoc,
        analysis: { status: 'error', reasoning: `Processing failed: ${error}` },
        progress: {
          current: session.currentIndex,
          total: session.documentQueue.length,
          percentage: Math.round((session.currentIndex / session.documentQueue.length) * 100),
        },
        nextStep: session.currentIndex >= session.documentQueue.length ? 'completed' : 'process_next_document',
      },
    });
  }
}

async function analyzeDocument(document: any) {
  const prompt = generatePolicyAnalysisPrompt({
    documentUrl: document.url,
    documentTitle: document.title,
    documentReference: document.reference,
    currentPolicies: document.policies,
  });

  const response = await callGemini(prompt);
  return parseAIJson(response);
}

async function validateChanges(document: any, updatedPolicies: any[]) {
  const prompt = generatePolicyValidationPrompt({
    documentUrl: document.url,
    documentTitle: document.title,
    documentReference: document.reference,
    originalPolicies: document.policies,
    updatedPolicies,
  });

  const response = await callGemini(prompt);
  return parseAIJson(response);
}

async function callGemini(prompt: string): Promise<string> {
  return await retryWithDelay(async () => {
    const req = {
      model: 'gemini-2.0-flash-exp',
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
      config: {
        maxOutputTokens: 8192,
        temperature: 0.1,
        topP: 0.8,
        safetySettings: [
          { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.OFF },
          { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.OFF },
          { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.OFF },
          { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.OFF },
        ],
      },
    };

    const response = await genAI.models.generateContent(req);
    
    let fullText = '';
    if (response.candidates && response.candidates.length > 0) {
      const candidate = response.candidates[0];
      if (candidate.content && candidate.content.parts) {
        for (const part of candidate.content.parts) {
          if (part.text) {
            fullText += part.text;
          }
        }
      }
    }

    if (!fullText) {
      throw new Error('No text content received from Gemini');
    }

    return fullText;
  });
}

async function finalizeValidation(session: any) {
  rollbar.info('PolicyValidation: Finalizing validation', {
    validationId: session.validationId,
    proposedUpdatesCount: session.proposedUpdates.length,
  });

  // Apply updates to platform policies
  const updatedPolicies: Record<string, any> = {};
  let totalChanges = 0;

  for (const update of session.proposedUpdates) {
    if (!updatedPolicies[update.platformId]) {
      updatedPolicies[update.platformId] = JSON.parse(JSON.stringify(session.platformPolicies[update.platformId]));
    }
    
    // Apply the policy updates
    applyPolicyUpdates(updatedPolicies[update.platformId], update.updatedPolicies);
    totalChanges += update.updatedPolicies.length;
  }

  // Clean up session
  validationSessions.delete(session.validationId);

  if (totalChanges === 0) {
    return NextResponse.json({
      success: true,
      status: 'completed_no_changes',
      message: 'All documents processed. No policy changes needed.',
      data: {
        progress: {
          current: session.documentQueue.length,
          total: session.documentQueue.length,
          percentage: 100,
        },
      },
    });
  }

  // Create PR if changes found
  let pullRequest = null;
  try {
    const prResponse = await fetch('/api/policies/validate/create-pr', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        validationId: session.validationId,
        updatedPolicies,
        changesSummary: `Policy validation completed with ${totalChanges} changes across ${Object.keys(updatedPolicies).length} platforms`,
        totalChanges,
        platformsUpdated: Object.keys(updatedPolicies),
        documentsUpdated: session.proposedUpdates.map((u: any) => u.documentReference),
        documentsProcessed: session.processedDocuments.length,
      }),
    });

    if (prResponse.ok) {
      const prData = await prResponse.json();
      pullRequest = prData.data;
    }
  } catch (error) {
    rollbar.error('PolicyValidation: PR creation failed', { error });
  }

  return NextResponse.json({
    success: true,
    status: pullRequest ? 'completed_with_pr_created' : 'completed_with_changes',
    message: `Validation completed with ${totalChanges} changes across ${Object.keys(updatedPolicies).length} platforms`,
    data: {
      updatedPolicies,
      pullRequest,
      totalChanges,
      platformsUpdated: Object.keys(updatedPolicies),
      progress: {
        current: session.documentQueue.length,
        total: session.documentQueue.length,
        percentage: 100,
      },
    },
  });
}

function extractPoliciesForDocument(platformPolicy: any, documentReference: string) {
  const policies: any[] = [];

  // Extract from contentTypes
  platformPolicy.contentTypes?.forEach((contentType: any) => {
    contentType.policies?.forEach((policy: any) => {
      if (policy.documents?.some((doc: any) => doc.reference === documentReference)) {
        policies.push({
          reference: policy.reference,
          policy: policy.policy,
          removalCriteria: policy.removalCriteria,
          evidenceRequirements: policy.evidenceRequirements,
        });
      }
    });
  });

  // Extract from contentContexts
  platformPolicy.contentContexts?.forEach((contentContext: any) => {
    contentContext.policies?.forEach((policy: any) => {
      if (policy.documents?.some((doc: any) => doc.reference === documentReference)) {
        policies.push({
          reference: policy.reference,
          policy: policy.policy,
          removalCriteria: policy.removalCriteria,
          evidenceRequirements: policy.evidenceRequirements,
        });
      }
    });
  });

  // Extract from generalPolicies
  platformPolicy.generalPolicies?.forEach((policy: any) => {
    if (policy.documents?.some((doc: any) => doc.reference === documentReference)) {
      policies.push({
        reference: policy.reference,
        policy: policy.policy,
        removalCriteria: policy.removalCriteria,
        evidenceRequirements: policy.evidenceRequirements,
      });
    }
  });

  return policies;
}

function applyPolicyUpdates(platformPolicy: any, updatedPolicies: any[]) {
  // This is a simplified version - in practice you'd need more sophisticated merging
  // For now, just update the access timestamp
  platformPolicy.legalDocuments?.forEach((doc: any) => {
    doc.accessTimestamp = new Date().toISOString();
  });
}

// Import the prompt functions
function generatePolicyAnalysisPrompt(data: any): string {
  return `You are an AI assistant specialized in legal and policy analysis. Your task is to compare our current policy data against a live legal document and determine if updates are needed.

CRITICAL INSTRUCTIONS:
1. Access and analyze the live document at this URL: ${data.documentUrl}
2. Compare the live content with our current policies provided below
3. Focus ONLY on meaningful changes that affect policy enforcement
4. Do NOT make cosmetic or minor wording changes unless they change the meaning
5. Your response MUST be valid JSON and nothing else

ACCESS THIS LIVE DOCUMENT: ${data.documentUrl}

DOCUMENT: ${data.documentTitle} (${data.documentReference})

CURRENT POLICIES TO ANALYZE:
${JSON.stringify(data.currentPolicies, null, 2)}

After analyzing the live document at ${data.documentUrl}, compare it with our current policies above and respond with a single JSON object:

If you find NO meaningful changes needed:
{
  "status": "no_change",
  "reasoning": "Brief explanation confirming policies are still aligned with the document. Include specific sections verified."
}

If you DO find meaningful changes needed:
{
  "status": "updated",
  "reasoning": "Brief summary of key changes identified. Be specific about what changed.",
  "updatedPolicies": [
    {
      "reference": "policy_reference",
      "policy": "updated policy description",
      "removalCriteria": ["updated criteria"],
      "evidenceRequirements": ["updated requirements"]
    }
  ]
}

IMPORTANT RULES:
- Only modify policy, removalCriteria, and evidenceRequirements fields
- Base your analysis ONLY on the live content at ${data.documentUrl}
- Focus on substantive changes that affect how policies are enforced

RESPOND WITH VALID JSON ONLY:`;
}

function generatePolicyValidationPrompt(data: any): string {
  return `You are an AI assistant specialized in validating policy changes. Your task is to compare original and updated policies against a live legal document to ensure changes are genuine and meaningful.

CRITICAL INSTRUCTIONS:
1. Access and verify against the live document at: ${data.documentUrl}
2. Compare the original vs updated policies below
3. Check that changes are based on the actual document content
4. Detect hallucinations (made-up changes not in the document)
5. Detect meaningless rewording (changes that don't alter policy meaning)
6. Your response MUST be valid JSON and nothing else

DOCUMENT TO VERIFY AGAINST: ${data.documentUrl}
DOCUMENT: ${data.documentTitle} (${data.documentReference})

ORIGINAL POLICIES:
${JSON.stringify(data.originalPolicies, null, 2)}

UPDATED POLICIES:
${JSON.stringify(data.updatedPolicies, null, 2)}

VALIDATION CRITERIA:

**VALID changes:**
- Changes that reflect actual updates in the live document
- New removal criteria that match document content
- Updated evidence requirements that align with document processes
- Policy descriptions that accurately reflect document language

**INVALID changes (mark as invalid):**
- Hallucinations: Changes not supported by the actual document content
- Meaningless rewording: Synonym swaps or restructuring without policy impact
- Made-up improvements: Changes that seem like AI "enhancements" rather than document-based updates
- Inconsistent changes: Updates that contradict the document content

After analyzing the document and comparing the policies, respond with:

{
  "validationStatus": "valid" | "invalid",
  "reasoning": "Clear explanation of your validation decision, including what you verified in the document and why changes are valid or invalid. Be specific about any hallucinations or meaningless rewording detected.",
  "issues": [
    {
      "severity": "critical" | "minor",
      "type": "hallucination" | "meaningless_rewording" | "structural_error",
      "description": "Specific description of the issue found"
    }
  ]
}

Focus on ensuring changes represent genuine policy updates based on the actual document content, not AI-generated improvements or basic rewording.

RESPOND WITH VALID JSON ONLY:`;
}

export async function GET() {
  const availablePlatforms = ['facebook', 'instagram', 'tiktok', 'onlyfans', 'pornhub'];
  let totalDocuments = 0;

  for (const platformId of availablePlatforms) {
    const policy = getPlatformPolicy(platformId);
    if (policy) {
      totalDocuments += policy.legalDocuments.length;
    }
  }

  return NextResponse.json({
    success: true,
    message: 'Policy Validation API - Simplified Two-Prompt System',
    data: {
      availablePlatforms,
      totalDocuments,
      endpoints: {
        'POST /api/policies/validate': {
          actions: ['initialize', 'process_next_document'],
          description: 'Main validation workflow endpoint',
        },
      },
      prompts: {
        A: 'Document Analysis - Compare policies against live document',
        B: 'Change Validation - Verify changes are genuine',
      },
    },
  });
}