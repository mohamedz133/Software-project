import express from "express";

import {getUsers, getUserById, createUser, updateUser, deleteUser} from "../controllers/userController.js";
import { userIdValidator, createUserValidator, updateUserValidator} from "../validators/userValidator.js";
import {protect} from "../middlewares/routeProtector.js";
import {uploadUserImg, resizeImage} from "../controllers/userController.js";

const UsersRouter = express.Router();

UsersRouter.route("/api/users")
    .get(protect, getUsers)
    .post(protect,createUserValidator,uploadUserImg,resizeImage, createUser);
UsersRouter.route("/api/users/:id")
    .get(protect,userIdValidator, getUserById)
    .put(protect,updateUserValidator,uploadUserImg,resizeImage, updateUser)
    .delete(protect,userIdValidator, deleteUser);

export {UsersRouter};