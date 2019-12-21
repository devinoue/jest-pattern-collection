/**
 * 参考:
 * https://qiita.com/vimyum/items/4ded9de3b784afd31025
 */
import lineCount from './lineCount'
import * as fs from 'fs'

// テスト対象が依存するモジュールのモックを定義
jest.mock('fs', () => {
  const mockFn = jest.fn(() => `first\n second\n third`)
  return {
    default: {
      readFileSync: mockFn,
    },
    readFileSync: mockFn,
  }
})

const mockedFs = fs as jest.Mocked<typeof fs>

describe('lineCountテスト', () => {
  const path = 'dummy'
  it('lineCount', () => {
    const result = lineCount(path)
    expect(result).toBe(3)
    expect(mockedFs.readFileSync.mock.calls.length).toBe(1) // mockが何回呼ばれたか検証
    expect(mockedFs.readFileSync.mock.calls[0][0]).toBe(path) // mockの0回目の0個目の引数を検証
  })
})
