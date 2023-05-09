import { validationResult } from "express-validator";

const validator = (req, res, next) => {
    const err = validationResult(req);
    if (!err.isEmpty())
    {
        return res.status(400).json({ error: err.array() });
    }
    next();
}

export {validator};