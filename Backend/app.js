import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import dbconn from "./config/dbconnection.js";
import cors from "cors"
import {ProductsRouter} from "./routes/productRoute.js";
import { UsersRouter } from "./routes/userRoute.js";

// Load env variables
dotenv.config({}); 

// DB connection
dbconn();

// Initialize express
const app = express();
app.use(cors({
    origin: 'http://localhost:3001'
}));
// Middlewares
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}
app.use(express.json()); 

// mount routes
app.use(ProductsRouter);
app.use(UsersRouter);

// Listen to port
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

