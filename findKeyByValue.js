
//Implement the function findKeyByValue which takes in an object and
//a value. It should scan the object and return the first key which
//contains the given value. If no key with that given value is found
//then it should return undefined.

const doesValueExist = function(obj, value) {
  return Object.values(obj).includes(value);
};

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

module.exports = findKeyByValue;