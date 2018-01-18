import { remove } from './'
import { replace } from './'
import { update } from './'

describe('remove', () => {
  it('should work', () => {
    const list = [
      { id: 'a' },
      { id: 'b' },
      { id: 'c' },
    ]

    const actual = remove(list, { id: 'b' })

    const expected = [
      { id: 'a' },
      { id: 'c' },
    ]

    expect(actual).toEqual(expected)
  })
})

describe('replace', () => {
  it('should work', () => {
    const list = [
      { id: 'a' },
      { id: 'b' },
      { id: 'c' },
    ]

    const actual = replace(list, {
      id: 'b',
      suprise: 'clown!',
    })

    const expected =[
      { id: 'a' },
      { id: 'b', suprise: 'clown!' },
      { id: 'c' },
    ]
  })
})

describe('update', () => {
  it('should work', () => {
    const list = [{
      id: 'a',
      oldField: 'Kevin Bacon',
      color: 'green',
    }]

    const actual = update(list, {
      id: 'a',
      newField: 'Kevin Costner',
      color: 'chartreuse',
    })

    const expected =[{
      id: 'a',
      oldField: 'Kevin Bacon',
      color: 'chartreuse',
      newField: 'Kevin Costner',
    }]
  })
})
