const mongoose = require('mongoose');
const {Meat} = require('../models/grocconnect');
const Model = mongoose.model("meats");

// GET: /meat - lists all the meat
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client 
const meatList = async(req, res) => {
    console.log('meatList controller called');
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
const meatFindByName = async(req, res) => {
    const q = await Model
        //  .find({}) // No filter. Returns whole list 
        .find({'name': req.params.meatName}) // Return single record 
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

module.exports = {
    meatList,
    meatFindByName
};