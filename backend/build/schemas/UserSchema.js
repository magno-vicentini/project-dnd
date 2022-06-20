"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const mongoose_1 = require("mongoose");
exports.UserSchema = new mongoose_1.Schema({
    email: { type: String, required: true },
    name: { type: String, required: false }
});
// export const userModel = model<IUser>('user', userSchema);
//# sourceMappingURL=UserSchema.js.map