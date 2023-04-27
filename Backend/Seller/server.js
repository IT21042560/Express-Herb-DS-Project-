import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
const app = express();
import path from "path";
import { fileURLToPath } from "url";

const filePath = fileURLToPath(import.meta.url);
const dirName = path.dirname(filePath);

dotenv.config();

const PORT = process.env.PORT || 8040;
app.use(express.static(path.join(dirName, "uploads")));

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB Connection success!");
});

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});

// const product = require("./routes/Product-routes");
// app.use('/Product', product);

import product from "./routes/Product-Route.js";
app.use("/Product", product);
