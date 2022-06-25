"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ControllerErrors;
(function (ControllerErrors) {
    ControllerErrors["internal"] = "Internal Server Error";
    ControllerErrors["notFound"] = "Object not found";
    ControllerErrors["badRequest"] = "Bad request";
})(ControllerErrors || (ControllerErrors = {}));
class Controller {
    constructor(service) {
        this.service = service;
        this.errors = ControllerErrors;
    }
}
exports.default = Controller;
