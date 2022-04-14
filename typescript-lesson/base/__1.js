;(() => {
  // ! js code, should be number arguments, but you might input string.
  function numCompare(first, second) {
    return first >= second ? first : second
  }

  const correct = numCompare(12, 2)
  const error = numCompare('12', '2')
  console.log(correct, error) // Charph-log
})()
