import { PLACEHOLDER_TYPES, PROMPT_INJECTION_PATTERNS } from '../constants/ai';
import { serverInstance as rollbar } from '../rollbar';

// Store sanitized data mappings
const sanitizationMap = new Map<string, Map<string, string>>();

// Counter for generating unique placeholders
const placeholderCounters = new Map<string, number>();

// Generate unique placeholder with counter
function generateUniquePlaceholder(baseType: string): string {
  const currentCount = placeholderCounters.get(baseType) || 0;
  const newCount = currentCount + 1;
  placeholderCounters.set(baseType, newCount);

  if (newCount === 1) {
    return `[${baseType.replace(/[\[\]]/g, '')}]`; // First occurrence uses base placeholder with brackets
  }
  return `[${baseType.replace(/[\[\]]/g, '')}_${newCount}]`; // Subsequent occurrences get numbered with brackets
}

// Reset counters for new form
function resetPlaceholderCounters(): void {
  placeholderCounters.clear();
}

// Sanitize text to remove potential identifiers and prompt injection attempts
export function sanitizeText(text: string): string {
  if (!text) return '';

  // First check for prompt injection attempts
  for (const pattern of PROMPT_INJECTION_PATTERNS) {
    if (pattern.test(text)) {
      rollbar.error('Potential prompt injection attempt detected', {
        pattern: pattern.toString(),
        text: text.substring(0, 100), // Log only first 100 chars
      });
      text = text.replace(pattern, PLACEHOLDER_TYPES.PROMPT_INJECTION);
    }
  }

  // Validate input length
  if (text.length > 10000) {
    rollbar.warning('Input text exceeds maximum length', {
      length: text.length,
    });
    text = text.substring(0, 10000);
  }

  return (
    text
      // Remove email addresses
      .replace(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g, () => {
        return generateUniquePlaceholder(PLACEHOLDER_TYPES.EMAIL);
      })
      // Remove phone numbers (various formats)
      .replace(/(?:\+?\d{1,3}[-. ]?)?\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}/g, () => {
        return generateUniquePlaceholder(PLACEHOLDER_TYPES.PHONE);
      })
      // Remove case/reference numbers
      .replace(/\b(?:case|ref|reference|ticket)\s*#?\s*[\w-]+/gi, () => {
        return generateUniquePlaceholder(PLACEHOLDER_TYPES.REFERENCE);
      })
      // Remove dates in various formats while preserving general timeframes
      .replace(/\b\d{1,2}[-/]\d{1,2}[-/]\d{2,4}\b/g, () => {
        return generateUniquePlaceholder(PLACEHOLDER_TYPES.DATE);
      })
      // Remove IP addresses
      .replace(/\b(?:\d{1,3}\.){3}\d{1,3}\b/g, () => {
        return generateUniquePlaceholder(PLACEHOLDER_TYPES.IP);
      })
      // Remove long numbers that might be IDs
      .replace(/\b\d{10,}\b/g, () => {
        return generateUniquePlaceholder(PLACEHOLDER_TYPES.ID);
      })
      // Remove social media handles while preserving platform names
      .replace(/@[\w.]+/g, () => {
        return generateUniquePlaceholder(PLACEHOLDER_TYPES.USERNAME);
      })
      // Remove URLs
      .replace(/https?:\/\/[^\s]+/g, () => {
        return generateUniquePlaceholder(PLACEHOLDER_TYPES.URL);
      })
      // Remove platform-specific identifiers
      .replace(/\b(?:facebook\.com|instagram\.com|tiktok\.com)\/[^\s]+/g, () => {
        return generateUniquePlaceholder(PLACEHOLDER_TYPES.PLATFORM);
      })
      // Remove case numbers and ticket references
      .replace(/\b(?:case|ticket|ref)[-#]?\d+\b/gi, () => {
        return generateUniquePlaceholder(PLACEHOLDER_TYPES.CASE_NUMBER);
      })
      // Remove account identifiers
      .replace(/\baccount\s*(?:id|number|#)?\s*[\w-]+\b/gi, () => {
        return generateUniquePlaceholder(PLACEHOLDER_TYPES.ACCOUNT);
      })
      // Remove location information
      .replace(/\b(?:address|location|city|state|zip|postal)\s*:\s*[^\n,]+/gi, () => {
        return generateUniquePlaceholder(PLACEHOLDER_TYPES.LOCATION);
      })
      // Remove potential names (sequences of capitalized words)
      .replace(/\b(?:[A-Z][a-z]+(?:\s+[A-Z][a-z]+)+)\b/g, () => {
        return generateUniquePlaceholder(PLACEHOLDER_TYPES.NAME);
      })
      // Remove any remaining special characters that could be used for injection
      .replace(/^\w\s.,!?-/g, '')
  );
}

