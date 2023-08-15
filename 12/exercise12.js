//No.1
function excel(alphabet) {
  const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let result = 0

  for (var i = 0; i < alphabet.length; i++) {
    let findAlphaNumber = 0
    let temp = 0
    for (var j = 0; j < alphabet.length; j++) {
      if (alphabets[j] == alphabet[i]) {
        findAlphaNumber = j + 1
        break
      }
    }

    temp = findAlphaNumber * Math.pow(26, alphabet.length - i - 1)
    result += temp
  }
  return result
}

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
