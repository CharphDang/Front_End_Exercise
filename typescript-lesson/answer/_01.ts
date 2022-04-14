// 为 numCompare 函数添加类型注解
;(() => {
  function numCompare(first: number, second: number): number {
    return first >= second ? first : second
  }
})()
