//helper function to determine if there are 
const hasNests = obj => {
  for (key in obj) {
    if (typeof obj[key] === 'object') {
      return true;
    }
  }
  return false;
};

const eqObjects = (obj1, obj2) => {
  //Test if both objects have nests
  if (hasNests(obj1) && hasNests(!obj2)) {
    return false;
  }

  if (!hasNests(obj1)) {
    for (key in obj1) {
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
  } else {
    const resultOfNest = eqObjects(obj1[key], obj2[key])
    return resultOfNest;
  }

  return true;
}

/* TEST CASES */
console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })) // => true
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })) // => false
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })) // => false
console.log(eqObjects({a: {y: {g: 1}}, b: 2}, {a: {y: {g: 1}}, b: 2})) // => true 