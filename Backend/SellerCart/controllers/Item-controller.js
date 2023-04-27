const router = require("express").Router();
var express = require("express");
let Item = require("../models/item");
let ss = require("../../SellerLogin/controllers/SellerController");
const ObjectID = require("mongodb").ObjectId;
var multer = require("multer");
var fs = require("fs");
var path = require("path");
var app = express();

let x;

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

var upload = multer({ storage: storage });
const prefix = "SID";
const S_ID = prefix + Date.now();

const addItem = async (req, res) => {
  const Email = x;
  const name = req.body.name;
  const price = Number(req.body.price);
  const catogory = req.body.catogory;
  const description = req.body.description;
  const quantity = Number(req.body.quantity);

  const newItem = new Item({
    Email,
    name,
    price,
    catogory,
    description,
    quantity,
  });
  newItem
    .save()
    .then(() => {
      res.json("Item Added");
    })
    .catch((err) => {
      console.log(err);
    });
};
const viewItems = async (req, res, next) => {
  await Item.find()
    .then((Item) => {
      res.json(Item);
      console.log(x);
      //res.status(200).json(response);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.addItem = addItem;
exports.viewItems = viewItems;
