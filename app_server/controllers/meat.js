/* GET meatpage */
const meat = (req, res) => {
    res.render('meat', {title: "Grocconnect meat"});
};

module.exports = {
    meat
};