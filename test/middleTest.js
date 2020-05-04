const middle = require('../middle');
const assert = require('chai').assert;

describe('function should return middle-most elements of an array. If length > 2 and odd length, return 1 value, otherwise return two.', () => {
  it ('return empty array for one element in function', () => {
    let oneElement = middle([1])
    assert.deepEqual(oneElement, []);
  });

  it ('return empty array for two elements in function', () => {
    let twoElements = middle([1,2])
    assert.deepEqual(twoElements, []);
  });

  it ('return [2] for array [1,2,3]', () => {
    let shouldBeTwo = middle([1,2,3])
    assert.deepEqual(shouldBeTwo, [2]);
  });

  it ('return [8,9] for array [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]', () => {
    let returnTwo = middle([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]);
    assert.deepEqual(returnTwo, [8,9])
  })
})