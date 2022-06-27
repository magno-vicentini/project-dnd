"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __importDefault(require("."));
const CampaignService_1 = __importDefault(require("../services/CampaignService"));
class CampaignController extends _1.default {
    constructor(service = new CampaignService_1.default()) {
        super(service);
        this.read = async (_req, res) => {
            try {
                const users = await this.service.read();
                return res.status(200).send(users);
            }
            catch (err) {
                return res.status(500).send({ message: this.errors.internal });
            }
        };
        this.create = async (req, res) => {
            console.log(req.body);
            const { campaignName, userMaster } = req.body;
            try {
                const findUser = await this.service.readOne({ campaignName, userMaster });
                if (findUser) {
                    return res.status(409).send({ error: this.errors.alreadyExist });
                }
                const user = await this.service.create(req.body);
                if (!user) {
                    return res.status(500).json({ error: this.errors.internal });
                }
                return res.status(201).json(user);
            }
            catch (err) {
                return res.status(500).json({ error: this.errors.internal });
            }
        };
        this.readOne = async (req, res) => {
            const { campaignName, userMaster } = req.body;
            console.log(req.body);
            try {
                const findUser = await this.service.readOne({ campaignName, userMaster });
                console.log(findUser);
                if (!findUser) {
                    return res.status(404).json({ error: this.errors.notFound });
                }
                return res.status(200).json(findUser);
            }
            catch (err) {
                return res.status(500).json({ error: this.errors.internal });
            }
        };
    }
}
exports.default = CampaignController;
