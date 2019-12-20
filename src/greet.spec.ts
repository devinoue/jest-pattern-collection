import greet from '~/greet'

describe('greet', (): void => {
  test('should say Hello World!', (): void => {
    const response: string = greet('World')
    expect(response).toBe('Hello, World!')
  })
})
