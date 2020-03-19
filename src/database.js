const mongoose = require("mongoose");
const config = require("config");
const USERNAME = process.env.USERNAME || config.get("DATABASE").USERNAME;
const PASSWORD = process.env.PASSWORD || config.get("DATABASE").PASSWORD;

const mongoDB = `mongodb://${USERNAME}:${PASSWORD}@ds259109.mlab.com:59109/ufo-todo`;

mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

mongoose.Promise = global.Promise;

const db = mongoose.connection;

module.exports = db;