//Let's work together to implement countOnly
//This function should take in a collection of items
//and return counts for a specific subset of those items.
//It won't count everything. In order to decide what to count,
//it will also be given an idea of which items we care about and
//it will only count those, ignoring the others.

//Items in our case will be limited to Strings.

//countOnly will be given an array and an object. It will return an
//object containing counts of everything that the input object listed.


const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️✔️✔️ Assertion Passed: ${actual} + === ${expected}`);
  } else {
    console.log(`⛔⛔⛔ Assertion Failed: ${actual} + !== ${expected}`);
  }
};

//TEST CODE
console.log(assertEqual(result1["Jason"], 1));
console.log(assertEqual(result1["Karima"], undefined));
console.log(assertEqual(result1["Fang"], 2));

module.exports = countOnly