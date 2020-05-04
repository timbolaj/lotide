
//It will take in two parameters as well:
//The array to work with
//The callback (which Lodash calls "predicate")
//The function will return a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value.
//To keep things simple, the callback should only be provided one value: The item in the array.
//Implement takeUntil which will keep collecting items from a provided array until the callback provided returns a truthy value.
//eg takeUntil([1,2,3,4,5], x => x < 3) should output the array [1,2];

const takeUntil = function(arr, func) {
  let collectedItems = [];
  for (let item of arr) {
    if (!func(item)) {
      collectedItems.push(item);
    } else {
      return collectedItems;
    }
  }
  return collectedItems;
};

module.exports = takeUntil;