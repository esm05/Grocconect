const groceryEndpoint = 'http://localhost:3000/api/grocery'
const options = {
    method: 'GET',
    header: {
        'Accept': 'application/json'
    }
}

//var fs = require('fs');
//var produce_products = JSON.parse(fs.readFileSync('./data/produce.json', 'utf8'));

/* GET produce page */
const grocery = async function(req, res, next) {
    console.log('grocery controller begins');
    await fetch(groceryEndpoint, options)
        .then(res => res.json())
        .then(json => {
            console.log(json)
            let message = null;
            if (!(json instanceof Array)){
                message = 'API lookup error'
                json = [];
            }
            else {
                if (!json.length){
                    message = "No meat exists in our database!"
                }
            }
            res.render('grocery', {title: "Grocconnect meat", grocery: json}, message);
        })
        .catch(err => res.status(500).send(err.message))
};

module.exports = {
    grocery
};