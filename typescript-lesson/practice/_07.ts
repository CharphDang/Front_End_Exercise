// 实现一个 Includes<T, K> 工具泛型，T 为一个数组类型，判断 K 是否存在于 T 中，
// 若存在返回 true，否则返回 false
;(() => {
  type Includes<T, K> = any
  type T1 = Includes<['name', 'age', 'sex'], 'name'>
  // T1 的期望为 true

  type T2 = Includes<['name', 'age', 'sex'], 'name'>
  // T2 的期望为 false
})()
