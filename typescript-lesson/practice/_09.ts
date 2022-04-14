// 实现一个 AppendArgX<Fn, X> 工具泛型，对于给定的函数类型 Fn， 和任意的类型 X，
// 在 Fn  函数的传参末尾追加类型为 X 的参数
;(() => {
  type AppendArgX<Fn, X> = any // todo

  type Fn = (a: number, b: string) => number
  type NewFn = AppendArgX<Fn, boolean>
  // NewFn 期望是 (a: number, b: string, x: boolean) => number
})()
