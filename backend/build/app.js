"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express = require("express");
const routes_1 = require("./routes");
class App {
    constructor() {
        this.app = express();
        this.config();
        this.routerConfig();
    }
    config() {
        const accessControl = (_req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
            res.header('Access-Control-Allow-Headers', '*');
            next();
        };
        this.app.use(accessControl);
        this.app.use(express.json());
    }
    routerConfig() {
        console.log('alou');
        this.app.use(routes_1.default);
    }
    start(PORT) {
        this.app.listen(PORT, () => console.log(`Server running in PORT ${PORT}`));
    }
}
exports.App = App;
//# sourceMappingURL=app.js.map