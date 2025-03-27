var express = require('express');
var router = express.Router();
var path = require('path')

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log("produce route accessed")
  res.sendFile(path.join(__dirname, '../public/produce.html'));
});

module.exports = router;