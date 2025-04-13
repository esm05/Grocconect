const express = require('express'); // Express App
const router = express.Router();    // Router logic

//  This is where we import the controllers we will route
const produceController = require('../controllers/produces');
const meatController = require('../controllers/meats')
const seafoodController = require('../controllers/seafood')
const bakeryController = require('../controllers/bakery')
const dairyController = require('../controllers/dairy')
const groceryController = require('../controllers/grocery')

// define route for our trips endpoint
router
    .route('/produces')
    .get(produceController.produceList); // GET Method routes produceList

router 
    .route('/produces/:produceName')
    .get(produceController.produceFindByName);

router
    .route('/meats')
    .get(meatController.meatList)

router 
    .route('/meats/:meatName')
    .get(meatController.meatFindByName);

router
    .route('/bakery')
    .get(bakeryController.bakeryList)

router 
    .route('/bakery/:bakeryName')
    .get(bakeryController.bakeryFindByName);

router
    .route('/seafood')
    .get(seafoodController.seafoodList)

router 
    .route('/seafood/:seafoodName')
    .get(seafoodController.seafoodFindByName);

router
    .route('/dairy')
    .get(dairyController.dairyList)

router 
    .route('/dairy/:dairyName')
    .get(dairyController.dairyFindByName);

router
    .route('/grocery')
    .get(groceryController.groceryList)

router 
    .route('/grocery/:groceryName')
    .get(groceryController.groceryFindByName);
// Add logging to confirm routes are registered
console.log('API routes defined:', router.stack.map(layer => {
    if (layer.route) return layer.route.path;
  }).filter(Boolean));
  
module.exports = router;