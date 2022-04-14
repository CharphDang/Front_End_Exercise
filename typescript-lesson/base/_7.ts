// * 高级类型
;(() => {
  // 1. 类型别名
  type StrName = string
  let ahaname: StrName = '123'

  // 2. 联合类型，满足其中之一就可以
  type UnionType =
    | string
    | number
    | {
        name: string
      }

  let str: UnionType = 'hello world'
  let num: UnionType = 1
  let a: UnionType = {
    name: '123'
  }

  // * 任意类型与 never 联合都不受 never 影响
  type Tnumber = number | never
  // number
  type Tstring = string | never
  // string

  // 3.交叉类型，就是类型的合并，需要满足所有条件
  interface Person {
    name: string
    age: number
  }

  interface Animal {
    walk: boolean
  }

  let jack: Person & Animal

  jack = {
    name: 'jack',
    age: 17,
    walk: true
  }

  jack = {
    name: 'jack',
    age: 17
  }

  type combineType = {
    age: number
  } & {
    name: string
  }

  let combineVal: combineType = {
    name: '123',
    age: 123
  }

  // * 任意类型与 never 交叉都得到 never
  type Ttnumber = number & never
  // never
  type Ttstring = string & never
  // never
  let anyVal: Ttnumber
  anyVal = undefined
})()
