import express from "express";
import {getAllProducts,getOneProduct,createProduct,deleteProduct,upadteProduct} from "../controllers/productController.js";

const ProductsRouter = express.Router();

ProductsRouter.route("/").get(getAllProducts);

ProductsRouter.route("/:id").get(getOneProduct);
ProductsRouter.route("/").post(createProduct);

ProductsRouter.route("/:id").delete(deleteProduct);
ProductsRouter.route("/:id").put(upadteProduct);
export {ProductsRouter};