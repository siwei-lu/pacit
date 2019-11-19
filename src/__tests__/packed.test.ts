import pacit from '../pacit'

const addOne = (num: number) => num + 1

describe('chaine()', () => {
  describe('number', () => {
    it('returns a chained object wrapping the number', () => {
      const result = pacit(100)
        .pipe(addOne)
        .and(n => expect(n).toBe(101))
        .valueOf()

      expect(result).toBe(101)
    })
  })

  describe('string', () => {
    it('returns a chained object wrapping the string', () => {
      const result = pacit('hello')
        .pipe(s => s.toUpperCase())
        .and(s => expect(s).toBe('HELLO'))
        .pipe(s => s.substr(0, 4))
        .and(s => expect(s).toBe('HELL'))
        .valueOf()

      expect(result).toBe('HELL')
    })
  })

  describe('boolean', () => {
    it('returns a chained object wrapping the boolean', () => {
      const result = pacit(false)
        .pipe(() => true)
        .pipe(b => (b ? 'true' : 'false'))
        .and(s => expect(s).toBe('true'))
        .valueOf()

      expect(result).toBe('true')
    })
  })

  describe('array', () => {
    it('returns a chained object wrapping the array', () => {
      const result = pacit([1, 2, 3])
        .pipe(s => s.map(addOne))
        .and(a => expect(a).toEqual([2, 3, 4]))
        .valueOf()

      expect(result).toEqual([2, 3, 4])
    })
  })

  describe('undefined', () => {
    it('returns a chained object wrapping the undefined', () => {
      const result = pacit(undefined)
        .and(u => expect(u).toBeUndefined())
        .valueOf()

      expect(result).toBeUndefined()
    })
  })
})
