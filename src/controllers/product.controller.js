const Product = require("../models/product.model");

async function getInformationProduct(req, res) {
    try {
        const product = await Product.find();
        res.send(product);
    } catch (err) {
        res.send(err.message);
    }

}

function product_create(req, res) {
    try {

        const {name, price} = req.body;
        let product = new Product({
            name,
            price
        });

        product.save();

        res.send(("Product Created successfully"));
    } catch (err) {

        res.send(err.message);
    }

}

async function product_update(req, res) {
    try {
        const {product_id} = req.params;
        const product = await Product.findByIdAndUpdate(product_id, {$set: req.body});

        res.send("product updated");
    } catch(err) {
        res.send(err.message);
    }
}

async function product_delete(req, res) {
    try {
        const {product_id} = req.params;
        await Product.findByIdAndRemove(product_id);
        res.send("product deleted");
    } catch (err) {
        res.send(err.message);
    }
}



module.exports = {
    getInformationProduct,
    product_create,
    product_update,
    product_delete
};