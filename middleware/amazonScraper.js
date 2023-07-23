const amazonObject = {
    url : 'https://www.amazon.com/',
    async scraper(browser){ 
        let page = await browser.newPage();
        console.log(`Navigating to ${this.url}`);
        await page.goto(this.url);
    }
}

module.exports = amazonObject;