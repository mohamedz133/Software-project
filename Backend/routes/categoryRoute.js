import express from "express";
import {getCategory,newCategory,deleteCategory,upadteCategory} from "../controllers/categoryController.js";

const categoryRouter = express.Router();

categoryRouter.route("/").get(getCategory);
categoryRouter.route("/").post(newCategory);
categoryRouter.route("/:id").delete(deleteCategory);
categoryRouter.route("/:id").put(upadteCategory)

export {categoryRouter};