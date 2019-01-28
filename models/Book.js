// REQUIRE MONGOOSE:
const mongoose = require('mongoose');

// Book Model/Schema:
const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    description: String,
}, { timestamps: true });

// MAKE EXPORTABLE
module.exports = mongoose.model('Book', bookSchema)