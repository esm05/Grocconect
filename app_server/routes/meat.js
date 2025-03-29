var express = require('express');
var router = express.Router();
var controller = require('../controllers/meat')

/* GET meat page. */
router.get('/', controller.meat);

module.exports = router;