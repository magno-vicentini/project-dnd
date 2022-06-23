"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = require("../controllers/UserController");
const routes = (0, express_1.Router)();
const userController = new UserController_1.default();
routes.get('/login', userController.getUsers);
routes.post('/login', userController.findOne);
routes.post('/signup', userController.create);
exports.default = routes;
//# sourceMappingURL=index.js.map