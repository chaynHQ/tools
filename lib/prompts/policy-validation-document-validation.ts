import { serverInstance as rollbar } from '../rollbar';

export interface DocumentValidationResult {
  status: 'valid' | 'needs_update';
  validDocuments: Array<{
    id: string;
    reference: string | null;
    title: string;
    summary: string;
    url: string;
    status: 'valid' | 'updated' | 'moved' | 'invalid';
    newUrl?: string;
    updatedTitle?: string;
    updatedSummary?: string;
  }>;
  newDocuments: Array<{
    reference: string;
    title: string;
    summary: string;
    url: string;
    relevanceReason: string;
  }>;
  removedDocuments: Array<{
    id: string;
    reason: string;
  }>;
  reasoning: string;
}

export function generateDocumentValidationPrompt(
  platformId: string,
  platformName: string,
  currentDocuments: Array<{
    id: string;
    reference: string | null;
    title: string;
    summary: string;
    url: string;
  }>,
): string {

  return `You are an AI assistant specialized in validating legal and policy documents for content platforms. Your task is to verify the completeness and accuracy of our current document list for ${platformName} and identify any changes needed.

CRITICAL CONTEXT:
These documents are used to generate automated image takedown requests for non-consensual content, harassment, privacy violations, and impersonation. The document list must be comprehensive and current but MUST be official policy documents and not be help pages that redirect to other pages.

PLATFORM: ${platformName} (${platformId})

CURRENT DOCUMENTS TO VALIDATE:
${JSON.stringify(currentDocuments, null, 2)}

VALIDATION REQUIREMENTS:

1. **Document Accessibility**: Verify each URL is accessible and content matches expectations
2. **Document Discovery**: Search for additional relevant policy documents on the platform
3. **URL Updates**: Check if any documents have moved to new locations
4. **Content Relevance**: Focus on documents covering:
   - Non-consensual intimate imagery (NCII)
   - Content removal policies
   - Community guidelines/standards
   - Terms of service
   - Privacy policies
   - Harassment and bullying policies
   - Impersonation policies
   - Copyright/DMCA policies
   - Appeal processes

5. **Document Status**: Identify documents that are:
   - Still valid and accessible
   - Moved to new URLs
   - Updated with new titles/content
   - No longer available/relevant
   - Newly created since last check

SEARCH STRATEGY:
- Search for "${platformName} community guidelines"
- Search for "${platformName} terms of service"
- Search for "${platformName} content policy"
- Search for "${platformName} NCII policy"
- Search for "${platformName} harassment policy"
- Search for "${platformName} privacy policy"
- Search for "${platformName} help center content removal"

OUTPUT FORMAT:
Respond with valid JSON only:

{
  "status": "valid" | "needs_update",
  "validDocuments": [
    {
      "id": "existing_document_id",
      "reference": "DOC-REF",
      "title": "Current or Updated Title",
      "summary": "Current or Updated Summary",
      "url": "current_or_new_url",
      "status": "valid" | "updated" | "moved" | "invalid",
      "newUrl": "new_url_if_moved",
      "updatedTitle": "new_title_if_changed",
      "updatedSummary": "new_summary_if_changed"
    }
  ],
  "newDocuments": [
    {
      "reference": "NEW-DOC-REF",
      "title": "New Document Title",
      "summary": "Brief summary of document relevance",
      "url": "document_url",
      "relevanceReason": "Why this document is relevant to image takedown requests"
    }
  ],
  "removedDocuments": [
    {
      "id": "document_id_to_remove",
      "reason": "Why this document should be removed (e.g., no longer accessible, not relevant)"
    }
  ],
  "reasoning": "Detailed explanation of validation findings and recommended changes"
}

RESPOND WITH VALID JSON ONLY:`;
}