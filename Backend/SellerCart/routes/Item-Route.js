const express = require("express");
const router = express.Router();

const { addItem,viewItems} = require("../controllers/Item-controller");

//add new product
router.post("/addItem", addItem);
router.get("/viewItems", viewItems);

module.exports = router;
