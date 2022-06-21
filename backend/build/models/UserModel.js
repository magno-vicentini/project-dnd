"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema_1 = require("../schemas/UserSchema");
class UserModel {
    constructor(userModel = (0, mongoose_1.model)('users', UserSchema_1.default)) {
        this.userModel = userModel;
    }
    async getUsers() {
        const users = await this.userModel.find();
        return users;
    }
    async createUser(userData) {
        console.log('model', userData);
        const user = await this.userModel.create(userData);
        console.log('return fron modelUser', user);
        return user;
    }
}
exports.default = UserModel;
//# sourceMappingURL=UserModel.js.map