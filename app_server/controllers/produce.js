const produceEndpoint = 'http://localhost:3000/api/produces'
const options = {
    method: 'GET',
    headers: {
        'Accept': 'application/json'
    }
}

/* GET produce page */
const produce = async function(req, res, next) {
    console.log('Produce controller begins');
    try {
        const response = await fetch(produceEndpoint, options);
        const items = await response.json();
        
        console.log('Database query result:', items);
        let message = null;
        
        if (!(items instanceof Array)) {
            message = 'API lookup error';
            items = [];
        } else if (!items.length) {
            message = "No produce exists in our database!";
        }
        
        // Set up pagination
        const itemsPerPage = 5;
        const totalItems = items.length;
        const totalPages = Math.ceil(totalItems / itemsPerPage);
        
        // Get page from query parameter or default to 0
        const page = parseInt(req.query.page) || 0;
        const currentPage = Math.min(Math.max(0, page), Math.max(0, totalPages - 1));
        
        // Get items for current page
        const startIndex = currentPage * itemsPerPage;
        const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
        const currentPageItems = items.slice(startIndex, endIndex);
        
        // Generate array of page numbers for pagination dots
        const pageNumbers = Array.from({ length: totalPages }, (_, i) => i);
        
        // Register a handlebars helper for equality comparison if not already registered
        const hbs = require('hbs');
        if (!hbs.handlebars.helpers.eq) {
            hbs.registerHelper('eq', function(a, b) {
                return a === b;
            });
        }
        
        console.log(`Rendering page ${currentPage + 1} of ${totalPages} with ${currentPageItems.length} items`);
        
        res.render('produce', {
            title: "Grocconnect produce",
            currentPageItems: currentPageItems,
            currentPage: currentPage,
            pageNumbers: pageNumbers,
            hasMultiplePages: totalPages > 1,
            itemsPerPage: itemsPerPage,
            allItemsJson: JSON.stringify(items),
            message: message
        });
    } catch (err) {
        console.error('Error fetching produce data:', err);
        res.status(500).send(err.message);
    }
};

module.exports = {
    produce
};