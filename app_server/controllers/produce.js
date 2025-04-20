const produceEndpoint = 'http://localhost:3000/api/produces'
const options = {
    method: 'GET',
    headers: {
        'Accept': 'application/json'
    }
}

/* GET produce page */
const produce = async function(req, res, next) {
    console.log('produce controller begins');
    await fetch(produceEndpoint, options)
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
            res.render('produce', {title: "Grocconnect produce", produce: json}, message);
        })
        .catch(err => res.status(500).send(err.message))
};

module.exports = {
    produce
};