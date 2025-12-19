import { test as baseTest } from '@playwright/test';
import LoginPage from '../tests/Pages/LoginPage/LoginPage';

// Define the Pages type correctly
type Pages = {
    loginPage: LoginPage;
}

// Extend the base test to include loginPage
const testPages = baseTest.extend<Pages>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    }
});

export const test = testPages;
export const expect = testPages.expect;