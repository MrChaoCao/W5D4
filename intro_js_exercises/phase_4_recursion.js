function range(start,end) {
  if (start === end) {
    return [start];
  }
  let arr = range(start, end - 1);
  arr.push(end);
  return arr;
}

// console.log(range(1,9));

function sumRec(arr){
  if (arr.length === 1){
    return arr;
  }

  // let sumArr = sumRec(arr.slice(0,arr.length-2));
  let len =  arr.length;
  let result = arr[arr.length-1];
  let length = sumRec(arr.slice(0,len-1)).length;
  let last = sumRec(arr.slice(0,len-1))[length-1];
  result += last;
  return result;
  // return sumArr;
}


console.log(sumRec([1,2,3,4]));
