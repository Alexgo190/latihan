/*
1 2 3
4 5 6
9 8 9 
*/

/*
1 + 5 + 9 = 15 
3 + 5 + 9 = 17
17 - 15 = 2
*/

// [ [ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ] ]
function diagonalDifference(arr) {
  let diagonal1 = 0
  let diagonal2 = 0
  for (let i = 0; i < arr.length; i++) {
    diagonal1 += arr[i][i]
    diagonal2 += arr[arr.length - 1 - i][i]
  }
  return Math.abs(diagonal2 - diagonal1)
}

console.log(
  diagonalDifference([
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
  ])
)
