const comparePrimitiveValues = function(value1, value2) {
  return value1 === value2;
};

const compareLengthOfObjects = function(object1, object2) {
  let lengthOfFirstObject = Object.keys(object1).length;
  let lengthOfSecondObject = Object.keys(object2).length;
  return lengthOfFirstObject === lengthOfSecondObject;
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

const eqObjects = function(object1, object2) {
  if (compareLengthOfObjects(object1, object2)) {
    for (let key in object1) {
      if (Array.isArray(object1[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      } else {
        if (!comparePrimitiveValues(object1[key], object2[key])) {
          return false;
        }
      }
    }
  } else {
    return false;
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✔️✔️✔️ Assertion Passed: ${inspect(actual)} + === ${inspect(expected)}`);
  } else {
    console.log(`⛔⛔⛔ Assertion Failed: ${inspect(actual)} + !== ${inspect(expected)}`);
  }
}

module.exports = assertObjectsEqual;