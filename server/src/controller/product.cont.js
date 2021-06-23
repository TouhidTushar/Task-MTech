const db = require("../../database");

exports.getProducts = (req, res) => {
  db.query("SELECT * from products", function (error, result) {
    if (error) {
      console.log(error);
      return res.status(400).json({
        message: "Something went wrong",
      });
    } else {
      res.status(200).json({ result });
    }
  });
};
