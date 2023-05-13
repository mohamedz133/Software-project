import express from "express";
import {getUsers, getUserById, createUser, updateUser, deleteUser} from "../controllers/userController.js";
import { userIdValidator, createUserValidator, updateUserValidator} from "../validators/userValidator.js";

const UsersRouter = express.Router();

UsersRouter.route("/api/users").get(getUsers).post(createUserValidator, createUser);
UsersRouter.route("/api/users/:id").get(userIdValidator, getUserById).put(updateUserValidator, updateUser).delete(userIdValidator, deleteUser);

export {UsersRouter};