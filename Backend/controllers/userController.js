import {Users} from "../models/userModel.js";
import { hash } from "bcrypt";

// @desc    Get all users
// @route   GET /api/users
// @access  Private
const getUsers = async (req, res) => {
    try {
        const users = await Users.find({});
        res.json(users);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: error.message});
    }
}

// @desc    Create user
// @route   POST /api/users
// @access  Private
const createUser = async (req, res) => {
    try {
        const user = await Users.create(req.body);
        if (!user)
        {
            return res.status(404).json({message: "User not found!"});
        }
        res.json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: error.message});
    }
}

// @desc    Get user by id
// @route   GET /api/users/:id
// @access  Private
const getUserById = async (req, res) => {
    try {
        const user = await Users.findById(req.params.id);
        if (!user)
        {
            return res.status(404).json({message: "User not found!"});
        }
        res.json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: error.message});
    }
}

// @desc    Update user
// @route   PUT /api/users/:id
// @access  Private
const updateUser = async (req, res) => {
    try {
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
    } catch (error) {
        console.log(error);
        res.status(500).json({error: error.message});
    }
    }


// @desc    Delete user
// @route   DELETE /api/users/:id
// @access  Private
const deleteUser = async (req, res) => {
    try {
        const user = await Users.findByIdAndDelete(req.params.id);
        if (!user)
        {
            return res.status(404).json({message: "User not found"});
        }
        res.json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: error.message});
    }
}


export {getUsers, getUserById, createUser, updateUser, deleteUser};