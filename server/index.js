const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

//env config
require("dotenv").config();

//database connection
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

//middleware
app.use(cors());
app.use(express.json());

//hello api
app.get("/", (req, res) => {
  return res.status(200).json({
    message: "Hello from server!",
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
