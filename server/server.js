const express = require("express");
const cors = require("cors");

//routes
const productRoutes = require("./src/routes/product");

//env config
require("dotenv").config();

const app = express();
const port = process.env.PORT || 8080; //port

//front end static files
var path = require("path");
app.use(express.static(path.join(__dirname, "build")));

//middleware
app.use(cors());
app.use(express.json());

app.use("/api", productRoutes);
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build/index.html"), function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(port, () => {
  console.log("Server is running on port:" + port);
});
