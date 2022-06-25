"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __importDefault(require("."));
const UserService_1 = __importDefault(require("../services/UserService"));
class UserController extends _1.default {
    constructor(service = new UserService_1.default(), route = '/login') {
        super(service);
        this.read = async (req, res) => {
            try {
                const users = await this.service.read();
                return res.status(200).send(users);
            }
            catch (err) {
                return res.status(500).send({ message: this.errors.internal });
            }
        };
        this.create = async (req, res) => {
            const { body } = req;
            try {
                const user = await this.service.create(body);
                if (!user) {
                    return res.status(500).json({ error: this.errors.internal });
                }
                if ('error' in user) {
                    return res.status(400).json(user);
                }
                return res.status(201).json(user);
            }
            catch (err) {
                return res.status(500).json({ error: this.errors.internal });
            }
        };
        this.readOne = async (req, res) => {
            const { id } = req.params;
            try {
                const findCar = await this.service.readOne(id);
                if (!findCar) {
                    return res.status(404).json({ error: this.errors.notFound });
                }
                return res.status(200).json(findCar);
            }
            catch (err) {
                return res.status(500).json({ error: this.errors.internal });
            }
        };
        this.$route = route;
    }
    get route() { return this.$route; }
}
exports.default = UserController;
