import { Document, Model as M } from 'mongoose';
import { Model } from '../interfaces/ModelInterface';

abstract class MongoModel<T> implements Model<T> {
  constructor(protected model: M<T & Document>) {}

  read = async (): Promise<T[]> => this.model.find();

  create = async (obj: T | T[]): Promise<T> => {
    const createDoc = await this.model.create({ ...obj });
    return createDoc;
  };

  readOne = async (str: string): Promise<T | null> => {
    const readDocument = await this.model.findById({ _id: str });
    return readDocument;
  };

  update = async (str: string, object: T): Promise<T | null> => {
    const updateDoc = await this.model
      .findByIdAndUpdate({ _id: str }, { ...object });
    return updateDoc;
  };

  delete = async (str: string): Promise<T | null> => {
    const deleteDoc = await this.model
      .findByIdAndDelete({ _id: str });

    return deleteDoc;
  };
}

export default MongoModel;
