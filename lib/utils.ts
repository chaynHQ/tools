import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function trimJSON(input:string){
  if(input.startsWith('```json')){
    return input.slice(7, input.length - 3)
  }
  if(input.startsWith('```')){
    return input.slice(3, input.length - 3)
  }
  return input
}

export function parseAIJson(input: string) {
  try {
    const trimmedInput = trimJSON(input)
    // 1. Remove or escape stray newlines within string values
    const cleanedInput = trimmedInput.replace(/:\s*"(.*?)"/gs, (match, p1) => {
      return `: "${p1.replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/"/g, '\\"')}"`; // Escape newlines and quotes
    });
    console.log("Cleaned JSON:", cleanedInput); // Log cleaned version

    // 2. Attempt to parse
    const jsonObject = JSON.parse(cleanedInput);
    return jsonObject;

  } catch (error) {
    console.error("Error parsing or cleaning JSON:", error);
    console.error("Original JSON:", input); 
    throw error
  }
}