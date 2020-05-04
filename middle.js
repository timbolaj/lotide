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

module.exports = middle
