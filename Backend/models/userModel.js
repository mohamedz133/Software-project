import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fname: {type: String, required: true, minlength: 2, maxlength: 20},
    lname: {type: String, required: true, minlength: 2, maxlength: 20},
    email: {type: String, required: true, unique: true, lowercase: true},
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