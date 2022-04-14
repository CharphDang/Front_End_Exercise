// 实现一个 GetRequired<T> 工具泛型，将 T 中的所有必需属性提取出来
;(() => {
  type GetRequired<T> = any // todo
  type T1 = GetRequired<{ name: string; age: number; sex?: string }>
  // T1 的期望是 {name: string, age: number}
})()
