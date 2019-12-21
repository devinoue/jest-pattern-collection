import User from '../User'
import IRepository from '../IRepository'

//
export default class UserRepositoryMock implements IRepository {
  /**
   * @constructor
   */
  constructor() {
    return this
  }

  /**
   * APIからデータ取得をして、Userエンティティとして返す
   */
  async callApi(): Promise<User[]> {
    const res: any = await [{ name: 'yamada', age: 34 }]
    return res.map((data: any) => new User(data))
  }
}
