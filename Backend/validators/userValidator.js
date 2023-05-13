import {check} from "express-validator";
import {validator} from "../middlewares/errorValidator.js";

const userIdValidator = [
    check("id").isMongoId().withMessage("Invalid id format"),
    validator
];

const createUserValidator = [
    check("fname", "lname")
        .isLength({ min: 3, max: 25 }).withMessage("length of name must be in between 3 and 20"),

    check("email")
        .isEmail().withMessage("Invalid email address"),

    check("password")
        .isLength({ min: 8, max:25 }).withMessage("Password length must be between 8 and 25"),
    
    check("phone")
        .optional().isMobilePhone("ar-EG").withMessage("Invalid Egyptian Mobile Phone"),

    validator
];

const updateUserValidator = [
    check("id")
        .isMongoId().withMessage("Invalid Id format"),
    check("fname", "lname")
        .optional().isLength({ min: 3, max: 25 }).withMessage("length of name must be in between 3 and 20"),

    check("email")
        .optional().isEmail().withMessage("Invalid email address"),

    check("password")
        .optional().isLength({ min: 8, max:25 }).withMessage("Password length must be between 8 and 25"),
    
    check("phone")
        .optional().isMobilePhone("ar-EG").withMessage("Invalid Egyptian Mobile Phone"),

    validator
];

export {userIdValidator, createUserValidator, updateUserValidator};

