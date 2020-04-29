const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️✔️✔️ Assertion Passed: ${actual} + === ${expected}`);
  } else {
    console.log(`⛔⛔⛔ Assertion Failed: ${actual} + !== ${expected}`);
  }
};
// Returns true if both objects have identical keys with
// identical values.
// Otherwise you get back a big fat false!

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

const comparePrimitiveValues = function(value1, value2) {
  return value1 === value2;
};

const compareLengthOfObjects = function(object1, object2) {
  let lengthOfFirstObject = Object.keys(object1).length;
  let lengthOfSecondObject = Object.keys(object2).length;
  return lengthOfFirstObject === lengthOfSecondObject;
};
//Tests
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false