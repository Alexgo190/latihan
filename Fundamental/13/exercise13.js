//No.1
const weekend = function (date) {
  const dates = new Date(date).toDateString().slice(0, 3)
  //   console.log(dates)
  if (dates === "Sat" || dates === "Sun") {
    console.log("It's weekend")
  } else {
    console.log("It's weekday")
  }
}

//No.2

//No.3

weekend("2023-08-12")

//No.4
const str = "hellllllllooo"
const str2 = "abbbbbcccccccccccccdd"
const common = function (str) {
  const charMap = {}
  let max = 0
  let maxChar = ""

  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++
    } else {
      charMap[char] = 1
    }
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char]
      maxChar = char
    }
  }
  return maxChar
}

console.log(common(str))
console.log(common(str2))

//No.5
const sortString = function (str) {
  for (let i = 0; i < str.length; i++) {
    let temp = null
    for (let j = 0; j < str.length; j++) {
      if (str[i][0] < str[j][0]) {
        temp = str[i]
        str[i] = str[j]
        str[j] = temp
      }
    }
  }
  return str
}
console.log(sortString(["alexander", "galih", "rambo"]))

//No.6
const minimumDate = function (dates) {
  let minDate = new Date(dates[0])

  for (let i = 0; i < dates.length; i++) {
    if (minDate > new Date(dates[i])) {
      minDate = new Date(dates[i])
    }
  }
  return minDate
}

console.log(
  minimumDate(["2022-10-05", "2010-09-10", "1998-10-12", "2001-06-04"])
)

//No.7
const sumMultiArray = function (arr) {
  let result = 0
  for (let i = 0; i < arr.length; i++) {
    let row = 0
    for (let j = 0; j < arr[i].length; j++) {
      row += arr[i][j]
    }
    result += row
  }
  return result
}
//                              6       7      1       12       19
console.log(sumMultiArray([[1, 2, 3], [3, 4], [1], [4, 3, 5], [5, 6, 2, 6]]))

//No.8
const prefix = function (arr) {
  let match = true
  let result = ""
  let i = 0

  while (match) {
    let tempPrefix = arr[0][i]

    for (let j = 1; j < arr.length; j++) {
      if (tempPrefix != arr[j][i]) {
        return result
      }
    }
    result += tempPrefix
    i++
  }
}

console.log(prefix(["cat", "car", "cattle"]))
console.log(prefix(["ban", "bar", "battle"]))

//No.9
const array = [1, 2, 3, 4, 5]
const firstHalf = function (arr) {
  const middleArr = Math.floor(arr.length / 2)
  return arr.slice(0, middleArr + 1)
}
console.log(firstHalf(array))

//No.10
const getDaysinMonth = function (month, year) {
  if (month < 7 && month % 2 === 0) {
    // tangan kiri genap dan tangan kanan ganjil
    return 30
  } else if (month > 7 && month % 2 !== 0) {
    return 30
  } else if (month < 7 && month % 2 !== 0) {
    // tangan kiri ganjil dan tangan kanan genap
    return 31
  } else if (month > 7 && month % 2 === 0) {
    return 31
  } else if (month == 7 || month == 8) {
    return 31
  } else if (year % 4 === 0) {
    if (month == 2) {
      return 29
    }
  } else if (year % 4 !== 0) {
    if (month == 2) {
      return 28
    }
  }
}

console.log(getDaysinMonth("12", "2009"))

//No.11
// const first = new Date("2023-01-01")
// const second = new Date("2023-01-01")
// const now = new Date()
// console.log(now.getTime())
// const result = (second - first) / 86400000
// console.log(result)

const countDays = function (date) {
  const current = new Date(date.getTime())
  const previous = new Date(date.getFullYear(), 0, 1)

  return Math.ceil((current - previous) / 86400000)
}
console.log(countDays(new Date("2023-01-04")))

//No.12
const calcAge = function (birth) {
  const now = new Date()
  const age = Math.floor(
    (now - new Date(birth)) / (12 * 30 * 24 * 60 * 60 * 1000)
  )
  return age
}
console.log(calcAge("2001-03-19"))
