// @ts-nocheck
import { test, expect } from '@playwright/test';

// Test: Homepage loads and title is correct
// Test: Main navigation links are visible
// Test: Search bar is visible and can be interacted with
// Test: Clicking a main article opens the article page

test.describe('Happiest Health UI', () => {


  test('Featured images are visible on homepage', async ({ page }) => {
    await page.goto('https://www.happiesthealth.com/', { timeout: 60000, waitUntil: 'domcontentloaded' });
    // Check for at least one visible image in a featured/article section
    const images = page.locator('img');
    let found = false;
    const count = await images.count();
    for (let i = 0; i < count; i++) {
      const img = images.nth(i);
      if (await img.isVisible({ timeout: 10000 })) {
        found = true;
        break;
      }
    }
    expect(found).toBeTruthy();
  }, 70000);

  test('Homepage loads and title is correct', async ({ page }) => {
    await page.goto('https://www.happiesthealth.com/', { timeout: 60000, waitUntil: 'domcontentloaded' });
    await expect(page).toHaveTitle(/Happiest Health/i, { timeout: 10000 });
  }, 70000);

  test('Main navigation links are visible', async ({ page }) => {
    await page.goto('https://www.happiesthealth.com/', { timeout: 60000, waitUntil: 'domcontentloaded' });
    // There are multiple navs, check the first one (main nav)
    const navs = page.getByRole('navigation');
    await expect(navs.nth(0)).toBeVisible({ timeout: 15000 });
    // Check for some main menu links (update names if needed)
    await expect(page.getByRole('link', { name: /Knowledge/i })).toBeVisible({ timeout: 10000 });
    await expect(page.getByRole('link', { name: /Diagnostics/i })).toBeVisible({ timeout: 10000 });
  }, 70000);


});
