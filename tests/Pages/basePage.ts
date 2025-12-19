import { Page, Locator } from '@playwright/test';

export default class BasePage {
  protected readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  protected async enterTextToElement(element: Locator, text: string) {
    await element.fill(text);
  }

  protected async clickOnElement(element: Locator){
    await element.click();
  }
   public async takePageScreenshot(path: string) {
    await this.page.screenshot({ path });
  }
   public async takePageVideo(path: string) {
    const video = this.page.video();
    if (video) {
      await video.saveAs(path); //slssll
    }
}}