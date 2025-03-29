var express = require('express');
var router = express.Router();
var controller = require('../controllers/seafood')

/* GET seafood page. */
router.get('/', controller.seafood);

module.exports = router;