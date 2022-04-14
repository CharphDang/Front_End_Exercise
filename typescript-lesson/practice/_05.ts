// 实现 FuncReturnType 工具泛型，接受一个函数类型，并且推断出函数的返回值。
;(() => {
  type FuncReturnType<T> = any // todo

  type fn = (name: string) => boolean

  type T1 = FuncReturnType<fn>
  // T1 应为boolean类型
})()
