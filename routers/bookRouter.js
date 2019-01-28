// REQUIRE CONSTANTS
const   
    express = require('express'),
    router = express.Router(),
    Book = require('../controllers/book');

// ROUTERS
router
    // INDEX
    .get('/api/books', Book.index)
    // SHOW
    .get('/api/books/:id', Book.show)
    // CREATE
    .post('/api/books', Book.create)
    // UPDATE
    .patch('/api/books/:id', Book.update)
    // DELETE
    .delete('/api/books/:id', Book.destroy)


// MAKE EXPORTABLE
module.exports = router;