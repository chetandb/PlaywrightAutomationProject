import { test, expect } from '@playwright/test';
import testData from '../fixtures/testData.json';

test('Fetch GitHub user details', async ({ request }) => {
  const response = await request.get(`/users/${testData.validUser.username}`);
  expect(response.ok()).toBeTruthy();
  const user = await response.json();
  expect(user.login).toBe(testData.validUser.username);
});
