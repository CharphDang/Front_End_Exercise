// 解决 inputBgChange 函数报错，使函数能正常运行
// * 此问题建议线上调试练习，本地不报错  https://www.typescriptlang.org/play
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
})()
