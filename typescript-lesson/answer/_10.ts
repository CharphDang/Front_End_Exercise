// 实现一个 GetRequired<T> 工具泛型，将 T 中的所有必需属性提取出来
// * 思路： 先把必须的属性提取出来， 然后 生成新的类型
;(() => {
  type RequiredKeys<T> = keyof T extends infer K
    ? K extends keyof T
      ? T[K] extends Required<T>[K]
        ? K
        : never
      : never
    : never

  type GetRequired<T> = {
    [key in RequiredKeys<T>]: T[key]
  }

  type T1 = GetRequired<{ name: string; age: number; sex?: string }>
  // T1 的期望是 {name: string, age: number}
  let t1: T1 = {
    name: '1',
    age: 1
  }
})()

// ? 小结： T[K] extends Required<T>[K] ? K : never 这句就可以把必需的属性提取出来
