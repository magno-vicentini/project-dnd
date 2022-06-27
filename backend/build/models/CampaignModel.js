"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const MongoModels_1 = __importDefault(require("./MongoModels"));
const CampaignSchema_1 = __importDefault(require("../schemas/CampaignSchema"));
class CampaignModel extends MongoModels_1.default {
    constructor(model = (0, mongoose_1.model)('campaign', CampaignSchema_1.default)) {
        super(model);
    }
}
exports.default = CampaignModel;
