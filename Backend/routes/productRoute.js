import express from "express";
import expressAsyncHandler from "express-async-handler";
import {getAllProducts,getOneProduct,createProduct,deleteProduct,upadteProduct} from "../controllers/productController.js";
import {createProductValidator,updateProductValidator,deleteProductValidator,getProductValidator } from "../validators/productValidator.js";

const ProductsRouter = express.Router();

ProductsRouter.route("/api/products").get(getAllProducts);

ProductsRouter.route("/api/products/:id").get(getProductValidator,getOneProduct);
ProductsRouter.route("/api/products").post(createProductValidator,createProduct);

ProductsRouter.route("/api/products/:id").delete(deleteProduct);
ProductsRouter.route("/api/products/:id").put(upadteProduct);
export {ProductsRouter};