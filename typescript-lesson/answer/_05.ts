// 实现 FuncReturnType 工具泛型，接受一个函数类型，并且推断出函数的返回值。
;(() => {
  type FuncReturnType<T> = T extends (...args: any[]) => infer R ? R : any // todo

  type fn = (name: string) => boolean

  type T1 = FuncReturnType<fn>
  // T1 应为boolean类型
})()

// * 函数参数的使用技巧， (...args: any[])， 先是...rest运算符，将参数转为数组， 然后是any[]类型注解
