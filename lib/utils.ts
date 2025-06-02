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

// Store sanitized data mappings
const sanitizationMap = new Map<string, Map<string, string>>();

// Define placeholder types
export const PLACEHOLDER_TYPES = {
  CONTENT_LOCATION: '[CONTENT_LOCATION]',
  EMAIL: '[EMAIL]',
  PHONE: '[PHONE]',
  REFERENCE: '[REFERENCE]',
  DATE: '[DATE]',
  IP: '[IP]',
  ID: '[ID]',
  USERNAME: '[USERNAME]',
  URL: '[URL]',
  PLATFORM: '[PLATFORM]',
  CASE_NUMBER: '[CASE_NUMBER]',
  ACCOUNT: '[ACCOUNT]',
  LOCATION: '[LOCATION]',
  NAME: '[NAME]',
} as const;

// Sanitize text to remove potential identifiers
export function sanitizeText(text: string): string {
  if (!text) return '';

  return (
    text
      // Remove email addresses
      .replace(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g, PLACEHOLDER_TYPES.EMAIL)
      // Remove phone numbers (various formats)
      .replace(/(?:\+?\d{1,3}[-. ]?)?\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}/g, PLACEHOLDER_TYPES.PHONE)
      // Remove case/reference numbers
      .replace(/\b(?:case|ref|reference|ticket)\s*#?\s*[\w-]+/gi, PLACEHOLDER_TYPES.REFERENCE)
      // Remove dates in various formats while preserving general timeframes
      .replace(/\b\d{1,2}[-/]\d{1,2}[-/]\d{2,4}\b/g, PLACEHOLDER_TYPES.DATE)
      // Remove IP addresses
      .replace(/\b(?:\d{1,3}\.){3}\d{1,3}\b/g, PLACEHOLDER_TYPES.IP)
      // Remove long numbers that might be IDs
      .replace(/\b\d{10,}\b/g, PLACEHOLDER_TYPES.ID)
      // Remove social media handles while preserving platform names
      .replace(/@[\w.]+/g, PLACEHOLDER_TYPES.USERNAME)
      // Remove URLs while preserving domain names
      .replace(/https?:\/\/[^\s]+/g, (match) => {
        try {
          const url = new URL(match);
          return `${PLACEHOLDER_TYPES.URL}:${url.hostname}`;
        } catch {
          return PLACEHOLDER_TYPES.URL;
        }
      })
      // Remove platform-specific identifiers
      .replace(
        /\b(?:facebook\.com|instagram\.com|tiktok\.com)\/[^\s]+/g,
        PLACEHOLDER_TYPES.PLATFORM,
      )
      // Remove case numbers and ticket references
      .replace(/\b(?:case|ticket|ref)[-#]?\d+\b/gi, PLACEHOLDER_TYPES.CASE_NUMBER)
      // Remove account identifiers
      .replace(/\baccount\s*(?:id|number|#)?\s*[\w-]+\b/gi, PLACEHOLDER_TYPES.ACCOUNT)
      // Remove location information
      .replace(
        /\b(?:address|location|city|state|zip|postal)\s*:\s*[^\n,]+/gi,
        PLACEHOLDER_TYPES.LOCATION,
      )
      // Remove potential names (sequences of capitalized words)
      .replace(/\b(?:[A-Z][a-z]+(?:\s+[A-Z][a-z]+)+)\b/g, PLACEHOLDER_TYPES.NAME)
  );
}

// Sanitize form data before sending to AI
export function sanitizeFormData(data: Record<string, any>): Record<string, any> {
  const sanitized: Record<string, any> = {};
  const formId = Math.random().toString(36).substring(7);
  const mappings = new Map<string, string>();
  sanitizationMap.set(formId, mappings);

  function processSanitization(value: any, isContentLocation: boolean = false): any {
    if (typeof value === 'string') {
      if (isContentLocation) {
        mappings.set(PLACEHOLDER_TYPES.CONTENT_LOCATION, value);
        return PLACEHOLDER_TYPES.CONTENT_LOCATION;
      }
      const sanitizedText = sanitizeText(value);
      if (sanitizedText !== value) {
        // Store original values for all placeholders
        const placeholders = sanitizedText.match(/\[.*?\]/g) || [];
        placeholders.forEach((placeholder) => {
          if (placeholder.startsWith('[URL:')) {
            const domain = placeholder.slice(5, -1);
            mappings.set(placeholder, `https://${domain}`);
          } else {
            mappings.set(placeholder, value);
          }
        });
      }
      return sanitizedText;
    }
    if (Array.isArray(value)) {
      return value.map((item) => processSanitization(item));
    }
    if (typeof value === 'object' && value !== null) {
      const result: Record<string, any> = {};
      for (const [key, val] of Object.entries(value)) {
        result[key] = processSanitization(
          val,
          key === 'contentUrl' || key === 'contentDescription',
        );
      }
      return result;
    }
    return value;
  }

  for (const [key, value] of Object.entries(data)) {
    sanitized[key] = processSanitization(
      value,
      key === 'contentUrl' || key === 'contentDescription',
    );
  }

  return { formId, ...sanitized };
}

// Restore sanitized data in the letter
export function desanitizeLetter(text: string, formId: string): string {
  const mappings = sanitizationMap.get(formId);
  if (!mappings) {
    rollbar.error('No sanitization mappings found for formId', { formId });
    return text;
  }

  let desanitizedText = text;

  // Sort mappings by length (longest first) to handle nested placeholders correctly
  const sortedMappings = Array.from(mappings.entries()).sort(([a], [b]) => b.length - a.length);

  for (const [placeholder, original] of sortedMappings) {
    const regex = new RegExp(placeholder.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    desanitizedText = desanitizedText.replace(regex, original);
  }

  return desanitizedText;
}

// Clean up sanitization mappings
export function cleanupSanitizationMap(formId: string): void {
  sanitizationMap.delete(formId);
}
