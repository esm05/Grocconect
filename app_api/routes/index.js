const express = require('express'); // Express App
const router = express.Router();    // Router logic
const jwt = require('jsonwebtoken'); // Enable JSON Web Tokens
// Authentication function for admin users so certain routes are protected 
/*

const auth = authenticateJWT({
  secret: process.env.JWT_SECRET,
  userProperty: "payload",
  algorithms: ["HS256"],
});*/

function auth(req, res, next) { 
    // console.log('In Middleware'); 
 
    const authHeader = req.headers['authorization']; 
    // console.log('Auth Header: ' + authHeader); 
 
    if(authHeader == null) 
    { 
        console.log('Auth Header Required'); 
        return res.sendStatus(401); 
    } 
 
    let headers = authHeader.split(' '); 
    if(headers.length < 1) 
    { 
        console.log('Not enough tokens in Auth Header: ' + headers.length); 
        return res.sendStatus(501); 
    } 
 
    const token = authHeader.split(' ')[1]; 
    // console.log('Token: ' + token); 
 
    if(token == null) 
    { 
        console.log('Null Bearer Token'); 
        return res.sendStatus(401); 
    } 
 
    // console.log(process.env.JWT_SECRET); 
    // console.log(jwt.decode(token)); 
    const verified = jwt.verify(token, process.env.JWT_SECRET, (err, verified) => { 
        if(err) 
        { 
            return res.sendStatus(401).json('Token Validation Error!'); 
        }  
        req.auth = verified; // Set the auth parameter to the decoded object 
    }); 
    next(); // We need to continue or this will hang forever 
}
//  This is where we import the controllers we will route
const produceController = require('../controllers/produces');
const meatController = require('../controllers/meats')
const seafoodController = require('../controllers/seafood')
const bakeryController = require('../controllers/bakery')
const dairyController = require('../controllers/dairy')
const groceryController = require('../controllers/grocery')
const authController = require('../controllers/authentication')

// registration routes
router
    .route("/register")
    .post(authController.register)

router
    .route("/login")
    .post(authController.login)

// define route for our category endpoints
router
    .route('/produces')
    .get(produceController.produceList) // GET Method routes produceList
    .post(auth, produceController.produceAddProduce); // Require authentication to update
    

router 
    .route('/produces/:produceName')
    .get(produceController.produceFindByName)
    .put(auth, produceController.produceEditProduce)  // Require authentication to update
    .delete(auth, produceController.producceDeleteProduce);  // Require authentication to delete

router
    .route('/meats')
    .get(meatController.meatList)
    .post(auth, meatController.meatAddMeat);

router 
    .route('/meats/:meatName')
    .get(meatController.meatFindByName)
    .put(auth, meatController.meatEditMeat)
    .delete(auth, meatController.meatDeleteMeat);


router
    .route('/bakery')
    .get(bakeryController.bakeryList)
    .post(auth, bakeryController.bakeryAddBakery);

router 
    .route('/bakery/:bakeryName')
    .get(bakeryController.bakeryFindByName)
    .put(auth, bakeryController.bakeryEditBakery)
    .delete(auth, bakeryController.bakeryDeleteBakery);

router
    .route('/seafood')
    .get(seafoodController.seafoodList)
    .post(auth, seafoodController.seafoodAddSeafood);

router 
    .route('/seafood/:seafoodName')
    .get(seafoodController.seafoodFindByName)
    .put(auth, seafoodController.seafoodEditSeafood)
    .delete(auth, seafoodController.seafoodDeleteSeafood);

router
    .route('/dairy')
    .get(dairyController.dairyList)
    .post(auth, dairyController.dairyAddDairy); // Require authentication to update

router 
    .route('/dairy/:dairyName')
    .get(dairyController.dairyFindByName)
    .put(auth, dairyController.dairyEditDairy)  // Require authentication to update
    .delete(auth, dairyController.dairyDeleteDairy);  // Require authentication to delete

router
    .route('/grocery')
    .get(groceryController.groceryList)
    .post(auth, groceryController.groceryAddGrocery);

router 
    .route('/grocery/:groceryName')
    .get(groceryController.groceryFindByName)
    .put(auth, groceryController.groceryEditGrocery)
    .delete(auth, groceryController.groceryDeleteGrocery);


// Add logging to confirm routes are registered
console.log('API routes defined:', router.stack.map(layer => {
    if (layer.route) return layer.route.path;
  }).filter(Boolean));
  
module.exports = router;