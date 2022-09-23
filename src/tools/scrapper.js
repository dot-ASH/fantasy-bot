import puppeteer from "puppeteer";
import { config } from "dotenv";

config();

export async function scrape(url, matchInfo) {
  try {
    const selector =
      "body > div.container-fluid.main-wrap > div > div > div.content > div.pk-container.matches-calendar.section.section__gray.lazyloaded > div > div > div > div.d3-react > div.isJWqFjahQpIBtIZ1EfL";

    const browser = await puppeteer.launch({
      headless: false
    });
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 720 });
    await page.goto(url);
    await page.waitForSelector(selector);
    await page.click("#onetrust-accept-btn-handler")
    await page.waitForTimeout(3000);
    await page.waitForSelector(selector);
    const element = await page.$(selector);
    await element.screenshot({
      path: `./src/img/${matchInfo}.jpg`,
    });

    await browser.close();
  } catch (error) {
    console.log(error);
  }
}

