Array.prototype.bubbleSort = function(){
  for (var i = 0; i < this.length; i++) {
    for (var j = 0; j < this.length; j++) {
      if (this[j] > this[j + 1]){
        let max = this[j];
        this[j] = this[j + 1];
        this[j+1] = max;
      }
    }
  }
  return this;
};

// let arr = [3,2,1,4];
// console.log(arr.bubbleSort());

String.prototype.substrings = function(){
  let result = [];
  for (var i = 0; i < this.length; i++) {
    for (var j = i; j <= this.length; j++) {
      if (i === j){continue;}
      result.push(this.slice(i,j));
    }
  }
  return result;
};

let test = "abcd";
console.log(test.substrings());
