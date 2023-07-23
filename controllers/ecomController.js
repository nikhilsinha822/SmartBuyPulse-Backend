const browserObject = require('../config/browser');
const amazonObject = require('../middleware/amazonScraper')
const flipkartObject = require('../middleware/flipkartScraper')

const scraper = async (req, res, object) => {
    try {
        let browser = await browserObject.startBrowser();
        await object.scraper(browser)
		await browser.close()
        return res.status(201).json({msg: 'success'})
    } catch(err) {
        console.log('Could not reolve the browser instance = ', err)
    }
}

const scrapeAmazon = (req, res) =>  scraper(req, res, amazonObject);
const scrapeFlipkart = (req, res) =>  scraper(req, res, flipkartObject);


module.exports = {
    scrapeAmazon,
    scrapeFlipkart
}