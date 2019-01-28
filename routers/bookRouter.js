// REQUIRE CONSTANTS
const   
    express = require('express'),
    router = express.Router(),
    Book = require('../controllers/book');

// ROUTERS
router
    // INDEX
    .get('/', Book.index)
    // SHOW
    .get('/:id', Book.show)
    // CREATE
    .post('/', Book.create)
    // UPDATE
    .patch('/:id', Book.update)
    // DELETE
    .delete('/:id', Book.destroy)


// MAKE EXPORTABLE
module.exports = router;