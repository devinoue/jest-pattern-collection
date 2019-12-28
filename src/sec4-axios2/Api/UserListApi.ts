import axios from '../plugins/axios'
import User from '../domain/User'
import IUser from '../domain/IUser'

export default class UserListApi {
  private readonly _resource: string = '/users'
  _isSuccess: boolean = false
  constructor() {
    return this
  }

  public async get(): Promise<User[]> {
    const { data } = await axios.get(this._resource)
    return data.map((value: IUser): User => new User(value))
  }

  get isSuccess(): boolean {
    return this._isSuccess
  }

  public async save(user: IUser): Promise<void> {
    await axios.post(this._resource, user)
  }
}
