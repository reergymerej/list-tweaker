import app from './index'

describe('remove', () => {
  it('should remove the item', () => {
    const list = [
      { id: 'a' },
      { id: 'b' },
      { id: 'c' },
    ]

    const result = app.remove(list, 'b')
    expect(result).toEqual([
      { id: 'a' },
      { id: 'c' },
    ])
  })

  it('should not remove', () => {
    const list = [
      { id: 'a' },
      { id: 'b' },
      { id: 'c' },
    ]

    const result = app.remove(list, 'x')
    expect(result).toEqual(list)
  })
})
