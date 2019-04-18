const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const product = require("./routes/product.route");
const db = require("./database");
const app = express();

const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan('combined'));


app.use("/products", product);

app.listen(port, () => {
    console.log("server is running on port: ", port);
});

module.exports = app;