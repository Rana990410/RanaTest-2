import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fq%3Dnpx%2Bplaywright%2Bcodegen%2B-o%2B.%252Ftests%252Ftestapp.spec.ts%26oq%3Dnpx%2Bplaywright%2Bcodegen%2B-o%2B.%252Ftests%252Ftestapp.spec.ts%26gs_lcrp%3DEgZjaHJvbWUyBggAEEUYOdIBCzUxMTQ4MjFqMGoyqAIAsAIA%26sourceid%3Dchrome%26ie%3DUTF-8%26sei%3Di2Q9adGVMfqN9u8P68-MmQ8&q=EgTFLlUUGIzJ9ckGIjAVzopdSjWnAk5qSh4aVz3zF-N1JhXf1jP2BaTC14RfaC9Zl778fqnxh2gSc0CycIcyAVJaAUM');
  await page.locator('iframe[name="a-m9lzjnddyvrb"]').contentFrame().getByRole('checkbox', { name: 'I\'m not a robot' }).click();
});