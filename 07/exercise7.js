//NO.1
const checkingTwoObjects = function (obj1, obj2) {
  if (JSON.stringify(obj1) === JSON.stringify(obj2)) {
    console.log("Objects are the same")
  } else {
    console.log("Objects are not the same")
  }
}

const lion = {
  name: "lion",
}

const tiger = {
  name: "tiger",
}
checkingTwoObjects(lion, tiger)

//No.2
const intersectingObj = function (obj1, obj2) {
  var object = Object.keys(obj1)
  return object.filter((x) => {
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

const mergeObject = function (students1, students2) {
  const merge = [...students1, ...students2]
  const set = new Set()
  const result = []

  merge.forEach((item) => {
    const name = item.name
    if (!set.has(name)) {
      set.add(name)
      result.push(item)
    }
  })
  return result
}

console.log(mergeObject(studentsData1, studentsData2))

//No.4
const swapValues = function (object) {
  let result = []
  for (let i = 0; i < object.length; i++) {
    let newObj = {}
    for (let item in object[i]) {
      let value = object[i][item]
      newObj[value] = item
    }
    result.push(newObj)
  }
  return result
}

const object = [
  {
    name: "David",
    age: "22",
  },
]

console.log(swapValues(object))

//No.5
const factorial = function (n) {
  if (n === 0) {
    return 1
  }

  return n * factorial(n - 1)
}

console.log(factorial(3))
