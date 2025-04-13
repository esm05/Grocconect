const mongoose = require('mongoose');

// Define the produce schema
const grocconnectSchema = new mongoose.Schema({
    name: { type: String, required: true, index: true},
    cost: {type: String, required: true, index: true},
    avail_qty: {type: String, required: true, index: true},
    image: {type: String, required: true},
});

const Produce = mongoose.model('produces', grocconnectSchema);
const Meat = mongoose.model('meats', grocconnectSchema);
const Dairy = mongoose.model('dairy', grocconnectSchema);
const Bakery = mongoose.model('bakery', grocconnectSchema);
const Seafood = mongoose.model('seafood', grocconnectSchema)
const Grocery = mongoose.model('grocery', grocconnectSchema)

module.exports = {Produce, Dairy, Meat, Bakery, Seafood, Grocery};