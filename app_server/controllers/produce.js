/* GET produce page */
const produce = (req, res) => {
    res.render('produce', {title: "Grocconnect produce"});
};

module.exports = {
    produce
};