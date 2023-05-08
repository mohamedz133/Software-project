import {getUsers, getUserById, createUser, updateUser, deleteUser} from "../controllers/userController.js";
import express from "express";

const UsersRouter = express.Router();

UsersRouter.route("/api/users").get(getUsers).post(createUser);
UsersRouter.route("/api/users/:id").get(getUserById).put(updateUser).delete(deleteUser);

export {UsersRouter};