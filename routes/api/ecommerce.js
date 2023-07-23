const express = require('express');
const router = express.Router();
const ecomController = require('../../controllers/ecomController')

router.route('/amazon')
    .get(ecomController.scrapeAmazon);


module.exports = router