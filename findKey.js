
/*
Implement the function findKey which takes in an object and a
callback. It should scan the object and return the first key for
which the callback returns a truthy value. If no key is found, then
it should return undefined.
*/

//Create for loop
//Once loop hits key whose value satisfies callback condition, return key
//return undefined

const findKey = function(obj, callback) {
  for (let key in obj) {
    const wantedKey = callback(obj[key]);
    if (wantedKey) {
      return key;
    }
  }
  return undefined;
};


module.exports = findKey;