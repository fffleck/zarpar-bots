// puppeteer-extra is a drop-in replacement for puppeteer,
// it augments the installed puppeteer with plugin functionality
const puppeteer = require("puppeteer-extra");

// require executablePath from puppeteer
const { executablePath } = require("puppeteer");

// add stealth plugin and use defaults (all evasion techniques)
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
puppeteer.use(StealthPlugin());
// puppeteer usage as normal

// const networkConditions = {
//   "2g": {
//     downloadThroughput: ((500 * 1024) / 8) * 0.8,
//     uploadThroughput: ((500 * 1024) / 8) * 0.8,
//     latency: 400 * 5,
//     offline: false,
//   },
//   "3g": {
//     downloadThroughput: ((1.6 * 1024 * 1024) / 8) * 0.9,
//     uploadThroughput: ((750 * 1024) / 8) * 0.9,
//     latency: 150 * 3.75,
//     offline: false,
//   },
//   offline: {
//     downloadThroughput: 0,
//     uploadThroughput: 0,
//     latency: 0,
//     offline: true,
//   },
//   "no throttling": {
//     downloadThroughput: -1,
//     uploadThroughput: -1,
//     latency: 0,
//     offline: false,
//   },
// };

puppeteer
  .launch({
    headless: false,
    executablePath: executablePath(),
    ignoreDefaultArgs: ["--enable-automation"],
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  })
  .then(async (browser) => {
    console.log("Running tests..");
    const page = await browser.newPage();
    // const session = await page.target().createCDPSession();
    // await session.send(
    //   "Network.emulateNetworkConditions",
    //   networkConditions["3g"]
    // );
    // await session.detach();
    // await page.evaluate(() => navigator.connection.effectiveType);
    await page.evaluateOnNewDocument(() => {
      delete navigator.__proto__.webdriver;
    });
    await page.goto("https://bot.incolumitas.com/");
    await page.waitForTimeout(5000);
    // await page.screenshot({ path: "testresult3.png", fullPage: true });
    await browser.close();
    console.log(`All done, check the screenshot. ✨`);
  });
