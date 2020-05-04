// Build our own map function
// Our map function will take in two arguments:

// An array to map
// A callback function
// The map function will return a new array based on the results of the callback function.

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

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



const results1 = map(words, word => word[0]);
const correctResults1 = words.map(word => word[0]);
assertArraysEqual(results1, correctResults1)

let numbers = [1,2,3,4,5,6];
const numbersResults1 = map(numbers, num => num * 10);
const correctsNumResults = numbers.map(num => num * 10);
assertArraysEqual(numbersResults1, correctsNumResults);

const random = [1,2,'1','abc','a'];
const stringed = map(random, element => element.toString());
const correctlyStringed = random.map(element => element.toString());
assertArraysEqual(stringed, correctlyStringed);

module.exports = map