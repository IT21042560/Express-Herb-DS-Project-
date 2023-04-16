const router = require("express").Router();
var express = require("express");
let Product = require("../models/Product");
const ObjectID = require("mongodb").ObjectId;
var multer = require("multer");
var fs = require("fs");
var path = require("path");
var app = express();

// var storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads");
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.fieldname + "-" + Date.now());
//   },
// });

// var upload = multer({ storage: storage });

const addProduct = async (req, res) => {
  const name = req.body.name;
  const price = req.body.price;
  const catogory = req.body.catogory;
  const description = req.body.description;
  const image = {
    data: fs.readFileSync(
      path.join(__dirname + "/uploads/" + req.file.filename)
    ),
    contentType: "image/png",
  };
  const newProduct = new Product({
    name,
    price,
    catogory,
    description,
    image,
  });
  newProduct
    .save()
    .then(() => {
      res.json("Product Added");
    })
    .catch((err) => {
      console.log(err);
    });
  // app.post("/", upload.single("image"), (req, res, next) => {
  //   var obj = {
  //     name: req.body.name,
  //     price: req.body.price,
  //     catogory: req.body.catogory,
  //     description: req.body.description,
  //     img: {
  //       data: fs.readFileSync(
  //         path.join(__dirname + "/uploads/" + req.file.filename)
  //       ),
  //       contentType: "image/png",
  //     },
  //   };
  //   Product.create(obj).then((err, item) => {
  //     if (err) {
  //       console.log(err);
  //     } else {
  //       // item.save();
  //       res.redirect("/");
  //     }
  //   });
  // });
};
exports.addProduct = addProduct;
