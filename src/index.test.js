import app from './index'

describe('getIndex', () => {
  it('should understand refs', () => {
    const list = [1, 9, 8]
    const index = app.getIndex(list, 9)
    expect(index).toBe(1)
  })

  it('should understand id', () => {
    const list = [1, { id: 9 }, 8]
    const index = app.getIndex(list, { id: 9 })
    expect(index).toBe(1)
  })
})

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

  it('should not damage references', () => {
    const item = { id: 'a' }
    const list = [
      item,
      { id: 'b' },
      { id: 'c' },
    ]

    const result = app.remove(list, 'b')
    item.name = 'banana'
    expect(result[0].name).toBe('banana')
  })

  it('should remove by ref', () => {
    const item = { id: 'b' }
    const list = [
      { id: 'a' },
      item,
      { id: 'c' },
    ]

    const result = app.remove(list, item)
    expect(result).toEqual([
      { id: 'a' },
      { id: 'c' },
    ])
  })
})

describe('replace', () => {
  it('should replace the item', () => {
    const list = [
      { id: 'a' },
      { id: 'b' },
      { id: 'c' },
    ]
    const newItem = {
      id: 'b',
      suprise: 'clown!',
    }

    const result = app.replace(list, newItem)
    expect(result).toEqual([
      { id: 'a' },
      newItem,
      { id: 'c' },
    ])
  })

  it('should replace the item by id', () => {
    const list = [
      { id: 'a' },
      { id: 'b' },
      { id: 'c' },
    ]
    const newItem = {
      id: 'b',
      suprise: 'clown!',
    }

    const result = app.replace(list, 'b', newItem)
    expect(result).toEqual([
      { id: 'a' },
      newItem,
      { id: 'c' },
    ])
  })

  it('should throw when it cannot find the item', () => {
    const newItem = {
      id: 'x',
      pooh: 'oh dear',
    }

    expect(() => {
      app.replace([], newItem)
    }).toThrow('not found')
  })

  it('should throw when there is no item', () => {
    expect(() => {
      app.replace([])
    }).toThrow('missing the item')
  })
})

describe('update', () => {
  it('should update the item', () => {
    const list = [
      { id: 'a' },
      {
        id: 'b',
        oldField: 'Kevin Bacon',
        color: 'green',
      },
      { id: 'c' },
    ]
    const newItem = {
      id: 'b',
      newField: 'Kevin Costner',
      color: 'chartreuse',
    }

    const result = app.update(list, newItem)
    expect(result).toEqual([
      { id: 'a' },
      {
        id: 'b',
        oldField: 'Kevin Bacon',
        color: 'chartreuse',
        newField: 'Kevin Costner',
      },
      { id: 'c' },
    ])
  })

  it('should update by id', () => {
    const list = [
      { id: 'a' },
      {
        id: 'b',
        oldField: 'Kevin Bacon',
        color: 'green',
      },
      { id: 'c' },
    ]
    const newItem = {
      id: 'b',
      newField: 'Kevin Costner',
      color: 'chartreuse',
    }

    const result = app.update(list, 'b', newItem)
    expect(result).toEqual([
      { id: 'a' },
      {
        id: 'b',
        oldField: 'Kevin Bacon',
        color: 'chartreuse',
        newField: 'Kevin Costner',
      },
      { id: 'c' },
    ])
  })

  it('should throw when it cannot find the item', () => {
    const newItem = {
      id: 'x',
      pooh: 'oh dear',
    }

    expect(() => {
      app.update([], newItem)
    }).toThrow('not found')
  })

  it('should throw when there is no item', () => {
    expect(() => {
      app.update([])
    }).toThrow('missing the item')
  })
})
