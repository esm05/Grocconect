var express = require('express');
var router = express.Router();
var controller = require('../controllers/main')

/* GET landing page. */
router.get('/', controller.main);

router.post('', (req, res) => {
    // Authentication goes here

    // Redirect to angular SPA
    res.redirect('http://localhost:4200')
})

module.exports = router;