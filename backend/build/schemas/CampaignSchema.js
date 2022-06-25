"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const CampaingSchema = new mongoose_1.Schema({
    campaignName: { type: String, required: true },
    userMaster: { type: String, required: true },
    usersCampaign: { type: [String], required: false },
}, { versionKey: false });
exports.default = CampaingSchema;
