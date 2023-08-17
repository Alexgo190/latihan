let input = [7, 69, 2, 221, 8974]

const miniMaxSum = function (input) {
  const sortedArray = input.sort()
  console.log(sortedArray)
  let min = 0
  let max = 0
  for (let i = 0; i < input.length; i++) {
    if (i < input.length - 1) {
      min += input[i]
    }
    if (i > 0) {
      max += input[i]
    }
  }
  console.log(min, max)
  return min, max
}

miniMaxSum(input)
