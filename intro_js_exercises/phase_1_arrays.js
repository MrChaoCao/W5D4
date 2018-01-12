Array.prototype.uniq = function() {
  let result = [];
  // console.log(this);
  for (var i = 0; i < this.length; i++) {
    if (result.indexOf(this[i])=== -1) {
      result.push(this[i]);
    }
  }
  return result;
};

Array.prototype.twoSum = function() {
  const result = [];
  for (var i = 0; i < this.length; i++) {
    for (var j = (i + 1); j < this.length; j++) {
      if ((this[i] + this[j]) === 0 ){
        result.push([i,j]);
      }
    }
  }
  return result;
};
// let array = [-1,2,1,3,-2,1];
// console.log(array.twoSum());

Array.prototype.transpose = function(){

  var result = new Array(this.length);
  for (let i = 0; i < this.length; i++) {
    result[i] = new Array(this[i].length);
  }
  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this[i].length; j++) {
      result[j][i] = this[i][j];
    }
  }
  return result;
};

// let matrix = [[1 , 2] , [3 , 4]];
// console.log(matrix.transpose());
