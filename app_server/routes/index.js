var express = require('express');
var router = express.Router();
var controller = require('../controllers/main')

/* GET landing page. */
router.get('/', controller.main);

module.exports = router;