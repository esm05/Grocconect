/* GET grocery page */
const grocery = (req, res) => {
    res.render('grocery', {title: "Grocconnect grocery"});
};

module.exports = {
    grocery
};