import pacit from '../pacit'

const addOne = (num: number) => num + 1

describe('pack a number', () => {
  it('returns a packed object wrapping the number', () => {
    const result = pacit(100)
      .map(addOne)
      .and(n => expect(n).toBe(101))
      .valueOf()

    expect(result).toBe(101)
  })
})

describe('pack a string', () => {
  it('returns a packed object wrapping the string', () => {
    const result = pacit('hello')
      .map(s => s.toUpperCase())
      .and(s => expect(s).toBe('HELLO'))
      .map(s => s.substr(0, 4))
      .and(s => expect(s).toBe('HELL'))
      .valueOf()

    expect(result).toBe('HELL')
  })
})

describe('pack a boolean', () => {
  it('returns a packed object wrapping the boolean', () => {
    const result = pacit(false)
      .map(() => true)
      .map(b => (b ? 'true' : 'false'))
      .and(s => expect(s).toBe('true'))
      .valueOf()

    expect(result).toBe('true')
  })
})

describe('pack an array', () => {
  it('returns a packed object wrapping the array', () => {
    const result = pacit([1, 2, 3])
      .map(s => s.map(addOne))
      .and(a => expect(a).toEqual([2, 3, 4]))
      .valueOf()

    expect(result).toEqual([2, 3, 4])
  })
})

describe('pack an undefined', () => {
  it('returns a packed object wrapping the undefined', () => {
    const result = pacit(undefined)
      .and(u => expect(u).toBeUndefined())
      .valueOf()

    expect(result).toBeUndefined()
  })
})
