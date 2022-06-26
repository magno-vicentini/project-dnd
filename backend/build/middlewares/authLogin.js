"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = require("jsonwebtoken");
require("dotenv/config");
const decodeToken = async (req, res, next) => {
    const token = req.headers.authorization;
    const SECRET = process.env.SECRET_JWT || 'notFound';
    if (!token) {
        return res.status(401).json({ message: 'Token not found' });
    }
    console.log(process.env.SECRET_JWT);
    try {
        const data = (0, jsonwebtoken_1.verify)(token, SECRET);
        req.body.user = data;
    }
    catch (err) {
        return res.status(401).json({ message: 'Expired or invalid token' });
    }
    next();
};
exports.default = decodeToken;
