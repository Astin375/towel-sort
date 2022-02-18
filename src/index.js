
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix || matrix.length === 0){
    return [];
  } else{
    let newMatrix = matrix.map((el, index) => index % 2 === 0 ? el : el.reverse());
    return newMatrix.flat();
  }
}
