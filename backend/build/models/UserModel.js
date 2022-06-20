"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema_1 = require("../schemas/UserSchema");
class UserModel {
    constructor(userModel = (0, mongoose_1.model)('users', UserSchema_1.UserSchema)) {
        this.userModel = userModel;
    }
    async getBooks() {
        const books = await this.userModel.find();
        return books;
    }
}
exports.default = UserModel;
//# sourceMappingURL=UserModel.js.map