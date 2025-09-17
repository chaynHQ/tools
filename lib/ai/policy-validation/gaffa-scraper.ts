import { serverInstance as rollbar } from '@/lib/rollbar';

export interface GaffaScrapingResult {
  success: boolean;
  markdown?: string;
  error?: string;
  url: string;
}

export async function scrapeDocumentMarkdown(url: string): Promise<GaffaScrapingResult> {
  rollbar.info('scrapeDocumentMarkdown: Starting document scraping', { url });

  if (!process.env.GAFFA_API_KEY) {
    rollbar.error('scrapeDocumentMarkdown: GAFFA_API_KEY not configured');
    return {
      success: false,
      error: 'GAFFA_API_KEY not configured',
      url,
    };
  }

  try {
    const response = await fetch('https://api.gaffa.dev/v1/browser/requests', {
      method: 'POST',
      headers: {
        'X-API-Key': process.env.GAFFA_API_KEY,
        'Content-Type': 'application/json',
        Accept: '*/*',
      },
      body: JSON.stringify({
        url,
        proxy_location: null,
        async: false,
        max_cache_age: 3600, // Cache for 1 hour
        settings: {
          record_request: true,
          actions: [
            {
              type: 'wait',
              selector: 'body',
            },
            {
              type: 'generate_markdown',
            },
          ],
        },
      }),
    });

    console.log('gaffa response');

    if (!response.ok) {
      const errorText = await response.text();
      rollbar.error('scrapeDocumentMarkdown: Gaffa API error', {
        url,
        status: response.status,
        error: errorText,
      });
      return {
        success: false,
        error: `Gaffa API error: ${response.status} - ${errorText}`,
        url,
      };
    }

    const data = await response.json();

    // Extract markdown URL from Gaffa response
    const actions = data.data?.actions || [];
    const markdownAction = actions.find((action: any) => action.type === 'generate_markdown');
    
    if (!markdownAction || !markdownAction.output) {
      rollbar.warning('scrapeDocumentMarkdown: No markdown action or output URL found', {
        url,
        responseStructure: Object.keys(data),
        actions: actions.map((a: any) => ({ type: a.type, hasOutput: !!a.output })),
      });
      return {
        success: false,
        error: 'No markdown URL found in Gaffa response',
        url,
      };
    }

    const markdownUrl = markdownAction.output;
    rollbar.info('scrapeDocumentMarkdown: Found markdown URL, fetching content', {
      url,
      markdownUrl,
    });

    // Fetch the actual markdown content from the URL
    try {
      const markdownResponse = await fetch(markdownUrl);
      
      if (!markdownResponse.ok) {
        rollbar.error('scrapeDocumentMarkdown: Failed to fetch markdown content', {
          url,
          markdownUrl,
          status: markdownResponse.status,
          statusText: markdownResponse.statusText,
        });
        return {
          success: false,
          error: `Failed to fetch markdown content: ${markdownResponse.status} - ${markdownResponse.statusText}`,
          url,
        };
      }

      const markdown = await markdownResponse.text();
      
      if (!markdown || markdown.trim().length === 0) {
        rollbar.warning('scrapeDocumentMarkdown: Empty markdown content returned', {
          url,
          markdownUrl,
        });
        return {
          success: false,
          error: 'Empty markdown content returned from Gaffa',
          url,
        };
      }

      rollbar.info('scrapeDocumentMarkdown: Successfully scraped document', {
        url,
        markdownUrl,
        markdownLength: markdown.length,
      });

      return {
        success: true,
        markdown,
        url,
      };
    } catch (markdownFetchError) {
      rollbar.error('scrapeDocumentMarkdown: Error fetching markdown content', {
        url,
        markdownUrl,
        error: markdownFetchError,
      });
      return {
        success: false,
        error: `Error fetching markdown content: ${markdownFetchError instanceof Error ? markdownFetchError.message : 'Unknown error'}`,
        url,
      };
    }
  } catch (error) {
    rollbar.error('scrapeDocumentMarkdown: Error during initial Gaffa request', {
      url,
      error,
    });
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown scraping error',
      url,
    };
  }
}

export async function scrapeMultipleDocuments(urls: string[]): Promise<GaffaScrapingResult[]> {
  rollbar.info('scrapeMultipleDocuments: Starting batch scraping', {
    urlCount: urls.length,
  });

  const results: GaffaScrapingResult[] = [];

  // Process documents sequentially to avoid overwhelming the API
  for (const url of urls) {
    const result = await scrapeDocumentMarkdown(url);
    results.push(result);

    // Add a small delay between requests to be respectful
    if (urls.indexOf(url) < urls.length - 1) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }

  const successCount = results.filter((r) => r.success).length;
  rollbar.info('scrapeMultipleDocuments: Batch scraping completed', {
    totalUrls: urls.length,
    successCount,
    failureCount: urls.length - successCount,
  });

  return results;
}
