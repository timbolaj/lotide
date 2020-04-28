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
//Test Cases
//Equal arrays
console.log(assertArraysEqual([1], [1]));
//differing arrays
console.log(assertArraysEqual([1], [0]));
//one empty array
console.log(assertArraysEqual([1], []));
//capital vs lowercase
console.log(assertArraysEqual(['a'], ['A']));
//letters
console.log(assertArraysEqual(['abc'], ['abc']));