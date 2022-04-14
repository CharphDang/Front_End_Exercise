;(() => {
  interface Person {
    readonly id: string
    age: number
    name: string
    [propName: string]: any
  }
  let jack: Person

  jack = {
    id: '1',
    age: 17,
    name: 'jack Ma',
    sex: 'male'
  }
  // success

  jack.id = 'newId' // ! error, 因为是只读属性，不能被赋值
})()

// ? 小结： 只读属性 和 任意属性的配置
