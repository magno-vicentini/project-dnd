"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const md5_1 = __importDefault(require("md5"));
const checkPassword = (password, hash) => {
    const encrypted = (0, md5_1.default)(password);
    return encrypted === hash;
};
exports.default = checkPassword;
