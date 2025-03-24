import { defineConfig, devices } from '@playwright/test';
import AllureReporter from 'allure-playwright';

const config: PlaywrightTestConfig = {
  use: {
    baseURL: 'https://gh-users-search.netlify.app/',
    ignoreHTTPSErrors: true,
  },
  projects: [
    {
      name: 'API tests',
      use: { baseURL: 'https://api.github.com/' },
    },
  ],
  testDir: './tests',
  timeout: 30000,
  reporter: [
    ['list'],
    ['allure-playwright']
  ],
};

export default defineConfig(config);
