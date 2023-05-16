import mongoose from "mongoose";
import { hash } from "bcrypt";

const userSchema = new mongoose.Schema({
    fname: {type: String, required: true, minlength: 2, maxlength: 20},
    lname: {type: String, required: true, minlength: 2, maxlength: 20},
    email: {type: String, required: true, unique: true, lowercase: true},
    password: { type: String, required: true},
    phone: {type: String, uinque: true},
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

// hash password (note: to use this => don't use arrow function)
userSchema.pre("save", async function (next) {
    this.password = await hash(this.password, 10);
    next();
})

const Users = mongoose.model("users", userSchema);

export {Users};