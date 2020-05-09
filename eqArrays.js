//helper function to check for nested arrays
const checkForNestArrays = (arr1) => {
  if (!Array.isArray(arr1)) {
    return false;
  }

  for (const element of arr1) {
    if (Array.isArray(element)) {
      return true;
    }
  }
  return false;
};

const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  if (checkForNestArrays(arr1) !== checkForNestArrays(arr2)) {
    return false;
  }

  for (const index in arr1) {
    let element1 = arr1[index];
    let element2 = arr2[index];
    if (!Array.isArray(element1)) {
      if (element1 !== element2) {
        return false;
      } else {
        arr1.slice(index, 1);
        arr2.slice(index, 1);
      }
    } else {
      return eqArrays(element1, element2);
    }
  }
  return true;
};
module.exports = eqArrays;