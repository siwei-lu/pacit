import pacit from '../pacit'
import * as R from 'ramda'

describe('an algorithm to reverse a number', () => {
  const solution = (num: number) =>
    pacit(num)
      .map(String)
      .map(R.reverse)
      .map(parseInt)
      .map(n => (num < 0 ? -n : n))
      .valueOf()

  it('returns the result', () => {
    const actual = solution(123)
    expect(actual).toBe(321)
  })

  it('returns a negative', () => {
    const actual = solution(-123)
    expect(actual).toBe(-321)
  })
})
