import { expect, test } from "../fixtures/fixture";
//import { test } from "@playwright/test";
import LoginPage from "./Pages/LoginPage/LoginPage";
//port JsonData from "./JsonData/JsonData.json";
import * as JsonData from "./JsonData/JsonData.json";

test('E2E Google Search', async ({page, loginPage }) => {
 // const loginPage = new LoginPage(page);

  await page.goto('https://www.google.com/');

  await loginPage.enterAtGoogleSearch(JsonData.googlebaroo);

 // await loginPage.clickSearchButton();
 //To Capture screenshots:
 //wait loginPage.takePageScreenshot('./tests/screenshots/loginPage.png');
 //test.afterAll
 
});