import { test, expect } from '@playwright/test';

test('visual regression test', async ({ page }) => {
  await page.goto('https://example.com');
  const screenshot = await page.screenshot();
  expect(screenshot).toMatchSnapshot('example.png', { threshold: 0.2 });
});
