const amazonObject = {
    url : 'https://www.amazon.in/',
    async scraper(browser, searchQuery='nothing'){ 
    try{
        searchQuery = searchQuery.replace(/ /g,"+");
        let page = await browser.newPage();
        console.log(`Navigating to ${this.url}`);
        await page.goto(this.url+`s?k=${searchQuery}`, { waitUntil: 'domcontentloaded' });

        await page.waitForSelector('.s-image', { visible: true, timeout: 10000 });

        const productDetails = await page.evaluate(() => {
            const productBlocks = Array.from(document.querySelectorAll('.s-result-item'));
            const details = [];
      
            for (const block of productBlocks) {
              const nameElement = block.querySelector('h2 span');
              const priceElement = block.querySelector('.a-price span.a-offscreen');
              const descriptionElement = block.querySelector('.a-size-base-plus');
      
              if (nameElement && priceElement && descriptionElement) {
                const name = nameElement.textContent.trim();
                const price = priceElement.textContent.trim();
                const description = descriptionElement.textContent.trim();
                const image = block.querySelector('.s-image').src;
                details.push({ name, price, description, image });
              }
            }
      
            return details;
          });
        //   console.log('Product details:', productDetails);
          return productDetails;
        } catch (error) {
          console.error('Error occurred:', error);
          return [];
      
    }     
    }
}

module.exports = amazonObject;