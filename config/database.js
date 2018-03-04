const mongoose = require('mongoose');


const mongoDB = "mongodb://admin:root@localhost:27017";

mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

const db = mongoose.connection;

db.on('error', console.log.bind(console, 'MongoDB connection error:'));

module.exports = db;