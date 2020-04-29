const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️✔️✔️ Assertion Passed: ${actual} + === ${expected}`);
  } else {
    console.log(`⛔⛔⛔ Assertion Failed: ${actual} + !== ${expected}`);
  }
};
//Implement the function findKeyByValue which takes in an object and
//a value. It should scan the object and return the first key which
//contains the given value. If no key with that given value is found
//then it should return undefined.

const findKeyByValue = function(obj, value) {
  //Simple test to make sure it's there
  if (doesValueExist(obj,value)) {
    for (let key in obj) {
      if (obj[key] === value) {
        return key;
      }
    }
  } else {
    return undefined;
  }
};

const doesValueExist = function(obj, value) {
  return Object.values(obj).includes(value);
};


const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, 'The Expanse'), 'sci_fi');
assertEqual(findKeyByValue(bestTVShowsByGenre, 'The Office'), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, 'Brooklyn Nine-Nine'), 'comedy');
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, ''), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, ' '), undefined);
