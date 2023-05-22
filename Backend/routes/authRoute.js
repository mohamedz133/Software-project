import express from "express";
import {signup, login, logout} from "../controllers/authController.js";
import {signinValidator, signupValidator} from "../validators/authValidator.js";

const authRouter = express.Router();

authRouter.route("/api/auth/signup").post(signupValidator, signup);
authRouter.route("/api/auth/login").post(signinValidator, login);
authRouter.route("/api/auth/logout").post(logout);

export {authRouter};