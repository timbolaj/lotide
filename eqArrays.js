const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️✔️✔️ Assertion Passed: ${actual} + === ${expected}`);
  } else {
    console.log(`⛔⛔⛔ Assertion Failed: ${actual} + !== ${expected}`);
  }
};

//Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match.
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

//Test cases:
//Equality
let a1 = [1,2];
let a2 = a1;
assertEqual(eqArrays(a1, a2), true);
//Different lengths
a2 = [1];
assertEqual(eqArrays(a1, a2), false);
//One element doesnt match
let txt1 = ['h', 'l', 'j'];
let txt2 = ['l', 'j'];
assertEqual(eqArrays(txt1, txt2), false);
//Capital vs lowercase
txt1 = ['H', 'J'];
txt2 = ['h', 'j'];
assertEqual(eqArrays(txt1, txt2), false);
//Empty and full
let arr = ['h'];
let arrr = [''];
assertEqual(eqArrays(arr, arrr), false);
