const assertArraysEqual = require('../assertArraysEqual')

//Test Cases
//Equal arrays
console.log(assertArraysEqual([1], [1]));
//letters
console.log(assertArraysEqual(['abc'], ['abc']));

//differing arrays
console.log(assertArraysEqual([1], [0]));
//one empty array
console.log(assertArraysEqual([1], []));
//capital vs lowercase
console.log(assertArraysEqual(['a'], ['A']));
