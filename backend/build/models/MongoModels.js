"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MongoModel {
    constructor(model) {
        this.model = model;
        this.read = async () => this.model.find();
        this.create = async (obj) => {
            const createDoc = await this.model.create({ ...obj });
            return createDoc;
        };
        this.readOne = async (obj) => {
            const readDocument = await this.model.findOne({ ...obj });
            return readDocument;
        };
        this.update = async (str, object) => {
            const updateDoc = await this.model
                .findByIdAndUpdate({ _id: str }, { ...object });
            return updateDoc;
        };
        this.delete = async (str) => {
            const deleteDoc = await this.model
                .findByIdAndDelete({ _id: str });
            return deleteDoc;
        };
    }
}
exports.default = MongoModel;
