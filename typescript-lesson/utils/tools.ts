// * 为了方便开发者更好的使用类型，TypeScript 内置了一些常用的工具泛型。
;(() => {
  // 1. Partial 可以将类型中的所有属性变成可选属性
  // type Partial<T> = { [P in keyof T]?: T[P] }

  interface Person {
    name: string
    age: number
  }
  type T1 = Partial<Person>

  // 相当于
  // type T1 = {
  //   name?: string
  //   age?: number
  // }

  type T = Exclude<1 | 2 | 3 | 4 | 5, 3 | 4>

  interface Person {
    name: string
    age: number
    sex: string
  }
  // 2. Pick 通常用来将 T 类型中存在的 K 键提取出来生成一个新的类型
  type newPerson = Pick<Person, 'name' | 'age'>
  let person: newPerson = {
    name: '小王',
    age: 21
  }
})()
