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
        'Accept': '*/*',
      },
      body: JSON.stringify({
        url,
        proxy_location: null,
        async: false,
        max_cache_age: 3600, // Cache for 1 hour
        settings: {
          record_request: false,
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
    
    // Extract markdown from Gaffa response
    const markdown = data.result?.markdown || data.markdown;
    
    if (!markdown) {
      rollbar.warning('scrapeDocumentMarkdown: No markdown content returned', {
        url,
        responseKeys: Object.keys(data),
      });
      return {
        success: false,
        error: 'No markdown content returned from Gaffa',
        url,
      };
    }

    rollbar.info('scrapeDocumentMarkdown: Successfully scraped document', {
      url,
      markdownLength: markdown.length,
    });

    return {
      success: true,
      markdown,
      url,
    };
  } catch (error) {
    rollbar.error('scrapeDocumentMarkdown: Error during scraping', {
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

export async function scrapeMultipleDocuments(
  urls: string[]
): Promise<GaffaScrapingResult[]> {
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
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }

  const successCount = results.filter(r => r.success).length;
  rollbar.info('scrapeMultipleDocuments: Batch scraping completed', {
    totalUrls: urls.length,
    successCount,
    failureCount: urls.length - successCount,
  });

  return results;
}