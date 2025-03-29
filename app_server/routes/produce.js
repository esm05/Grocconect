var express = require('express');
var router = express.Router();
var controller = require('../controllers/produce')

/* GET produce page. */
router.get('/', controller.produce);

module.exports = router;