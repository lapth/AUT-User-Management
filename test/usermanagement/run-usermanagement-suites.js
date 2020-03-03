/**
 * What will be done?
 * - In this sample, we will open the Browser only one time, then execute needed test suites
 * - Report the test suites status to console
 */

var puppeteer = require('puppeteer');
var PPConf = require('../puppeteer-config');

var SERVER_URL = "https://usermanagement-sample.firebaseapp.com/";

async function openBrowser() {
    global.browser = await puppeteer.launch({
        headless: PPConf["headless"],
        slowMo: PPConf["slowMo"],
        executablePath: PPConf["executablePath"],
        waitUntil: PPConf["waitUntil"],
        args: PPConf["args"],
    });
    global.page = await browser.newPage();
    await page.setViewport({
        width: PPConf["viewWidth"],
        height: PPConf["viewHeight"],
        deviceScaleFactor: 1,
    });
    await page.goto(SERVER_URL);
}

async function closeBrowser() {
    if (browser) {
        try {
            browser.close();
        } catch (err) {
            console.error(err);
        }
        page = undefined;
        browser = undefined;
    }
}

function exeSuites() {
    require('./crud/AddUser-Test');
    require('./crud/DeleteUser-Test');
    require('./crud/UpdateUser-Test');
}

describe("Testing User Management web site", () => {
    before(async () => {
        await openBrowser();
    });

    after(() => {
        setTimeout(async () => await closeBrowser(), 5000);
    });

    describe("Running test suites", async() => {
        await exeSuites();
    });
});
