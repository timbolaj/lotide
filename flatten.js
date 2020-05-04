const eqArrays = function(arr1, arr2) {
  //make sure length is the same
  if (arr1.length === arr2.length) {
    //for loop to make sure each element matches in the right spot
    for (let i = 0; i < arr1.length; i ++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  } else {
    return false;
  }
  //if none of the false cases were satisfied, then equality is maintained between arr1 and arr2
  return true;
};
/*Implement assertArraysEqual which will take in two arrays and console.log an appropriate message to the console.Instead of doing a simple === check though, this assertion function will make use of your eqArrays function for array comparison.
*/
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log('The arrays are equal');
  } else {
    console.log('The arrays are not equal');
  }
};

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

//TEST CASE
let a = [1,2,3,[1,2,3],[1]];
let b = [1,2,3,1,2,3,1];
console.log(assertArraysEqual(flatten(a), b));

module.exports = flatten;