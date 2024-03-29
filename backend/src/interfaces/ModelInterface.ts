export interface Model<T> {
  create(obj: T | T[]): Promise<T>,
  read(): Promise<T[]>,
  readOne(obj: object): Promise<T | null>,
  update(str: string, object: T): Promise<T | null>,
  delete(str: string): Promise<T | null>,
}