// Sanitize form data before sending to AI
export function sanitizeFormData(data: Record<string, any>): Record<string, any> {
  const sanitized: Record<string, any> = {};
  const formId = Math.random().toString(36).substring(7);
  const mappings = new Map<string, string>();
  sanitizationMap.set(formId, mappings);

  // Reset counters for this new form
  resetPlaceholderCounters();

  function processSanitization(value: any, isContentLocation: boolean = false): any {
    if (typeof value === 'string') {
      // Validate string length
      if (value.length > 10000) {
        rollbar.warning('Input value exceeds maximum length', {
          length: value.length,
        });
        value = value.substring(0, 10000);
      }

      if (isContentLocation) {
        mappings.set(PLACEHOLDER_TYPES.CONTENT_LOCATION, value);
        return PLACEHOLDER_TYPES.CONTENT_LOCATION;
      }

      // Store original text and process sanitization
      const originalValue = value;
      const sanitizedText = sanitizeText(value);

      // Extract and store mappings for all placeholders found
      extractAndStoreMappings(originalValue, sanitizedText, mappings);

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
          key === 'contentUrl' || key === 'contentDescription' || key === 'imageIdentification',
        );
      }
      return result;
    }
    return value;
  }

  for (const [key, value] of Object.entries(data)) {
    // Don't sanitize platformInfo to preserve the structure
    if (key === 'platformInfo') {
      sanitized[key] = value;
      continue;
    }
    sanitized[key] = processSanitization(
      value,
      key === 'contentUrl' || key === 'contentDescription' || key === 'imageIdentification',
    );
  }

  return { formId, ...sanitized };
}

// Extract and store mappings between placeholders and original values
function extractAndStoreMappings(
  originalText: string,
  sanitizedText: string,
  mappings: Map<string, string>,
): void {
  // Define regex patterns for each type of sensitive data
  const patterns = [
    { type: 'EMAIL', regex: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g },
    { type: 'PHONE', regex: /(?:\+?\d{1,3}[-. ]?)?\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}/g },
    { type: 'URL', regex: /https?:\/\/[^\s]+/g },
    { type: 'REFERENCE', regex: /\b(?:case|ref|reference|ticket)\s*#?\s*[\w-]+/gi },
    { type: 'DATE', regex: /\b\d{1,2}[-/]\d{1,2}[-/]\d{2,4}\b/g },
    { type: 'IP', regex: /\b(?:\d{1,3}\.){3}\d{1,3}\b/g },
    { type: 'ID', regex: /\b\d{10,}\b/g },
    { type: 'USERNAME', regex: /@[\w.]+/g },
    { type: 'PLATFORM', regex: /\b(?:facebook\.com|instagram\.com|tiktok\.com)\/[^\s]+/g },
    { type: 'CASE_NUMBER', regex: /\b(?:case|ticket|ref)[-#]?\d+\b/gi },
    { type: 'ACCOUNT', regex: /\baccount\s*(?:id|number|#)?\s*[\w-]+\b/gi },
    { type: 'LOCATION', regex: /\b(?:address|location|city|state|zip|postal)\s*:\s*[^\n,]+/gi },
    { type: 'NAME', regex: /\b(?:[A-Z][a-z]+(?:\s+[A-Z][a-z]+)+)\b/g },
  ];

  // For each pattern type, find all matches and map them to placeholders
  // Use the same numbering system as generateUniquePlaceholder
  patterns.forEach(({ type, regex }) => {
    const matches = Array.from(originalText.matchAll(regex));
    matches.forEach((match, index) => {
      // Reset counter for this type to match the generation logic
      const currentCount = index + 1;
      const placeholder = currentCount === 1 ? `[${type}]` : `[${type}_${currentCount}]`;
      mappings.set(placeholder, match[0]);
    });
  });
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
  resetPlaceholderCounters();
}
