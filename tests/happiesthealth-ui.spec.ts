import { test, expect } from '@playwright/test';

test.setTimeout(120000);

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

    const diagnosticsLink = page.locator('a[href="https://diagnostics.happiesthealth.com"]');
    await expect(diagnosticsLink).toBeVisible();
  });

  test('Featured images are visible on homepage', async ({ page }) => {
    const images = page.locator('img');
    const count = await images.count();
    let hasMeaningfulImage = false;

    for (let i = 0; i < count; i++) {
      const image = images.nth(i);
      if (!await image.isVisible()) {
        continue;
      }

      const boundingBox = await image.boundingBox();
      if (boundingBox && boundingBox.width >= 50 && boundingBox.height >= 50) {
        hasMeaningfulImage = true;
        break;
      }
    }

    expect(hasMeaningfulImage).toBe(true);
  });
});
