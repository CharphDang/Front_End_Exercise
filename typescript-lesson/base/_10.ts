;(() => {
  interface Lengthwise {
    length: number
  }

  function getLength<T extends Lengthwise>(arg: T): number {
    return arg.length
  }

  getLength([1, 2])
})()
;(() => {
  type Diff<T, U> = T extends U ? never : T

  type diff = Diff<string | number | boolean, string | number>

  // 上面的判断中，当 T 是 U 的子集，则返回 never 类型，否则返回 T ，所以最后 diff 的类型是 never | boolean | never ，
  // 由于任意类型与 never 联合都不受 never 影响，所以最后 diff 类型为 boolean。
})()
// * 练习题， 用泛型约束extends来解答
;(() => {
  type If<C, T, F> = any // todo

  type T1 = If<true, boolean, number>
  // T1 为 boolean 类型
  type T2 = If<false, boolean, number>
  // T2 为 number 类型
})()

// ? 小结： 泛型约束 (extends)
