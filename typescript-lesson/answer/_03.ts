// 补充完整接口 User 的定义，并且为 users 提供更加准确的类型注解。
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
