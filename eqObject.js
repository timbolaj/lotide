
// Returns true if both objects have identical keys with
// identical values.
// Otherwise you get back a big fat false!

const comparePrimitiveValues = function(value1, value2) {
  return value1 === value2;
};

const compareLengthOfObjects = function(object1, object2) {
  let lengthOfFirstObject = Object.keys(object1).length;
  let lengthOfSecondObject = Object.keys(object2).length;
  return lengthOfFirstObject === lengthOfSecondObject;
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

module.exports = eqObjects