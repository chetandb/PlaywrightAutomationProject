import { test, expect } from '@playwright/test';

test('Fetch JSONPlaceholder posts', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');
  expect(response.ok()).toBeTruthy();
  const data = await response.json();
  expect(data).toHaveProperty('id', 1);
  expect(data).toHaveProperty('title');
});

test('Fetch JSONPlaceholder users', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/users/1');
  expect(response.ok()).toBeTruthy();
  const data = await response.json();
  expect(data).toHaveProperty('id', 1);
  expect(data).toHaveProperty('username');
});
