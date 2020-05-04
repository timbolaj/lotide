//Export tail.js and assertEqual.js
const tail = require('../tail');
const assertEqual = require('../assertEqual');

//TEST CASES
const result = tail(['hello', 'lighthouse', 'labs']);
assertEqual(result.length, 2);
assertEqual(result[0], 'lighthouse');
assertEqual(result[1], 'labs');

const oneThing = tail([0]);
assertEqual(oneThing.length, 0);
assertEqual(oneThing[0], undefined);

const nothing = tail([]);
assertEqual(nothing[0], undefined);