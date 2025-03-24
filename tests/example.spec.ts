import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example Domain/);
  const element = page.locator('h1');
  await expect(element).toHaveText('Example Domain');
});
