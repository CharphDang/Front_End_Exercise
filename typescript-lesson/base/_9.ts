// 泛型
;(() => {
  function findFirst(arr: number[]): number {
    return arr[0]
  }

  findFirst([1])
})()
;(() => {
  function findFirst(arr: string[]): string {
    return arr[0]
  }

  findFirst(['1'])
})()
;(() => {
  function findFirst<T>(arr: T[]): T {
    return arr[0]
  }

  findFirst(['1'])
  findFirst<number>([1])
  findFirst<boolean>([true])
  findFirst([])
})()
;(() => {
  function contact<Pre, Next>(arr: Pre[], msg: Next): string {
    return `${arr[0]}-${msg}`
  }

  contact([true], '1')
})()

// ? 小结： 泛型的基本使用， 就是函数的传参的基础类型设置， 函数有几个参数，就可以设置几个泛型传参
// ! 但是泛型功能过于强大，为了避免滥用，需要使用泛型约束， 请移步到_10.ts中查看
