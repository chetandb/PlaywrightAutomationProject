import { test, expect } from '@playwright/test';

const HOMEPAGE_URL = 'https://www.happiesthealth.com/';

test.describe('Happiest Health UI', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(HOMEPAGE_URL, { waitUntil: 'domcontentloaded' });
  });

  test('Homepage loads and title is correct', async ({ page }) => {
    await expect(page).toHaveTitle(/Happiest Health/i);
  });

  test('Main navigation links are visible', async ({ page }) => {
    const nav = page.getByRole('navigation').first();
    await expect(nav).toBeVisible();
    await expect(page.getByRole('link', { name: /Knowledge/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /Diagnostics/i })).toBeVisible();
  });

  test('Featured images are visible on homepage', async ({ page }) => {
    const firstImage = page.locator('img').first();
    await expect(firstImage).toBeVisible();
  });
});
