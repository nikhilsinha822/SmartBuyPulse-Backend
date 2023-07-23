const browserObject = require('../config/browser');
const amazonObject = require('../middleware/amazonScraper')

const scrapeAmazon = async (req, res) => {
    try {
        let browser = await browserObject.startBrowser();
        await amazonObject.scraper(browser)
		await browser.close()
        return res.status(201).json({msg: 'success'})
    } catch(err) {
        console.log('Could not reolve the browser instance = ', err)
    }
}

module.exports = {
    scrapeAmazon
}