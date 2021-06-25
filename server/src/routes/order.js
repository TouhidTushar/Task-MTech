const express = require("express");
const router = express.Router();
const { placeOrder } = require("../controller/order.cont");

router.post("/order/placeOrder", placeOrder);

module.exports = router;
