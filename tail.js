//Return the 'tail' of an array - ie, everything but the first element

const tail = function(arr) {
  let tailArray = arr;
  tailArray.splice(0,1);
  return tailArray;
};

module.exports = tail;