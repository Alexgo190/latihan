function rotateArray(arr, n) {
  for (let i = 1; i < n; i++) {
    arr.push(arr[0])
    arr.shift()
  }
  return arr
}

console.log(rotateArray([1, 2, 3, 4, 5], 1))
