import express from "express";
const router = express.Router();
import Product from "../models/Product.js";
//let ss = require("../../SellerLogin/controllers/SellerController");
//const ObjectID = require("mongodb").ObjectId;
import multer from "multer";
import fs from "fs";
import path from "path";
var app = express();
import asyncHandler from "express-async-handler";


let x;

// var storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads");
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.fieldname + "-" + Date.now());
//   },
// });

// var upload = multer({ storage: storage });
// const prefix = "SID";
// const S_ID = prefix + Date.now();

export const addProduct = async (req, res) => {
  let userId1 = req.params.id;
  //const Email = req.body.Email;
  let file = "N/A";
  if (req.file) {
    file = req.file.filename;
  }
  const name = req.body.name;
  const price = req.body.price;
  const catogory = req.body.catogory;
  const description = req.body.description;
  const quantity = req.body.quantity;
  const SellerId = userId1;
  console.log(req.body);

  const newProduct = new Product({
    //Email,
    name,
    price,
    catogory,
    description,
    quantity,
    SellerId,
    image: file,
  });
  console.log(newProduct);
  newProduct
    .save()
    .then(() => {
      res.json("Product Added");
    })
    .catch((err) => {
      console.log(err);
    });
};
// // const addEmail = async (req, res) => {
// //   const Email = req.body.Email;
// //   x=Email
// //    console.log(x);

// //    const newProduct = new Product({
// //     Email,
// //   });

//   newProduct
//     .updateOne({Email:Email})
//     .then(() => {
//       res.json("Email Added");
//     })
//     .catch((err) => {
//       console.log(err);
//     });
//  };

export const viewProducts = async (req, res, next) => {
  let userId1 = req.params.id;
  await Product.find({ SellerId: userId1 })
    .then((Product) => {
      res.json(Product);
      //console.log(x);
      //res.status(200).json(response);
    })
    .catch((err) => {
      console.log(err);
    });
};
export const viewAll = async (req, res, next) => {
  await Product.find()
    .then((Product) => {
      res.json(Product);
      //console.log(x);
      //res.status(200).json(response);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const updateProduct = async (req, res) => {
  let userId = req.params.id;
  // const name = req.body.name;
  const { name, price, catogory, description, quantity } = req.body;

  const updateProduct = {
    name,
    price,
    catogory,
    description,
    quantity,
  };
  const update = await Product.findByIdAndUpdate(userId, updateProduct)
    .then(() => {
      res.status(200).send({ status: "Product updated " });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with updating data", error: err.message });
    });

  // return res.status(201).json({updateDrivers })
};
// const uploadImages = asyncHandler(async (req, res) => {
//   const { id } = req.params;
//   try {
//     const uploader = (path) => cloudinaryUploadImg(path, "images");

//     const url = [];
//     const files = req.files;

//     for (const file of files) {
//       const { path } = file;
//       console.log(path);
//       const newpath = await uploader(path);
//       console.log(newpath);
//       url.push(newpath);
//     }
//     const findProduct = await Product.findByIdAndUpdate(
//       id,
//       {
//         images: url.map((file) => {
//           return file;
//         }),
//       },
//       {
//         new: true,
//       }
//     );
//     res.json(findProduct);
//   } catch (error) {
//     throw new Error(error);
//   }
// });
export const deleteProduct = async (req, res) => {
  let userId = req.params.id;
  await Product.findByIdAndDelete(userId)
    .then(() => {
      res.status(200).send({ status: "Product deleted" });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with delete Product", error: err.message });
    });
};

export const getProductById = async (req, res) => {
  let id = req.params.id;
  await Product.findById(id)
    .then((response) => {
      res.status(200).json(response);
      console.log(res);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ status: "Error with get product", error: err.message });
    });
};

// exports.addProduct = addProduct;
// exports.viewProducts = viewProducts;
// exports.updateProduct = updateProduct;
// exports.deleteProduct = deleteProduct;
// exports.getProductById = getProductById;
// exports.viewAll = viewAll;
// exports.uploadImages = uploadImages;
// module.exports = {
//   addProduct,
//   viewProducts,
//   updateProduct,
//   deleteProduct,
//   getProductById,
//   viewAll,
//   uploadImages,
// };
//module.exports= router;
