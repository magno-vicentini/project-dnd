"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
const createToken = async (req, res, next) => {
    const { email, password } = req.body;
    const jwtConfig = {
        expiresIn: '36000d',
        algorithm: 'HS256',
    };
    const payload = {
        email,
        password,
    };
    const SECRET = process.env.SECRET_JWT;
    if (SECRET === undefined) {
        return res.status(500).send({ error: 'Internal Server Error' });
    }
    const token = jsonwebtoken_1.default.sign(payload, SECRET, jwtConfig);
    console.log(token);
    req.body.token = token;
    next();
};
exports.default = createToken;
