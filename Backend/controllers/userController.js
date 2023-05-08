import {Users} from "../models/userModel.js";

// @desc    Get all users
// @route   GET /api/users
// @access  Private
const getUsers = async (req, res) => {
    try {
        const users = await Users.find({});
        res.json(users);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Server Error"});
    }
}

// @desc    Create user
// @route   POST /api/users
// @access  Private
const createUser = async (req, res) => {
    try {
        const user = await Users.create(req.body);
        res.json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message});
    }
}

// @desc    Get user by id
// @route   GET /api/users/:id
// @access  Private
const getUserById = async (req, res) => {
    try {
        const user = await Users.findById(req.params.id);
        res.json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message});
    }
}

// @desc    Update user
// @route   PUT /api/users/:id
// @access  Private
const updateUser = async (req, res) => {
    try {
        const newUser = await Users.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.json(newUser);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Cann't update user or user not found"});
    }
    }


// @desc    Delete user
// @route   DELETE /api/users/:id
// @access  Private
const deleteUser = async (req, res) => {
    try {
        const user = await Users.findByIdAndDelete(req.params.id);
        res.json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "User not found or cann't delete user"});
    }
}


export {getUsers, getUserById, createUser, updateUser, deleteUser};