import { test, expect } from '@playwright/test';

test('Visual regression: iana.org', async ({ page }) => {
  await page.goto('https://www.iana.org/');
  expect(await page.screenshot()).toMatchSnapshot('iana-home.png', { threshold: 0.2 });
});
