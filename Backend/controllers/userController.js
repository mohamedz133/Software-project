import {Users} from "../models/userModel.js";
import { hash } from "bcrypt";

// @desc    Get all users
// @route   GET /api/users
// @access  Private
const getUsers = async (req, res) => {
    try {
        // make sure the admin who is logged in
        
        // if (req.rule != "admin")
        // {
        //     return res.status(401).json({error: "You are not allowed to see users data as non-admin user"});
        // }
        
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
        // make sure this user is admin
        // if (req.rule != "admin")
        // {
        //     return res.status(401).json({error: "You are not allowed to create users as non-admin user"});
        // }

        const user = await Users.create(req.body);
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
        // if the rule is user then make sure id similarity
        // if (req.rule != "admin" && req.id != req.params.id)
        // {
        //     return res.status(401).json({error: "You cann't access other users data"});
        // }
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
    try 
    {
        const user = await Users.findById(req.params.id);
        if (!user) return res.status(404).json({message: "user not found"});
        // check if password field is empty
        if (req.body.password)
        {
            req.body.password = await hash(req.body.password, 10);
        }
        const newUser = await Users.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.json(newUser);
    } 
    catch (error) {
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