const amazonObject = {
    url : 'https://www.amazon.in/',
    async scraper(browser, searchQuery='nothing'){ 
    try{
        searchQuery = searchQuery.replace(/ /g,"+");
        let page = await browser.newPage();
        console.log(`Navigating to ${this.url}`);
        await page.goto(this.url+`s?k=${searchQuery}`, { waitUntil: 'load' });
        await page.waitForNavigation();
        await page.waitForSelector('.s-image', { visible: true, timeout: 60000 });

        const productDetails = await page.evaluate(() => {
            const productBlocks = Array.from(document.querySelectorAll('.s-result-item'));
            const details = [];
      
            for (const block of productBlocks) {
              const name = block.querySelector('h2 span')?.textContent?.trim() || "NA";
              const price = block.querySelector('.a-price span.a-offscreen')?.textContent?.trim() || "NA";
              const description = block.querySelector('.a-size-base-plus')?.textContent?.trim() || "NA";
              const image = block.querySelector('.s-image')?.src || "NA";
              const productURL = block.querySelector('a.a-link-normal')?.href || 'NA';
              if(name!="NA" && price!="NA" && image!="NA")
              details.push({ name, price, description, image, productURL });   
            }
            return details;
          });
          await page.close();
          return productDetails;
        } catch (error) {
          console.error('Error occurred:', error);
          return error.message
      }     
    }
}

module.exports = amazonObject;