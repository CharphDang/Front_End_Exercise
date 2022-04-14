// * 操作符
// 1. typeof 操作符可以用来获取一个变量的声明类型。
;(() => {
  const jack = {
    name: 'jack Ma',
    age: 18
  }
  type Person = typeof jack
  // { name: string, age: number }

  const hello: string = 'hello world'
  type Hello = typeof hello
  // string
  let a: Hello = '123'
})()
// 2. keyof 操作符用来获取一个类型所有的键值，与 Object.keys 类似，前者获取 interface 的键，后者获取对象的键。
;(() => {
  interface Person {
    name: 'jack Ma'
    age: 17
  }
  type T1 = keyof Person
  // 'name' | 'age'

  interface People {
    name: string
    age: number
  }

  // * 通常 keyof 会配合着 typeof 使用
  function getPersonValue(obj: People, key: keyof typeof obj): string | number {
    return obj[key]
  }

  let person: People = {
    name: 'xiaoming',
    age: 1
  }
  getPersonValue(person, 'age') // * 此处会弹出key的提示，让其选择
})()

// 3. in 操作符通常用来实现枚举类型遍历
;(() => {
  type Keys = 'name' | 'age'
  type Base = {
    [key in Keys]: any
  }
  // { name: any, age: any }
})()

// ?  小结： typeof keyof 通常配合使用， in 操作符也是在type类型中使用，interface不识别这种写法
