@@ .. @@
 import { handleApiError, serverInstance as rollbar } from '@/lib/rollbar';
+import {
+  deleteValidationSession,
+  loadValidationSession,
+  updateValidationSession,
+} from '@/lib/session-storage';
 import { parseAIJson } from '@/lib/utils';
 import { NextResponse } from 'next/server';
 
 import { AnalysisResult, PlatformPolicy, PolicyUpdate, ValidationSession } from '@/types/policies';
 
-// Import validation sessions from the initialize route
-import { validationSessions } from '../initialize/route';
-
 /**
@@ .. @@
   totalPlatformsUpdated = platformsWithChanges.length;
 
-  validationSessions.delete(session.validationId);
+  await deleteValidationSession(session.validationId);
 
   if (totalChanges === 0) {
@@ .. @@
       return NextResponse.json({ error: 'validationId is required' }, { status: 400 });
     }
 
-    const session = validationSessions.get(validationId);
+    const session = await loadValidationSession(validationId);
     if (!session) {
       rollbar.error('PolicyRevalidation: Session not found', { validationId });
       return NextResponse.json({ error: 'Validation session not found' }, { status: 404 });
@@ .. @@
       session.processedDocuments.push(currentDocument.reference);
       session.currentIndex++;
 
+      // Save updated session
+      await updateValidationSession(session);
+
       return NextResponse.json({
@@ .. @@
       });
 
       session.currentIndex++;
+      
+      // Save updated session even on error
+      await updateValidationSession(session);
+      
       return NextResponse.json({