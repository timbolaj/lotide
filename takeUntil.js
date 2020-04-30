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

//It will take in two parameters as well:
//The array to work with
//The callback (which Lodash calls "predicate")
//The function will return a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value.
//To keep things simple, the callback should only be provided one value: The item in the array.
//Implement takeUntil which will keep collecting items from a provided array until the callback provided returns a truthy value.
//eg takeUntil([1,2,3,4,5], x => x < 3) should output the array [1,2];

const takeUntil = function(arr, func) {
  let collectedItems = [];
  for (item of arr) {
    if (!func(item)) {
      collectedItems.push(item);
    } else {
      return collectedItems;
    }
  }
  return collectedItems;
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [1,2,5,7,2]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);

const data3 = [1,2,3,4,'hello',5,6];
const results3 = takeUntil(data3, x => typeof(x) === 'string');
console.log(results3);
assertArraysEqual(results3, [1,2,3,4])
