import express from "express";
import {getAllProducts} from "../controllers/productController.js";

const ProductsRouter = express.Router();

ProductsRouter.get("/", getAllProducts);

export {ProductsRouter};