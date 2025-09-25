import { defineConfig } from 'cypress';
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';
dotenv.config(); // <-- This loads .env into process.env

export default defineConfig({
  e2e: {
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
    setupNodeEvents(on, config) {
      // Custom task to check if a file exists
      on('task', {
        fileExists(filePath: string) {
          try {
            const fullPath = path.resolve(filePath);
            return fs.existsSync(fullPath);
          } catch (error) {
            return false;
          }
        },
      });
    },
    video: false,
    screenshotOnRunFailure: false,
    experimentalWebKitSupport: true,
    requestTimeout: 10000,
  },
});
