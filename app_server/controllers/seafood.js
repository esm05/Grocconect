/* GET seafood page */
const seafood = (req, res) => {
    res.render('seafood', {title: "Grocconnect seafood"});
};

module.exports = {
    seafood
};