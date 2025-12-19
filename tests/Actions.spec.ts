import { test, expect } from '@playwright/test';

test('Actions', async ({ page }) => {
  await page.goto('https://www.google.com/');

 // await page.locator('#APjFqb').pressSequentially('Test actions');

  await page.locator('#APjFqb').click();
  await page.locator('#APjFqb').dblclick();
  

  // or:
  // await page.locator('#APjFqb').fill('Test actions');
});
test('to have screenshots', async ({ page }) => {
    await page.goto('https://www.google.com/');

  //  const button = page.locator('//html/body/div[2]/div[4]/form/div[1]/div[1]/div[1]/div[1]/div[3]/button/div[4]/span[2]');
  //  await expect(button).toBeVisible();
    
//  const button = page.locator('xpath=/html/body/div[2]/div[4]/form/div[1]/div[1]/div[3]/center/input[2]');
  //  await expect(button).toHaveAttribute('value', 'ضربة nحظ');

  await expect(page).toHaveScreenshot(); 
});