const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️✔️✔️ Assertion Passed: ${actual} + === ${expected}`);
  } else {
    console.log(`⛔⛔⛔ Assertion Failed: ${actual} + !== ${expected}`);
  }
};
//The function should take in a sentence (as a string) and then
//return a count of each of the letters in that sentence.
//For example, countLetters('LHL') should return results indicating
//that L appears twice, and H once. {L: 2, H: 1}

const countLetters = function(str) {
  let countDisplay = {};
  for (let letter of str) {
    if (countDisplay[letter]) {
      countDisplay[letter] += 1;
    } else {
      countDisplay[letter] = 1;
    }
  }
  return countDisplay;
};

let helloObject = {h: 1, e: 1, l: 2, o: 1};
let helloCount = countLetters('hello');
assertEqual(helloObject.h, helloCount.h);
assertEqual(helloCount.e, helloObject.e);
assertEqual(helloCount.l, helloObject.l);
assertEqual(helloCount.o, helloObject.o);

let emptyStringCount = countLetters(' ');
let emptyObject = {' ': 1};
assertEqual(emptyObject[' '], emptyStringCount[' ']);

module.exports = countLetters;