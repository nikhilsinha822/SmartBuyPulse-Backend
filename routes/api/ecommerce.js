const express = require('express');
const router = express.Router();
const ecomController = require('../../controllers/ecomController')

router.route('/amazon')
    .post(ecomController.scrapeAmazon);
    
router.route('/flipkart')
    .post(ecomController.scrapeFlipkart);


module.exports = router