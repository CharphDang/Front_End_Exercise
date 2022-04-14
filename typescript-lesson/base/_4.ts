;(() => {
  function inputBgChange(): void {
    let oInput: HTMLInputElement
    if (document.querySelector('.oInput')) {
      oInput = document.querySelector('.oInput') as HTMLInputElement
      oInput.style.background = 'red'
    } else {
      oInput = document.createElement('input')
      document.body.appendChild(oInput)
      oInput.className = 'oInput'
      oInput.style.background = 'red'
    }
  }

  let someValue: any = 'this is a string'
  // * 强烈推荐使用 as 语法，ts 中使用JSX时，只允许 as 语法
  let strLength: number = (someValue as string).length
  console.log(strLength) // Charph-log
})()
// ? 小结： 用 as 来告诉ts， 你知道自己在干什么。
