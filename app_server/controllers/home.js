
/* GET Homepage */
const home = (req, res) => {
    res.render('home', {title: "Grocconnect home"});
};

module.exports = {
    home
};