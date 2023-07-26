const flipkartObject = {
    url : 'https://www.flipkart.com/',
    async scraper(browser, searchQuery='nothing'){ 
    try{
        searchQuery = searchQuery.replace(/ /g,"+");
        let page = await browser.newPage();
        console.log(`Navigating to ${this.url}`);
        await page.goto(this.url+`search?q=${searchQuery}`);
        page.close();
    } catch(err) {
         console.log('Error occured', err);
    }
    }
}

module.exports = flipkartObject;