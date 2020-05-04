//Return the 'tail' of an array - ie, everything but the first element

const tail = function(arr) {
  let tailArray = arr;
  tailArray.splice(0,1);
  return tailArray;
};

console.log(tail([1]));

module.exports = tail;