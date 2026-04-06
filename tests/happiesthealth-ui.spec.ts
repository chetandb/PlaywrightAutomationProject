import { test, expect } from '@playwright/test';

const HOMEPAGE_URL = 'https://www.happiesthealth.com/';

test.describe('Happiest Health UI', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(HOMEPAGE_URL, { 
      waitUntil: 'domcontentloaded',
      timeout: 60000
    });
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
    
    // Verify meaningful image dimensions (exclude tracking pixels)
    const boundingBox = await firstImage.boundingBox();
    expect(boundingBox).not.toBeNull();
    expect(boundingBox?.width).toBeGreaterThanOrEqual(50);
    expect(boundingBox?.height).toBeGreaterThanOrEqual(50);
  });
});
