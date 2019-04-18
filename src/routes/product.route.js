const express = require("express");
const router = express.Router();

const product_controller = require("../controllers/product.controller");

router.get("/", product_controller.getInformationProduct);

router.post("/", product_controller.product_create);

router.put("/:product_id", product_controller.product_update);

router.delete("/:product_id", product_controller.product_delete);

module.exports = router;