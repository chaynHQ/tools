import { ValidationSession } from '@/types/policies';
import { promises as fs } from 'fs';
import path from 'path';
import { serverInstance as rollbar } from './rollbar';

const SESSIONS_DIR = path.join(process.cwd(), '.sessions');

// Ensure sessions directory exists
async function ensureSessionsDir() {
  try {
    await fs.access(SESSIONS_DIR);
  } catch {
    await fs.mkdir(SESSIONS_DIR, { recursive: true });
  }
}

// Get session file path
function getSessionPath(validationId: string): string {
  return path.join(SESSIONS_DIR, `${validationId}.json`);
}

// Save validation session
export async function saveValidationSession(session: ValidationSession): Promise<void> {
  try {
    await ensureSessionsDir();
    const sessionPath = getSessionPath(session.validationId);
    await fs.writeFile(sessionPath, JSON.stringify(session, null, 2));
    
    rollbar.info('SessionStorage: Session saved', {
      validationId: session.validationId,
      path: sessionPath,
    });
  } catch (error) {
    rollbar.error('SessionStorage: Failed to save session', {
      validationId: session.validationId,
      error,
    });
    throw new Error(`Failed to save validation session: ${error}`);
  }
}

// Load validation session
export async function loadValidationSession(validationId: string): Promise<ValidationSession | null> {
  try {
    const sessionPath = getSessionPath(validationId);
    const sessionData = await fs.readFile(sessionPath, 'utf-8');
    const session = JSON.parse(sessionData) as ValidationSession;
    
    rollbar.info('SessionStorage: Session loaded', {
      validationId,
      path: sessionPath,
    });
    
    return session;
  } catch (error) {
    if ((error as any).code === 'ENOENT') {
      rollbar.warning('SessionStorage: Session not found', {
        validationId,
        path: getSessionPath(validationId),
      });
      return null;
    }
    
    rollbar.error('SessionStorage: Failed to load session', {
      validationId,
      error,
    });
    throw new Error(`Failed to load validation session: ${error}`);
  }
}

// Delete validation session
export async function deleteValidationSession(validationId: string): Promise<void> {
  try {
    const sessionPath = getSessionPath(validationId);
    await fs.unlink(sessionPath);
    
    rollbar.info('SessionStorage: Session deleted', {
      validationId,
      path: sessionPath,
    });
  } catch (error) {
    if ((error as any).code !== 'ENOENT') {
      rollbar.error('SessionStorage: Failed to delete session', {
        validationId,
        error,
      });
    }
  }
}

// Update validation session
export async function updateValidationSession(session: ValidationSession): Promise<void> {
  await saveValidationSession(session);
}

// Clean up old sessions (older than 24 hours)
export async function cleanupOldSessions(): Promise<void> {
  try {
    await ensureSessionsDir();
    const files = await fs.readdir(SESSIONS_DIR);
    const now = Date.now();
    const maxAge = 24 * 60 * 60 * 1000; // 24 hours
    
    for (const file of files) {
      if (file.endsWith('.json')) {
        const filePath = path.join(SESSIONS_DIR, file);
        const stats = await fs.stat(filePath);
        
        if (now - stats.mtime.getTime() > maxAge) {
          await fs.unlink(filePath);
          rollbar.info('SessionStorage: Cleaned up old session', {
            file,
            age: now - stats.mtime.getTime(),
          });
        }
      }
    }
  } catch (error) {
    rollbar.error('SessionStorage: Failed to cleanup old sessions', { error });
  }
}