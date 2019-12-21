import User from './User'
import UserRepository from './Api/UserRepository'

export default class Usecase {
  private readonly _api: UserRepository

  /**
   * @constructor
   * @param api
   */
  constructor(api: UserRepository) {
    this._api = api
  }

  /**
   * ユーザー取得
   * @return [array] Userインスタンスの入った配列
   */
  public async getUsers(): Promise<User[]> {
    const users: User[] = await this._api.callApi()
    return users
  }
}
