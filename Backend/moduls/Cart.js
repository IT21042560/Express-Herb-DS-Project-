const mongoose = require("mongoose")
const Schema = mongoose.Schema()

const Cart = new Schema({

    Order_ID: {
        type: String,
        required: true
    },
    Seller_ID: {
        type: String,
        required: true
    },
    Customer_Name: {
        type: String,
        required: true
    },
    Address: {
        type: String,
        required: true
    },
    Phone_No: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true,
        lowercase: true
    },
    Total_Amount: {
        type: mongoose.Types.Decimal128,
        required: true,
    },
    Delivary: {
        type: String,
        required: true,
    },
    Total_Amount: {
        type: mongoose.Types.Decimal128,
        required: true,
    },
},{timestamps:true})

