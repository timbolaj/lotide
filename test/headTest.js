const assert = require('chai').assert;
const head = require('../head');

describe('head should return the first element in the array', () => {
  it ('returns 5 from arr [5,6,7]', () => {
    assert.strictEqual(head([5,6,7]), 5);
  });

  it ("returns 'hello' from following ['hello', 'lighthouse', 'labs']", () => {
    assert.strictEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello');
  });

  it ('returns 1 from an array of [1]', () => {
    assert.strictEqual(head([1]), 1)
  })
})
