var express = require('express');
var router = express.Router();
var controller = require('../controllers/dairy')

/* GET grocery page. */
router.get('/', controller.dairy);

module.exports = router;