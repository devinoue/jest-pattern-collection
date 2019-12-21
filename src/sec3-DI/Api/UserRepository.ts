//
import axios from 'axios'
import User from '../User'
import IRepository from '../IRepository'

export default class UserRepository implements IRepository {
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
    const res: any = await axios.get('http://www.hoge.com/users')
    return res.map((data: any) => new User(data))
  }
}
