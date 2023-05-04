import dotenv from "dotenv"; 
import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";

dotenv.config(); // load .env file


// Connect to DB
mongoose.connect(process.env.DB_URI).then(conn => {
    console.log(`DB connected with host: ${conn.connection.host}`);
})
.catch(err => {
    console.log(`DB connection failed: ${err}`);
    process.exit(1);
})

const userSchema = new mongoose.Schema({
    name: {type: String},
    age: {type: Number}
  });

const u = mongoose.model("users", userSchema);

// Initialize express
const app = express();


// Dev logging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}



app.get("/", async (req,res) => {
    // res.send("Hello World");
    res.send(await u.find());
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});