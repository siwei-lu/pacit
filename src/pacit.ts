type BaseFunction<T> = (value: T) => any

class Packed<T> {
  constructor(private value: T) {}

  pipe<F extends BaseFunction<T>>(func: F): Packed<ReturnType<F>> {
    return chaine(func(this.value))
  }

  and<F extends BaseFunction<T>>(func: F) {
    func(this.value)
    return this
  }

  valueOf() {
    return this.value
  }
}

export default function chaine<T>(value: T) {
  return new Packed<T>(value)
}
