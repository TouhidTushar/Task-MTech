const db = require("../../database");
const { nanoid } = require("nanoid");

//API for placing new order
exports.placeOrder = (req, res) => {
  const orderData = req.body.data;
  var exec = true;
  var _orderId = nanoid();
  var sql =
    "INSERT INTO `orders` (`orderId`, `customerName`, `address`, `contact`, `productId`, `orderQuantity`, `totalPayable`) VALUES (?,?,?,?,?,?,?)";
  for (let i = 0; i < orderData.items.length; i++) {
    db.query(
      sql,
      [
        _orderId,
        orderData.name,
        orderData.address,
        orderData.contact,
        orderData.items[i]._id,
        orderData.items[i]._qty,
        orderData.total,
      ],
      function (error, result) {
        if (error) {
          console.log(error);
          exec = false;
        }
      }
    );
  }
  if (exec) {
    res.status(200).json({ message: "your order was placed" });
  } else {
    return res.status(400).json({
      message: "something went wrong!",
    });
  }
};
