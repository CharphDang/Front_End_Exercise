// TypeScript 中有一个 ReadOnly<T> 工具泛型，它的功能是将 T 的所有属性变成只读属性
;(() => {
  interface Person {
    name: string
    age: number
  }

  const jack: Readonly<Person> = {
    name: 'jack Ma',
    age: 17
  }
  jack.name = 'jack'
  // error, name 属性为只读
})()

// 现在我们需要把它改造一下，实现一个 MyReadOnly<T, K> ，K 应为 T 的属性集，
// 若指定 K ，则将 T 中对应的属性修改成只读属性，若不指定 K ，则将所有属性变为只读属性。
