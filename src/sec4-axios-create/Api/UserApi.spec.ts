import IUser from '../IUser'
import User from '../User'

import mockAxios from 'axios'
import MetricsApi from './UserApi'

const testArray: any = { data: [{ name: 'yamada', age: 24 }] }

// axiosのモック化
jest.mock('axios')
const mockedAxios = mockAxios as jest.Mocked<typeof mockAxios>

describe('UserApi', () => {
  afterEach(() => jest.resetAllMocks())
  test('戻ってくるUserオブジェクト配列が等しい', async () => {
    const metricsApi = new MetricsApi()

    // axios.getをモック化する
    mockedAxios.get.mockImplementationOnce(async () =>
      Promise.resolve(testArray),
    )

    await expect(metricsApi.get()).resolves.toEqual(
      testArray.data.map((obj: IUser): User => new User(obj)),
    )
  })
})
