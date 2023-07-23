const flipkartObject = {
    url : 'https://www.flipkart.com/',
    async scraper(browser){ 
        let page = await browser.newPage();
        console.log(`Navigating to ${this.url}`);
        await page.goto(this.url);
    }
}

module.exports = flipkartObject;