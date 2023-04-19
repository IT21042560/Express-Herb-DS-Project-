const express = require("express");
const router = express.Router();

const { addProduct,viewProducts,updateProduct,deleteProduct,getProductById} = require("../controllers/Product-controller");

//add new product
router.post("/addProduct", addProduct);
router.get("/viewProducts", viewProducts);
router.put("/updateProduct/:id", updateProduct);
router.delete("/deleteProduct/:id", deleteProduct);
router.get("/getProductById/:id", getProductById);
module.exports = router;
