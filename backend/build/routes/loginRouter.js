"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = __importDefault(require("../controllers/UserController"));
const createToken_1 = __importDefault(require("../middlewares/createToken"));
const loginRouter = (0, express_1.Router)();
const loginController = new UserController_1.default();
loginRouter.get('/', async (req, res) => loginController.read(req, res));
loginRouter.post('/', async (req, res) => loginController.readOne(req, res));
loginRouter.post('/signup', createToken_1.default, async (req, res) => loginController.create(req, res));
exports.default = loginRouter;
