"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const routes_1 = __importDefault(require("./routes"));
const app_1 = __importDefault(require("./app"));
const UserController_1 = __importDefault(require("./controllers/UserController"));
const server = new app_1.default();
const userController = new UserController_1.default();
const userRouter = new routes_1.default();
userRouter.addRoute(userController);
server.addRouter(userRouter.router);
exports.default = server;
