import { serverInstance as rollbar } from '@/lib/rollbar';

export interface RetryConfig {
  maxRetries: number;
  baseDelay: number;
  maxDelay: number;
  backoffMultiplier: number;
  retryableErrors: string[];
}

export interface RetryResult<T> {
  success: boolean;
  data?: T;
  error?: Error;
  attempts: number;
  totalTime: number;
}

/**
 * Advanced retry handler with exponential backoff and error classification
 */
export class RetryHandler {
  private static readonly DEFAULT_CONFIG: RetryConfig = {
    maxRetries: 3,
    baseDelay: 1000, // 1 second
    maxDelay: 30000, // 30 seconds
    backoffMultiplier: 2,
    retryableErrors: [
      'rate limit',
      'timeout',
      'network',
      'temporary',
      'service unavailable',
      'internal server error',
      'bad gateway',
      'gateway timeout',
      'too many requests',
      'quota exceeded',
    ],
  };

  /**
   * Executes a function with retry logic and exponential backoff
   */
  static async executeWithRetry<T>(
    operation: () => Promise<T>,
    config: Partial<RetryConfig> = {},
    context: string = 'unknown operation',
  ): Promise<RetryResult<T>> {
    const finalConfig = { ...this.DEFAULT_CONFIG, ...config };
    const startTime = Date.now();
    let lastError: Error | null = null;

    rollbar.info('RetryHandler: Starting operation with retry', {
      context,
      maxRetries: finalConfig.maxRetries,
      baseDelay: finalConfig.baseDelay,
    });

    for (let attempt = 1; attempt <= finalConfig.maxRetries + 1; attempt++) {
      try {
        const result = await operation();
        const totalTime = Date.now() - startTime;

        rollbar.info('RetryHandler: Operation succeeded', {
          context,
          attempt,
          totalTime,
          retriesUsed: attempt - 1,
        });

        return {
          success: true,
          data: result,
          attempts: attempt,
          totalTime,
        };
      } catch (error) {
        lastError = error instanceof Error ? error : new Error(String(error));
        const totalTime = Date.now() - startTime;

        rollbar.warning('RetryHandler: Operation failed', {
          context,
          attempt,
          error: lastError.message,
          totalTime,
          isRetryable: this.isRetryableError(lastError, finalConfig),
          attemptsRemaining: finalConfig.maxRetries + 1 - attempt,
        });

        // Don't retry on the last attempt or if error is not retryable
        if (attempt > finalConfig.maxRetries || !this.isRetryableError(lastError, finalConfig)) {
          rollbar.error('RetryHandler: Operation failed permanently', {
            context,
            totalAttempts: attempt,
            totalTime,
            finalError: lastError.message,
            wasRetryable: this.isRetryableError(lastError, finalConfig),
          });

          return {
            success: false,
            error: lastError,
            attempts: attempt,
            totalTime,
          };
        }

        // Calculate delay with exponential backoff
        const delay = Math.min(
          finalConfig.baseDelay * Math.pow(finalConfig.backoffMultiplier, attempt - 1),
          finalConfig.maxDelay,
        );

        rollbar.info('RetryHandler: Waiting before retry', {
          context,
          attempt,
          delay,
          nextAttempt: attempt + 1,
        });

        await this.sleep(delay);
      }
    }

    // This should never be reached, but TypeScript requires it
    const totalTime = Date.now() - startTime;
    return {
      success: false,
      error: lastError || new Error('Unknown error'),
      attempts: finalConfig.maxRetries + 1,
      totalTime,
    };
  }

  /**
   * Determines if an error is retryable based on the error message
   */
  private static isRetryableError(error: Error, config: RetryConfig): boolean {
    const errorMessage = error.message.toLowerCase();

    return config.retryableErrors.some((retryableError) =>
      errorMessage.includes(retryableError.toLowerCase()),
    );
  }

  /**
   * Sleep utility function
   */
  private static sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  /**
   * Creates a retry config optimized for AI API calls
   */
  static createAIRetryConfig(): RetryConfig {
    return {
      ...this.DEFAULT_CONFIG,
      maxRetries: 4, // More retries for AI APIs
      baseDelay: 2000, // Longer base delay
      maxDelay: 60000, // Up to 1 minute delay
      retryableErrors: [
        ...this.DEFAULT_CONFIG.retryableErrors,
        'model overloaded',
        'api key quota exceeded',
        'rate limit exceeded',
        'service temporarily unavailable',
      ],
    };
  }

  /**
   * Creates a retry config optimized for GitHub API calls
   */
  static createGitHubRetryConfig(): RetryConfig {
    return {
      ...this.DEFAULT_CONFIG,
      maxRetries: 3,
      baseDelay: 1000,
      maxDelay: 15000,
      retryableErrors: [
        ...this.DEFAULT_CONFIG.retryableErrors,
        'abuse detection',
        'secondary rate limit',
        'git operation timeout',
      ],
    };
  }
}
