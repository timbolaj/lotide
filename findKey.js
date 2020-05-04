const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️✔️✔️ Assertion Passed: ${actual} + === ${expected}`);
  } else {
    console.log(`⛔⛔⛔ Assertion Failed: ${actual} + !== ${expected}`);
  }
};

/*
Implement the function findKey which takes in an object and a
callback. It should scan the object and return the first key for
which the callback returns a truthy value. If no key is found, then
it should return undefined.
*/

//Create for loop
//Once loop hits key whose value satisfies callback condition, return key
//return undefined

const findKey = function(obj, callback) {
  for (let key in obj) {
    const wantedKey = callback(obj[key]);
    if (wantedKey) {
      return key;
    }
  }
  return undefined;
};

let example = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2);

assertEqual(example, 'noma');

let example2 = findKey({
  "Brooklyn 99": { rating: 'A' },
  "Suits": { rating: 'A-' },
  'Community': { rating: 'A' },
  'Kingdom': {rating: 'A+'}
}, x => x.rating === 'A+');

assertEqual(example2, 'Kingdom');

let example3 = findKey({
  'hello' : {vowelCount: 2},
  'aaaaa' : {vowelCount: 5},
  'bbbab' : {vowelCount: 1},
  'bbbbb' : {vowelCount: 0}
}, x => x.vowelCount === 10);
assertEqual(example3, undefined);

module.exports = findKey;