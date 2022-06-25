"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Service {
    constructor(model) {
        this.model = model;
    }
    async create(object) {
        return this.model.create(object);
    }
    async read() {
        return this.model.read();
    }
    async readOne(str) {
        return this.model.readOne(str);
    }
    async update(str, object) {
        return this.model
            .update(str, object);
    }
    async delete(str) {
        return this.model.delete(str);
    }
}
exports.default = Service;
