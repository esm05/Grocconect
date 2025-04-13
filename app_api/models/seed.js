// Bring in the DB connection and the Produce schema
const Mongoose = require('./db');
const {Produce, Dairy, Meat, Bakery, Seafood, Grocery} = require('./grocconnect');


// Read seed data from json file 
var fs = require('fs');
var produces = JSON.parse(fs.readFileSync('./data/produce.json', 'utf8'));
var dairy = JSON.parse(fs.readFileSync('./data/dairy.json', 'utf8'));
var meats = JSON.parse(fs.readFileSync('./data/meat.json', 'utf8'));
var bakery = JSON.parse(fs.readFileSync('./data/bakery.json', 'utf8'));
var seafood = JSON.parse(fs.readFileSync('./data/seafood.json', 'utf8'));
var grocery = JSON.parse(fs.readFileSync('./data/grocery.json', 'utf8'));

// delete any existing records, then insert seed data
const seedDB = async () => {
    await Produce.deleteMany({});
    await Produce.insertMany(produces);

    await Dairy.deleteMany({});
    await Dairy.insertMany(dairy);

    await Meat.deleteMany({});
    await Meat.insertMany(meats);

    await Bakery.deleteMany({});
    await Bakery.insertMany(bakery);

    await Seafood.deleteMany({});
    await Seafood.insertMany(seafood);

    await Grocery.deleteMany({});
    await Grocery.insertMany(grocery);
};

// Close the MongoDB connection and exit
seedDB().then(async() => {
    await Mongoose.connection.close();
    process.exit(0);
});