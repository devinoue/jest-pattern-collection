//
import BaseApi from './BaseApi'

export default class TestApi {
  /**
   * @constructor
   */
  constructor() {
    return this
  }

  /**
   * APIからデータ取得
   */
  async callApi(): Promise<any> {
    const res: any = await BaseApi.get('/')
    return res
  }
}
