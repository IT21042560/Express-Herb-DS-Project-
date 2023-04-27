import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
   // required: true,
  },
  price: {
    type: Number,
   // required: true,
  },
  catogory: {
    type: String,
   // required: true,
  },
  description: {
    type: String,
   // required: true,
  },
  quantity: {
    type: Number,
   // required: true,
  },
  image: {
    type: String,
  },
  Email: {
    type: String,
    
  },
  SellerId:{
    type:String,
  },
  
  
});

export default mongoose.model("Product", productSchema);
