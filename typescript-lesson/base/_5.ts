;(() => {
  interface User {
    // todo
    name: string
    age: number
    sex?: string
  }

  // 将 unknow 替换成更准确的类型
  let users: User[] = [
    {
      name: 'Jack Ma',
      age: 17,
      sex: 'male'
    },
    {
      name: 'Tony Ma',
      age: 18
    }
  ]
})()
// ? 小结：  根据实际值，定义interface 并给user定义正确的类型
;(() => {
  interface Person {
    name: string
  }

  interface Person {
    age: number
  }

  let ming: Person = {
    name: 'xiaoming',
    age: 12
  }
})()
// ? 小结： interface 是会合并的
