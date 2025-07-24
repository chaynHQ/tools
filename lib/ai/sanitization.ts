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
    return baseType; // First occurrence uses base placeholder
  }
  return `${baseType}_${newCount}`; // Subsequent occurrences get numbered
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

  // Store original values and their unique placeholders for restoration
  const replacements: Array<{ original: string; placeholder: string }> = [];

  return (
    text
      // Remove email addresses
      .replace(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g, (match) => {
        const placeholder = generateUniquePlaceholder(PLACEHOLDER_TYPES.EMAIL);
        replacements.push({ original: match, placeholder });
        return placeholder;
      })
      // Remove phone numbers (various formats)
      .replace(/(?:\+?\d{1,3}[-. ]?)?\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}/g, (match) => {
        const placeholder = generateUniquePlaceholder(PLACEHOLDER_TYPES.PHONE);
        replacements.push({ original: match, placeholder });
        return placeholder;
      })
      // Remove case/reference numbers
      .replace(/\b(?:case|ref|reference|ticket)\s*#?\s*[\w-]+/gi, (match) => {
        const placeholder = generateUniquePlaceholder(PLACEHOLDER_TYPES.REFERENCE);
        replacements.push({ original: match, placeholder });
        return placeholder;
      })
      // Remove dates in various formats while preserving general timeframes
      .replace(/\b\d{1,2}[-/]\d{1,2}[-/]\d{2,4}\b/g, (match) => {
        const placeholder = generateUniquePlaceholder(PLACEHOLDER_TYPES.DATE);
        replacements.push({ original: match, placeholder });
        return placeholder;
      })
      // Remove IP addresses
      .replace(/\b(?:\d{1,3}\.){3}\d{1,3}\b/g, (match) => {
        const placeholder = generateUniquePlaceholder(PLACEHOLDER_TYPES.IP);
        replacements.push({ original: match, placeholder });
        return placeholder;
      })
      // Remove long numbers that might be IDs
      .replace(/\b\d{10,}\b/g, (match) => {
        const placeholder = generateUniquePlaceholder(PLACEHOLDER_TYPES.ID);
        replacements.push({ original: match, placeholder });
        return placeholder;
      })
      // Remove social media handles while preserving platform names
      .replace(/@[\w.]+/g, (match) => {
        const placeholder = generateUniquePlaceholder(PLACEHOLDER_TYPES.USERNAME);
        replacements.push({ original: match, placeholder });
        return placeholder;
      })
      // Remove URLs while preserving domain names
      .replace(/https?:\/\/[^\s]+/g, (match) => {
        try {
          const url = new URL(match);
          const placeholder = generateUniquePlaceholder(PLACEHOLDER_TYPES.URL);
          const urlPlaceholder = `${placeholder}:${url.hostname}`;
          replacements.push({ original: match, placeholder: urlPlaceholder });
          return urlPlaceholder;
        } catch {
          const placeholder = generateUniquePlaceholder(PLACEHOLDER_TYPES.URL);
          replacements.push({ original: match, placeholder });
          return placeholder;
        }
      })
      // Remove platform-specific identifiers
      .replace(/\b(?:facebook\.com|instagram\.com|tiktok\.com)\/[^\s]+/g, (match) => {
        const placeholder = generateUniquePlaceholder(PLACEHOLDER_TYPES.PLATFORM);
        replacements.push({ original: match, placeholder });
        return placeholder;
      })
      // Remove case numbers and ticket references
      .replace(/\b(?:case|ticket|ref)[-#]?\d+\b/gi, (match) => {
        const placeholder = generateUniquePlaceholder(PLACEHOLDER_TYPES.CASE_NUMBER);
        replacements.push({ original: match, placeholder });
        return placeholder;
      })
      // Remove account identifiers
      .replace(/\baccount\s*(?:id|number|#)?\s*[\w-]+\b/gi, (match) => {
        const placeholder = generateUniquePlaceholder(PLACEHOLDER_TYPES.ACCOUNT);
        replacements.push({ original: match, placeholder });
        return placeholder;
      })
      // Remove location information
      .replace(
        /\b(?:address|location|city|state|zip|postal)\s*:\s*[^\n,]+/gi,
        (match) => {
          const placeholder = generateUniquePlaceholder(PLACEHOLDER_TYPES.LOCATION);
          replacements.push({ original: match, placeholder });
          return placeholder;
        }
      )
      // Remove potential names (sequences of capitalized words)
      .replace(/\b(?:[A-Z][a-z]+(?:\s+[A-Z][a-z]+)+)\b/g, (match) => {
        const placeholder = generateUniquePlaceholder(PLACEHOLDER_TYPES.NAME);
        replacements.push({ original: match, placeholder });
        return placeholder;
      })
      // Remove any remaining special characters that could be used for injection
      .replace(/[^\w\s.,!?-]/g, '')
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
        const placeholder = generateUniquePlaceholder(PLACEHOLDER_TYPES.CONTENT_LOCATION);
        mappings.set(placeholder, value);
        return PLACEHOLDER_TYPES.CONTENT_LOCATION;
      }
      
      // Store original text for mapping extraction
      const originalValue = value;
      const sanitizedText = sanitizeText(value);
      
      if (sanitizedText !== originalValue) {
        // Extract and store mappings for all placeholders found
        const placeholders = sanitizedText.match(/\[[^\]]*\]/g) || [];
        
        // For URL placeholders with domain info, we need to reconstruct the original URL
        placeholders.forEach((placeholder) => {
          if (placeholder.includes(':') && placeholder.startsWith('[URL')) {
            // Handle URL placeholders with domain info like [URL:facebook.com] or [URL_2:instagram.com]
            const domainMatch = placeholder.match(/\[URL[^:]*:([^\]]+)\]/);
            if (domainMatch) {
              const domain = domainMatch[1];
              // Find the original URL that matches this domain
              const urlRegex = new RegExp(`https?://[^\\s]*${domain.replace('.', '\\.')}[^\\s]*`, 'g');
              const urlMatch = originalValue.match(urlRegex);
              if (urlMatch) {
                mappings.set(placeholder, urlMatch[0]);
              }
            }
          } else {
            // For other placeholders, we need to find the original value
            // This is more complex since we've already replaced the text
            // We'll store a mapping based on the placeholder type
            if (!mappings.has(placeholder)) {
              // Try to extract the original value based on the placeholder type
              const originalMatch = extractOriginalValue(originalValue, placeholder);
              if (originalMatch) {
                mappings.set(placeholder, originalMatch);
              }
            }
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

// Helper function to extract original values based on placeholder type
function extractOriginalValue(originalText: string, placeholder: string): string | null {
  // Extract the base type from placeholder (e.g., [EMAIL_2] -> EMAIL)
  const baseType = placeholder.replace(/\[([A-Z_]+)(_\d+)?\]/, '$1');
  
  switch (baseType) {
    case 'EMAIL':
      const emailMatch = originalText.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
      return emailMatch ? emailMatch[0] : null;
    case 'PHONE':
      const phoneMatch = originalText.match(/(?:\+?\d{1,3}[-. ]?)?\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}/);
      return phoneMatch ? phoneMatch[0] : null;
    case 'DATE':
      const dateMatch = originalText.match(/\b\d{1,2}[-/]\d{1,2}[-/]\d{2,4}\b/);
      return dateMatch ? dateMatch[0] : null;
    case 'IP':
      const ipMatch = originalText.match(/\b(?:\d{1,3}\.){3}\d{1,3}\b/);
      return ipMatch ? ipMatch[0] : null;
    case 'ID':
      const idMatch = originalText.match(/\b\d{10,}\b/);
      return idMatch ? idMatch[0] : null;
    case 'USERNAME':
      const usernameMatch = originalText.match(/@[\w.]+/);
      return usernameMatch ? usernameMatch[0] : null;
    case 'REFERENCE':
      const refMatch = originalText.match(/\b(?:case|ref|reference|ticket)\s*#?\s*[\w-]+/i);
      return refMatch ? refMatch[0] : null;
    case 'CASE_NUMBER':
      const caseMatch = originalText.match(/\b(?:case|ticket|ref)[-#]?\d+\b/i);
      return caseMatch ? caseMatch[0] : null;
    case 'ACCOUNT':
      const accountMatch = originalText.match(/\baccount\s*(?:id|number|#)?\s*[\w-]+\b/i);
      return accountMatch ? accountMatch[0] : null;
    case 'LOCATION':
      const locationMatch = originalText.match(/\b(?:address|location|city|state|zip|postal)\s*:\s*[^\n,]+/i);
      return locationMatch ? locationMatch[0] : null;
    case 'NAME':
      const nameMatch = originalText.match(/\b(?:[A-Z][a-z]+(?:\s+[A-Z][a-z]+)+)\b/);
      return nameMatch ? nameMatch[0] : null;
    case 'PLATFORM':
      const platformMatch = originalText.match(/\b(?:facebook\.com|instagram\.com|tiktok\.com)\/[^\s]+/);
      return platformMatch ? platformMatch[0] : null;
    default:
      return null;
  }
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
