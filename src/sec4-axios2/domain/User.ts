import IUser from './IUser'
export default class User {
  private readonly _name: string
  private readonly _text: string
  private readonly _id: number
  constructor(value: IUser) {
    this._id = value.id
    this._name = value.name
    this._text = value.text
  }
}
