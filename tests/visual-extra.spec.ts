import { test, expect } from '@playwright/test';

test('Visual regression: example.com', async ({ page }) => {
  await page.goto('https://example.com');
  expect(await page.screenshot()).toMatchSnapshot('example-home.png', { threshold: 0.2 });
});

test('Visual regression: iana.org', async ({ page }) => {
  await page.goto('https://www.iana.org/');
  expect(await page.screenshot()).toMatchSnapshot('iana-home.png', { threshold: 0.2 });
});
