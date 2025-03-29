var express = require('express');
var router = express.Router();
var controller = require('../controllers/bakery')

/* GET bakery page. */
router.get('/', controller.bakery);

module.exports = router;