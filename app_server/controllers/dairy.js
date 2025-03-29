/* GET dairy page */
const dairy = (req, res) => {
    res.render('dairy', {title: "Grocconnect dairy"});
};

module.exports = {
    dairy
};