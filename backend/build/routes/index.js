"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const campaignRouter_1 = __importDefault(require("./campaignRouter"));
const loginRouter_1 = __importDefault(require("./loginRouter"));
const routes = (0, express_1.Router)();
routes.use('/login', loginRouter_1.default);
routes.use('/campaign', campaignRouter_1.default);
exports.default = routes;
