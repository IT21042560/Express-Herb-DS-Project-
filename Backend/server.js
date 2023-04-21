const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
const requireSignin =require('./middleware/auth')


dotenv.config();

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

const orderedItemRoute = require("./routes/orderedItems.js");
app.use("/orderedItemRoute", orderedItemRoute);

const completedOrderItem = require("./routes/completedOrder.js");
app.use("/completedOrder", completedOrderItem);

const admin = require('./routes/AdminRoutes.js');
app.use("/Admin",admin);

const cart = require('./routes/cartRoutes');
app.use("/Cart",cart);