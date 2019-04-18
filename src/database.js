const mongoose = require("mongoose");

const mongoDB = "mongodb://localhost:27017/practice_database";

mongoose.connect(mongoDB);

mongoose.Promise = global.Promise;

const db = mongoose.connection;

module.exports = db;