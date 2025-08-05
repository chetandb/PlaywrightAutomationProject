import { defineConfig, devices } from '@playwright/test';

const config = {
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
  reporter: 'list',
};

export default defineConfig(config);
