import { serverInstance as rollbar } from '../rollbar';

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
