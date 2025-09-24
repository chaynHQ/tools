import { serverInstance as rollbar } from '@/lib/rollbar';
import { retryWithDelay } from '@/lib/utils';

export interface GaffaScrapingResult {
  success: boolean;
  markdown?: string;
  error?: string;
  url: string;
}

export async function scrapeDocumentMarkdown(url: string): Promise<GaffaScrapingResult> {
  if (!process.env.GAFFA_API_KEY) {
    rollbar.error('Policy validation: GAFFA_API_KEY not configured for document scraping');
    return {
      success: false,
      error: 'GAFFA_API_KEY not configured',
      url,
    };
  }

  try {
    const scrapeWithRetry = async () => {
      const response = await fetch('https://api.gaffa.dev/v1/browser/requests', {
        method: 'POST',
        headers: {
          'X-API-Key': process.env.GAFFA_API_KEY || '',
          'Content-Type': 'application/json',
          Accept: '*/*',
        },
        body: JSON.stringify({
          url,
          proxy_location: 'us',
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
        throw new Error(`Gaffa API error: ${response.status} - ${errorText}`);
      }

      return response;
    };

    const response = await retryWithDelay(scrapeWithRetry);

    const data = await response.json();

    // Extract markdown URL from Gaffa response
    const actions = data.data?.actions || [];
    const markdownAction = actions.find((action: any) => action.type === 'generate_markdown');

    if (!markdownAction || !markdownAction.output) {
      rollbar.warning('Policy validation: Document scraping failed - no markdown output', {
        url,
      });
      return {
        success: false,
        error: 'No markdown URL found in Gaffa response',
        url,
      };
    }

    const markdownUrl = markdownAction.output;

    // Fetch the actual markdown content from the URL
    try {
      const fetchMarkdownWithRetry = async () => {
        const response = await fetch(markdownUrl);
        if (!response.ok) {
          throw new Error(`Failed to fetch markdown content: ${response.status} - ${response.statusText}`);
        }
        return response;
      };

      const markdownResponse = await retryWithDelay(fetchMarkdownWithRetry);

      const markdown = await markdownResponse.text();

      if (!markdown || markdown.trim().length === 0) {
        rollbar.warning('Policy validation: Empty markdown content returned', {
          url,
        });
        return {
          success: false,
          error: 'Empty markdown content returned from Gaffa',
          url,
        };
      }

      return {
        success: true,
        markdown,
        url,
      };
    } catch (markdownFetchError) {
      rollbar.error('Policy validation: Error fetching markdown content', {
        url,
        error:
          markdownFetchError instanceof Error
            ? markdownFetchError.message
            : String(markdownFetchError),
      });
      return {
        success: false,
        error: `Error fetching markdown content: ${markdownFetchError instanceof Error ? markdownFetchError.message : 'Unknown error'}`,
        url,
      };
    }
  } catch (error) {
    rollbar.error('Policy validation: Document scraping request failed', {
      url,
      error: error instanceof Error ? error.message : String(error),
    });
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown scraping error',
      url,
    };
  }
}

export async function scrapeMultipleDocuments(urls: string[]): Promise<GaffaScrapingResult[]> {
  // Process documents in parallel with controlled concurrency
  const results = await Promise.allSettled(urls.map((url) => scrapeDocumentMarkdown(url)));

  // Convert Promise.allSettled results to GaffaScrapingResult[]
  const finalResults: GaffaScrapingResult[] = results.map((result, index) => {
    if (result.status === 'fulfilled') {
      return result.value;
    } else {
      rollbar.error('Policy validation: Document scraping failed in batch', {
        url: urls[index],
        error: result.reason instanceof Error ? result.reason.message : String(result.reason),
      });
      return {
        success: false,
        error: result.reason instanceof Error ? result.reason.message : 'Unknown scraping error',
        url: urls[index],
      };
    }
  });

  const successCount = finalResults.filter((r) => r.success).length;
  rollbar.info('Policy validation: Document scraping batch completed', {
    totalUrls: urls.length,
    successCount,
    failureCount: urls.length - successCount,
  });

  return finalResults;
}

export async function scrapeMultipleDocumentsWithRateLimit(
  urls: string[],
  concurrency: number = 3,
  delayMs: number = 500,
): Promise<GaffaScrapingResult[]> {
  const results: GaffaScrapingResult[] = [];

  // Process URLs in batches to control concurrency
  for (let i = 0; i < urls.length; i += concurrency) {
    const batch = urls.slice(i, i + concurrency);

    // Process batch in parallel
    const batchResults = await Promise.allSettled(batch.map((url) => scrapeDocumentMarkdown(url)));

    // Convert results and add to final array
    const processedBatchResults: GaffaScrapingResult[] = batchResults.map((result, batchIndex) => {
      const urlIndex = i + batchIndex;
      if (result.status === 'fulfilled') {
        return result.value;
      } else {
        rollbar.error('Policy validation: Document scraping failed in rate-limited batch', {
          url: urls[urlIndex],
          error: result.reason instanceof Error ? result.reason.message : String(result.reason),
        });
        return {
          success: false,
          error: result.reason instanceof Error ? result.reason.message : 'Unknown scraping error',
          url: urls[urlIndex],
        };
      }
    });

    results.push(...processedBatchResults);

    // Add delay between batches (except for the last batch)
    if (i + concurrency < urls.length) {
      await new Promise((resolve) => setTimeout(resolve, delayMs));
    }
  }

  const successCount = results.filter((r) => r.success).length;
  rollbar.info('Policy validation: Document scraping batch completed', {
    totalUrls: urls.length,
    successCount,
    failureCount: urls.length - successCount,
  });

  return results;
}
