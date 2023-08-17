function connectedCell(matrix) {
  // Write your code here
  let biggestRegion = 0

  function regionCounter(matrix, row, column) {
    if (
      row < 0 ||
      column < 0 ||
      row >= matrix.length ||
      column >= matrix[0].length
    ) {
      return 0
    }
    if (matrix[row][column] == 0) {
      return 0
    }

    let count = 1
    matrix[row][column] = 0

    for (let r = row - 1; r < row + 2; r++) {
      for (let c = column - 1; c < column + 2; c++) {
        count += regionCounter(matrix, r, c)
      }
    }
    return count
  }

  for (let row = 0; row < matrix.length; row++) {
    for (let column = 0; column < matrix[0].length; column++) {
      if (matrix[row][column] == 1) {
        let count = regionCounter(matrix, row, column)
        biggestRegion = Math.max(biggestRegion, count)
      }
    }
  }
  return biggestRegion
}
