import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
    fname: {type: String, required: true},
    lname: {type: String, required: true},
    email: {type: String,
         required: true,
         unique: true, 
         lowercase: true,
         validate: {
            validator: validator.isEmail,
            message: "Invalid email address"
         }
        },
    password: { type: String, required: true},
    phone: {type: String},
    img: {type: String},
    rule: {
        type: String,
        enum: ["admin", "user"],
        default: "user",
    },
    address: [{
        state: {type: String},
        city: {type: String},
        street: {type: String},
    }]
})

const Users = mongoose.model("users", userSchema);

export {Users};