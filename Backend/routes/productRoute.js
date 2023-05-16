import express from "express";
import {getAllProducts,getOneProduct,createProduct,deleteProduct,upadteProduct} from "../controllers/productController.js";

const ProductsRouter = express.Router();

ProductsRouter.route("/").get(getAllProducts);

ProductsRouter.route("/api/products/:id").get(getOneProduct);
ProductsRouter.route("/api/products").post(createProduct);

ProductsRouter.route("/api/products/:id").delete(deleteProduct);
ProductsRouter.route("/api/products/:id").put(upadteProduct);
export {ProductsRouter};