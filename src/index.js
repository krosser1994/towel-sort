
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let newMatrix = [];
  if (matrix === [] || matrix === undefined) {
    return [];
  } 
  for (let i = 0; i < matrix.length; i++) {
  if (i % 2 === 0) {
    for (let e = 0; e < matrix[i].length; e++) {
      newMatrix.push(matrix[i][e]);
    }
  } else {
    for (let e = matrix[i].length - 1; e >= 0; e--) {
      newMatrix.push(matrix[i][e]);
    }
  }
  }
  return newMatrix;
}
