
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix || matrix.length === 0){
    return [];
  } else{
    return matrix.map((el, index) => index % 2 === 0 ? el : el.reverse()).flat();
  }
}
