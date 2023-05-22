import {Users} from "../models/userModel.js";
import jwt from "jsonwebtoken";
import {verify} from "jsonwebtoken";
import {compare} from "bcrypt";

const generateToken = (id) => {
    return jwt.sign({ userId: id }, 
        process.env.JWT_SECRET_KEY, 
        {expiresIn: process.env.JWT_EXPIRE_TIME});
}

// @desc    signup
// @route   POST /api/auth/signup
// @access  Public
const signup = async (req, res) => {
    try 
    {
        // create user
        const user = await Users.create(req.body);
        // generate token
        const token = generateToken(user.id);
        res.cookie("jwt", token);
        res.json({user});
    } 
    catch (error) 
    {
        // console.log(error);
        res.status(500).json({error: error.message});
    }   
}

// @desc    login
// @route   POST /api/auth/login
// @access  Public
const login = async (req, res) => {
    
    try 
    {
        // validate user
        const user = await Users.findOne({ email: req.body.email });
        if (!user || !await compare(req.body.password, user.password))
        {
            return res.status(401).json({error: "Email or Password not correct"});
        }
        // generate token
        const token = generateToken(user.id);
        // send responce
        res.cookie("jwt", token);
        res.json({user});
    } 
    catch (error) 
    {
        console.log(error);
        res.status(500).json({error: error.message});
    }
}

// @desc    login
// @route   POST /api/auth/logout
// @access  Public

const logout = (req, res) => {
    try
    {
        const token = req.cookies.jwt;
        // token doesn't exist
        if (!token)
        {
            res.status(401).json({error: "You are not logged in !"});
        }
        else
        {
            // token already exists but not valid
            try
            {
                const decoded = verify(token, process.env.JWT_SECRET_KEY)
            }
            catch
            {
                return res.status(401).json({error: "Invalid token, You should login first"});
            }
            // token exist and valid
            res.cookie("jwt", " ", {maxAge: 0});
            res.json({message: "Logged out successfully"});
        }
    }
    catch
    {
        res.status(500).json({error: "Cann't logout user. try again !"});
    }
}

export {signup, login, logout};