const mongoose = require('mongoose');
const {Dairy} = require('../models/grocconnect');
const Model = mongoose.model("dairy");

// GET: /meat - lists all the meat
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client 
const dairyList = async(req, res) => {
    console.log('dairyList controller called');
    try {
        const q = await Model.find({}).exec();
        console.log('Database query result:', q);
        
        if(!q || q.length === 0) { 
            console.log('No produce data found');
            return res
                .status(404)
                .json({message: "No meat found"});
        } else {
            console.log('Returning meat data:', q.length, 'items');
            return res
                .status(200)
                .json(q);
        }
    } catch (err) {
        console.error('Database error:', err);
        return res
            .status(500)
            .json({error: err.message});
    }
};
// GET: /meats/:meatName - lists a single producce item
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client 
const dairyFindByName = async(req, res) => {
    const q = await Model
        //  .find({}) // No filter. Returns whole list 
        .find({'name': req.params.dairyName}) // Return single record 
        .exec()

        // Uncomment the following line to show results of query
        // on the console
        // console.log(q)

    if(!q)
    { // databse returned no data 
        return res
            .status(404)
            .json(err);

    } else { // Return resulting trip llst
        return res
            .status(200)
            .json(q)
    }

};

// POST: /dairy - Adds a new dairy item
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client 

const dairyAddDairy = async(req, res) => {
    const q = await Model.create({
        name: req.body.name,
        cost: req.body.cost,
        image: req.body.image,
        avail_qty: req.body.avail_qty
    })
    .then((data) => {
        res.send(data);
    })
    .catch((err) => {
        res.send(err);
    })
}

// PUT: /dairy:dairyName - Adds a new dairy item
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client 
const dairyEditDairy = async(req, res) => {
    const q = await Model.findOneAndUpdate(
        {'name': req.params.dairyName},
    
        {
        name: req.body.name,
        cost: req.body.cost,
        image: req.body.image,
        avail_qty: req.body.avail_qty
    })
    .exec()
    .then((data) => {
        res.send(data);
    })
    .catch((err) => {
        res.send(err);
    })
}
const dairyDeleteDairy = async(req, res) => {
    const q = await Model.findOneAndDelete(
        {'name': req.params.dairyName}
    )
    .exec()
    .then((data) => {
        res.send(data);
    })
    .catch((err) => {
        res.send(err);
    })
}

module.exports = {
    dairyList,
    dairyFindByName,
    dairyAddDairy,
    dairyDeleteDairy,
    dairyEditDairy
};