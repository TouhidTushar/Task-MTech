const express = require("express");
const router = express.Router();
const { getProducts, getCategories } = require("../controller/product.cont");

router.get("/product/getCategories", getCategories);
router.get("/product/getProducts", getProducts);

module.exports = router;
