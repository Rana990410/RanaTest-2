import { test, expect } from '@playwright/test';

test('herckapp', async ({ page }) => {
  await page.goto('https://www.google.com/?zx=1765654134301&no_sw_cr=1');
  await page.getByRole('button', { name: 'لا يهمّني' }).click();
  await page.getByRole('img', { name: 'Google' }).click();
  await expect(page.getByRole('img', { name: 'Google1' })).toBeVisible();
});
