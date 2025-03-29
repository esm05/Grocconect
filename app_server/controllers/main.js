/* GET Homepage */
const main = (req, res) => {
    res.render("index", {title: "Grocconnect landing"});
};

module.exports = {
    main
};