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

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log('The arrays are equal');
  } else {
    console.log('The arrays are not equal');
  }
};

/*
Implement without which will return a subset of a given array, removing unwanted elements. This function should take in a source array and a itemsToRemove array. It should return a new array with only those elements from source that are not present in the itemsToRemove array. Source array should not be modified
*/

//Find the unwanted elements that are present in the source array
const without = function(sourceArr, itemsToRemove) {
  let wantedItems = [];
  for (let item of sourceArr) {
    if (!itemsToRemove.includes(item)) {
      wantedItems.push(item);
    }
  }
  return wantedItems;
};

let source = [1,2,3];
let dontWant = [1, '2'];
let expected = [2, 3];
console.log(assertArraysEqual(expected,without(source,dontWant)));
console.log(assertArraysEqual(source, [1,2,3]));
source = ['1', '2'];
dontWant = [1,2];
expected = ['1', '2'];
console.log(assertArraysEqual(expected,without(source,dontWant)));
source = ['hello', 2];
dontWant = ['hello'];
expected = [2];
console.log(assertArraysEqual(expected,without(source,dontWant)));
module.exports = without;