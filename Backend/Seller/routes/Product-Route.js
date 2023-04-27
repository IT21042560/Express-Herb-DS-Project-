import express from "express";
const router = express.Router();
import multer from "multer";
import path from "path";

import {
  addProduct,
  viewProducts,
  updateProduct,
  deleteProduct,
  getProductById,
  viewAll,
} from "../controllers/Product-controller.js";
// import { uploadPhoto, productImgResize } from"../middleware/uploadImages.js";

//add new product
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "_" + file.originalname);
  },
});
const upload = multer({ storage });
router.post("/addProduct/:id", upload.single("image"), addProduct);
router.get("/viewProducts/:id", viewProducts);
router.put("/updateProduct/:id", updateProduct);
router.delete("/deleteProduct/:id", deleteProduct);
router.get("/getProductById/:id", getProductById);
router.get("/viewAll", viewAll);

// router.put(
//   "/upload/:id",
//   uploadPhoto.array("images", 10),
//   productImgResize,
//   uploadImages
// );

export default router;
