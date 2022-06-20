"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const connection = (mongoDatabaseURI = 'mongodb://localhost:27017/DnDdatabase') => mongoose_1.default.connect(mongoDatabaseURI);
exports.default = connection;
//# sourceMappingURL=connection.js.map