// 实现一个 If 工具泛型，接受一个条件 C，若 C 为 true 返回类型 T 类型，否则返回 F 类型。
;(() => {
  type If<C extends boolean, T, F> = C extends true ? T : F // todo

  type T1 = If<true, boolean, number>
  // T1 为 boolean 类型
  type T2 = If<false, boolean, number>
  // T2 为 number 类型
})()
