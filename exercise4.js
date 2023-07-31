//No.1
let string = ""
let count = 1
const triangle = function (height) {
  for (let i = 1; i <= height; i++) {
    for (let j = 1; j <= i; j++) {
      string += count.toString().padStart(2, "0") + " "
      count++
    }
    string += "\n"
  }
  console.log(string)
}

triangle(5)

//No.2
let n = ""
const fizzBuzz = function (n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0) {
      console.log("Fizz")
    } else if (i % 5 === 0) {
      console.log("Buzz")
    } else if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz")
    } else {
      console.log(i)
    }
  }
}
fizzBuzz(15)

//No.3
const calcBMI = function (weight, height) {
  const heights = height / 100
  const formula = weight / heights ** 2
  if (formula < 18.5) {
    console.log("Your BMI is less weight")
  } else if (formula >= 18.5 && formula <= 24.9) {
    console.log("Your BMI is ideal")
  } else if (formula >= 25 && formula <= 29.9) {
    console.log("Your BMI is overweight")
  } else if (formula >= 30 && formula <= 39.9) {
    console.log("Your BMI is very overweight")
  } else {
    console.log("Your BMI is obesity")
  }
}

calcBMI(70, 173)

//No.4
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const removeOdd = function (arr) {
  const newArr = []
  arr.map((e) => {
    if (e % 2 === 0) {
      newArr.push(e)
    }
  })
  return newArr
}

console.log(removeOdd(arr))

//No.5
const stringsToArray = function (str) {
  let arr = [""]
  let j = 0
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) == " ") {
      j++
      arr.push("")
    } else {
      arr[j] += str.charAt(i)
    }
  }
  return arr
}

const atr = stringsToArray("i am a fullstack developer")
console.log(atr)
