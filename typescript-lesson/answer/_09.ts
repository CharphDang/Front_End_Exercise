// 实现一个 AppendArgX<Fn, X> 工具泛型，对于给定的函数类型 Fn， 和任意的类型 X，
// 在 Fn  函数的传参末尾追加类型为 X 的参数
;(() => {
  type AppendArgX<Fn, X> = Fn extends (...args: infer P) => infer R
    ? (...args: [...P, X]) => R
    : never // todo

  type Fn = (a: number, b: string) => number
  type NewFn = AppendArgX<Fn, boolean>
  // NewFn 期望是 (a: number, b: string, x: boolean) => number
})()

// ? 思维必须要想到是通过泛型推断infer来做，一个是返回值的推断，一个是函数传参的推断
