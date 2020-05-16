//Create a function flatten which will take in an array containing
//elements including nested arrays of elements, and return a "flattened"
//version of the array.Ie. one sole array

const flatten = function(arr) {
  let flattenedArray = [];
  for (let element of arr) {
    if (Array.isArray(element)) {
      for (let nestedElement of element) {
        flattenedArray.push(nestedElement);
      }
    } else {
      flattenedArray.push(element);
    }
  }
  return flattenedArray;
};

module.exports = flatten;