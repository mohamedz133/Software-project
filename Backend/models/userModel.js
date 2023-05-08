import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fname: {type: String, required: true},
    lname: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: { type: String, required: true, minlength: 8, maxlength: 25},
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