const express = require("express");
const router = express.Router();
const { getProducts } = require("../controller/product.cont");

router.get("/product/getProducts", getProducts);

module.exports = router;
