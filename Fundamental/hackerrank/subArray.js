const subArray = function (s, d, m) {
  let matches = 0
  for (let i = 0; i < s.length; i++) {
    let subarr = s.slice(i, i + m)
    // console.log(subarr)
    let sum = subarr.reduce((a, b) => a + b)
    if (sum == d) {
      matches++
    }
  }
  return matches
}

const arr = [1, 2, 1, 3, 2]
console.log(subArray(arr, 3, 2))
