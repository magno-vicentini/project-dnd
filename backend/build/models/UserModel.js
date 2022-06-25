"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema_1 = __importDefault(require("../schemas/UserSchema"));
const MongoModels_1 = __importDefault(require("./MongoModels"));
class UserModel extends MongoModels_1.default {
    constructor(model = (0, mongoose_1.model)('users', UserSchema_1.default)) {
        super(model);
    }
}
exports.default = UserModel;
