const flipkartObject = {
    url : 'https://www.flipkart.com/',
    async scraper(browser, searchQuery){ 
        let page = await browser.newPage();
        console.log(`Navigating to ${this.url}`);
        await page.goto(this.url+`search?q=${searchQuery}`);
    }
}

module.exports = flipkartObject;