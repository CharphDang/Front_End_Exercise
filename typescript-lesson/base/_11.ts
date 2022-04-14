;(() => {
  // InferType 中定义了泛型变量 T 如果是 (infer R)[]  （R 为待推断的类型变量）的子集，则返回类型 R，否则返回类型 T；
  // 当我们传入 string[] 时，InferType 的判断相当于string[] extends R[] ? R : string[] ，判断为 true，R 被推断为 string，所以 T1 的类型返回值为 string；
  // 当我们传入 number 时，InferType 的判断相当于 number extends R[] ? R : number， 在这里 number 不符合 R[]，所以 T2 的类型返回值为 number。

  type InferType<T> = T extends (infer R)[] ? R : T

  type T1 = InferType<string[]>
  // string
  type T2 = InferType<number>
  // number
})()
;(() => {
  type InferObj<T> = T extends { type: infer R } ? R : false

  type T1 = InferObj<number>
  // false
  type T2 = InferObj<{ type: number }>
  // number
})()

// * 练习，使用泛型推断infer 来实现
;(() => {
  type FuncReturnType<T> = T extends (...args: any[]) => infer R ? R : void

  type fn = (name: string) => boolean

  type T1 = FuncReturnType<fn>
  // T1 应为boolean类型
})()
// ? 泛型推断
