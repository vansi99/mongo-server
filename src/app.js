const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const todo = require("./routes/todo.route");
const db = require("./database");
const app = express();

const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan('combined'));


app.use("/api/v1/todoes", todo);

app.listen(port, () => {
    console.log("server is running on port: ", port);
});

module.exports = app;