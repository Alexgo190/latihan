//No.1
var number = 9
for (let i = 1; i <= 10; i++) {
  console.log(`${number} x ${i}`)
}

//No.2
function palindrome(str) {
  var newString = ""
  for (var i = str.length - 1; i >= 0; i--) {
    newString += str[i]
    // console.log(str[i])
  }
  if (str === newString) {
    console.log(`Kata ${str} itu palindrom`)
  } else if (str !== newString) {
    console.log(`Kata ${str} itu bukan palindrom`)
  }
}

palindrome("aadaabcda")

//No.3
const convertToKM = function (distance) {
  const kilometer = distance / 100000
  return kilometer
}
console.log(convertToKM(10000))

//No.4

function angkaToRp(angka) {
  var angkaAwal = parseInt(angka).toString().split("").reverse().join("")

  var penampung = ""

  for (var i = 0; i < angkaAwal.length; i++) {
    penampung += angkaAwal[i]

    if ((i + 1) % 3 === 0 && i !== angkaAwal.length - 1) {
      penampung += "."
    }
    /* 
        0123456
        
        0000001

      
      */
  }

  return "Rp. " + penampung.split("").reverse().join("") + ",00"
}
console.log(angkaToRp(1000000))

//No.5
const string = "hello world"
const removeWord = function (word) {
  const removal = string.replaceAll(word, "")
  return removal
}
console.log(removeWord("h"))

//No.6

const capitalizeFirstLetter = function (character) {
  const str = character.split(" ")
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1)
  }
  const str2 = str.join(" ")
  return str2
}
console.log(capitalizeFirstLetter("main valorant"))

//No.7
var word = "word"
var holder = ""
for (var i = word.length - 1; i >= 0; i--) {
  holder += word[i]
}
console.log(holder)

//No.8
var str = "sAyA kODing inI daRi MaLaM sAmPAi pAgI"
var upper = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`
var lower = "abcdefghijklmnopqrstuvwxyz"
var result = []

for (var i = 0; i < str.length; i++) {
  if (upper.includes(str[i])) {
    result.push(str[i].toLowerCase())
  } else if (lower.includes(str[i])) {
    result.push(str[i].toUpperCase())
  } else {
    result.push(str[i])
  }
}

console.log(result.join(""))

//No.9
const findLargest = function (a, b) {
  if (parseInt(a) > parseInt(b)) {
    console.log(`Angka ${a} lebih besar daripada ${b}`)
  } else if (parseInt(a) < parseInt(b)) {
    console.log(`Angka ${b} lebih besar daripada ${a}`)
  }
}
findLargest(90, 100)

//No.10
const sortNumbers = function (a, b, c) {
  if (a < b && a < c) {
    if (b < c) {
      console.log(`${a},${b},${c}`)
    } else {
      console.log(`${a},${c},${b}`)
    }
  } else if (b < a && b < c) {
    if (a < c) {
      console.log(`${b},${a},${c}`)
    } else {
      console.log(`${b},${c},${a}`)
    }
  } else if (c < a && c < b) {
    if (a < b) {
      console.log(`${c},${a},${b}`)
    } else {
      console.log(`${c},${b},${a}`)
    }
  }
}
sortNumbers(50, 100, 80)

//No.11
var character = true
switch (typeof character) {
  case "string":
    console.log(1)
    break
  case "number":
    console.log(2)
    break
  default:
    console.log(3)
}

//No.12
var strings = "An apple a day keeps the doctor away"
var holder1 = strings.toString().toLowerCase().split("")
var result = ""
for (var i = 0; i < holder1.length; i++) {
  if (holder1[i] === "a") {
    result += "*"
  } else {
    result += holder1[i]
  }
}
console.log(result)

let a = ["1", "2", "3", "2"]
const resSome = a.some((e) => {
  return e === "2"
})
// console.log(resSome)
