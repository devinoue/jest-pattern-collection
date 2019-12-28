import BaseApi from './BaseApi'
import IUser from '../IUser'
import User from '../User'

const resource = 'users/'

export default class UserApi {
  /**
   * データを受け取ったらMetrics配列に入れる
   */
  async get(): Promise<User[] | any> {
    const res: any = await BaseApi.get(`${resource}`)
    return res.data.map((obj: IUser): User => new User(obj))
  }
}
