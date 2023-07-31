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
const word = ["i", "like", "playing", "valorant"]
const arrayToStrings = function (arr) {
  let holder = ""
  for (let i = 0; i < arr.length; i++) {
    holder += arr[i] + " "
  }
  console.log(holder)
}
arrayToStrings(word)

//No.3
const stringsToArray = function (arr) {
  let array = [""]
  let j = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr.charAt(i) == " ") {
      array.push(" ")
      j++
    } else {
      array[j] += arr.charAt(i)
    }
  }
  return array
}
const strings = "saya suka main valorant"
console.log(stringsToArray(strings))

//No.4
const calcArray = function (arr1, arr2) {
  var sum = arr1.map((arr1, index) => arr1 + arr2[index])

  return sum
}
const array1 = [1, 2, 3]
const array2 = [3, 2, 1]
console.log(calcArray(array1, array2))

//No.5
const nomor = [1, 2, 3, 4, 5, 6, 7, 9]
const addElement = function (element) {
  let nomorBaru = 0
  for (let i = 0; i < nomor.length; i++) {
    nomorBaru += element
  }
  console.log(nomorBaru)
}
// const nomorBaru = nomor.push(7)
// console.log(nomor)
console.log(addElement(8))
