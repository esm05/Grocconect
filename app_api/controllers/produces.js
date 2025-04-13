const mongoose = require('mongoose');
const {Produce} = require('../models/grocconnect');
const Model = mongoose.model("produces");

// GET: /produce - lists all the produce
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client 
const produceList = async(req, res) => {
    console.log('produceList controller called');
    try {
        const q = await Model.find({}).exec();
        console.log('Database query result:', q);
        
        if(!q || q.length === 0) { 
            console.log('No produce data found');
            return res
                .status(404)
                .json({message: "No produce found"});
        } else {
            console.log('Returning produce data:', q.length, 'items');
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
// GET: /produces/:produceName - lists a single producce item
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client 
const produceFindByName = async(req, res) => {
    const q = await Model
        //  .find({}) // No filter. Returns whole list 
        .find({'name': req.params.produceName}) // Return single record 
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
    produceList,
    produceFindByName
};