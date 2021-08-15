const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        devtools: false
    });
    const popCatPage = await browser.newPage();
    await popCatPage.goto("https://popcat.click/", {waitUntil: "networkidle2"});
    while(true){
        await popCatPage.click("#app > div");
    }
})();

