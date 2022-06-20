"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
(0, mongoose_1.connect)('mongodb://localhost:27017/DnDdatabase');
const userSchema = new mongoose_1.Schema({
    email: { type: String, required: true },
    name: { type: String, required: false }
});
const userModel = (0, mongoose_1.model)('user', userSchema);
//# sourceMappingURL=index.js.map