const puppeteer = require('puppeteer');

const klik = async page => {
    await page.click("#app > div");
}

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        devtools: false
    });
    const popCatPage = await browser.newPage();
    await popCatPage.goto("https://popcat.click/", {waitUntil: "networkidle2"});
    while(true){
        await klik(popCatPage);
    }
})();

