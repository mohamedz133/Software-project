import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import dbconn from "./config/dbconnection.js";
import {ProductsRouter} from "./routes/productRoute.js";
import { UsersRouter } from "./routes/userRoute.js";
import { authRouter } from "./routes/authRoute.js";


// Load env variables
dotenv.config({});

// DB connection
dbconn();

// Initialize express
const app = express();

// Middlewares
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}
app.use(express.json()); 
app.use(cookieParser());

// mount routes
app.use(authRouter, UsersRouter, ProductsRouter);

// Listen to port
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});