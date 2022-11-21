// puppeteer-extra is a drop-in replacement for puppeteer,
// it augments the installed puppeteer with plugin functionality
const puppeteer = require("puppeteer-extra");

// require executablePath from puppeteer
const { executablePath } = require("puppeteer");

// add stealth plugin and use defaults (all evasion techniques)
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
puppeteer.use(StealthPlugin());

const bot = async () => {
  const browser = await puppeteer.launch({
    headless: true,
    executablePath: executablePath(),
    ignoreHTTPSErrors: true,
    ignoreDefaultArgs: ["--enable-automation"],
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();
  await page.evaluateOnNewDocument(() => {
    delete navigator.__proto__.webdriver;
  });
  await page.goto("https://bot.incolumitas.com/");
  await page.setViewport({ width: 1680, height: 857 });
  await page.waitForTimeout(5000);
  // await page.screenshot({ path: "testresult3.png", fullPage: true });
  await browser.close();
  return "Done!";
};

module.exports = bot;
