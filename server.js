// REQUIRE DOTENV
require('dotenv').config()

// CONSTANTS TO REQUIRE FROM EXTERNAL FILES
const
    express = require('express'),
    app = express(),
    path = require('path'),
    logger = require('morgan'),
    PORT = process.env.PORT || 3001;

// DATABASE
require('./db');

// CONFIGURATIONS


// MIDDLEWARE
app.use(express.json());
app.use(logger('dev'));

const bookRouter = require('./routers/bookRouter');
app.use('/api/', bookRouter);


// ROUTES


// LISTENING PORT
app.listen(PORT, err => {
    console.log(err || `Server listening on PORT ${PORT}`);
});