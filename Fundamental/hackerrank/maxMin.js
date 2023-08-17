const arr = [10, 100, 300, 200, 1000, 20, 30] // 10 20 30 100 200 300 1000
const maxMin = function (arr, k) {
  arr = arr.sort((a, b) => a - b)
  let smallest = Infinity

  arr.forEach((el, index) => {
    let test = arr[index + k - 1] - el

    if (test < smallest) {
      smallest = test
    }
  })
  console.log(smallest)
}
maxMin(arr, 4)
