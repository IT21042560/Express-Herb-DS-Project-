const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 8060;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB Connection success!");
});

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});

const item = require("./routes/Item-Route")
app.use("/Item",item)




