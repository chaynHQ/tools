import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

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
      // If direct parsing fails, try to clean up the input
    }

    // Remove any non-JSON text before the first {
    const jsonStart = trimmedInput.indexOf('{');
    const jsonEnd = trimmedInput.lastIndexOf('}');
    if (jsonStart === -1 || jsonEnd === -1) {
      throw new Error('No valid JSON object found in response');
    }
    const jsonString = trimmedInput.slice(jsonStart, jsonEnd + 1);

    // Clean up common issues
    const cleanedInput = jsonString
      // Escape quotes within strings
      .replace(/:\s*"(.*?)"/gs, (match, p1) => {
        return `: "${p1.replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/"/g, '\\"')}"`; 
      })
      // Remove any trailing commas before closing brackets
      .replace(/,(\s*[}\]])/g, '$1')
      // Ensure property names are quoted
      .replace(/([{,]\s*)(\w+)(\s*:)/g, '$1"$2"$3');

    // Try to parse the cleaned JSON
    try {
      return JSON.parse(cleanedInput);
    } catch (e) {
      console.error('Failed to parse cleaned JSON:', cleanedInput);
      throw e;
    }
  } catch (error) {
    console.error("Error parsing or cleaning JSON:", error);
    console.error("Original input:", input);
    throw new Error('Failed to parse response as JSON');
  }
}