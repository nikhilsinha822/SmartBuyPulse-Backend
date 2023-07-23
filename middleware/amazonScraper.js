const amazonObject = {
    url : 'https://www.amazon.in/',
    async scraper(browser, searchQuery='nothing'){ 
        searchQuery = searchQuery.replace(/ /g,"+");
        let page = await browser.newPage();
        console.log(`Navigating to ${this.url}`);
        await page.goto(this.url+`s?k=${searchQuery}`);
    }
}

module.exports = amazonObject;