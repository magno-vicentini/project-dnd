"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const md5_1 = __importDefault(require("md5"));
const _1 = __importDefault(require("."));
const UserService_1 = __importDefault(require("../services/UserService"));
class UserController extends _1.default {
    constructor(service = new UserService_1.default(), route = '/login') {
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
            const { email, password, username, token, } = req.body;
            console.log(req.body);
            try {
                const encryptPass = (0, md5_1.default)(password);
                const findUser = await this.service.readOne({ password: encryptPass, email });
                if (findUser) {
                    return res.status(409).send({ error: this.errors.alreadyExist });
                }
                const user = await this.service.create({
                    password: encryptPass, email, username, token,
                });
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
            const { password, email } = req.body;
            console.log(req.body);
            try {
                const encrypPass = (0, md5_1.default)(password);
                console.log(encrypPass);
                const findUser = await this.service.readOne({ password: encrypPass, email });
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
        this.$route = route;
    }
    get route() { return this.$route; }
}
exports.default = UserController;
