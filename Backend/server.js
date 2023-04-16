const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();


require("dotenv").config();

const PORT = process.env.PORT || 8040

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL,{
   
})

const connection = mongoose.connection;
connection.once("open", ()=>{
    console.log("MongoDB Connection success!")
})

app.listen(PORT, () =>{
    console.log(`Server is up and running on port ${PORT}`)
})

<<<<<<< HEAD
const product = require("./routes/Product-routes");
app.use('/Product', product);
=======
const orderedItemRoute = require("./routes/orderedItems.js");
app.use("/orderedItemRoute", orderedItemRoute);

const completedOrderItem = require("./routes/completedOrder.js");
app.use("/completedOrder", completedOrderItem);
>>>>>>> fef47423be9b7c97997decd116cad5d0623bd28d
