const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️✔️✔️ Assertion Passed: ${actual} + === ${expected}`);
  } else {
    console.log(`⛔⛔⛔ Assertion Failed: ${actual} + !== ${expected}`);
  }
};

const tail = function(arr) {
  let tailArray = arr;
  tailArray.splice(0,1);
  return tailArray;
};

const result = tail(['hello', 'lighthouse', 'labs']);
assertEqual(result.length, 2);
assertEqual(result[0], 'lighthouse');
assertEqual(result[1], 'labs');

const oneThing = tail([0]);
assertEqual(oneThing.length, 0);
assertEqual(oneThing[0], undefined);

const nothing = tail([]);
assertEqual(nothing[0], undefined);