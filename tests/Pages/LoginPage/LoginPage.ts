import { Locator, Page } from '@playwright/test';
import BasePage from '../BasePage';


export default class LoginPage extends BasePage {

  // Lazy locators: تُحسب أول ما تستخدم
  private get googlebar(): Locator {
    return this.page.locator('#APjFqb');
  }

  private get googlesearchbtn(): Locator {
    return this.page.locator('//html/body/div[2]/div[4]/form/div[1]/div[1]/div[3]/center/input[1]');
  }

  // Methods
  async enterAtGoogleSearch(googlebaroo:string) {
    await this.enterTextToElement(this.googlebar, googlebaroo);
  }

  async clickSearchButton() {
    await this.clickOnElement(this.googlesearchbtn);
  }
}