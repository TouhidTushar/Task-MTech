const express = require("express");
const cors = require("cors");
const app = express();

//env config
require("dotenv").config();

//routes
const productRoutes = require("./src/routes/product");

//middleware
app.use(cors());
app.use(express.json());

app.use("/api", productRoutes);

app.listen(process.env.PORT || 8080, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
