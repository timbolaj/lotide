const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

let oneElement = middle([1]);
let twoElements = middle([1,2]);
let threeElements = middle([1,2,3]);
let oddArray = middle([1,2,3,4,5,]);
let evenArray = middle([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]);

assertArraysEqual([], oneElement);
assertArraysEqual([], twoElements);
assertArraysEqual([2], threeElements);
assertArraysEqual([3], oddArray);
assertArraysEqual([8,9], evenArray);