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

//We'll implement a new function letterPositions which
//will return all the indices (zero-based positions) in the string
//where each character is found. For each letter, instead of
//returning just one number to represent its number of occurrences,
//multiple numbers may be needed to represent all the places in the
//string that it shows up.

const letterPositions = function(str) {
  let allPositions = {};
  for (let index in str) {
    let letter = str[index];
    if (letter !== ' ') {
      if (allPositions[letter]) {
        allPositions[letter].push(Number(index));
      } else {
        allPositions[letter] = [Number(index)];
      }
    }
  }
  return allPositions;
};

let helloCase = {h: [0], e: [1], l: [2,3], o: [4]};
let helloObj = letterPositions('hello');
assertArraysEqual(helloCase.h, helloObj.h);
assertArraysEqual(helloCase.e, helloObj.e);
assertArraysEqual(helloCase.l, helloObj.l);
assertArraysEqual(helloCase.o, helloObj.o);

let goodBye = {g: [0], o: [1,2], d: [3], b: [5], y: [6], e: [7],};
let goodByeObj = letterPositions('good bye');
assertArraysEqual(goodBye.g, goodByeObj.g);
assertArraysEqual(goodBye.o, goodByeObj.o);
assertArraysEqual(goodBye.d, goodByeObj.d);
assertArraysEqual(goodBye.b, goodByeObj.b);
assertArraysEqual(goodBye.y, goodByeObj.y);
assertArraysEqual(goodBye.e, goodByeObj.e);

let bigSpaced = {g: [0], o: [1,2,12], d: [3], b:[7], y:[8], e:[9], l:[11,13]};
let bigSpacedObj = letterPositions('good   bye lol');
assertArraysEqual(bigSpaced.g, bigSpacedObj.g);
assertArraysEqual(bigSpaced.o, bigSpacedObj.o);
assertArraysEqual(bigSpaced.d, bigSpacedObj.d);
assertArraysEqual(bigSpaced.b, bigSpacedObj.b);
assertArraysEqual(bigSpaced.y, bigSpacedObj.y);
assertArraysEqual(bigSpaced.e, bigSpacedObj.e);
assertArraysEqual(bigSpaced.l, bigSpacedObj.l);

module.exports = letterPositions;