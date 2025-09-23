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
  // Check if this is an adult content platform
  const isAdultPlatform = platformId === 'pornhub' || platformId === 'onlyfans';

  return `You are an expert AI assistant specialized in auditing the legal and policy documents for major online platforms. Your task is to validate our existing list of documents for ${platformName}, discover any new or updated policy documents, and produce a structured report that strictly adheres to the required JSON schema.

CRITICAL CONTEXT:
The documents you identify are the sole source of truth for an automated system generating image takedown requests. It is essential that the list is comprehensive, current, and contains only canonical policy documents (e.g., Terms of Service, Community Guidelines), or policy documents, not secondary help articles.

PLATFORM: ${platformName} (${platformId})

# TASK MODE
${
  currentDocuments && currentDocuments.length > 0
    ? `
**MODE: Revalidation**
- **CURRENT DOCUMENTS TO VALIDATE:** ${JSON.stringify(currentDocuments, null, 2)}
- **INSTRUCTIONS:** Validate the provided list of documents. Check for dead links, redirects, and content changes. For each document, you must determine its status. You will also search for any new documents that may have been added since the last check.
`
    : `
**MODE: Initial Discovery**
- **CURRENT DOCUMENTS TO VALIDATE:** None.
- **INSTRUCTIONS:** This is a new platform. Your task is to perform a comprehensive search to discover the initial set of all relevant policy documents at valid URLs.
`
}

---

# VALIDATION REQUIREMENTS

1.  **Document Accessibility & Verification**: For each URL in "CURRENT DOCUMENTS", verify it is accessible and the content appears to be the correct policy document. NOTE: you may not be able to access URLs on adult sites due to firewalls - if the page does not show 404 or 302, 307 error, treat it as accessible.
2.  **Determine Document Status**: For each document from the original list, you MUST classify its status as one of the following: \`valid\` (unchanged), \`updated\` (content or title has changed), \`moved\` (URL has changed), or \`invalid\` (no longer accessible or relevant). This is a mandatory field for each document in the \`validDocuments\` array.
3.  **Comprehensive Document Discovery**: Perform a thorough search to find any additional relevant policy documents not on our current list. This should always include platform specific US-based or global policies that are strongly related such as "The Take It Down Act" should always be included. Do NOT hallucinate web pages/URLs that do not exist - use returned urls from web searches. 
4.  **Intelligent Navigation**: You may start your search in help or safety centers, but you MUST follow links to find the primary, official policy documents. Do not treat a help article that links to the Terms of Service as a policy document itself.
5.  **Target Documents**: Focus on documents covering:
    -   Non-consensual intimate imagery (NCII)
    -   Content removal policies & enforcement philosophy
    -   Community guidelines/standards/rules
    -   Terms of service/use
    -   Privacy policies
    -   Harassment and bullying
    -   Impersonation
    -   Copyright/DMCA 
    -   Appeal/counter-notice processes

---

# SEARCH STRATEGY

Use a multi-pronged search approach. Start with the provided terms and then intelligently expand your search using common industry synonyms.

-   **Primary Searches:**
    -   "${platformName} community guidelines"
    -   "${platformName} terms of service"
    -   "${platformName} privacy policy"
-   **Synonym-Based Searches (if initial results are sparse):**
    -   Search for variations like "community standards", "community rules", "acceptable use policy".
    -   Search for specific abuse types like "${platformName} non-consensual imagery policy", "${platformName} harassment policy".
-   **Follow-up Searches:**
    -   Explore the legal, policy, or safety sections linked in the footer of the platform's main website.

${isAdultPlatform ? `
## SPECIAL INSTRUCTIONS FOR ADULT CONTENT PLATFORMS

Due to content filtering and firewall restrictions, you may encounter limitations when searching for or accessing policy documents on adult content platforms. Follow these enhanced strategies:

### Enhanced Search Strategy for Adult Platforms:
-   **Persistent Search Queries**: Use multiple variations of search terms:
    -   "${platformName} terms of service site:${platformName.toLowerCase().replace(' ', '')}.com"
    -   "${platformName} community guidelines site:${platformName.toLowerCase().replace(' ', '')}.com"
    -   "${platformName} acceptable use policy site:${platformName.toLowerCase().replace(' ', '')}.com"
    -   "${platformName} content policy site:${platformName.toLowerCase().replace(' ', '')}.com"
    -   "${platformName} trust and safety site:${platformName.toLowerCase().replace(' ', '')}.com"
    -   "${platformName} dmca policy site:${platformName.toLowerCase().replace(' ', '')}.com"

### URL Discovery Priority:
1.  **Prioritize Official Domain Results**: Focus on search results that link directly to the platform's official domain (e.g., pornhub.com, onlyfans.com)
2.  **Extract URLs from Search Results**: Even if you cannot access the full content due to firewalls, extract the URLs from search result snippets and titles
3.  **Common Policy Paths**: Look for standard policy document paths like:
    -   /terms, /terms-of-service, /tos
    -   /community-guidelines, /guidelines, /rules
    -   /privacy, /privacy-policy
    -   /acceptable-use, /aup
    -   /content-policy, /content-removal
    -   /trust-safety, /safety

### Content Access Handling:
-   **Firewall Interpretation**: If a page does not show 404, 302, or 307 errors, treat it as accessible even if content cannot be fully retrieved
-   **Search Index Reliance**: Use search result descriptions and cached content when direct access is limited
-   **URL Validation**: Focus on identifying correct, official URLs rather than full content access

### Document Discovery Focus:
For adult platforms, prioritize finding these specific document types:
-   Terms of Service/Use (highest priority)
-   Community Guidelines/Standards/Rules
-   Acceptable Use Policy
-   Content Policy/Content Removal Policy
-   Trust & Safety Policy
-   DMCA/Copyright Policy
-   Privacy Policy
` : `
NOTE: For most platforms, you should be able to access policy documents directly. If you encounter access issues, use search index results to identify the correct URLs.
`}
---

# OUTPUT FORMAT

CRITICAL: You MUST respond with a single, valid JSON object that strictly conforms to the following structure. Do not add, remove, or rename any fields.

\`\`\`json
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
\`\`\`

RESPOND WITH VALID JSON ONLY:`;
}
