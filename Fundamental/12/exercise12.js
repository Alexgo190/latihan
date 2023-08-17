//No.1
const excel = function (alphabet) {
  let sum = 0
  // ABC => A = 0 * 26 + 1 = 1 , B => 1 * 26 + 2 = 28 , C => 28 * 26 + 3 = 729
  for (let i = 0; i < alphabet.length; i++) {
    sum = sum * 26 + (alphabet.charCodeAt(i) - 64)
  }
  return sum
}

console.log(excel("ABA"))

//No.2
const findSingle = function (arr) {
  const sortedArr = arr.sort()
  for (let i = 0; i < sortedArr.length; i += 2) {
    if (sortedArr.length > 1) {
      if (sortedArr[i] !== sortedArr[i + 1]) {
        return sortedArr[i]
      }
    } else {
      return sortedArr[0]
    }
  }
}
console.log(findSingle([2, 2, 3, 3, 8]))

//No.3
const anagram = function (s, t) {
  if (s.length !== t.length) {
    return false
  }

  const splitS = s.split("").sort().join()
  const splitT = t.split("").sort().join()

  return splitS === splitT
}
console.log(anagram("abc", "cba"))
console.log(anagram("car", "rat"))

//No.4
const stairCase = function (n) {
  if (n < 4) {
    return n
  } else {
    return stairCase(n - 1) + stairCase(n - 2)
  }
}
console.log(stairCase(5))
console.log(stairCase(4))
