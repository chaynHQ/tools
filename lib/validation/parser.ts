/**
 * Extracts and parses JSON from a string that might contain markdown fences.
 * @param {string} str The input string potentially containing JSON wrapped in ```json ... ```
 * @returns {object|null} The parsed JavaScript object or null if parsing fails.
 */
export function parseJsonFromString(str: string) {
  if (!str || typeof str !== 'string') {
    console.error("Input must be a non-empty string.");
    return null;
  }

  // Remove potential markdown fences and trim whitespace
  const jsonString = str
    .replace(/^```json\s*/, '')
    .replace(/```\s*$/, '')
    .trim();

  try {
    const jsonObject = JSON.parse(jsonString);
    console.log("Parsed JSON object:", jsonObject);
    return jsonObject;
  } catch (error: any) {
    console.error("Error parsing JSON string:", error.message);
    return null;
  }
}