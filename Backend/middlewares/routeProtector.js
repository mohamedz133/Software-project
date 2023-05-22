import {verify} from "jsonwebtoken";
import {Users} from "../models/userModel.js";

const protect = async(req, res, next) => {
    // execulde the main page
    if (req.path === "/api/products")
    {
        return next();
    }
    // check if user token exist => get
    const token = req.cookies.jwt;
    if (!token)
    {
        return res.status(401).json({error: "Please login to contiue"});
    }

    // verify token (valid token, non expired)
    let decoded, user_id, rule;
    try
    {
        decoded = verify(token, process.env.JWT_SECRET_KEY);
        if (decoded)
        {
            user_id = decoded.userId;
            const cus = await Users.findById(user_id);
            if (cus)
            {
                rule = cus.rule;
            }
        }
        
    }
    catch
    {
        return res.status(401).json({error: "Expired token, Login again"});
    }

    // check if user still exist in the system
    const user = await Users.findById(decoded.userId);
    if (!user)
    {
        return res.status(401).json({error: "This user is deleted"});
    }
    // check if user has changed the password after getting the token 
    // TODO: LATER

    // next layer to check admin or user 
    // get all users or create user
    if (req.path == "/api/users")
    {
        if (rule != "admin")
        {
            return res.status(401).json({error: "You are not allowed to users data as non-admin user"});
        }
    }
    // get, update, delete
    else if (req.path.startsWith("/api/users/"))
    {
        if (rule != "admin" && user_id != req.params.id)
        {
            req.body.rule = "user";
            return res.status(401).json({error: "You are not allowed to users data as non-admin user"});
        }
        // if you wanna change from user to admin => :) You Cann't Dude!
        req.body.rule = "user";
    }

    next();
}

export {protect};