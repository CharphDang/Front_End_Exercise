;(() => {
  // * ts code , iif you overwhrite the value type, it must have a error tip to tell you.
  let str = 'hello world'
  str = 123
})()

// ? 小结： ts类型推论， 如果没有显示声明，那么ts会自己根据变量的值去推断它的类型
