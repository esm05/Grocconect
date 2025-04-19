var express = require('express');
var router = express.Router();
var controller = require('../controllers/main')

/* GET landing page. */
router.get('/', controller.main);
const authController = require('../controllers/authentication')

// registration routes
router.route("/register").post(authController.register)
router.route("/login").post(authController.login)

router
    //.route('/login')
    // Redirect to angular SPA
    .post('', (req, res) => {
        res.redirect('http://localhost:4200/login')
})

module.exports = router;