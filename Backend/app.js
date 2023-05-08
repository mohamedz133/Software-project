import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import dbconn from "./config/dbconnection.js";
import {ProductsRouter} from "./routes/productRoute.js";

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

// mount routes
app.use("/", ProductsRouter);

// Listen to port
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});