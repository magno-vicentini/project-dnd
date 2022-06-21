"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    name: { type: String, required: false },
});
exports.default = UserSchema;
//# sourceMappingURL=UserSchema.js.map