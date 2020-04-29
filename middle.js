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

/*Implement middle which will take in an array and return an array of
the middle-most element(s) of the given array.
One or two elements, there is no middle, return empty array
Odd number of elements, there is only one value
Even number of elements, there are wo values*/

const isEvenLength = function(obj) {
  //determine if a string has an even or odd number of elements
  if (obj.length % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

const middle = function(arr) {
  let middleArray = [];
  if (arr.length === 1 || arr.length === 2) {
    return middleArray;
  } else if (isEvenLength(arr)) {
    middleArray.push(arr[arr.length/2 - 1]);
    middleArray.push(arr[arr.length/2]);
    return middleArray;
  } else {
    middleArray.push(arr[Math.ceil(arr.length/2) - 1])
    return middleArray;
  }
}
let oneElement = middle([1]);
let twoElements = middle([1,2]);
let threeElements = middle([1,2,3]);
let oddArray = middle([1,2,3,4,5,]);
let evenArray = middle([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]);

assertArraysEqual([], oneElement);
assertArraysEqual([], twoElements);
assertArraysEqual([2], threeElements);
assertArraysEqual([3], oddArray);
assertArraysEqual([8,9], evenArray);
