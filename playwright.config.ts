import { defineConfig, devices } from '@playwright/test';

const config = {
  testDir: './tests',
  timeout: 30000,
  reporter: 'list',
  use: {
    ignoreHTTPSErrors: true,
  },
  projects: [
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],
      },
      testMatch: /.*\.(spec|test)\.(ts|js)/,
      testIgnore: /api.*\.spec\.ts/,
    },
    {
      name: 'API tests',
      use: { 
        baseURL: 'https://api.github.com/',
      },
      testMatch: /api.*\.spec\.ts/,
    },
  ],
};

export default defineConfig(config);
