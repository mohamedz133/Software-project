import express from "express";
import dotenv from "dotenv"; 
import morgan from "morgan";
import mongoose from "mongoose";

dotenv.config({path: './config.env'}); // load .env file


// Connect to DB
mongoose.connect(process.env.DB_URI).then(conn => {
    console.log(`DB connected with host: ${conn.connection.host}`);
})
.catch(err => {
    console.log(`DB connection failed: ${err}`);
    process.exit(1);
})


// Initialize express
const app = express();


// Dev logging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}



app.get("/", (req,res) => {
    res.send("Hello!");
});


const port = process.env.PORT  || 8000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});