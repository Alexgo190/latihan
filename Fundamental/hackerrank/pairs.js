const pairs = function (arr, k) {
  let counter = 0
  let sortedArr = arr.sort()
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      //   console.log(arr[j], arr[i])
      if (arr[j] - arr[i] === k) {
        counter += 1
        console.log(arr[i], arr[j])
      }
    }
  }

  return counter
}

console.log(pairs([1, 2, 3, 4, 5, 6, 7, 8, 9], 2))
