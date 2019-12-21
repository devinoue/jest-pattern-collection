import UserUsecase from './UserUsecase'
// import UserRepository from './UserRepository'
import IRepository from './IRepository'
import User from './User'
import IUser from './IUser'
import axios from 'axios'
import { Api } from './Api'

// axiosのモック化
jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

// モックから返すデータサンプル
const mockUserList: IUser[] = [{ name: 'yamada', age: 23 }]

describe('ユーザーリポジトリのDI例', () => {
  it('should return users list', async () => {
    const userRepository: IRepository = new Api.UserRepository()

    // axios.getをモック化する
    mockedAxios.get.mockResolvedValue(mockUserList)

    const userUsecase = new UserUsecase(userRepository)

    // awaitを忘れずに！
    expect(await userUsecase.getUsers()).toEqual(
      mockUserList.map((data: any) => new User(data)),
    )
  })
})
