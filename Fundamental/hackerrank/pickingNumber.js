const arr = [4, 6, 5, 3, 3, 1] // 1,3,3,4,5,6

const pickingNumber = function (arr) {
  const sorted = arr.sort((a, b) => a - b)
  let i = 0
  let j = 0

  while (i < sorted.length && j < sorted.length) {
    if (Math.abs(sorted[i] - sorted[j]) > 1) {
      i++
      j++
    } else {
      j++
    }
  }
  console.log(i, j)
}

pickingNumber(arr)
