"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __importDefault(require("."));
const CampaignModel_1 = __importDefault(require("../models/CampaignModel"));
class CampaignService extends _1.default {
    constructor(model = new CampaignModel_1.default()) {
        super(model);
    }
    async read() {
        const users = await this.model.read();
        return users;
    }
    async create(userData) {
        console.log('service', userData);
        const user = await this.model.create(userData);
        return user;
    }
    async readOne(obj) {
        const user = await this.model.readOne(obj);
        return user;
    }
}
exports.default = CampaignService;
