const browserObject = require('../config/browser');
const amazonObject = require('../middleware/amazonScraper')
const flipkartObject = require('../middleware/flipkartScraper')


const scrapeAmazon = async (req, res, next) =>{ 
    const { searchQuery } = req.body;
    try{
        let browser = await browserObject.startBrowser();
        await amazonObject.scraper(browser, searchQuery);
        await browser.close();
        console.log(req.body);
        return res.status(201).json({"msg": "success"});
    } catch(err) {
        console.log('Could not resolve the browser instance = ', err)
        next(err);
    }
}

const scrapeFlipkart = async (req, res, next) =>{
    const { searchQuery } = req.body;
    try{
        let browser = await browserObject.startBrowser();
        await flipkartObject.scraper(browser, searchQuery);
        await browser.close();
        return res.status(201).json({msg: 'success'});
    } catch(err) {
        console.log('Could not resolve the browser instance = ', err)
        next(err);
    }
}


module.exports = {
    scrapeAmazon,
    scrapeFlipkart
}