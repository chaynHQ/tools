import { useEffect } from 'react';
import SpeechRecognition from 'react-speech-recognition';

interface UseSpeechRecognitionErrorParams {
  onError: (errorType: string) => void;
  browserSupported: boolean;
}

/**
 * Hook to handle speech recognition errors, particularly permission-related errors
 *
 * @param onError - Callback function called when a permission error occurs
 * @param browserSupported - Whether the browser supports speech recognition
 */
export function useSpeechRecognitionError({
  onError,
  browserSupported,
}: UseSpeechRecognitionErrorParams) {
  useEffect(() => {
    if (!browserSupported) return;

    // Access the native recognition instance
    const SpeechRecognitionAPI =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognitionAPI) return;

    // Get the recognition instance used by react-speech-recognition
    const recognition =
      (SpeechRecognition as any).getRecognition?.() || (SpeechRecognition as any).recognition;

    if (!recognition) {
      // If we can't get the recognition instance, we can't add error handlers
      return;
    }

    const handleError = (event: any) => {
      // Handle microphone permission errors
      if (event.error === 'not-allowed' || event.error === 'audio-capture') {
        onError(event.error);
      }
    };

    // Set the error handler
    recognition.onerror = handleError;

    return () => {
      recognition.onerror = null;
    };
  }, [browserSupported, onError]);
}
