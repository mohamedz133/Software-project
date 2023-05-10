import express from "express";
import {getAllProducts,getOneProduct,createProduct,deleteProduct,upadteProduct} from "../controllers/productController.js";

const ProductsRouter = express.Router();

categoryRouter.route("/").get(getAllProducts);

categoryRouter.route("/:id").get(getOneProduct);
categoryRouter.route("/").post(createProduct);

categoryRouter.route("/:id").delete(deleteCategory);
categoryRouter.route("/:id").put(upadteCategory);
export {ProductsRouter};