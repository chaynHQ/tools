@@ .. @@
 import { PLATFORM_NAMES } from '@/lib/constants/platforms';
 import { getPlatformPolicy } from '@/lib/platform-policies';
 import { handleApiError, serverInstance as rollbar } from '@/lib/rollbar';
+import { saveValidationSession } from '@/lib/session-storage';
 import { NextResponse } from 'next/server';
 
@@ .. @@
   ValidationSession,
 } from '@/types/policies';
 
-// Store validation sessions
-const validationSessions = new Map<string, ValidationSession>();
-
 /**
@@ .. @@
     };
 
-    validationSessions.set(validationId, session);
+    await saveValidationSession(session);
 
     rollbar.info('PolicyRevalidation: Session initialized successfully', {
@@ .. @@
   });
 }
-
-// Export the validation sessions map for use in the process route
-export { validationSessions };