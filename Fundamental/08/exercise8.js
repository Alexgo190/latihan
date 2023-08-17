//soal 1
let str = "Pig latin is cool !"
let result1 = "igPay atinlay siay oolcay !ay"

// const reverseWord = function (str) {
//   const split = str.split(" ")
//   const result = []
//   split.map((arr) => {
//     let initial = arr[0]
//     let rest = arr.slice(1)
//     let temp = [rest + initial + "ay"]
//     let results = temp.join(" ")
//     result.push(results)
//   })
//   console.log(result.join(" "))
// }

// reverseWord(str)

function swapay(str) {
  return str
    .split(" ")
    .map((value) => value.slice(1) + value[0] + "ay")
    .join(" ")
}

// console.log(swapay(str))

//soal 2
let phone = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
let result2 = "(123) 456-7890"

// const phoneNumber = function (number) {
//   const split = number.join()
//   const result = `(${split[0]}${split[2]}${split[4]}) ${split[6]}${split[8]}${split[10]}-${split[12]}${split[14]}${split[16]}${split[18]}`
//   console.log(result)
// }

const phoneNumber = function (number) {
  let result = "(xxx) xxx-xxxx"
  number.map((item) => {
    result = result.replace("x", item)
  })
  return result
}

// console.log(phoneNumber(phone))

function doTask(task, time) {
  return new Promise((resolve, reject) => {
    let isError = false
    if (task === 3) {
      isError = true
    }
    console.log("doing task", task)
    setTimeout(() => {
      if (isError) {
        reject("task " + task + " Error")
      } else [resolve(`task ${task} Success in ${time} seconds`)]
    }, time * 1000)
  })
}

// doTask(1, 3)
//   .then((res) => {
//     console.log(res)
//     return doTask(2, 1)
//   })
//   .then((res) => {
//     console.log(res)
//     return doTask(3, 2)
//   })
//   .then((res) => {
//     console.log(res)
//     return doTask(4, 1)
//   })
//   .catch((err) => {
//     console.log("Res dari catch", err)
//   })
//   .finally(() => {
//     console.log("FINISH")
//   })
