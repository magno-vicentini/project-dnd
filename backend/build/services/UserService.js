"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserModel_1 = require("../models/UserModel");
class UserService {
    constructor(userModel = new UserModel_1.default()) {
        this.userModel = userModel;
    }
    async getUsers() {
        const users = await this.userModel.getUsers();
        return users;
    }
    async createUser(userData) {
        console.log('service', userData);
        const user = await this.userModel.createUser(userData);
        return user;
    }
    async findUser(email) {
        const user = await this.userModel.findUser(email);
        return user;
    }
}
exports.default = UserService;
//# sourceMappingURL=UserService.js.map