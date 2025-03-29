/* GET bakerypage */
const bakery = (req, res) => {
    res.render('bakery', {title: "Grocconnect bakery"});
};

module.exports = {
    bakery
};