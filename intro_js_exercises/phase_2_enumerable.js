Array.prototype.myEach = function(callback) {
  for (var i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};


// let ar = [1,2,3];
// ar.myEach(function(el){
//   console.log(el*2);
// });

Array.prototype.myMap = function(callback) {
  const result = [];
  for (var i = 0; i < this.length; i++) {
    result.push(callback(this[i]));
  }
  return result;
};

// let ar = [1,2,3];
// console.log(ar.myMap(function(el){return el*2;}));
let ar = [1,2,3];

Array.prototype.myReduce = function(callback,acc){
  if (!acc) { acc =  this[0];}
  for (var i = 1; i < this.length; i++) {
    acc = callback( acc, this[i] );
  }
  return acc;
};

console.log(ar.myReduce(function(acc, el){
    return acc * el;
}));
