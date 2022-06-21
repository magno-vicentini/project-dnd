"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// const MONGO_DB_URL = 'mongodb://localhost:27017/D&D5e';
const MONGO_DB_URL = 'mongodb://dnd_database:27017/D&D5e';
const connectToDatabase = (mongoDatabaseURI = process.env.MONGO_URI
    || MONGO_DB_URL) => mongoose_1.default.connect(mongoDatabaseURI);
exports.default = connectToDatabase;
//# sourceMappingURL=connection.js.map