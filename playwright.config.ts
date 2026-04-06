import { defineConfig, devices } from '@playwright/test';

const config = {
  testDir: './tests',
  timeout: 30000,
  expect: { timeout: 10000 },
  fullyParallel: true,
  workers: process.env.CI ? 1 : 2,
  retries: process.env.CI ? 2 : 0,
  reporter: [
    ['html'],
    ['json', { outputFile: 'test-results/results.json' }],
    ['junit', { outputFile: 'test-results/junit.xml' }],
  ],
  use: {
    ignoreHTTPSErrors: true,
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],
      },
      testMatch: /.*\.(spec|test)\.(ts|js)/,
      testIgnore: /api.*\.spec\.ts/,
      fullyParallel: false,
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
