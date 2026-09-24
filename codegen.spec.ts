import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('Dell Laptop');
  await page.locator("#nav-search-submit-button").click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Sponsored Ad - Dell Alienware' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('button', { name: 'Add to cart', exact: true }).click();
  await page1.locator('#sw-gtc').getByRole('link', { name: 'Go to Cart' }).click();
  await expect(page1.locator('span.a-truncate-cut').nth(0)).toBeVisible();
  await page.waitForTimeout(6000);
});