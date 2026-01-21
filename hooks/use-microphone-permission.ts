import { useEffect, useState } from 'react';

export type MicrophonePermissionState = 'prompt' | 'granted' | 'denied' | 'unsupported';

interface UseMicrophonePermissionReturn {
  permissionState: MicrophonePermissionState;
  requestPermission: () => Promise<boolean>;
  isLoading: boolean;
}

/**
 * Hook to manage microphone permissions for speech recognition
 *
 * Returns:
 * - permissionState: Current permission state ('prompt', 'granted', 'denied', 'unsupported')
 * - requestPermission: Function to request microphone permission
 * - isLoading: Whether permission is being requested
 */
export function useMicrophonePermission(): UseMicrophonePermissionReturn {
  const [permissionState, setPermissionState] = useState<MicrophonePermissionState>('prompt');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Check if the browser supports the Permissions API
    if (!navigator.permissions || !navigator.permissions.query) {
      // Permissions API not supported (e.g., Safari) - default to 'prompt'
      // We'll handle permission errors when actually trying to use the microphone
      setPermissionState('prompt');
      return;
    }

    // Query the current permission state
    navigator.permissions
      .query({ name: 'microphone' as PermissionName })
      .then((permissionStatus) => {
        setPermissionState(permissionStatus.state as MicrophonePermissionState);

        // Listen for permission changes
        const handleChange = () => {
          setPermissionState(permissionStatus.state as MicrophonePermissionState);
        };

        permissionStatus.addEventListener('change', handleChange);

        return () => {
          permissionStatus.removeEventListener('change', handleChange);
        };
      })
      .catch(() => {
        // If permission query fails, default to 'prompt'
        setPermissionState('prompt');
      });
  }, []);

  const requestPermission = async (): Promise<boolean> => {
    setIsLoading(true);

    try {
      // Request microphone access
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

      // Stop all tracks immediately - we just needed to trigger the permission prompt
      stream.getTracks().forEach(track => track.stop());

      setPermissionState('granted');
      setIsLoading(false);
      return true;
    } catch (error) {
      // Permission denied or error occurred
      setPermissionState('denied');
      setIsLoading(false);
      return false;
    }
  };

  return {
    permissionState,
    requestPermission,
    isLoading,
  };
}
