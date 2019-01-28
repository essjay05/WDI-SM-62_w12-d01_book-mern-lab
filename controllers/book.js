const Book = require('../models/book');

module.exports =  {
    // INDEX
    index: (req, res) => {
        Book.find({}, (err, books) => {
            if (err) res.json({ success: false, err });
            res.json({ success: true, books });
        })
    },

    // SHOW
    show: (req, res) => {
        Book.findById(req.params.id, (err, user) => {
            if (err) res.json({ success: false, err});
            res.json({ success: true, book });
        
        })

    },

    // CREATE
    create: (req, res) => {
        Book.create(req.body, (err, newBook) => {
            if (err) res.json({ success: false, err});
            res.json({ success: true, newBook });
        })
    },

    // UPDATE
    update: (req, res) => {
        let {body, params} = req;
        Book.findByIdAndUpdate(params.id, body, { new: true }, (err, updatedBook) => {
        if (err) res.json({ success: false, err });
        res.json({ success: true, updatedBook });
        })
    },

    // DELETE
    destroy: (req, res) => {
        Book.findOneAndDelete(req.params.id, (err, deletedBook) => {
            if (err) res.json({ success: false, err });
            res.json({ success: true, deletedBook});
        })
    }
};