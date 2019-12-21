/**
 * 参考:
 * https://wp-kyoto.net/jest-and-typescript-to-test-code-with-axios
 *https://www.robinwieruch.de/axios-jest
 * 1: 大雑把に言えば、jest.mock("文字列")で含まれるメソッドをモック化する
 * 2: モック関数を呼ぶためにキャストする(よく分かってない)
 * const mockedAxios = axios as jest.Mocked<typeof axios>
 * 3: モック化したいメソッドなどにmockResolvedValueやmockImplementationを使う
 * 4: マッチャーで検証する
 */

import callApi from '~/sec2-axios/callApi'
import axios from 'axios'

// 今回、axiosモックのreturnで期待されるメッセージ
const message: object = { data: { message: 'success' } }

// (意味はないが)引数として投げられるURL
const url: string = 'https://www.yahoo.com'

jest.mock('axios') // axiosをモック化

const mockedAxios = axios as jest.Mocked<typeof axios>

describe('axios', () => {
  afterEach(() => jest.resetAllMocks())
  it('should return success', async () => {
    mockedAxios.get.mockImplementation(async url => Promise.resolve(message))

    await expect(callApi(url)).resolves.toEqual(message)

    // こういう書き方もOK? promiseオブジェクトではないのが気になる
    // const data = await callApi(url)
    // expect(data).toEqual(message)

    // mockが何回呼ばれたか検証
    expect(mockedAxios.get).toHaveBeenCalledTimes(1)
    expect(mockedAxios.get.mock.calls.length).toEqual(1)

    // mockの 0 回目の 0 個目の引数を検証
    expect(mockedAxios.get).toHaveBeenCalledWith(url)
    expect(mockedAxios.get.mock.calls[0][0]).toEqual(url)
  })

  // エラー関連
  it('fetches erroneously data from an API', async () => {
    const errorMessage = 'Network Error'
    mockedAxios.get.mockImplementationOnce(async () =>
      Promise.reject(new Error(errorMessage)),
    )

    await expect(callApi(url)).rejects.toThrow(errorMessage)
  })
})

/**
 * mockResolvedValue()(またはmockReturnValue())の方がシンプルに書けるが、値を返すときだけ使う
 * mockImplementation()は関数を返して、引数をいじりたいときに使う
 */

/**
 * 参考までに。as anyでキャストする方法もある。
 */
describe('axios', () => {
  // 各テストの実行後に実行される関数
  afterEach(() => jest.resetAllMocks())
  it('should return empty', async () => {
    ;(axios.get as any).mockResolvedValue(message)
    const data = await callApi(url)
    expect(data).toEqual(message)
  })
})
