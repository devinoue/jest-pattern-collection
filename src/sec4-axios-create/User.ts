import IUser from './IUser'
export default class User {
  private readonly _name: string
  private readonly _age: number
  constructor({ name, age }: IUser) {
    this._age = age
    this._name = name
  }
}
