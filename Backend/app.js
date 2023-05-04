import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

// Load env variables
dotenv.config({}); 

// Connect to DB
mongoose.connect(process.env.DB_URI).then(conn => {
        console.log(`DB connected with host: ${conn.connection.host}`);
    })
    .catch(err => {
        console.log(`DB connection failed: ${err}`);
        process.exit(1);
    }
)

// Initialize express
const app = express();
app.use(express.json()); // parse json body


// Listen to port
const port = process.env.PORT  || 8000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});