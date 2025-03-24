import { test, expect } from '@playwright/test';

test('Fetch GitHub user details', async ({ request }) => {
  const response = await request.get('https://api.github.com/users/octocat');
  expect(response.ok()).toBeTruthy();
  const data = await response.json();
  expect(data.login).toBe('octocat');
});
