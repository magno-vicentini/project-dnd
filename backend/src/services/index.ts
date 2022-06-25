import { Model } from '../interfaces/ModelInterface';

abstract class Service<T> {
  constructor(protected model: Model<T>) {}

  public async create(object: T): Promise<T | null > {
    return this.model.create(object);
  }

  public async read(): Promise<T[]> {
    return this.model.read();
  }

  public async readOne(str: string): Promise<T | null > {
    return this.model.readOne(str);
  }

  public async update(str: string, object: T):
  Promise<T | null > {
    return this.model
      .update(str, object);
  }

  public async delete(str: string): Promise<T | null > {
    return this.model.delete(str);
  }
}

export default Service;
