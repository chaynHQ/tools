import { defineConfig } from 'cypress';
import * as dotenv from 'dotenv';
dotenv.config(); // <-- This loads .env into process.env

export default defineConfig({
  e2e: {
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: false,
    screenshotOnRunFailure: false,
    experimentalWebKitSupport: true,
    requestTimeout: 10000,
  },
});
