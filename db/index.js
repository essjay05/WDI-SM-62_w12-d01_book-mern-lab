// REQUIRE MONGOOSE
const mongoose = require('mongoose');

// CONNECT TO MLAB MONGOD_URI via dotenv
mongoose.connect(process.env.MONGOD_URI, { useNewUrlParser: true });

// Manage connections/error
mongoose.connection
    .on('open', () => console.log("Database connection established"))
    .on('error', err => console.log("Error connection", err));

// MAKE EXPORTABLE:
module.exports = mongoose;