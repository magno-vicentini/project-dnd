"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CampaignController_1 = __importDefault(require("../controllers/CampaignController"));
const campaignRouter = (0, express_1.Router)();
const campaignController = new CampaignController_1.default();
campaignRouter.get('/', async (req, res) => campaignController.read(req, res));
campaignRouter.post('/', async (req, res) => campaignController.readOne(req, res));
campaignRouter.post('/create', async (req, res) => campaignController.create(req, res));
exports.default = campaignRouter;
