import { test, expect } from '@playwright/test';

test('Navigate to example.com and check title', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example Domain/);
});

test('Check navigation to More Information', async ({ page }) => {
  await page.goto('https://example.com');
  await page.click('a');
  await expect(page).toHaveURL(/iana.org/);
});
