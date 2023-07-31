//No.1
const celcius = 90
const fahrenheit = (9 / 5) * celcius + 32
console.log(fahrenheit)

//No.2
const checkOddNumber = function (number) {
  if (number % 2 === 0) {
    console.log("It is an even number")
  } else {
    console.log("It is an odd number")
  }
}
checkOddNumber(8)

//No.3
const checkPrimeNumber = function (number) {
  if (number / 1 === number && number / number === 1) {
    console.log("This is a prime number")
  } else {
    console.log("This is not a prime number")
  }
}
// checkPrimeNumber(25)

var prima = 81
let isPrime = true

if (prima > 1) {
  // loop untuk mencari prima
  for (let i = 2; i < prima; i++)
    if (prima % i == 0) {
      isPrime = false
      break
    }

  if (isPrime) {
    console.log(`${prima} adalah bilangan prima`)
  } else {
    console.log(`${prima} bukan bilangan prima`)
  }
} else if (prima === 1) {
  console.log(`${prima} bukan bilangan prima`)
} else {
  console.log("error")
}

//No.4
let sum = 0
let number = 5
for (let i = 0; i <= number; i++) {
  sum = sum + i
  // console.log(sum)
}

//No.5
let fact = 1
let n = 5
for (let i = 1; i <= n; i++) {
  fact *= i
  // console.log(fact)
}

//No.6
// 0 1 1 2 3 5 8 13 21
const checkfibonacci = function (num) {
  let num1 = 0
  let num2 = 1
  let sum
  let j = 0
  for (j = 0; j < num; j++) {
    sum = num1 + num2
    num1 = num2
    num2 = sum
  }
  return num2
}
console.log(checkfibonacci(5))
