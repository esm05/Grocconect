var express = require('express');
var router = express.Router();
var controller = require('../controllers/grocery')

/* GET grocery page. */
router.get('/', controller.grocery);

module.exports = router;