//No.1
const lion = {
  name: "lion",
}

const tiger = {
  name: "tiger",
}

const checkingObj = function (obj1, obj2) {
  if (obj1 === obj2) {
    return console.log("The object is equal")
  } else {
    return console.log("The object is not equal")
  }
}

// checkingObj(lion, tiger)

//No.2
const intersectingObj = function (obj1, obj2) {
  var k1 = Object.keys(obj1)
  return k1.filter((x) => {
    return obj2[x] !== undefined
  })
}

const object1 = {
  a: "1",
  b: "2",
}
const object2 = {
  a: "1",
  b: "3",
  c: "3",
}

console.log(intersectingObj(object1, object2))

//No.3
const studentsData1 = [
  {
    name: "Student 1",
    email: "student1@mail.com",
  },
  {
    name: "Student 2",
    email: "student2@mail.com",
  },
]
const studentsData2 = [
  {
    name: "Student 1",
    email: "student1@mail.com",
  },
  {
    name: "Student 3",
    email: "student3@mail.com",
  },
]

const mergeObject = function (obj1, obj2) {
  const merge = [...obj1, ...obj2]
  const keys = new Set()

  const result = []
  merge.forEach((item) => {
    const key = item.name
    if (!keys.has(key)) {
      keys.add(key)
      result.push(keys)
    }
  })
  return result
}

console.log(mergeObject(studentsData1, studentsData2))

//No.4
const swapValues = function (arr) {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    let newObj = {}
    for (let key in arr[i]) {
      let value = arr[i][key]
      newObj[value] = key
    }
    result.push(newObj)
  }
  return result
}

const input = [
  {
    name: "david",
    age: "20",
  },
  {
    name: "Alex",
    hobbies: "valorant",
    age: "12",
  },
]

console.log(swapValues(input))

//No.5
const factorial = function (n) {
  if (n === 0) {
    return 1
  }
  return n * factorial(n - 1)
}

console.log(factorial(5))
