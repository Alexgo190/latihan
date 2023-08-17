//No.1
const findNumber = function (numbers) {
  const lowest = Math.min(...numbers)
  const highest = Math.max(...numbers)
  let sum = 0
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]
  }
  let average = sum / numbers.length

  console.log(lowest, highest, average)
}

const arr = [1, 2, 3, 5, 6, 8, 7, 9, 10, 10]
findNumber(arr)

//No.2
const word = ["Hey", "Alexander", "Steve"]
// const arrayToStrings = function (arr) {
//   let addComma = arr.slice(0, 2).join(", ")
//   let addAnd = arr.slice(1, 3).join(" and ")
//   let mixCommaAnd = addAnd.slice(9)
//   let holder = addComma + mixCommaAnd
//   console.log(holder)
// }
// arrayToStrings(word)
const words = ["saya", "sedang", "ngoding", "tugas", "bootcamp"]
const arrayToStrings = function (arr) {
  let newStr = ""
  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      newStr += " and " + arr[i]
    } else if (i > 0) {
      newStr += ", " + arr[i]
    } else {
      newStr += arr[i]
    }
  }
  return newStr
}
console.log(arrayToStrings(words))

//No.3
const strToArr = function (str, needle) {
  let newArray = []
  let holder = ""
  for (let i = 0; i < str.length; i++) {
    if (str[i] === needle) {
      newArray.push(holder)
      holder = ""
    } else {
      holder += str[i]
    }
  }
  newArray.push(holder)
  return newArray
}

console.log(strToArr("Hello World I am Alexander", " "))

const stringsToArray = function (str) {
  let array = [""]
  let j = 0
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) == " ") {
      array.push(" ")
      j++
    } else {
      array[j] += str.charAt(i)
    }
  }
  return array
}

const strings = "Hello World I am Alexander"
// console.log(stringsToArray(strings))

//No.4
const calcArray = function (arr1, arr2) {
  const newArr = arr1.map((arr1, index) => arr1 + arr2[index])
  return newArr
}
const array1 = [1, 2, 3]
const array2 = [3, 2, 1]
console.log(calcArray(array1, array2))

//No.5
const nomor = [1, 2, 3, 4, 5, 6, 7, 9]
const addElement = function (arr, number) {
  if (arr.includes(number)) {
    return nomor
  } else {
    return [...arr, number]
  }
}

console.log(addElement(nomor, 5))

//No.6
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const findEvenNumbers = function (arr) {
  const newNumber = []
  arr.map((e) => {
    if (e % 2 === 0) {
      newNumber.push(e)
    }
  })
  return newNumber
}

console.log(findEvenNumbers(number))

const array = [
  "so**me %$of $y(o)u m%$ay% @d#@ie*",
  "bu&t% its o^nly sac#rifice i@am wil(ling) t$o ma*&ke",
  "he%l*lo, w$o(r)*l@d!",
  "a-r^e y$o#u st*)ill c*(o)d*(i@n$g?",
  "1&2%$34 i>t<s n:o}t m}y p*a*s^%sw$%o#@rd",
]

const clearSentence = function (arr) {
  let result = []
  let alphabets = "abcdefghijklmnopqrstuvwxyz"
  let numbers = "0123456789"
  let others = " !?,."

  for (let i = 0; i < arr.length; i++) {
    let newString = ""
    for (let j = 0; j < arr[i].length; j++) {
      if (
        alphabets
          .split("")
          .findIndex((item) => item === arr[i][j].toLowerCase()) !== -1 ||
        numbers.split("").findIndex((item) => item === arr[i][j]) !== -1 ||
        others.split("").findIndex((item) => item === arr[i][j]) !== -1
      ) {
        newString += arr[i][j]
      }
    }
    result.push(newString)
  }
  return result
}

console.log(clearSentence(array))

///////////////////////////////////////////////////////
// const staircase = function (n) {
//   let string = ""
//   for (let i = 1; i <= n; i++) {
//     //print spaces
//     for (let k = 0; k < n - i; k++) {
//       string += " "
//     }
//     //print hash
//     for (let j = 0; j < i; j++) {
//       string += "#"
//     }
//     string += "\n"
//   }
//   console.log(string)
// }
// staircase(3)
/////////////////////////////////////////////////////////

////////////////////////////////////////////////////////
// const grading = function (grad) {
//   let newGrad = []
//   for (let i = 0; i < grad.length; i++) {
//     if (grad[i] >= 38) {
//       let remain = grad[i] % 5
//       if (remain === 3) {
//         newGrad.push(grad[i] + 2)
//       } else if (remain === 4) {
//         newGrad.push(grad[i] + 1)
//       } else {
//         newGrad.push(grad[i])
//       }
//     } else {
//       newGrad.push(grad[i])
//     }
//   }
//   return newGrad
// }
// const grade = [40, 38, 42, 50, 78, 22, 20, 69]

// console.log(grading(grade))
////////////////////////////////////////////////////////

////////////////////////////////////////////////////////
// const compareTriplets = function (arrA, arrB) {
//   let newArr = [0, 0]
//   for (let i = 0; i < arrA.length; i++) {
//     if (arrA[i] > arrB[i]) {
//       newArr[0] += 1
//     } else if (arrA[i] < arrB[i]) {
//       newArr[1] += 1
//     } else {
//       newArr[(0, 1)] += 0
//     }
//   }
//   return newArr
// }

// const arrA = [4, 3, 4]
// const arrB = [3, 2, 5]
// console.log(compareTriplets(arrA, arrB))
////////////////////////////////////////////////////////
