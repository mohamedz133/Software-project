import express from "express";
import {getAllProducts,getOneProduct,createProduct,deleteProduct,upadteProduct} from "../controllers/productController.js";

const ProductsRouter = express.Router();

ProductsRouter.route("/api/products").get(getAllProducts);

ProductsRouter.route("/api/products/:id").get(getOneProduct).put(upadteProduct).delete(deleteProduct);
ProductsRouter.route("/api/products").post(createProduct);

export {ProductsRouter};