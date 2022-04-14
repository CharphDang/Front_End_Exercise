;(() => {
  // * ts code, if you input some error type, you'll get a error tips
  function numCompare(first: number, second: number) {
    return first >= second ? first : second
  }

  const correct = numCompare(12, 2)
  const error = numCompare('12', '2')
  console.log(correct, error) // Charph-log
})()

// ? 本小结内容： 类型注解的使用
