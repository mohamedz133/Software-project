import {Users} from "../models/userModel.js";
import { hash } from "bcrypt";
import asyncHandler from "express-async-handler";
// @desc    Get all users
// @route   GET /api/users
// @access  Private
const getUsers = asyncHandler(async (req, res) => {
    
        const users = await Users.find({});
        res.json(users);
   
})

// @desc    Create user
// @route   POST /api/users
// @access  Private
const createUser = asyncHandler(async (req, res) => {
    
        const user = await Users.create(req.body);
        if (!user)
        {
            return res.status(404).json({message: "User not found!"});
        }
        res.json(user);
   
})

// @desc    Get user by id
// @route   GET /api/users/:id
// @access  Private
const getUserById = asyncHandler(async (req, res) => {
    
        const user = await Users.findById(req.params.id);
        if (!user)
        {
            return res.status(404).json({message: "User not found!"});
        }
        res.json(user);

})

// @desc    Update user
// @route   PUT /api/users/:id
// @access  Private
const updateUser = asyncHandler(async (req, res) => {
  
        const user = await Users.findById(req.params.id);
        if (!user) return res.status(404).json({message: "user not found"});
        // check if password field is empty
        if (!req.body.password)
        {
            delete req.body.password;
        } 
        else
        {
            req.body.password = await hash(req.body.password, 10);
        }
        const newUser = await Users.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.json(newUser);
   
    })


// @desc    Delete user
// @route   DELETE /api/users/:id
// @access  Private
const deleteUser = asyncHandler (async (req, res) => {
    
        const user = await Users.findByIdAndDelete(req.params.id);
        if (!user)
        {
            return res.status(404).json({message: "User not found"});
        }
        res.json(user);
   
})


export {getUsers, getUserById, createUser, updateUser, deleteUser};