import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { rollbar } from './rollbar';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function trimJSON(input: string) {
  // Remove any markdown code block syntax
  if (input.startsWith('```json')) {
    return input.slice(7, input.length - 3).trim();
  }
  if (input.startsWith('```')) {
    return input.slice(3, input.length - 3).trim();
  }
  return input.trim();
}

export function parseAIJson(input: string) {
  try {
    // First, clean up the input
    const trimmedInput = trimJSON(input);

    // Try to parse as is first
    try {
      return JSON.parse(trimmedInput);
    } catch (e) {
      console.log('Initial JSON parse failed, attempting cleanup...');
    }

    // Remove any non-JSON text before the first { and after the last }
    const jsonStart = trimmedInput.indexOf('{');
    const jsonEnd = trimmedInput.lastIndexOf('}');
    if (jsonStart === -1 || jsonEnd === -1) {
      throw new Error('No valid JSON object found in response');
    }
    const jsonString = trimmedInput.slice(jsonStart, jsonEnd + 1);

    // Clean up common issues
    const cleanedInput = jsonString
      // Fix newlines in strings
      .replace(/\n/g, '\\n')
      // Remove any trailing commas before closing brackets
      .replace(/,(\s*[}\]])/g, '$1')
      // Ensure property names are quoted
      .replace(/([{,]\s*)(\w+)(\s*:)/g, '$1"$2"$3')
      // Fix unescaped quotes in strings
      .replace(/"([^"\\]*(?:\\.[^"\\]*)*)"/g, (match) => {
        return match.replace(/(?<!\\)"/g, '\\"');
      });

    // Try to parse the cleaned JSON
    try {
      return JSON.parse(cleanedInput);
    } catch (e) {
      console.error('Failed to parse cleaned JSON:', cleanedInput);
      throw new Error('Failed to parse AI response - the response format was invalid');
    }
  } catch (error) {
    console.error('Error parsing or cleaning JSON:', error);
    console.error('Original input:', input);
    throw error instanceof Error ? error : new Error('Failed to parse response as JSON');
  }
}

// URL validation and normalization
export function normalizeUrl(url: string): string {
  try {
    // If the URL doesn't start with a protocol, add https://
    if (!url.match(/^https?:\/\//i)) {
      url = 'https://' + url;
    }

    // Add www. if it's missing and the domain is a known platform
    const knownPlatforms = ['facebook.com', 'instagram.com', 'tiktok.com', 'onlyfans.com'];
    const urlObj = new URL(url);
    const domain = urlObj.hostname.replace(/^www\./i, '');

    if (knownPlatforms.includes(domain) && !urlObj.hostname.startsWith('www.')) {
      urlObj.hostname = 'www.' + urlObj.hostname;
    }

    return urlObj.toString();
  } catch (error) {
    // If URL parsing fails, return the original string
    // The form validation will catch invalid URLs
    return url;
  }
}

export function isValidUrl(url: string): boolean {
  try {
    const urlObj = new URL(normalizeUrl(url));
    // Check for valid protocol
    if (!urlObj.protocol.match(/^https?:$/i)) {
      return false;
    }
    // Check for valid hostname
    if (!urlObj.hostname.match(/^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i)) {
      return false;
    }
    return true;
  } catch (error) {
    return false;
  }
}

// Constants for retry functionality
export const MAX_RETRIES = 2;
export const RETRY_DELAY = 1000; // 1 second delay between retries

// Generic retry function with delay
export async function retryWithDelay<T>(
  fn: () => Promise<T>,
  retries: number = MAX_RETRIES,
  delay: number = RETRY_DELAY,
): Promise<T> {
  try {
    return await fn();
  } catch (error) {
    if (retries === 0) {
      rollbar.error('Retry attempts exhausted', { error, maxRetries: MAX_RETRIES });
      throw error;
    }
    await new Promise((resolve) => setTimeout(resolve, delay));
    rollbar.info('Retrying operation', {
      retriesLeft: retries - 1,
      delay,
    });
    return retryWithDelay(fn, retries - 1, delay);
  }
}
