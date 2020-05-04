//We'll implement a new function letterPositions which
//will return all the indices (zero-based positions) in the string
//where each character is found. For each letter, instead of
//returning just one number to represent its number of occurrences,
//multiple numbers may be needed to represent all the places in the
//string that it shows up.

const letterPositions = function(str) {
  let allPositions = {};
  for (let index in str) {
    let letter = str[index];
    if (letter !== ' ') {
      if (allPositions[letter]) {
        allPositions[letter].push(Number(index));
      } else {
        allPositions[letter] = [Number(index)];
      }
    }
  }
  return allPositions;
};

module.exports = letterPositions;