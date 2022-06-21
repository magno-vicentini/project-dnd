"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserService_1 = require("../services/UserService");
class UserController {
    constructor(userService = new UserService_1.default()) {
        this.userService = userService;
        this.notFound = 'User not found';
        this.getUsers = async (req, res) => {
            try {
                const users = await this.userService.getUsers();
                return res.status(200).send(users);
            }
            catch (err) {
                return res.status(500).send({ message: this.internalError });
            }
        };
        this.create = async (req, res) => {
            try {
                const user = await this.userService.createUser(req.body);
                return res.status(201).send(user);
            }
            catch (err) {
                return res.status(500).send({ message: this.notFound });
            }
        };
    }
}
exports.default = UserController;
//# sourceMappingURL=UserController.js.map