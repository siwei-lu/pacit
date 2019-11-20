# pacit [![CircleCI](https://circleci.com/gh/IdanLoo/pacit.svg?style=svg)](https://circleci.com/gh/IdanLoo/pacit)

make JavaScript chainable and more readable.

## How to use

### Install

```bash
npm install --save pacit
# or
yarn add pacit
```

### API

There are only 4 methods you should notice.

- `pacit` pack a value

```js
import pacit from 'pacit'

pacit(123) // pack a number
pacit('test') // pack a string
pacit({ foo: 'bar' }) // pack an object
pacit([123]) // pack an array
```

- `map` map the value to another. It accepts a pure function.

```js
const addOne = (n: number) => n + 1
const result = pacit(123)
  .map(addOne)
  .valueOf()

console.log(result) // 124
```

- `and` execute some side effect here. It returns the original value whatever the return value of the function you pass in is.

You can get rid of any `and` at any time.

```js
const result = pacit(123)
  .map(addOne)
  .and(console.log) // 124
  .map(addOne)
  .and(console.log) // 125
  .and(addOne) // nothing happends here
  .valueOf()

console.log(result) // 125
```

- `valueOf` unpack and get the value in it

```js
pacit(123)
  .map(addOne)
  .valueOf() // return 124
```

## Why This

For last few years, I was constantly trying to make JavaScript more functional. I used `underscore`, `lodash` and `ramda` and all of them are nice.

However, recently I found JavaScript might be not so functional, despite of somewhat features of functional programming supported.

Suppose we need to reverse digits of a given integer. We probably do like this if using basic JavaScript.

### Basic JavaScript

```js
function solution(num) {
  const str = String(num)
  const arr = str.split('')
  const reversedArr = arr.reverse()
  const reversedStr = arr.join('')

  return parseInt(reversedStr)
}
```

Annoying! We have to make up 4 names for these variables. Or we can merge some actions

```js
function solution(num) {
  const str = String(num)
  const reversed = str
    .split('')
    .reverse()
    .join('')

  return parseInt(reversed)
}
```

More clearer huh! But we still have to make up two names at least. Let try with `Ramda`

### Ramda

```js
const solution = R.pipe(String, R.reverse, parseInt))
```

Pretty good! I used to love this way. Because of the limitation of TypeScript, the `pipe` methods cannot accept too many arguments.

### Pacit

As I use `React`, I tend to focus on data only.

```js
const solution = (num: number) =>
  pacit(num)
    .map(String)
    .add(console.log) // You can use `add` anywhere you like. Since it will not affect the value, it's easy to be removed.
    .map(R.reverse)
    .add(alert)
    .map(parseInt)
    .valueOf()
```
