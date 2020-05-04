//Export tail.js and chai
const tail = require('../tail');
const assert = require('chai').assert;

describe('test should return all elements in an array but the first element', () => {
  it ("return array ['lighthouse', 'labs'] ", () => {
    const arrOfStrs = tail(['hello', 'lighthouse', 'labs']);
    const actualTail = ['lighthouse', 'labs'];
    assert.deepEqual(arrOfStrs, actualTail);
  });

  it ("return empty array for one argument in function", () => {
    assert.deepEqual(tail([1]), []);
  });

  it("return empty array for no argument in function", () => {
    assert.deepEqual(tail([]), []);
  })
})

//TEST CASES
